import './App.css'
import {Datos} from './Componets/Datos'
//Creando un nuevo componente

function Person(props){
  return(
  <div className='Person' style={{backgroundColor:props.color}}>
      <h1>Nombres: {props.nombre}</h1>
      <p>Edad: {props.edad}</p>
      </div>
    )
}

export default function App() {
  return (
  <div className="App">
    <h1>Mi primer programa con React en Github</h1>
    {/*Aqui agrego un componente*/}
    <Person nombre="Cristia David" edad="21" color="#F7B801"/>
    <Person nombre="Sensei Hugo" edad="63" color="yellow"/>
    <Person nombre="Carolina" edad="25" color="green"/>
    <Datos/>
  </div>
  );
}


