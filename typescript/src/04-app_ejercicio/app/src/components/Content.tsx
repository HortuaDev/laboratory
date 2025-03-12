import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import '../styles/styles.css';
import { DificulProp, MuscularGroup, ExerciseGroup, Exercice } from '../types';
import {Routes, Route, Link } from 'react-router-dom';
import DificultSelector from './DificultSelector';
import ExercicePage from './ExercicesPage';
import OptionMenu from './OptionMenu';

// Importaciones necesarias para el componente

export default function Content() {
  const URL1 = "http://localhost:4657";
  // URL del servidor de donde se obtendrán los datos

  const [data, setData] = useState<Array<MuscularGroup>>([]);
  // Estado para almacenar los datos originales del servidor

  const [dataRoutine, setDataRoutine] = useState<Array<ExerciseGroup>>([]);
  // Estado para almacenar los datos procesados en el formato ExerciseGroup

  const getData = async () => {
    try {
      const response = await fetch(URL1);
      const data = await response.json();
      // Obtiene los datos del servidor y los convierte a JSON

      // almacena los datos de la respuesta en el obj data 
      setData(data);

      const newDataRoutine: ExerciseGroup[] = data.map((item: MuscularGroup) => {
        // Transforma cada elemento de los datos originales en un ExerciseGroup
        let muscleGroup: ExerciseGroup = {
          muscle: item.title,
          routines: {}
        };

        if (Array.isArray(item.routine)) {
          item.routine.forEach((routine: DificulProp) => {
            if (routine.name) {
              // Crea un array para cada nivel de dificultad si no existe
              if (!muscleGroup.routines[routine.name]) {
                muscleGroup.routines[routine.name] = [];
              }
              // Agrega el Exercice al array correspondiente
              muscleGroup.routines[routine.name].push({
                name: routine.name,
                exercice: routine.exercice
              });
            }
          });
        }

        return muscleGroup;
      });

      setDataRoutine(newDataRoutine);
      // Actualiza el estado con los datos procesados

    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  // Llama a getData cuando el componente se monta

  
  return (
    <Routes>
      <Route path='/' element={
        <div className="App">
          {data.map((element) => (
            <Link to={`/${element.title}`} key={element.id} className='card_container'>
              <Card id={`card_${element.id}`} title={element.title} image={element.image} />
            </Link>
          ))}
        </div>
      } />

{/* crea las rutas de los componentes por musculos, pecho,pierna,espalda... */}
      {dataRoutine.map((categoria, index) => (
        <Route
          key={index}
          path={`/${categoria.muscle}`}
          element={<DificultSelector datos={categoria} />}
        />
      ))}
{/* crea las rutas de las dificultades de los ejercicios, basico,normal,avanzado */}
      {dataRoutine.map((categoria, index) =>
        ["basic", "normal", "advanced"].map((nivel) => (
          <Route
            key={`${index}-${nivel}`}
            path={`/${categoria.muscle}/${nivel}`}
            element={
              <ExercicePage datos={categoria.routines[nivel]?.[0]?.exercice || []} />
            }
          />
        ))
      )}

{/* crea las rutas de las opciones de menu home,help,config,login */} 
    {["help", "config", "login"].map((dato,index) => (
        <Route
          key={`${index}-${dato}`}
          path={`/${dato}`}
          element={<OptionMenu opcion={dato} />}
        />
      ))}
    </Routes>
  );
}
/**<Route path="/Hombro" element={<Hombro datos={dataRoutine[0]} />} />
        <Route
          path="/Hombro/basic"
          element={
            <HombroBasico
            datos={dataRoutine[0]?.routines?.basic?.[0]?.exercice || []}
          />
          }
        />
        <Route
          path="/Hombro/normal"
          element={
            <HombroNormal
            datos={dataRoutine[0]?.routines?.normal?.[0]?.exercice || []}
          />
          }
        />
        <Route
          path="/Hombro/advanced"
          element={
            <HombroNormal
            datos={dataRoutine[0]?.routines?.advanced?.[0]?.exercice || []}
          />
          }
        />


<Route path="/Pecho" element={<Pecho datos={dataRoutine[1]} />} />
  <Route
    path="/Pecho/basic"
    element={
      <PechoBasico
        datos={dataRoutine[1]?.routines?.basic?.[0]?.exercice || []}
      />
    }
  />
  <Route
    path="/Pecho/normal"
    element={
      <PechoNormal
        datos={dataRoutine[1]?.routines?.normal?.[0]?.exercice || []}
      />
    }
  />
  <Route
    path="/Pecho/advanced"
    element={
      <PechoAvanzado
        datos={dataRoutine[1]?.routines?.advanced?.[0]?.exercice || []}
      />
    }
  />

  <Route path="/Espalda" element={<Espalda datos={dataRoutine[2]} />}/>
  <Route
    path="/Espalda/basic"
    element={
      <EspaldaBasico
        datos={dataRoutine[2]?.routines?.basic?.[0]?.exercice || []}
      />
    }
  />
  <Route
    path="/Espalda/normal"
    element={
      <EspaldaNormal
        datos={dataRoutine[2]?.routines?.normal?.[0]?.exercice || []}
      />
    }
  />
  <Route
    path="/Espalda/advanced"
    element={
      <EspaldaAvanzado
        datos={dataRoutine[2]?.routines?.advanced?.[0]?.exercice || []}
      />
    }
  />
  
  

        <Route path="/Brazo" element={<Brazo datos={dataRoutine[3]} />}/>
        <Route
    path="/Brazo/basic"
    element={
      <BrazoBasico
        datos={dataRoutine[3]?.routines?.basic?.[0]?.exercice || []}
      />
    }
  />
  <Route
    path="/Brazo/normal"
    element={
      <BrazoNormal
        datos={dataRoutine[3]?.routines?.normal?.[0]?.exercice || []}
      />
    }
  />
  <Route
    path="/Brazo/advanced"
    element={
      <BrazoAvanzado
        datos={dataRoutine[3]?.routines?.advanced?.[0]?.exercice || []}
      />
    }
  />


        <Route path="/Pierna" element={<Pierna datos={dataRoutine[4]} />}/>
        <Route
    path="/Pierna/basic"
    element={
      <PiernaBasico
        datos={dataRoutine[4]?.routines?.basic?.[0]?.exercice || []}
      />
    }
  />
  <Route
    path="/Pierna/normal"
    element={
      <PiernaNormal
        datos={dataRoutine[4]?.routines?.normal?.[0]?.exercice || []}
      />
    }
  />
  <Route
    path="/Pierna/advanced"
    element={
      <PiernaAvanzado
        datos={dataRoutine[4]?.routines?.advanced?.[0]?.exercice || []}
      />
    }
  />
         
      </Routes>
    </Router>
  );
}
 */