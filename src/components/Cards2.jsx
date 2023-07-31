import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Contacts from './Contacts'
import Texts from './Texts'

const Cards2 = () => {
  return (
    <div style={{ backgroundColor: "whitesmoke", padding: "20px" }}>
        <Flex justifyContent={'space-between'}>
            <Text>Conversations With Customers</Text>
            <Button borderRadius={12} color={'white'} bgColor={'blue'}>New Message</Button>

        </Flex>
       <div className='contacts'>
        <Contacts/>
        <Texts/>
       </div>

    </div>
  )
}

export default Cards2