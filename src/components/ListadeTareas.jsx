import React ,{ useState }from 'react';
import FormularioTarea from './formulario-tarea';
import '../styles/ListadeTareas.css'
import Tarea from './tarea';


const ListadeTareas = ( ) => {


    let recuperarDatos = [];


    const VerStorage = () => {
        var recuperarDatos = window.localStorage.getItem('tarea');
        if (recuperarDatos){
            recuperarDatos = JSON.parse(recuperarDatos);
            return  console.log(recuperarDatos )
            
        }
        
        //if ( window.localStorage.getItem('tarea') !== ''){
          //  guardado = [  JSON.parse(window.localStorage.getItem('tarea')), ...guardado  ];
//
          //  console.log( JSON.parse(window.localStorage.getItem('tarea')) )
       // }else { console.log('npo')}
    }


    VerStorage();
    console.log('ver guardado linea 29 que no lee nada', recuperarDatos)

    const [tareas, setTareas] = useState([]);
    //setear mensaje debajo del input
    const [titulo, setTitulo] = useState(true);
    //setear valor de la memoria storage


// GUARDAR EN EL STORAGE
const setLocalStorage = (valoraguardar) => {
    
    window.localStorage.setItem('tarea' , JSON.stringify(valoraguardar) )

}

    
// AGREGAR TAREA NUEVA
    const agregarTarea = tarea =>{
        
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
            setTitulo( false )
            setLocalStorage(tareasActualizadas)

        };

    };


// ELIMINAR UNA TAREA BOTON ELIMINAR
    const eliminarTarea = (id) => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id )
        setTareas(tareasActualizadas)
        setTitulo( tareas.length !== 1 ? false : true )
        };
    
// COMPLETAR UNA TAREA CLICK SOBRE TEXTO
    const completarTarea = (id) => {
        const tareasActualizadas = tareas.map(
            tarea =>{
                if( tarea.id === id){
                    tarea.completada = !tarea.completada;
                };
                return tarea;
            } );
            setTareas(tareasActualizadas)
    };  


// MODIFICAR EL VALOR DE UNA TAREA 
    const modificarTarea = (textonuevo) => {

        console.log(textonuevo ,'modificado')

    }



    return (
        <>
        <FormularioTarea onSubmit={agregarTarea}/>
        <div className='tareas-lista-contenedor'>

        
        <h1 >{ titulo  ? 'No tienes tareas pendientes...': 'Haz click sobre el texto para completar'}</h1>
        {
            tareas.map((tarea)=>
            <Tarea
                key={tarea.id}
                id={tarea.id}
                texto={tarea.texto}
                completada={tarea.completada}
                completarTarea={completarTarea}
                eliminarTarea={eliminarTarea}
                modificarTarea={modificarTarea}  
            />
            )

        }
        
        </div>
        </>
    );
};



export default ListadeTareas;
