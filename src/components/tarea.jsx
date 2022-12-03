import React from 'react';
import '../styles/tarea-styles.css';

import { AiFillCloseCircle } from "react-icons/ai";


const Tarea = ({ id, texto , completada , completarTarea , eliminarTarea  }) => {




  return (
    <div className={completada ? 'tarea-contenedor completada': 'tarea-contenedor'} >

      <div className='tarea-texto' onClick={ () => completarTarea(id)}>
        {texto}
      </div>
      {/* eliminar tarea*/}
      <div className='tarea-contenedor-icono' onClick={ ()=> eliminarTarea(id)}>
        <AiFillCloseCircle className='tarea-icono' style={{color:'#9b0d08'}}/>
      </div>


    </div>

  );
};

export default Tarea;


