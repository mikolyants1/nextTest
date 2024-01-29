import { Button, Flex } from '@chakra-ui/react'
import {memo} from 'react'

interface props {
    send:()=>void
}
function AddPostButton({send}:props):JSX.Element {
  return (
    <Flex w={400} m='10px auto'
     justifyContent='end'>
      <Button onClick={send}
       colorScheme='red'>
         add
      </Button>
    </Flex>
  )
}

export default memo(AddPostButton)