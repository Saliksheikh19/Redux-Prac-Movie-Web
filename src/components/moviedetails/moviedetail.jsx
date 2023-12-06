import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fecthAsyncMovieorShowDetail, getSelectedMovieOrShow, removeSelectedMovieOrShow } from '../../Redux/movies/movieSlice'
function Moviedetail() {
  const {imbdID} = useParams()
const dispatch = useDispatch()
const data = useSelector(getSelectedMovieOrShow)
console.log(data)
useEffect(()=>{
dispatch(fecthAsyncMovieorShowDetail(imbdID))
return () => {
  dispatch(removeSelectedMovieOrShow());
};
},[dispatch , imbdID])
  return (
    <>
<div className='container-fluid bg-dark'>
<div className="card  bg-dark" style={{color:"white" , border:"none"}} >
  <div   className="row g-0">
    <div className="col-md-4">
      <img  style={{width:"100%" , height:"80vh" , padding:"20px"}} src={data.Poster} className="img-fluid rounded-start" alt="..." />
    </div>
    <div    className="col-md-8">
      <div  className="card-body">
        <h3 className="card-title">{data.Title} </h3>
        <p style={{fontSize:"12px"}} className="card-text"> IMBD RATING: <span style={{color:"#79b8f3" , marginRight:"5px"}}>{data.imdbRating}</span> IMBD VOTES:  <span style={{color:"#79b8f3", marginRight:"5px"}}> {data.imdbVotes}</span> YEAR: <span style={{color:"#79b8f3" , marginRight:"5px"}}> {data.Year} </span> RUNTIME:  <span style={{color:"#79b8f3" , marginRight:"5px"}}>{data.Runtime}</span></p>
        <p  className="card-text" style={{color:"white"}}><small>{data.Plot}</small></p>
        <h6>Director: <span style={{paddingLeft:"35px" , fontSize:"16px" , color:"#79b8f3"}}>{data.Director}</span></h6>
        <h6>Stars:    <span style={{paddingLeft:"60px" , fontSize:"16px" , color:"#79b8f3"}}>{data.Actors}</span></h6>
        <h6>Generes:  <span style={{paddingLeft:"37px" , fontSize:"16px" , color:"#79b8f3"}}>{data.Genre}</span></h6>
        <h6>Languages:<span style={{paddingLeft:"24px" , fontSize:"16px" , color:"#79b8f3"}}>{data.Language}</span></h6>
        <h6>Awards:   <span style={{paddingLeft:"44px" , fontSize:"16px" , color:"#79b8f3"}}>{data.Awards}</span></h6>
      </div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Moviedetail