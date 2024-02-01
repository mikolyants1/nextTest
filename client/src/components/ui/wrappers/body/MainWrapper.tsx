import { Flex } from "@chakra-ui/react"

interface props {
    children:JSX.Element[]
}
function MainWrapper({children}:props):JSX.Element {
  return (
    <Flex w='90%'
      flexWrap='wrap'
      rowGap={10}
      columnGap={10}
      justifyContent='center'
      m='10px auto'>
      {children}
    </Flex>
  )
}

export default MainWrapper