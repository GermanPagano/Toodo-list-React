import React, { useState  }from 'react';
import '../styles/tarea-formulario.css'
import { IoAddCircleOutline } from "react-icons/io5";
import {v4 as uuidv4 } from 'uuid';

const FormularioTarea = (props) => {

    const [input, setInput] = useState('');

    const manejarCambio = (e) => {
            setInput(e.target.value)
    };

    const manejarEnvio = (e) => {
        e.preventDefault();

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva);
        
        e.target.reset()
        
    };



    return (
        <form className='tarea-formulario'
        onSubmit={manejarEnvio}
        >


        <div className='tarea-input-button'>
        <input
              className='tarea-input'
              type='text'
              placeholder= 'Tu tiempo mejor organizado'
              name='texto'
              onChange={ manejarCambio }
            />
            <button className='tarea-boton' >
            <IoAddCircleOutline className='tarea-boton' />
            </button>
        </div>
        

        </form>
    );
}

export default FormularioTarea;
