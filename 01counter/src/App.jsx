import './App.css'
import { use, useState } from 'react' 

function App() {
  
  const [counter, setCounter]= useState(0)
  // let counter=0



  const addValue=()=>{
    // counter=counter+1
    setCounter(counter+1)
    console.log(counter);
  }

  return (
    <>
      <h1>REACT COURSE</h1>
      <h1>Counter Value: {counter}</h1>
      <button onClick={addValue}>ADD value</button> {''}
      <button>Remove</button>
      <hr />
      <p>Counter value: {counter}</p>
      
    </>
  )
}

export default App
