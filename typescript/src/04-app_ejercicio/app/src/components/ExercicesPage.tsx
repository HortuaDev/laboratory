import React, { useState, useEffect } from 'react';
import { Reorder } from "motion/react";
import {Exercice } from '../types';

// esto es un indice dinamico para poder almacenar los datos en un objeto que accedera a los atributos, se escribe asi
export default function ExercicePage({ datos = [] }: { datos:Exercice[] }){

  const [items, setItems] = useState<Exercice[]>(datos);

  useEffect(() => {
    setItems(datos);
    console.log(datos);
    
  }, [datos]);

  // lo deje aqui el viernes y no sabia muy bien que hacia

  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems} style={{ padding: 0}}>
      {items.map((item) => (
        <Reorder.Item key={item.name} value={item} style={{ listStyle: "none" }}>
          <div className="item_ejercicio">
            <div className="item_botones">⋮</div>
            <div className="item_container">
            <span className="name_ejercicio">{item.name}</span>
            <span className='series_ejercicio'>series: {item.series}</span>
            <span className='repetitions_ejercicio'>reps: {item.repetitions}</span>
            </div>
          </div>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
