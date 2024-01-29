import Header from '@/components/ui/body/Header'
import React, { ReactNode } from 'react'

interface props {
    children:ReactNode
}

function layout({children}:props):JSX.Element {
  return (
    <>
     <Header />
     {children}
    </>
  )
}

export default layout