import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSlice";
import { useReducer } from "react";
// const rootReducer = combineReducers({
//   movies: moviesReducer,
//   user: useReducer
// });
export const store = configureStore({
 reducer: {
  movies: moviesReducer,
 } 
})