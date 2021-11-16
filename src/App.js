import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Frase from './components/Frase';
import {useState, useEffect} from 'react';

function App() {
  const [personaje, setPersonaje] = useState({});

  useEffect(()=>{
    consultarAPI();
  },[])

  const consultarAPI = async() =>{
    const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
    const dato = await respuesta.json();
    console.log(respuesta)
    console.log(dato[0]);
    // guardar en el state
    setPersonaje(dato[0]);
  }

  return (
    <section className='container my-5 d-flex flex-column align-items-center'>
      <img src={logo} alt="logo de los simpsons" />
      <Button variant='warning' className='my-5 w-50' onClick={()=> consultarAPI()}>Obtener frase</Button>
      <Frase personaje={personaje}></Frase>
    </section>
  );
}

export default App;
