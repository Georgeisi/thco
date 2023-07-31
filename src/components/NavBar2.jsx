import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  HStack,
  Icon,
  Text,
  Image,
} from "@chakra-ui/react";
import HomeIcon from "../assets/assets/Home.png";
import React from "react";

const NavBar2 = () => {
  return (
    <Box>
      <Box
        w={"100"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        borderBottom={"1px solid grey"}
      >
        <h1>Conversations</h1>
        <HStack paddingBottom={2}>
          <Button>
            {" "}
            Nannys shop <Icon as={ChevronDownIcon} />
          </Button>

          <Icon as={BellIcon} />
          <Avatar src="" />
        </HStack>
      </Box>
      <HStack display={"flex"}>
        <Image paddingY={3} src={HomeIcon} />
        <Text>/Conversation</Text>
      </HStack>
    </Box>
  );
};

export default NavBar2;
