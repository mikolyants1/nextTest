import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import PersonInput from '../../inputs/PersonInput'
import PersonTextArea from '../../inputs/PersonTextArea'
import PersonUpdateButton from '../../buttons/person/PersonUpdateButton'
import { FormProvider, useForm } from 'react-hook-form'
import { IPostForm } from '@/components/types/types'
import PersonCardWrapper from '../../wrappers/cards/PersonCardWrapper'

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
    <PersonCardWrapper>
      <PersonInput />
      <PersonTextArea />
      <PersonUpdateButton />
    </PersonCardWrapper>
  </FormProvider>
  )
}

export default PersonCard