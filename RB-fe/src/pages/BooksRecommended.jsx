import { useState, useEffect } from 'react'
import {Box, Button, Heading, Flex, Image, Center} from '@chakra-ui/react'
import {FaTwitter} from 'react-icons/fa'
import logo from '../android-chrome-192x192.png'
import {useSearchParams} from 'react-router-dom'


function BooksRecommended(params) {
  const [resData, setResData] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  searchParams.get("__firebase_request_key")

  console.log({searchParams})

  useEffect(() => {
    if(!resData){
      fetch('https://readbetter-backend.vercel.app/user/'+searchParams)
      .then(res => {
        console.log(res);
        setResData(res);
      })
      .catch(err => {
        console.log(err);
      })
    }
  },[resData]);
    

  if (!resData) {
    return (
      <Center h="100vh">
        <Box>
          <Center flexDirection="column">
            
            <Heading align="center">Loading Data...</Heading>
            
          </Center>
        </Box>  
      </Center>
    )
  }
  return ( resData
    // <Center h="100vh">
    //   <Box>
    //     <Center flexDirection="column">
          
    //       <Heading align="center">Add Recommendation Here</Heading>
          
    //     </Center>
    //   </Box>  
    // </Center>
  )

}

export default BooksRecommended
