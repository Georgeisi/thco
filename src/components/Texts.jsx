import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import profile from "../assets/assets/Group 11.png";
import bag2 from "../assets/assets/Bag2.png";
import iphone from "../assets/assets/Rectangle 3.png";
import check from "../assets/assets/Frame 5852.png";
// import send from "../assets/assets/Frame 5847.png";
import send from "../assets/assets/Send.png";
import smile from "../assets/assets/fi_smile.png";
import { PlusSquareIcon } from "@chakra-ui/icons";

const Texts = () => {
  return (
    <Card>
      <CardHeader
        display={"flex"}
        justifyContent={"space-between"}
        borderBottom={"1px grey"}
      >
        <Box display={"flex"} gap={2}>
          <Image src={profile} />
          <Stack>
            <Text>Jane Doe</Text>
            <Text>
              <span style={{ color: "blue" }}>Online</span> 12:55am
            </Text>
          </Stack>
        </Box>
        <Box display={"flex"} alignContent={"center"} gap={2}>
          <Box>
            <Badge colorScheme="orange">New Customer</Badge>
          </Box>
          <Stack>
            <Text color={"blue"}>View Profile</Text>
            <Box display={"flex"} alignItems={"center"}>
              <Image w={50} h={50} src={bag2} />
              <Text>0 orders</Text>
            </Box>
          </Stack>
        </Box>
      </CardHeader>

      <CardBody>
        <Box display={"flex"} justifyContent={"center"}>
          <Button>12 August 2022</Button>
        </Box>
        <Flex gap={10}>
          <Box display={"flex"} gap={2}>
            <Image src={iphone} />
            <Stack>
              <Text>Iphone 13</Text>
              <Text>730,000</Text>
            </Stack>
          </Box>
          <Text paddingTop={7}>
            <span style={{ color: "blue" }}>12</span> in stock
          </Text>
        </Flex>
        <Box display={"flex"} flexDir={"column"} gap={20} paddingTop={10}>
          <Box
            padding={"16px"}
            backgroundColor={"blue"}
            // w={"350px"}
            borderRadius={"16px"}
            borderBottomLeftRadius={0}
            className="small"
          >
            <Text color={"white"}>
              Hello i want to make enquiries about your product
            </Text>
          </Box>
          <Box>
            <Box
              padding={"16px"}
              // marginLeft={"300px"}
              backgroundColor={"orange.100"}
              // w={"325px"}
              borderRadius={8}
              borderBottomRightRadius={0}
              className="smallbox3"
            >
              <Text color={"white"}>
                Hello janet thank you for reaching out
              </Text>
            </Box>
            <Box className="smallbox2"  display={"flex"} alignItems={"center"}>
              <Text>12:57am </Text>
              <Image w={"20px"} h={"20px"} src={check} />
            </Box>
          </Box>
          <Box>
            <Box
              padding={"16px"}
             
              backgroundColor={"orange.100"}
             
              borderRadius={8}
              borderBottomRightRadius={0}
              className="smallbox"
            >
              <Text color={"white"}>What do you want to know</Text>
            </Box>
            <Box className="smallbox2"  display={"flex"} alignItems={"center"}>
              <Text>12:57am </Text>
              <Image w={"20px"} h={"20px"} src={check} />
            </Box>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Button>Today</Button>
          </Box>
          <Box>
            <Box
              padding={"16px"}
              backgroundColor={"blue"}
             
              borderRadius={"16px"}
              borderBottomLeftRadius={0}
              className="smallbox3"
            >
              <Text color={"white"}>
                I want to know if the price is negotiable i need atleast 2 units
              </Text>
            </Box>
            <Text>12:55 am</Text>
          </Box>
        </Box>
        <Stack paddingTop={2} spacing={3}>
          <InputGroup>
            <InputLeftElement >
            <Icon backgroundColor={'orange-100'} as={PlusSquareIcon}/>
            
            </InputLeftElement>
            <Input placeholder="Your Message" />
            <InputRightElement>
            <Image src={smile}/>
           <Flex justify={'center'}>
           <Button backgroundColor={'orange.100'}  >Send <Image src={send}/> </Button>
           
           </Flex>
              
            </InputRightElement>
          </InputGroup>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Texts;
