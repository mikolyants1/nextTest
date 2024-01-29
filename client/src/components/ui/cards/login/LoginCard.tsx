'use client'

import { response } from '@/components/helpers/response'
import { useAddUserMutation } from '@/components/store/api/endpoints/UserEndPoints'
import { useAction } from '@/components/store/store/store'
import { ICheck,form } from '@/components/types/types'
import LoginInputs from '@/components/ui/inputs/LoginInputs'
import { Box, Button, Flex } from '@chakra-ui/react'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import LoginErrorCard from './LoginErrorCard'
import { CheckData } from '@/components/helpers/checkUser'

interface props {
  isHome:boolean,
  children:JSX.Element
};

export default function LoginCard({isHome,children}:props):JSX.Element {
 const router:AppRouterInstance = useRouter();
 const title:string = isHome ? 'Entrance' : 'Registration';
 const [error,setError] = useState<boolean>(false);
 const [addUser] = useAddUserMutation();
 const {setName,setId} = useAction();
 const methods = useForm<form>({
  defaultValues:{name:"",pass:""}
 });
 const {handleSubmit,reset} = methods;

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
      <Box w={400} m='100px auto'
       bg='white' borderRadius={20}
       boxShadow='0px 1px 1px 0px black'
       minH={300} overflow='hidden'>
        <Box fontSize={25}
         fontWeight='bold'
         textAlign='center'>
          {title}
        </Box>
        <LoginInputs
         title='name'
         Name='name'
         />
         <LoginInputs
          title='password'
          Name='pass'
         />
         <Flex mt={5}
          justifyContent='center'>
           <Button w={150}
            colorScheme='green'
            onClick={handleSubmit(submit)}>
             {isHome ? 'login' : 'regist'}
           </Button>
         </Flex>
         <LoginErrorCard error={error} />
          {children}
      </Box>
    </FormProvider>
  )
};