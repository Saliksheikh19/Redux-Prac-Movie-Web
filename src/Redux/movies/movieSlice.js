import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import  { APIKEY } from '../../apis/movieapi'
import movieapi from '../../apis/movieapikey'
export  const fecthAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies' , async(term)=>{
  
   const response = await movieapi.get(`?apikey=${APIKEY}&s=${term}&type=movie`)
   return response.data

})

export  const fecthAsyncShows = createAsyncThunk('shows/fetchAsyncShows' , async(term)=>{
 
   const response = await movieapi.get(`?apikey=${APIKEY}&s=${term}&type=series`)
   return response.data

})
export  const fecthAsyncMovieorShowDetail = createAsyncThunk('fecthAsyncMovieorShowDetail' , async(id)=>{
    
   const response = await movieapi.get(`?apiKey=${APIKEY}&i=${id}&Plot=full`);
   return response.data;
  

})

const initialState = {
    movies:{},
    shows:{},
    selectMovieOrShow: {},
}
const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        removeSelectedMovieOrShow: (state) => {
            state.selectMovieOrShow = {};
          },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fecthAsyncMovies.pending, () => {
            console.log("pending");
          })
          .addCase(fecthAsyncMovies.fulfilled, (state, action) => {
            console.log("fetched successfully");
            state.movies = action.payload;
          })
          .addCase(fecthAsyncMovies.rejected, () => {
            console.log("rejected");
          })
          .addCase(fecthAsyncShows.fulfilled, (state, action) => {
            console.log("fetched successfully");
            state.shows = action.payload;
          })
          .addCase(fecthAsyncMovieorShowDetail.fulfilled, (state, action) => {
            console.log("fetched successfully");
            state.selectMovieOrShow = action.payload;
          })
         
      },

})

export default movieSlice.reducer
export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
