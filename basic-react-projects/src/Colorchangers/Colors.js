import React from 'react'
import "./colors.css";
import { useState } from 'react';

export const Colors = () => {

    let [contcolor, setcolor] = useState("olive")

  return (
    <div className='container'>
        <div className='mainn' style={{backgroundColor:contcolor}}>
            <h1>COLORS CHANGERS</h1>
            <div className='colorsbtns'>
                <button onClick={()=>{
                    setcolor("red");
                }} style={{backgroundColor:"red", color:"white"}}>Red</button>
                
                <button onClick={()=>{
                    setcolor("blue");
                }} style={{backgroundColor:"blue", color:"white"}}>Blue</button>
                <button onClick={()=>{
                    setcolor("orange");
                }} style={{backgroundColor:"orange", color:"black"}}>Orange</button>
                <button onClick={()=>{
                    setcolor("green");
                }} style={{backgroundColor:"green", color:"white"}}>Green</button>
                <button onClick={()=>{
                    setcolor("pink");
                }} style={{backgroundColor:"pink" , color:"black"}}>Pink</button>
            </div>
        </div>
    </div>
  )
}
