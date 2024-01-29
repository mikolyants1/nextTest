import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import PersonInput from '../../inputs/PersonInput'
import PersonTextArea from '../../inputs/PersonTextArea'
import PersonUpdateButton from '../../buttons/person/PersonUpdateButton'
import { FormProvider, useForm } from 'react-hook-form'
import { IPostForm } from '@/components/types/types'

interface props {
    text:string,
    title:string,
    id:string
}
function PersonCard({text,title}:props):JSX.Element {
 const methods = useForm<IPostForm>({
  defaultValues:{text,title}
    });
  return (
   <FormProvider {...methods}>
    <Flex w={600} bg='black'
     borderRadius={20}
     overflow='hidden'
     flexDir='column'
     alignItems='center'
     justifyContent='space-around'
     h={400} m='30px auto'>
      <PersonInput />
      <PersonTextArea />
      <PersonUpdateButton />
    </Flex>
  </FormProvider>
  )
}

export default PersonCard