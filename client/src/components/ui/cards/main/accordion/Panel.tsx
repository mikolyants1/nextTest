'use client'

import { useAddPostMutation } from '@/components/store/api/endpoints/PostEndPoints';
import { EvtC, union } from '@/components/types/types';
import AddPostButton from '@/components/ui/buttons/main/AddPostButton';
import { AccordionPanel, Box, Flex, Input, Textarea } from '@chakra-ui/react'
import { title } from 'process';
import React, { useCallback, useState } from 'react'

 interface props {
    id:string,
 }
 interface state {
  title:string,
  text:string
};

function Panel({id}:props):JSX.Element {
  const [state,setState] = useState<state>({text:"",title:""});
  const [addPost] = useAddPostMutation();
  
  const change = ({target}:EvtC<union>):void=>{
    setState((prv:state)=>({
      ...prv,[target.name]:target.value
    }))
  };

  const send = useCallback(():void => {
   addPost({id:id,...state});
  },[state]);

  return (
    <AccordionPanel bg='black'
     borderBottom='1px solid white'>
      <Flex flexDirection='column'
       justifyContent='center'>
        <Box w={400} m='10px auto'>
          <Input w={100}
           onChange={change}
           name='title'
           bg='rgb(220,220,220)'
           />
        </Box>
        <Textarea m='auto' w={400}
         onChange={change}
         bg='rgb(230,230,230)'
         name='text'
         />
      </Flex>
      <AddPostButton send={send} />
    </AccordionPanel>
  )
}

export default Panel