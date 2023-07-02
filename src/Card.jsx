import React from 'react'

const Card = (props) => {
  return (   <div className="col-md-3 m-2 ">
  <div className="card shadow " style={{width:"18rem"}}>
    <img src={props.src} className="card-img-top" alt="..."/>
    <div className="card-body">
       <h5 className="card-title">Name: {props.name}</h5>
       
       <p className="card-text">Capital :{props.capital}</p>
      <p className="card-text">Total area: {props.area} sq.km</p>
        <p className="card-text">Total population: {props.population}</p>
         <p className="card-text">Continent: {props.continent}</p>
          <p className="card-text">TimeZone: {props.time}</p>
          <a href={props.src} className="btn btn-primary" download>Download Flag</a>
      </div>
  </div>
</div>

  )
}

export default Card