import { useState } from 'react'
import './App.css'

function App() {

  let [counter1,setCounter1] = useState(0)
  let [counter2,setCounter2] = useState(0)

  // let counter = 5;
  const addValue = () => {
     setCounter1(counter1 => {
      if(counter1>=0 && counter1 <=19){
        return counter1+1;
      }
      else{
        return counter1;
      }
     });

     
  }

  const removeValue = () => {
    setCounter2(counter2 =>{
      if(counter2>0 && counter2<=20){
        return counter2-1;
      }
      else{
        return counter2;
      }
    });
  }

  return (
    <>
    <h1>Counter App Mini Project</h1>
    <h2>Increasing and Decreasing</h2>
    <h3>Range for Increasing is 0 to 20</h3>
    <h3>Range of Decreasing is not less Than Zero</h3>
    <button onClick={addValue}>Increase Value (+) : {counter1}</button>
    <br></br>
    <br></br>
    <button onClick={removeValue}>Decrease Value (-) : {counter2}</button>
     </>
  )
}

export default App
