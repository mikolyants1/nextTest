'use client'

import { IdContext } from '@/components/helpers/context';
import { useChanPostMutation } from '@/components/store/api/endpoints/PostEndPoints';
import { useGetUserQuery } from '@/components/store/api/endpoints/UserEndPoints';
import { getId } from '@/components/store/store/store';
import { IPost, IPostForm, IUser, Und, query, useAppSelector } from '@/components/types/types';
import PersonCard from '@/components/ui/cards/person/PersonCard';
import PersonInput from '@/components/ui/inputs/PersonInput';
import PersonTextArea from '@/components/ui/inputs/PersonTextArea';
import PersonLink from '@/components/ui/links/PersonLink';
import Error from '@/components/ui/load/Error';
import Loading from '@/components/ui/load/Loading';
import React from 'react'

interface props {
    params:{
        id:string
    }
}

function page({params}:props):JSX.Element {
  const id:string = params.id;
  const userId:string = useAppSelector(getId);
  const {data,isLoading,isError} = useGetUserQuery<query>(userId);
  
  const getPost = (id:string,{posts}:IUser)=>{
    const post:Und<IPost> = posts.find((i:IPost)=>i._id == id);
    if (!post) return;
    return post
  }
  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  
  const post:Und<IPost> = getPost(id,data);
  if (!post) return <Error />;
  return (
    <IdContext.Provider value={id}>
      <PersonLink />
      <PersonCard
       id={id}
       text={post.text}
       title={post.title}
      />
    </IdContext.Provider>
  )
}

export default page