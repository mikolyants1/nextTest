import { BaseQueryFn, EndpointBuilder
 } from "@reduxjs/toolkit/query/react";
import PostApi from "../api";
import { ICheck, IPost, IUser, bodyPost,
 res } from "@/components/types/types";

 type newPost = Omit<IPost,"_id">;

const PostEndPoints = PostApi.injectEndpoints({
    endpoints:(build:EndpointBuilder<BaseQueryFn,string,string>)=>({
        addPost:build.mutation<IUser[],bodyPost<newPost>>({
          query:(arg:bodyPost<newPost>):res<newPost>=>{
            const {id,...body}:bodyPost<newPost> = arg;
            return {
              url:`/posts/${id}`,
              method:"POST",
              body
            }
          },
          invalidatesTags:['posts']
        }),
        delPost:build.mutation<IUser[],bodyPost<ICheck>>({
          query:(arg:bodyPost<ICheck>):res<ICheck>=>{
           const {id,...body}:bodyPost<ICheck> = arg;
            return {
             url:`/posts/${id}`,
             method:"DELETE",
             body
            }
          },
          invalidatesTags:["posts"]
        }),
        chanPost:build.mutation<IUser[],bodyPost<IPost>>({
          query:(args:bodyPost<IPost>):res<IPost>=>{
            const {id,...body}:bodyPost<IPost> = args;
            return {
              url:`/posts/${id}`,
              method:"PUT",
              body
            }
          },
          invalidatesTags:["posts"]
        })
    })
});

export const {
 useAddPostMutation,
 useChanPostMutation,
 useDelPostMutation,
} = PostEndPoints