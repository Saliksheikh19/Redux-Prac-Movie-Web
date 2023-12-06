import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import {  fecthAsyncMovies, fecthAsyncShows } from '../../Redux/movies/movieSlice'
import Movielisting from '../../components/movielisting/movielisting'
function Home() {
    const dispatch = useDispatch()
const movieText = "Harry"
const seriesText = "Friends"
    useEffect(()=>{
      dispatch(fecthAsyncMovies(movieText))
      dispatch(fecthAsyncShows(seriesText))
      
    } , [dispatch])
  return (
    <div className='bg-black'>
   <Movielisting></Movielisting>
   </div>
  ) 
}

export default Home