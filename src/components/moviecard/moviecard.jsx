import React from 'react'
import { Link } from 'react-router-dom'
function Moviecard({index , data}) {

  return (
<div className="card bg-dark" style={{width:"14rem" , margin:"8px" }}>
  <Link style={{textDecoration:"none", color:"inherit"}} to={`/movie/${data.imdbID}`}>
  <img style={{height:"45vh"}} src={data.Poster} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title" style={{color:"white"}}>{data.Title}</h5>
    <p className="card-text" style={{color:"white"}}>{data.Year}</p>
   
  </div>
  </Link>
</div>
  )
}

export default Moviecard