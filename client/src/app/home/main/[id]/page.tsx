'use client'

import { useGetUserQuery } from '@/components/store/api/endpoints/UserEndPoints';
import { IParams, IPost, IUser, query} from '@/components/types/types';
import AccordionCard from '@/components/ui/cards/main/AccordionCard';
import ItemCard from '@/components/ui/cards/main/ItemCard';
import Error from '@/components/ui/load/Error';
import Loading from '@/components/ui/load/Loading';
import MainWrapper from '@/components/ui/wrappers/body/MainWrapper';

interface props {
  params:IParams
};

function page({params:{id}}:props):JSX.Element {
 const {data,isError,isLoading} = useGetUserQuery<query>(id);
  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <>
      <AccordionCard id={id} />
      <MainWrapper>
        {data&&data.posts.map((i:IPost):JSX.Element=>(
         <ItemCard
          key={i._id}
          _id={i._id}
          text={i.text}
          title={i.title}
         />
        ))}
      </MainWrapper>
    </>
  )
}

export default page