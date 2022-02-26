import { useState } from 'react'
import {Box, Button, Center, Heading, Input, Flex, FormControl, FormLabel, Image, Link, Text, InputGroup, InputLeftAddon} from '@chakra-ui/react'
import {ArrowForwardIcon} from '@chakra-ui/icons'
import logo from '../android-chrome-192x192.png'
import {Navigate} from 'react-router-dom'
import {localFE} from '../../offlineconstants'


function Homepage() {
  const [inputValue, setInputValue] = useState()

  let freeslots = 5;

  const handleSubmit = (formInput) => {
    formInput.preventDefault();
    console.log(formInput);
    setInputValue(formInput.target["0"].value);
  }

  if(inputValue) {
    return (<Navigate to= {"/user/"+inputValue} />)
  } 
  return (  
    <Center h="100vh">
      <Box>
        <Center flexDirection="column">
          <Image src={logo} alt="Logo of Read Better" />
          <Heading align="center">Read what the best Read.</Heading>
            <form onSubmit={handleSubmit}>
            <Center flexDirection="column" >
              <FormControl isRequired>
                  <FormLabel htmlFor='handleInput'>Personalised Book recommendations from leaders you follow on Twitter.</FormLabel>
                  <InputGroup margin="auto" width="15rem">
                      <InputLeftAddon children="@" />
                      <Input id="handleInput" placeholder="twitterHandle" />   
                  </InputGroup>                  
              </FormControl>
              <Button colorScheme='twitter' rightIcon={<ArrowForwardIcon />} mt={4} type="submit">
                Lets Go
              </Button>
            </Center>
          </form>
        </Center>
      </Box>  
    </Center>
  )
  
}

export default Homepage
