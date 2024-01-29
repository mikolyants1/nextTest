import { BaseQueryFn, EndpointBuilder
 } from "@reduxjs/toolkit/query/react";
import PostApi from "../api";
import { IUser, body1, res
 } from "@/components/types/types";

const UserEndPoints = PostApi.injectEndpoints({
  endpoints:(build:EndpointBuilder<BaseQueryFn,string,string>)=>({
        getUser:build.query<IUser,string>({
         query:(id:string):string=>`/users/${id}`,
         providesTags:['posts']
        }),
        addUser:build.mutation<IUser,body1>({
           query:(body:body1):res<body1>=>({
             url:"/users",
             method:"POST",
             body
           }),
         invalidatesTags:['posts']
        })
    })
});

export const {
   useAddUserMutation,
   useGetUserQuery
} = UserEndPoints