import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const PostApi = createApi({
    reducerPath:"apiPosts",
    refetchOnFocus:true,
    tagTypes:['posts'],
    baseQuery:fetchBaseQuery({
      baseUrl:"http://localhost:5000/",
    }),
    endpoints:()=>({})
});

export default PostApi