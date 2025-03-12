import React from 'react';

import { CardProps } from '../types';

export default function Card({id="",title="",image="",description=""}:CardProps){
    return (
        <div id={id} className={'card'}>
            <h1>{title}</h1>
            {image!='' && <img className={`image_${id}`} src={image} alt="image"/>}
        </div>
    );
}

// Componentes clave:
// 1. Componente Card
// Función Principal:
// Representa la unidad básica de la interfaz, 
// es decir, cada "card". Este componente es responsable de mostrar 
// la información específica, como título, imagen, descripción u otros 
// datos relevantes.

// Características:
// Props: Recibe propiedades como titulo, 
// contenido, imagen, etc., que determinan el contenido que se mostrará.
// 
// Estilos: Puede incluir estilos internos 
// (CSS en línea o módulos de CSS) o utilizar 
// soluciones de CSS-in-JS (por ejemplo, styled-components) 
// para asegurar que la presentación sea consistente y modular.
// 
// Interactividad: Si la card debe reaccionar a eventos
//  (clic, hover, etc.), se pueden definir callbacks o handlers 
// dentro de este componente.