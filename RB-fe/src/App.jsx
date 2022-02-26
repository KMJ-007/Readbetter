import { useState } from 'react'
import {Box, Button, Heading, Flex, Image, Center} from '@chakra-ui/react'
import {FaTwitter} from 'react-icons/fa'
import logo from './android-chrome-192x192.png'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouteLink
} from "react-router-dom";
import Homepage from './pages/Hompage';
import AddRecommendation from './pages/AddRecommendation';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/add-recommendation" element={<AddRecommendation />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
    
  )
}

export default App
