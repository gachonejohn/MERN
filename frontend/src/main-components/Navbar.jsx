import { Button, Container, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { HStack } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Container maxW= {"1140px"} px={4}>
      <Flex
      h={16}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDir={{
        base:"column",
        sm:"row" 
      }}
      >
        <Text
        fontSize={{base:"22", sm:"28"}}
        fontWeight="bold"
        textTransform={"uppercase"}
        textAlign={"center"}
        bgGradient={"linear(to-r, cyan.400, blue.500)"}
        bgClip={"text"}
        >
          <Link to={"/"}>Product Store</Link>

        </Text>

        <HStack spacing={2} alignItems={"center"}></HStack>
        <Link to={"/create"}>
        <Button>
          <PlusSquareIcon/>
        </Button>
        </Link>

      </Flex>
    </Container>
  )
}

export default Navbar