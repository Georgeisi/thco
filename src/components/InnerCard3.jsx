import { Badge, Box, Card, CardBody, CardHeader, HStack, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { iphone } from '../Utils/Data'

const InnerCard3 = () => {
    const [isPending, setispending]= useState(true)
    const [red , setIsRed]= useState('red')
    // // const res = isPending==!'pending': setIsRed('green'):''
    // let res = isPending=='pending'? setIsRed('red'):setispending('green')
    const f= isPending==true?'red':'green'

    // setispending(iphone.pending)
  return (
    <Card>
        <CardHeader>Recent Orders</CardHeader>
        {iphone.map((phone)=>{
            
            return <CardBody display={'flex'} justifyContent={'space-between'}>
                <Box display={'flex'}>
                    <Image src={phone.img}/>
                    <HStack display={'flex'} flexDir={'column'}>
                        <Text>{phone.name}</Text>
                        <Text>{phone.price}</Text>
                        
                    </HStack>
                </Box>
                    <HStack display={'flex'} flexDir={'column'}>
                        <Text>{phone.date}</Text>
                        {/* {phone.pending==isPending?setispending('red'):setispending('green')} */}
                        
                     <Badge colorScheme={`${f}`}>{phone.pending}</Badge>
                    </HStack>
            </CardBody>
        })}
    </Card>
  )
}

export default InnerCard3