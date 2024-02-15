import { combineReducers } from "@reduxjs/toolkit";
import { movieApi } from "./slices/movieSlice";

const reducers = combineReducers({
  [movieApi.reducerPath]: movieApi.reducer,
});

export default reducers;
