import React from "react";
import Cards from "./components/Cards"
import Navbar from "./components/Navbar"
import Filter from "./components/Filters"
import "./app.css";
import { filterData,apiUrl } from "./data";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses]= useState(null);
  useEffect(()=>{
      const fetchdata=async()=>{
        try{
          const res= await fetch(apiUrl);
          const data = await res.json();
          console.log(data);
          setCourses(data.data);
        }
        catch(error){
          toast.error("someting went wrong");
        }
      }
      fetchdata();
  },[])

  return <>
  <div className="mainapp">
    <Navbar></Navbar>
    <div className="filters">
        <Filter filterData={filterData}/>
    </div>
    <Cards courses={courses}></Cards>
  </div>
  </>;
};

export default App;
