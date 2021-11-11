import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Frase from './components/Frase';

function App() {
  return (
    <section className='container my-5 d-flex flex-column align-items-center'>
      <img src={logo} alt="logo de los simpsons" />
      <Button variant='warning' className='my-5 w-50'>Obtener frase</Button>
      <Frase></Frase>
    </section>
  );
}

export default App;
