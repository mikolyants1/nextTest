import { Box } from "@chakra-ui/react"

interface props {
    children:JSX.Element[]
};

function LoginCardWrapper({children}:props):JSX.Element {
  return (
    <Box w={400}
      m='100px auto'
      bg='white'
      borderRadius={20}
      boxShadow='0px 1px 1px 0px black'
      minH={300} overflow='hidden'>
      {children}
    </Box>
  )
}

export default LoginCardWrapper