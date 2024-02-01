"use client"

import { getName } from '@/components/store/store/store'
import { useAppSelector } from '@/components/types/types'
import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import {memo} from 'react'
import HeaderWrapper from '../wrappers/body/HeaderWrapper';

function Header():JSX.Element {
 const name:string = useAppSelector(getName);
  return (
    <HeaderWrapper>
      <Box w={100}
       textAlign='center'>
        {name}
      </Box>
      <Box fontSize={30}
       w={150} textAlign='center'>
        Next Site
      </Box>
      <Box w={100}
       textAlign='center'>
        <Link href='/'>
           exit
        </Link>
      </Box>
    </HeaderWrapper>
  )
}

export default memo(Header)