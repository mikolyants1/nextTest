'use client'

import { useGetUserQuery } from '@/components/store/api/endpoints/UserEndPoints';
import { IParams, IPost, IUser, query} from '@/components/types/types';
import AccordionCard from '@/components/ui/cards/main/AccordionCard';
import ItemCard from '@/components/ui/cards/main/ItemCard';
import Error from '@/components/ui/load/Error';
import Loading from '@/components/ui/load/Loading';
import { Flex } from '@chakra-ui/react';

interface props {
  params:IParams
};

function page({params:{id}}:props):JSX.Element {
 const {data,isError,isLoading} = useGetUserQuery<query>(id);
  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  console.log(data)
  return (
    <>
      <AccordionCard id={id} />
      <Flex w='90%' flexWrap='wrap'
        rowGap={10} columnGap={10}
        justifyContent='center'
        m='10px auto'>
        {data&&data.posts.map((i:IPost):JSX.Element=>(
         <ItemCard
          key={i._id}
          _id={i._id}
          text={i.text}
          title={i.title}
         />
        ))}
      </Flex>
    </>
  )
}

export default page