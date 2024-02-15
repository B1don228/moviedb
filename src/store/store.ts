import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import { movieApi } from "./slices/movieSlice";

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export default store;
