import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Icon,
  Image,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import React from "react";
import icon2 from "../assets/assets/icon2.png";
import { ChevronDownIcon } from "@chakra-ui/icons";
import cart from "../assets/assets/icon-cart.png";

const InnerCard5 = () => {
  return (
    <Box>
      <Card backgroundColor={"blue.400"}>
        <CardHeader>
          <Image src={icon2} />
        </CardHeader>
        <CardBody>
          <StatGroup display={"flex"} gap={20} justifyContent={"space-between"}>
            <Stat>
              <StatLabel>All Product</StatLabel>
              <StatNumber>45</StatNumber>
            </Stat>

            <Stat>
              <StatLabel>Active</StatLabel>
              <StatNumber>32</StatNumber>
              <StatHelpText>+24%</StatHelpText>
            </Stat>
          </StatGroup>
        </CardBody>
      </Card>
      <Card marginTop={10}>
        <CardHeader>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Image src={cart} />
            <Text>
              This week <Icon as={ChevronDownIcon} />
            </Text>
          </Box>
        </CardHeader>
        <CardBody>
          <StatGroup display={"flex"} gap={1}>
            <Stat>
              <StatLabel color={"red"}>Abandoned Cart</StatLabel>
              <StatNumber>20%</StatNumber>
              <StatHelpText color={"green"}>0.00</StatHelpText>
            </Stat>

            <Stat>
              <StatLabel>Customers</StatLabel>
              <StatNumber>30</StatNumber>
            </Stat>
          </StatGroup>
        </CardBody>
      </Card>
    </Box>
  );
};

export default InnerCard5;
