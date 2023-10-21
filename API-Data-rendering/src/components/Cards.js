import React from 'react'
import Card from './card'
import "./cards.css";
import Spineer from "./spineer";

const Cards = (props) => {

    let courses=props.courses;
    const allcourses=[];
    function getCourses(){
        Object.values(courses).forEach((coursecategory)=>{
            coursecategory.forEach((course)=>{
                allcourses.push(course);
            })
        })
        
    console.log("COURSESVALUES")
    console.log(courses);
        return allcourses;
    }
  return (
    <>
    <div className='cards'>
            {!courses ? (
                <Spineer/>
            ) :(
                getCourses().map((course)=>{
                    return <Card key={course.id} course={course}/>
                     })
            )}
           
        </div>
    </>
  )
}

export default Cards;
