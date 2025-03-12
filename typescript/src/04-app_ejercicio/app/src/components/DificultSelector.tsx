import React, { useEffect, useState } from 'react';
import '../styles/styles.css';
import { Link } from 'react-router-dom';
import {ExerciseGroup } from '../types';

// esto es un indice dinamico para poder almacenar los datos en un objeto que accedera a los atributos, se escribe asi
// datos: ExerciseGroup
export default function DificultSelector({ datos }: {datos: ExerciseGroup}) {
    
    const [rutinas, setRutinas] = useState<Array<string>>([]);
    

    useEffect(() => {
        
        if (datos && datos.routines) {
            setRutinas(Object.keys(datos.routines));
        }
    }, [datos]);


    return (
        <section className='musculo_container'>
            <h1 className='titulo_musculo'>{datos.muscle}</h1>
            <div className="musculo_cards">
                {rutinas.map((rutina) => (
                    <Link 
                        key={rutina}
                        className={`card_musculo card_musculo_${rutina.toLowerCase()}`} 
                        to={rutina.toLowerCase()}
                    >
                        {/* esto es para colocar la primera letra en mayuscula y el resto minuscula */}
                        <h2>Rutina {rutina.charAt(0).toUpperCase() + rutina.slice(1)}</h2>
                    </Link>
                ))}
            </div>
        </section>
    );
}
