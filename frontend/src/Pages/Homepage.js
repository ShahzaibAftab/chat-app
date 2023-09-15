import React from 'react'
import '../../src/App.css'
import { Container, Box, Text } from '@chakra-ui/react'
const Homepage = () => {
  return (
    <Container maxW='xl' centerContent>
      <Box
        d='flex'
        justifyContent='center'
        p={3}
        bg={'white'}
        w='100%'
        m="40px 0 15px 0"
        borderRadius={'lg'}
        border='lg'
        borderWidth='1px'
      >
        <Text textAlign="center">
          Talk-A-Tive
        </Text>
      </Box>
      <Box bg='white' w='100%' p={4} borderRadius={'lg'} borderWidth='1px'>

      </Box>
    </Container>

  )
}

export default Homepage
