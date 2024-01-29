'use client'

import { useGetUserQuery } from '@/components/store/api/endpoints/UserEndPoints';
import { IPost, IUser} from '@/components/types/types';
import AccordionCard from '@/components/ui/cards/main/AccordionCard';
import ItemCard from '@/components/ui/cards/main/ItemCard';
import Error from '@/components/ui/load/Error';
import Loading from '@/components/ui/load/Loading';
import { Flex } from '@chakra-ui/react';

interface props {
  params:{
    id:string
  }
};

function page({params}:props):JSX.Element {
 const {data,isError,isLoading} = useGetUserQuery(params.id);
  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  console.log(data)
  return (
    <>
      <AccordionCard id={params.id} />
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