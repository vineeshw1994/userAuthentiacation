// import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// const baseQuery = fetchBaseQuery({
//     baseUrl :''
// })

// export const apiSlice = createApi({
//     baseQuery,
//     tagTypes: ['user'],
//     endpoints:  (builder) =>{{}},
// });


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'YOUR_API_BASE_URL', // Replace with your API base URL
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['user'],
  endpoints: (builder) => ({
    // Define your endpoints here
    getUser: builder.query({
      query: (userId) => `user/${userId}`,
    }),
    // Add more endpoints as needed
  }),
});

// Export the generated hooks for each endpoint
export const { useGetUserQuery } = apiSlice;

