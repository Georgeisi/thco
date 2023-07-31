import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Icon,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import listicon from "../assets/assets/Rectangle 4.png";
import listicon1 from "../assets/assets/Rectangle 4 (1).png";
import listicon2 from "../assets/assets/Rectangle 4 (2).png";
import circle from "../assets/assets/Group 2.png";
const InnerCard4 = () => {
  return (
    <Card>
      <CardHeader display={"flex"} gap={4}>
        <Heading size={"md"}>Marketing</Heading>
        <Text>
          This week <Icon as={ChevronDownIcon} />
        </Text>
      </CardHeader>
      <CardBody>
        <List display={"flex"} gap={5} alignItems={"center"} spacing={3}>
          <ListItem display={"flex"} alignItems={"center"}>
            <Image src={listicon} />
            Aquision
          </ListItem>
          <ListItem display={"flex"} alignItems={"center"}>
            <Image src={listicon1} />
            Purchase
          </ListItem>
          <ListItem display={"flex"} alignItems={"center"}>
            <Image src={listicon2} />
            Retention
          </ListItem>
        </List>
        <HStack paddingTop={10} marginX={"auto"} marginLeft={"6"}>
          <Image src={circle} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default InnerCard4;
