'use client'

import { useDelPostMutation } from '@/components/store/api/endpoints/PostEndPoints'
import { getId } from '@/components/store/store/store';
import { useAppSelector } from '@/components/types/types';
import { Box, Grid } from '@chakra-ui/react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react'
import ItemButtons from '../../buttons/main/item/ItemButtons';
import ItemCardWrapper from '../../wrappers/cards/ItemCardWrapper';

interface props {
    title:string,
    text:string,
    _id:string,
}
function ItemCard({text,title,_id}:props):JSX.Element {
 const [delPost] = useDelPostMutation();
 const id:string = useAppSelector(getId);
 
 const del = useCallback(():void=>{
   delPost({id,_id});
 },[]);
 
  return (
    <ItemCardWrapper>
       <Box textAlign='center'
        fontSize={20} fontWeight='bold'
        borderBottom='1px solid white'>
          {title}
       </Box>
       <Box w='100%'>
          {text}
       </Box>
       <ItemButtons
        del={del}
        id={_id}
        />
    </ItemCardWrapper>
  )
}

export default ItemCard