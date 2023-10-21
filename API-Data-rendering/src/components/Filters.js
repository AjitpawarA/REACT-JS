import React from 'react'
import "./filter.css"

const Filters = ({filterData}) => {
  return (
    <div className='filter'>
        {filterData.map( (data)=>{
            return(<button key={data.id}>
                {data.title}
            </button>)
            
        })}
    </div>
  )
}
export default Filters;
