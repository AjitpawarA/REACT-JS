import React from 'react'

export const Card = (props) => {
  return (
    <div>
        <div className="card" style={{ width: "18rem" }}>
  <img src={props.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">
      {props.description}
    </p>
    <a href="#" className="btn btn-primary">
      {props.btntext}
    </a>
  </div>
</div>
    </div>
  )
}
