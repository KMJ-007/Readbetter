import { useState } from 'react'
import {Box, Button, Heading, Flex, Image, Center} from '@chakra-ui/react'
import {FaTwitter} from 'react-icons/fa'
import logo from '../android-chrome-192x192.png'


function AddRecommendation() {
  const [count, setCount] = useState(0)

  return (
    <Center h="100vh">
      <Box>
        <Center flexDirection="column">
          
          <Heading align="center">Add Recommendation Here</Heading>
          
        </Center>
      </Box>  
    </Center>
    
  )
}

export default AddRecommendation
