import { useState } from "react";
function App() {

const [counter,setCounter] = useState(0)
const addValue = ()=>{
  setCounter(prev=>prev+1)
}
const removeValue = ()=>{
  if(counter > 0)
  setCounter(prev=>prev-1)
}

  return (
    <>
      <h1>hello world</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
