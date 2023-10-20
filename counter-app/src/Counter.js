import React, { useState } from "react";
import "./counter.css";

export const Counter = () => {

    let [counter, setcounter] = useState(0)
    let increment = ()=>{
        if(counter<10){
            setcounter(counter+1);
        }
        else{
            setcounter(10);
            
        }
    }
    let decrement = ()=>{
        if(counter>0){
            setcounter(counter-1);
        }
        else{
            setcounter(0);
        }
    }
    
  return (
    <>
      <div className="main">
        <h1>Counter APP</h1>
        <br />
        <br />
        <div className="counter">
          <button onClick={increment}>+</button>
          <p>{counter}</p>
          <button onClick={decrement}>-</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
