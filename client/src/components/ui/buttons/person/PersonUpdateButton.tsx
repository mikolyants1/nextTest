import { IdContext } from '@/components/helpers/context';
import { useChanPostMutation } from '@/components/store/api/endpoints/PostEndPoints';
import { getId } from '@/components/store/store/store';
import { IPostForm, useAppSelector } from '@/components/types/types'
import { Box, Button, Flex } from '@chakra-ui/react'
import {memo, useContext} from 'react'
import { SubmitHandler, useFormContext } from 'react-hook-form'

function PersonUpdateButton():JSX.Element {
  const {handleSubmit,reset} = useFormContext<IPostForm>();
  const userId:string = useAppSelector(getId);
  const [updatePost] = useChanPostMutation();
  const id:string = useContext(IdContext);
  const update:SubmitHandler<IPostForm> = (date):void => {
     if (!date.text||!date.title){
        reset();
        return;
     }
     updatePost({id:userId,_id:id,...date});
  }
  return (
    <Flex w={400}
     justifyContent='end'>
       <Button onClick={handleSubmit(update)}
        colorScheme='red'>
          update
       </Button>
    </Flex>
  )
}

export default memo(PersonUpdateButton)