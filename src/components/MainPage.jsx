import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import NavBar from './NavBar'
import Cards from './Cards'

const MainPage = () => {
  return (
    <Box backgroundColor={'white'}>
      <NavBar/>
      <Cards/>
    </Box>
  )
}

export default MainPage