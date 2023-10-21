import React from 'react'
import './card.css'
import {FcLike} from 'react-icons/fc';

 const card = (props) => {
    let course = props.course;
  return (
    <div className='cardpage'>
        <div className='maincard'>
        <div className='card'>
            <img src={course.image.url}></img>
            <div>
                <button>
                    <FcLike fontSize='1.75rem'/>
                </button>
            </div>
            <div>
                <p className='title'>{course.title}</p>
                <p className='desc'>{course.description}</p>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default card;
