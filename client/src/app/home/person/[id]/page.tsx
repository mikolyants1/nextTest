'use client'

import { IdContext } from '@/components/helpers/context';
import { useGetUserQuery } from '@/components/store/api/endpoints/UserEndPoints';
import { getId } from '@/components/store/store/store';
import { IParams, IPost,IUser, Und, query, useAppSelector } from '@/components/types/types';
import PersonCard from '@/components/ui/cards/person/PersonCard';
import PersonLink from '@/components/ui/links/PersonLink';
import Error from '@/components/ui/load/Error';
import Loading from '@/components/ui/load/Loading';
import React from 'react'

interface props {
    params:IParams
}

function page({params}:props):JSX.Element {
  const id:string = params.id;
  const userId:string = useAppSelector(getId);
  const {data,isLoading,isError} = useGetUserQuery<query>(userId);
  
  const getPost = (id:string,{posts}:IUser):Und<IPost>=>{
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