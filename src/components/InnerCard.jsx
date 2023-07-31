import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import weirdicon from "../assets/assets/icon.png";
import weirdicon2 from "../assets/assets/icon (1).png";
import weirdicon3 from "../assets/assets/icon (2).png";

export const InnerCard = () => {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      <Card>
        <CardHeader>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Image src={weirdicon} />
            <Text>
              This week <Icon as={ChevronDownIcon} />
            </Text>
          </Box>
        </CardHeader>
        <CardBody>
          <StatGroup display={"flex"} gap={1}>
            <Stat>
              <StatLabel>Sales</StatLabel>
              <StatNumber>4,000,000.00</StatNumber>
            </Stat>

            <Stat>
              <StatLabel>Volume</StatLabel>
              <StatNumber>450</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                20.00%
              </StatHelpText>
            </Stat>
          </StatGroup>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Image src={weirdicon2} />
            <Text>
              This week <Icon as={ChevronDownIcon} />
            </Text>
          </Box>
        </CardHeader>
        <CardBody>
          <StatGroup display={"flex"} gap={1}>
            <Stat>
              <StatLabel>Customers</StatLabel>
              <StatNumber>1,250</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                15.80%
              </StatHelpText>
            </Stat>

            <Stat>
              <StatLabel>Active</StatLabel>
              <StatNumber>1180</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                85%
              </StatHelpText>
            </Stat>
          </StatGroup>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Image src={weirdicon3} />
            <Text>
              This week <Icon as={ChevronDownIcon} />
            </Text>
          </Box>
        </CardHeader>
        <CardBody>
          <StatGroup display={"flex"} gap={1}>
            <Stat>
              <StatLabel>All orders</StatLabel>
              <StatNumber>450</StatNumber>
            </Stat>

            <Stat>
              <StatLabel>Pending</StatLabel>
              <StatNumber>5</StatNumber>
            </Stat>

            <Stat>
              <StatLabel>Completed</StatLabel>
              <StatNumber>445</StatNumber>
            </Stat>
          </StatGroup>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
};
