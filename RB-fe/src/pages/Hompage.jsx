import { useState } from 'react'
import {Box, Button, Heading, Flex, Image, Link, Center} from '@chakra-ui/react'
import {FaTwitter} from 'react-icons/fa'
import logo from '../android-chrome-192x192.png'
import {Link as RouteLink} from 'react-router-dom'


function Homepage() {
  const [count, setCount] = useState(0)

  return (
    <Center h="100vh">
      <Box>
        <Center flexDirection="column">
          <Image src={logo} alt="Logo of Read Better" />
          <Heading align="center">Know what the leaders you follow Recommend!</Heading>
          <Link as={RouteLink} to='/add-recommendation'>
            <Button colorScheme='twitter' leftIcon={<FaTwitter/>}>
            Twitter  
            </Button>
          </Link>
        </Center>
      </Box>  
    </Center>
    
  )
}

export default Homepage
