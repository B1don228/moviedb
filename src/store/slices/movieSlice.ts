import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/movie/",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTYzZWU4NDViZmU5Y2QwMjIyZWM5NzM0OTk4ODk1YyIsInN1YiI6IjY0ZDI0NTg3YzNiZmZlMGYwMDQ5NWU1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.42MKyTQV1FMDLjM_MR4xiM84meOhpfvoHMYmfVkvtCI",
    },
  }),
  endpoints: (builder) => ({
    getAllFilms: builder.query({
      query: (page) => `top_rated?language=en-US&page=${page}`,
    }),
  }),
});

export const { useGetAllFilmsQuery } = movieApi;
