import { Flex } from '@chakra-ui/react'
import React from 'react'

interface props {
    children:JSX.Element[]
};

function HeaderWrapper({children}:props):JSX.Element {

  return (
    <Flex w='100%'
      bg='black' h='70px'
      justifyContent='space-between'
      fontSize={20}
      alignItems='center'
      color='white'>
        {children}
    </Flex>
  )
}

export default HeaderWrapper