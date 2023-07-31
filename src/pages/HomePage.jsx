import React from 'react'
import SideBar from '../components/SideBar'
// import  from '../components/MainPage'
import { Box, Flex } from '@chakra-ui/react'
import MainPage from '../components/MainPage'

const HomePage = () => {
  return (
    <div style={{paddingTop:'20px', maxWidth:'1240px', width:'90%', margin:'0 auto'}} className='home'>
        <SideBar/>
         <MainPage/>

    </div>
       
    
  
  )
}

export default HomePage