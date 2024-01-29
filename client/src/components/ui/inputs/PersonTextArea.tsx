import { Control, IPostForm, form } from '@/components/types/types'
import { Textarea } from '@chakra-ui/react';
import {memo} from 'react'
import { Controller, useFormContext } from 'react-hook-form';


function PersonTextArea():JSX.Element {
  const {control} = useFormContext<IPostForm>()
  return (
    <Controller
     control={control}
     name='text'
     render={({field}):JSX.Element=>{
      const {value,onChange,
      name}:Control<'text'> = field;
      return (
        <Textarea w={400}
         h={150}
         bg='rgb(240,240,240)'
         name={name}
         value={value}
         onChange={onChange}
        />
      )}}
    />
  )
}

export default memo(PersonTextArea)