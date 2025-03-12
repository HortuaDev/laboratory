import React, { useEffect, useState } from 'react';
import '../styles/styles.css';
import { Link } from 'react-router-dom';
import { log } from 'console';
import e from 'express';
import { itemsLocalStorage, structureJson } from '../types';

// Definición del tipo para las props
interface OptionName {
    opcion?: string;
}

// Componente principal que muestra diferentes opciones según la prop `opcion`
export default function OptionMenu({ opcion = '' }: OptionName) {
    switch (opcion) {
        case 'login':
            return <LoginHandler />;

        case 'help':
            return (
                <div className="help-container">
                    <h2>Ayuda</h2>
                    <p>Aquí puedes encontrar información útil sobre cómo usar la aplicación.</p>
                </div>
            );

        case 'config':
            return <ConfigHandler />;

        default:
            return (
                <div className="error-container">
                    <h2>Error</h2>
                    <p>Opción no válida. Por favor selecciona una opción válida.</p>
                </div>
            );
    }
}

// Componente para manejar el inicio de sesión
const LoginHandler = () => {

    // declaro las variables

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

    // verifico que se encuentre el user en el local estorage y si esta modifico el valor de la isVariableDeclaration, si no, no porque no hay nada

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setLoggedInUser(user);
        }
    }, []);

    // esto ni idea,pero me permite usar el switc en el optionMenu, al parecer lo combierto en componente?? (e: React.FormEvent<HTMLFormElement>)

    // con el eventDefault, me evita este error, (Form submission canceled because the form is not connected)
    // pero sin el funciona normalito, solo no me gustaba el mensaje de alerta

    // al llamar a la funcion almaceno el valor que se encantre en la variable en el localstorage
    // y esto modifica el setLoggedInUser, esto pinta un componente si tiene un valor y si no otro,
    // el form login o el hola usuario 

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        localStorage.setItem('user', username);
        setLoggedInUser(username);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        setLoggedInUser(null);
    };

    if (loggedInUser) {
        return (
            <div className="login-container">
                <div className="logged-in-content">
                    <h2>Hola, {loggedInUser}</h2>
                    <div className="button-group">
                        <Link to="/" className="home-button">Ir a Inicio</Link>
                        <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="login-title">Iniciar Sesión</h2>
                <div className="form-group">
                    <label htmlFor="username" className="form-label">Usuario:</label>
                    <input
                        type="text"
                        id="username"
                        className="form-input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        className="form-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Ingresar</button>
            </form>
        </div>
    );
};

interface structurePesos{
    muscle:string
    peso:string
    
}

const ConfigHandler = () => {

    
    const URL = "http://localhost:4657";

    const ejerciciosLocalEstorage: Array<itemsLocalStorage> = [];
    const pesosLocalEstorage: Array<structurePesos> = [];

    const muscularGroup: Array<string> = ['Hombro','Pecho','Espalda','Brazo','Pierna'];

    const [validationContentLocalStorageWeigth, setValidationContentLocalStorageWeigth] = useState(localStorage.getItem('validationContentLocalStorageWeigth'));

//  si no hay nada lo creo,
//  no ya hay algo muestro un mensaje en el html 
//  


    const getData = async () => {

        // si no hay nada ejecuto el updateWeigthLocalStorage para agregar los datos al localstorage

        if (!validationContentLocalStorageWeigth) {
            // no hay nada, asi que creo
            createInfoLocalStorage();

        }
        else {
            
            // si hay datos, muestro la opcion de dejar vacio todo 

            readLocalStorage();

        }


        
    };

    const createInfoLocalStorage = async() => {

        try {
    
            const data = await fetch(URL);
    
            const response: Array<structureJson> = await data.json();
    
            for (const muscle of response) {
    
    
                for (const dificult of muscle.routine) {
    
                    for (const exercice of dificult.exercice) {
    
                        let item: itemsLocalStorage = {
                            muscle: muscle.title,
                            dificult: dificult.name,
                            exercice: exercice.name,
                            repetitions: exercice.repetitions,
                            series: exercice.series,
                            weigth: localStorage.getItem(muscle.title)
                            
                            
    
                        }
    
                        ejerciciosLocalEstorage.push(
                            item
                        )
    
                        localStorage.setItem("exerciceItemValues", JSON.stringify(ejerciciosLocalEstorage))
                    }
                }
            }
    
    
            localStorage.setItem("validationContentLocalStorageWeigth", JSON.stringify(true));
    
            console.log(muscularGroup);
            
    
        } catch (error) {
            console.log("Error: ", error);
        }
    
    }
    
    const readLocalStorage = async () => {
    
        const data = localStorage.getItem('exerciceItemValues');

        console.log(data);
        

    }
    

    const updateWeigthLocalStorage = (weigth:number) => {

        console.log("hola");
        

    }


    const handleButtonClick = (muscle:string, event:any) => {

        const peso = event.target.parentNode.querySelector('input').value;
        
        console.log(`Grupo muscular: ${muscle}, Peso ingresado: ${peso}`);

        pesosLocalEstorage.push({muscle,peso});

        localStorage.setItem('pesos',JSON.stringify(pesosLocalEstorage));
        
        event.target.parentNode.querySelector('input').value = '';
  
    }

    // Cargar el color de fondo desde localStorage al montar el componente
    useEffect(() => {

        getData();


    }, []);

    // Manejar el cambio de color al hacer clic en un color de la cuadrícula
    return (
        <div className="config-container">
            <h2>Configuración</h2>
            <p>Selecciona los pesos que quieres manejar en cada grupo muscular:</p>
            <div className="inputs_container_option_menu">
                {muscularGroup.map((element) => (
                    <div key={element} onClick={() => { }}>
                        <div className="item_input">
                            <label id='peso' className="etiqueta_nombre">{element}</label>
                            <input className='input_peso' type="number" name="peso" id="peso" placeholder='Peso en KG:' />
                            <button className='boton_input_optionMenu' onClick={(event)=>{handleButtonClick(element,event)}}>Agregar</button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

