import { Control, IPostForm } from '@/components/types/types';
import { Input} from '@chakra-ui/react';
import {memo} from 'react'
import { Controller, useFormContext } from 'react-hook-form';

function PersonInput():JSX.Element {
  const {control} = useFormContext<IPostForm>();
  return (
    <>
      <Controller
       control={control}
       name='title'
       render={({field}):JSX.Element=>{
         const {onChange,name,
         value}:Control<'title'> = field;
         return (
          <Input w={200}
           bg='rgb(240,240,240)'
           name={name}
           onChange={onChange}
           value={value}
          />
         )}}
      />
    </>
  )
}

export default memo(PersonInput);