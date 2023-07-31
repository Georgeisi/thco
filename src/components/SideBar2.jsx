import {
  Badge,
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
  flexbox,
} from "@chakra-ui/react";
import React from "react";
import logo from "../assets/assets/Group 1.png";
import dashboard from "../assets/assets/Category2.png";
import bag from "../assets/assets/Bag.png";
import chat from "../assets/assets/Chat.png";
import settings from "../assets/assets/Setting.png";
import inven from "../assets/assets/Folder.png";
import profile from "../assets/assets/2 User.png";
import headset from "../assets/assets/fi_headphones.png";
import gift from "../assets/assets/fi_gift.png";
import { ArrowForwardIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const SideBar2 = () => {
  return (
    <Box maxWidth={"1240px"} width={"90%"} margin={"0 auto"}>
      <Image src={logo} alt="logo" />
      <Box marginTop={50}>
        <HStack
          display={"flex"}
          flexDir={"row"}
          width={100}
          padding={5}
          borderRadius={8}
          className='hov'  
        >
        <Link to={'/'}>  <Image src={dashboard} /></Link>
        </HStack>
        <HStack
          display={"flex"}
          flexDir={"row"}
          width={100}
          padding={5}
          borderRadius={8}
          className='hov'  
        >
          <Image src={bag} />
        </HStack>
        <HStack
          display={"flex"}
          flexDir={"row"}
          width={100}
          padding={5}
          borderRadius={8}
          className='hov'  
        >
          <Image src={profile} />
        </HStack>
        <HStack
          display={"flex"}
          flexDir={"row"}
          width={100}
          padding={5}
          borderRadius={8}
          className='hov'  
        >
          <Image src={inven} />
        </HStack>
        <HStack
          display={"flex"}
          flexDir={"row"}
          backgroundColor={"blue"}
          width={100}
          padding={5}
          borderRadius={8}
          className='hov'  
        >
        <Link to={'/chat'}>  <Image src={chat} /></Link>
        </HStack>
        <HStack
          display={"flex"}
          flexDir={"row"}
          width={100}
          padding={5}
          borderRadius={8}
          className='hov'  
        >
          <Image src={settings} />
        </HStack>
        <Box marginTop={400}>
          <Box
            backgroundColor={"purple.200"}
            w={50}
            padding={3}
            borderRadius={8}
          >
            <HStack display={"flex"}>
              <Image src={headset} />
            </HStack>
          </Box>
          <Box
            backgroundColor={"pink.100"}
            w={50}
            padding={3}
            borderRadius={8}
            marginTop={3}
          >
            <HStack display={"flex"}>
              <Image src={gift} />
            </HStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar2;
