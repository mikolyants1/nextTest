'use client'

import { Accordion, AccordionButton, AccordionIcon,
 AccordionItem, Box,Flex,} from '@chakra-ui/react'
import {memo} from 'react'
import Panel from './accordion/Panel';

interface props {
  id:string
}
function AccordionCard({id}:props):JSX.Element {

  return (
    <Accordion as='div' w='100%'
     allowMultiple bg='black'>
        <AccordionItem>
          <Panel id={id} />
          <AccordionButton
           as={Flex} color='white'>
            <Box flex={1}>
              add new post
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </AccordionItem>
    </Accordion>
  )
}

export default memo(AccordionCard)