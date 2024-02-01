import { Grid } from '@chakra-ui/react'
import React from 'react'

interface props {
    children:JSX.Element[]
};

function ItemCardWrapper({children}:props):JSX.Element {
  return (
    <Grid minW={300}
      bg='black'
      borderRadius={10}
      h={400} color='white'
      boxSizing="border-box" p={2}
      gridTemplateRows='40px 1fr 50px'>
        {children}
    </Grid>
  )
}

export default ItemCardWrapper