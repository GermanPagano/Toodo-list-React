import './App.css';
import logo from './img/logo.png'
import ListadeTareas from '../src/components/ListadeTareas'

function App() {
  return (
    <div className="App" >

    <div className='contenedor-logo '>
    <img src={logo} className='logo' alt='logo Toodo'/>
    </div>

    
    <div className='tareas-lista-principal'>
      <ListadeTareas/>
    </div>

    <p>@toodo All rights reserved</p>
    </div>
  );
}

export default App;
