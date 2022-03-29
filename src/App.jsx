
function App() {
  //todos: presentar el concepto de state
  let varprueba = "titulo"
  const handleChangePrueba = (event) => {
    //console.log (event.target.name, event.target.value);
    varprueba = event.target.value
  }
  return (
    <div className="App">
      <h1>notas</h1>
      <label htmlFor="pruebaID">Input de prueba</label>
      <input
      
      id="pruebaID"
      name="prueba"
      type="text"
      onChange={handleChangePrueba}
      value={varprueba}
      />
    </div>
  );
}

export default App;
