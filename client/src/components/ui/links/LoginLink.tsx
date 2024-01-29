import { Box } from '@chakra-ui/react'
import Link from 'next/link'
import {memo} from 'react'

interface props {
    isHome:boolean
}
function LoginLink({isHome}:props):JSX.Element {
  const href:string = isHome ? '/regist' : '/';
  const text:string = isHome ? 'registration' : 'back';
  return (
    <Box mt={5}
    textAlign='center'>
     <Link href={href}>
      {text}
     </Link>
   </Box>
  )
}

export default memo(LoginLink)