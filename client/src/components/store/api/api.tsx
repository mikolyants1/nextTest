import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const PostApi = createApi({
    reducerPath:"apiPosts",
    refetchOnFocus:true,
    tagTypes:['posts'],
    baseQuery:fetchBaseQuery({
      baseUrl:"http://localhost:5000/",
      prepareHeaders:(header:Headers,{getState})=>{
        const get:any = getState();
        const token:string = get.posts.token;
        if (token){
         header.set("authorization",`Bearer ${token}`);
        };
       return header;
      }
    }),
    endpoints:()=>({})
});

export default PostApi