import { Flex } from '@chakra-ui/react'
import React from 'react'

interface props {
    children:JSX.Element[]
}
function PersonCardWrapper({children}:props):JSX.Element {
  return (
    <Flex
      borderRadius={20}
      overflow='hidden'
      flexDir='column'
      alignItems='center'
      justifyContent='space-around'
      h={400} m='30px auto'>
       {children}
    </Flex>
  )
}

export default PersonCardWrapper