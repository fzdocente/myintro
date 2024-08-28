import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import Footer from './Footer'
import Footer from './Footer';


function App() {
  //const [count, setCount] = useState(0)
  let name = "Teresa Valencia";
  let value1 = 5;
  let value2 = 2;
  let gender = true;

  return (
    <>
      <div>
        <p>Hola Mundo desde React JS</p>
        <p>El nombre es: {name}</p>
        <p>La Suma es: {value1 + value2}</p>
        <p>El genero es { gender ? "Masculino" : "Femenino" }</p>
        <img src={viteLogo} className="imgcls" />

      </div>
      <Header></Header>  
      <p>dkdjkf</p>
      <Footer text="Redes Sociales"></Footer>
    </>
    
  )
}

function Header(){
  return(
    <>
      <div>Hola desde componente Header</div>
    </>
  )
}

export default App
