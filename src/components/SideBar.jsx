import { Badge, Box, Flex, HStack, Icon, Image, Text, flexbox } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/assets/Logo.png'
import dashboard from '../assets/assets/Category.png'
import bag from '../assets/assets/Bag.png'
import chat from '../assets/assets/Chat.png'
import settings from '../assets/assets/Setting.png'
import inven from '../assets/assets/Folder.png'
import profile from '../assets/assets/2 User.png'
import headset from '../assets/assets/fi_headphones.png'
import gift from '../assets/assets/fi_gift.png'
import { ArrowForwardIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <Box maxWidth={'1240px'} width={'90%'} margin={'0 auto'}>
        <Image src={logo} alt='logo'  />
        <Box marginTop={50}>
           <HStack className='hov'    display={'flex'} flexDir={'row'} backgroundColor={'blue'} width={300} padding={5} borderRadius={8}>
          <Link to={'/'}> <Image src={dashboard}/></Link>
            <Text color={'white'}>DashBoard</Text>
           
           </HStack>
           <HStack className='hov'    display={'flex'} flexDir={'row'}  width={300} padding={5} borderRadius={8}>
           <Image src={bag}/>
            <Text>Orders</Text>
            <Badge borderRadius={'1000'} padding={1} colorScheme='yellow'>3</Badge>
           
           </HStack>
           <HStack className='hov'    display={'flex'} flexDir={'row'}  width={300} padding={5} borderRadius={8}>
           <Image src={profile}/>
            <Text>Customers</Text>
            
           
           </HStack>
           <HStack className='hov'  display={'flex'} flexDir={'row'}  width={300} padding={5} borderRadius={8}>
           <Image src={inven}/>
            <Text>Inventory</Text>
            
           
           </HStack>
           <HStack className='hov'    display={'flex'} flexDir={'row'}  width={300} padding={5} borderRadius={8}>
           <Link to={'/chat'}>  <Image src={chat} /></Link>
            <Text>Conversation</Text>
            <Badge borderRadius={'1000'} padding={1} colorScheme='yellow'>16</Badge>

            
           
           </HStack>
           <HStack className='hov'    display={'flex'} flexDir={'row'}  width={300} padding={5} borderRadius={8}>
           <Image src={settings}/>
            <Text>settings</Text>
            
           
           </HStack>
         <Box marginTop={400}>
         <Box backgroundColor={'purple.200'} padding={3} borderRadius={8}>
            <HStack display={'flex'}>
                <Image src={headset}/>
                <Text>Contact Support</Text>
            </HStack>
          </Box>
         <Box backgroundColor={'pink.100'} padding={5} marginTop={3}>
         <HStack  display={'flex'}>
                <Image src={gift}/>
                <Text>Free Gift Awaits You!</Text>
            </HStack>
            <Text>Upgrade Your Account <Icon as={ChevronRightIcon}/></Text>

         </Box>
         </Box>


        </Box>
    </Box>
  )
}

export default SideBar