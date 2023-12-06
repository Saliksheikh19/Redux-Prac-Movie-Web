import React, { useState } from 'react'
import "./header.css"
import { useDispatch } from 'react-redux'
import { fecthAsyncMovies, fecthAsyncShows } from '../../Redux/movies/movieSlice'
function Header() {
  const [term , setTerm] = useState("")
  const dispatch = useDispatch()
  const submitHandler = (e) =>{
e.preventDefault()
dispatch(fecthAsyncMovies(term))
dispatch(fecthAsyncShows(term))
setTerm("")
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark topbarhai" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{fontWeight:"bold"}}>MOVIEAPP</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
       
       
      
       
      </ul>
      <form className="d-flex" role="search" onSubmit={submitHandler}>
        <input className="form-control ms-auto me-auto" type="search"  onChange={(e)=>{setTerm(e.target.value)}} placeholder="Search" aria-label="Search" /> 
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Header