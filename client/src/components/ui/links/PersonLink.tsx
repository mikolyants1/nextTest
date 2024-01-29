import { Box, Text } from '@chakra-ui/react'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation'
import {memo} from 'react'

function PersonLink():JSX.Element {
 const router:AppRouterInstance = useRouter();

 const back = ():void => {
    router.back()
 }
  return (
    <Box w='95%' m='auto'>
       <Text letterSpacing={1}
        fontSize={23}
        onClick={back}>
        &larr; back
       </Text>
    </Box>
  )
}

export default memo(PersonLink)