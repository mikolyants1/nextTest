'use client'

import { ChakraProvider, theme } from "@chakra-ui/react";
import { ReactNode } from "react";

interface props {
  children:ReactNode
};

function ChakraLayout({children}:props):JSX.Element{
  return (
    <ChakraProvider theme={theme}>
       {children}
    </ChakraProvider>
  )
};

export default ChakraLayout