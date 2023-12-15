import React, {useState} from 'react';
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let color=(count >0) ? "green" : (count<0) ? "red" :"black";
  
  const increasement = ()=> setCount(count +1);//tai sao dung count++ ko duoc
  const decreasement = ()=> setCount(count -1);
  const reset = ()=> setCount(0);
  return (
    
      <div className="container">
  <h1>Counter</h1>
  <span style={{color}} id="value">{count} </span>
  <div className="btn-group">
    <button  onClick={decreasement} className="btn btn-decrease">DECREASE</button>
    <button onClick={reset} className="btn btn-reset">RESET</button>
    <button onClick={increasement} className="btn btn-increase">INCREASE</button>
  </div>
</div>
    
  )
}

export default App
