'use client'

import { response } from '@/components/helpers/response'
import { useAddUserMutation } from '@/components/store/api/endpoints/UserEndPoints'
import { useAction } from '@/components/store/store/store'
import { ICheck,fields,form } from '@/components/types/types'
import LoginInputs from '@/components/ui/inputs/LoginInputs'
import { Box, Button, Flex } from '@chakra-ui/react'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import LoginErrorCard from './LoginErrorCard'
import { CheckData } from '@/components/helpers/checkUser'
import LoginCardWrapper from '../../wrappers/cards/LoginCardWrapper'
import LoginButton from '../../buttons/login/LoginButton'

interface props {
  isHome:boolean,
  children:JSX.Element
};

export default function LoginCard({isHome,children}:props):JSX.Element {
 const router:AppRouterInstance = useRouter();
 const title:string = isHome ? 'Entrance' : 'Registration';
 const [error,setError] = useState<boolean>(false);
 const [addUser] = useAddUserMutation();
 const {setName,setId,setToken} = useAction();
 const methods = useForm<form>({
  defaultValues:{name:"",pass:""}
 });
 const fields:fields[] = [
  {Name:'name',title:'name'},
  {Name:'pass',title:'password'}
 ];
 const {reset} = methods;

 const submit:SubmitHandler<form> = async (date):Promise<void> => {
   try {
   const data:ICheck = await CheckData(date);
      if (response(data._id,isHome)){
        setError(true);
        reset();
        return;
       };
      if (isHome){
       setName(date.name);
       setId(data._id);
       setToken(data.token);
       router.push(`/home/main/${data._id}`);
      } else addUser(date);
    } catch(e) {
      console.log(e);
      setError(true);
      reset();
    }
 };
 
  return (
    <FormProvider {...methods}>
      <LoginCardWrapper>
        <Box fontSize={25}
         fontWeight='bold'
         textAlign='center'>
          {title}
        </Box>
        <>
         {fields.map((i:fields):JSX.Element=>(
           <LoginInputs
            key={i.Name}
            title={i.title}
            Name={i.Name}
           />
          ))}
        </>
         <LoginButton
          isHome={isHome}
          submit={submit}
          />
        <LoginErrorCard error={error} />
          {children}
      </LoginCardWrapper>
    </FormProvider>
  )
};