import { useState, useEffect } from 'react'
import {Box, Button, Heading, Flex, Image, Center, HStack, Stack, Text} from '@chakra-ui/react'
import {FaTwitter} from 'react-icons/fa'
import logo from '../android-chrome-192x192.png'
import {useParams} from 'react-router-dom'
import {localBE} from '../../offline-be'


function BooksRecommended(params) {
  const [resData, setResData] = useState();

  let userHandle = useParams();

  console.log({userHandle, resData})

  const fullCardSize = 20;
  const tileSize = "4em";


  useEffect(async () => {
    if(!resData){
      const books = await fetch(
        (localBE || "https://readbetter-backend-kmj-007.vercel.app/")+"user/"+userHandle.twitterHandle);
      let response = await books.json();
      console.log(response);
      setResData(response);
      
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
  return ( 
    <Center h="100vh" flexDirection="column" >
      <Box width={fullCardSize+"em"} height={fullCardSize+"em"} background="lightblue">
        <Center id="firstRow" flexDirection="row">
          <Box width={(fullCardSize/5)+"em"} height={(fullCardSize/5)+"em"}>
            <Flex flexDirection="row">
              <Image src="https://pbs.twimg.com/profile_images/534887249658142720/f6ZudLDi_400x400.jpeg" borderRadius='full' boxSize={(fullCardSize/5/3)+"em"} />
              <Text height={(fullCardSize/5/3)+"em"}>@saurabh</Text>
            </Flex>
            <Image src="https://pbs.twimg.com/profile_images/534887249658142720/f6ZudLDi_400x400.jpeg" width={(fullCardSize/5/3)+"em"} height={(fullCardSize/5/3)+"em"}></Image>
            <Image src="https://pbs.twimg.com/profile_images/534887249658142720/f6ZudLDi_400x400.jpeg" width={(fullCardSize/5/3)+"em"} height={(fullCardSize/5/3)+"em"}></Image>
          </Box>
          <Box width={(fullCardSize/5)+"em"} height={(fullCardSize/5)+"em"}/>
          <Box width={(fullCardSize/5)+"em"} height={(fullCardSize/5)+"em"}>
            <Image src="https://pbs.twimg.com/profile_images/534887249658142720/f6ZudLDi_400x400.jpeg" width={(fullCardSize/5/3)+"em"} height={(fullCardSize/5/3)+"em"}></Image>
            <Image src="https://pbs.twimg.com/profile_images/534887249658142720/f6ZudLDi_400x400.jpeg" width={(fullCardSize/5/3)+"em"} height={(fullCardSize/5/3)+"em"}></Image>
            <Image src="https://pbs.twimg.com/profile_images/534887249658142720/f6ZudLDi_400x400.jpeg" width={(fullCardSize/5/3)+"em"} height={(fullCardSize/5/3)+"em"}></Image>
          </Box>
          <Box width={(fullCardSize/5)+"em"} height={(fullCardSize/5)+"em"}/>
          <Box width={(fullCardSize/5)+"em"} height={(fullCardSize/5)+"em"}>
            <Image src="https://pbs.twimg.com/profile_images/534887249658142720/f6ZudLDi_400x400.jpeg" width={(fullCardSize/5/3)+"em"} height={(fullCardSize/5/3)+"em"}></Image>
            <Image src="https://pbs.twimg.com/profile_images/534887249658142720/f6ZudLDi_400x400.jpeg" width={(fullCardSize/5/3)+"em"} height={(fullCardSize/5/3)+"em"}></Image>
            <Image src="https://pbs.twimg.com/profile_images/534887249658142720/f6ZudLDi_400x400.jpeg" width={(fullCardSize/5/3)+"em"} height={(fullCardSize/5/3)+"em"}></Image>
          </Box>
        </Center>
        <HStack id="secondRow">
          <Box width={(fullCardSize/5)+"em"} height={(fullCardSize/5)+"em"}/>
          <Image src={resData[0].imageUrl} borderRadius='full' boxSize={(fullCardSize/5)+"em"} />
          <Image src={resData[1].imageUrl} width={tileSize} height={tileSize}/>
          <Image src={resData[2].imageUrl} width={tileSize} height={tileSize}/>            
          <Box width={(fullCardSize/5)+"em"} height={(fullCardSize/5)+"em"}/>
        </HStack>
        <HStack id="thirdRow" flexDirection="row">
            <Box width={(fullCardSize/5)+"em"} height={(fullCardSize/5)+"em"}>
              <Image src="https://pbs.twimg.com/profile_images/534887249658142720/f6ZudLDi_400x400.jpeg" width={(fullCardSize/5/3)+"em"} height={(fullCardSize/5/3)+"em"}></Image>
              <Image src="https://pbs.twimg.com/profile_images/534887249658142720/f6ZudLDi_400x400.jpeg" width={(fullCardSize/5/3)+"em"} height={(fullCardSize/5/3)+"em"}></Image>
              <Image src="https://pbs.twimg.com/profile_images/534887249658142720/f6ZudLDi_400x400.jpeg" width={(fullCardSize/5/3)+"em"} height={(fullCardSize/5/3)+"em"}></Image>
            </Box>
            <Image src={resData[0].imageUrl} width={(fullCardSize/5)+"em"} height={(fullCardSize/5)+"em"} />
            <Image src="https://pbs.twimg.com/profile_images/1315183823890522113/xxA4PPIn_400x400.jpg" width={(fullCardSize/5)+"em"} height={(fullCardSize/5)+"em"}/>
            <Image src={resData[0].imageUrl} width={(fullCardSize/5)+"em"} height={(fullCardSize/5)+"em"} />
            <Box width={(fullCardSize/5)+"em"} height={(fullCardSize/5)+"em"}>
              <Image src="https://pbs.twimg.com/profile_images/534887249658142720/f6ZudLDi_400x400.jpeg" width={(fullCardSize/5/3)+"em"} height={(fullCardSize/5/3)+"em"}></Image>
              <Image src="https://pbs.twimg.com/profile_images/534887249658142720/f6ZudLDi_400x400.jpeg" width={(fullCardSize/5/3)+"em"} height={(fullCardSize/5/3)+"em"}></Image>
              <Image src="https://pbs.twimg.com/profile_images/534887249658142720/f6ZudLDi_400x400.jpeg" width={(fullCardSize/5/3)+"em"} height={(fullCardSize/5/3)+"em"}></Image>
            </Box>
          </HStack>
          <HStack id="fourthRow" flexDirection="row">
          <Box width={(fullCardSize/5)+"em"} height={(fullCardSize/5)+"em"}/>
          <Image src={resData[0].imageUrl} width={(fullCardSize/5)+"em"} height={(fullCardSize/5)+"em"} />
          <Image src={resData[0].imageUrl} width={(fullCardSize/5)+"em"} height={(fullCardSize/5)+"em"} />
          <Image src={resData[0].imageUrl} width={(fullCardSize/5)+"em"} height={(fullCardSize/5)+"em"} />
          <Box width={(fullCardSize/5)+"em"} height={(fullCardSize/5)+"em"}/>
        </HStack>
        <HStack id="fifthRow" flexDirection="row">
          <Box width={(fullCardSize/5)+"em"} height={(fullCardSize/5)+"em"}>
            <Image src="https://pbs.twimg.com/profile_images/534887249658142720/f6ZudLDi_400x400.jpeg" width={(fullCardSize/5/3)+"em"} height={(fullCardSize/5/3)+"em"}></Image>
            <Image src="https://pbs.twimg.com/profile_images/534887249658142720/f6ZudLDi_400x400.jpeg" width={(fullCardSize/5/3)+"em"} height={(fullCardSize/5/3)+"em"}></Image>
            <Image src="https://pbs.twimg.com/profile_images/534887249658142720/f6ZudLDi_400x400.jpeg" width={(fullCardSize/5/3)+"em"} height={(fullCardSize/5/3)+"em"}></Image>
          </Box>
          <Box width={(fullCardSize/5)+"em"} height={(fullCardSize/5)+"em"}/>
          <Box width={(fullCardSize/5)+"em"} height={(fullCardSize/5)+"em"}>
            <Image src="https://pbs.twimg.com/profile_images/534887249658142720/f6ZudLDi_400x400.jpeg" width={(fullCardSize/5/3)+"em"} height={(fullCardSize/5/3)+"em"}></Image>
            <Image src="https://pbs.twimg.com/profile_images/534887249658142720/f6ZudLDi_400x400.jpeg" width={(fullCardSize/5/3)+"em"} height={(fullCardSize/5/3)+"em"}></Image>
            <Image src="https://pbs.twimg.com/profile_images/534887249658142720/f6ZudLDi_400x400.jpeg" width={(fullCardSize/5/3)+"em"} height={(fullCardSize/5/3)+"em"}></Image>
          </Box>
          <Box width={(fullCardSize/5)+"em"} height={(fullCardSize/5)+"em"}/>
          <Box width={(fullCardSize/5)+"em"} height={(fullCardSize/5)+"em"}>
            <Image src="https://pbs.twimg.com/profile_images/534887249658142720/f6ZudLDi_400x400.jpeg" width={(fullCardSize/5/3)+"em"} height={(fullCardSize/5/3)+"em"}></Image>
            <Image src="https://pbs.twimg.com/profile_images/534887249658142720/f6ZudLDi_400x400.jpeg" width={(fullCardSize/5/3)+"em"} height={(fullCardSize/5/3)+"em"}></Image>
            <Image src="https://pbs.twimg.com/profile_images/534887249658142720/f6ZudLDi_400x400.jpeg" width={(fullCardSize/5/3)+"em"} height={(fullCardSize/5/3)+"em"}></Image>
          </Box>
        </HStack>
      </Box>
      {/* <Box>
        {JSON.stringify(resData)}
      </Box> */}
    </Center>
  )

}

export default BooksRecommended
