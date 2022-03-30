import { useState } from "react";

function App() {
//TODOS: presentar el concepto de state 
// Hooks 
const  [tituloState, setTituloState]= useState("");
const  [fechaState, setFechaState]= useState("");
const  [notaState, setNotaState]= useState("");
//let varprueba = "titulo"

const handleChangeTitulo = (event) => {
   setTituloState(event.target.value);
  //console.log (event.target.name, event.target.value);
  //varprueba = event.target.value

}

const handleChangeFecha = (event) => {
  setFechaState(event.target.value);
 //console.log (event.target.name, event.target.value);
 //varprueba = event.target.value

}
const handleChangeNota = (event) => {
  setNotaState(event.target.value);
 //console.log (event.target.name, event.target.value);
 //varprueba = event.target.value

}
  return (
    <div className="App">
    <h3 style={{textAlign:center}} >Formulario</h3>
    <label htmlFor="Titulo"> Titulo</label>
    <br></br>
    <input 
    id="Titulo" 
    name="Titulo" 
    type="text" 
    onChange={handleChangeTitulo}
    value={tituloState}
    />

    <br>
    </br>

<label htmlFor="Fecha"> Fecha</label>
    <input 
    id="Fecha" 
    name="Fecha" 
    type="text" 
    onChange={handleChangeFecha}
    value={fechaState}
    />
    <br>
    </br>

<label htmlFor="Nota"> Nota</label>
    <input 
    id="Nota" 
    name="Nota" 
    type="text" 
    onChange={handleChangeNota}
    value={notaState}
    />

    </div>
  );
}

export default App;