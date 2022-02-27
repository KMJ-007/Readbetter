import { useState, useEffect } from 'react'
import {Box, Button, Heading, Flex, Image, Center} from '@chakra-ui/react'
import {FaTwitter} from 'react-icons/fa'
import logo from '../android-chrome-192x192.png'
import {useParams} from 'react-router-dom'
// import {localBE} from '../../offline-be'


function BooksRecommended(params) {
  const [resData, setResData] = useState();

  let userHandle = useParams();

  console.log({userHandle, resData})


  // useEffect(() => {
  //   if(!resData){
  //     fetch(('https://readbetter-backend.vercel.app/user/')+userHandle.twitterHandle,{ mode: 'no-cors', })
  //     .then(res=>res.json())
  //     .then((res)=>{
  //       console.log(res);
  //       setResData(res);
  //     })
      
  //   }
  // },[resData]);
    
  async function getBookdata() {
    const books = await fetch(
        ("https://readbetter-backend-kmj-007.vercel.app/user")+userHandle.twitterHandle);
    let response = await books.json();
    console.log(response);
}
getBookdata();
  if (!resData || !resData.status) {
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
  return ( JSON.stringify(resData)
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
