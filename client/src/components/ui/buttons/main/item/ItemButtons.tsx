import { getId } from '@/components/store/store/store';
import { useAppSelector } from '@/components/types/types';
import { Button, Flex } from '@chakra-ui/react'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import {memo} from 'react'

interface props {
    del:()=>void,
    id:string
}

function ItemButtons({del,id}:props):JSX.Element {
  const router:AppRouterInstance = useRouter();
    const update = ():void => {
     router.push(`/home/person/${id}`);
    };
  return (
    <Flex alignItems='center'
     justifyContent='space-between'
      borderTop='1px solid white'>
        <Button onClick={update}>
         update
        </Button>
        <Button onClick={del}
         colorScheme='red'>
           delete
        </Button>
     </Flex>
  )
}

export default memo(ItemButtons)