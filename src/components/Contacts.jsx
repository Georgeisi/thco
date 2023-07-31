import { SearchIcon } from "@chakra-ui/icons";
import { Badge, Box, Card, CardBody, CardHeader, Center, Flex, Image, Input, InputGroup, InputLeftElement, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { ChatItems } from "../Utils/Data";

const Contacts = () => {
  return (
    <Card>
      <CardHeader display={"flex"} justifyContent={"space-between"}>
        <Text>Contacts</Text>
        <Text>34</Text>
      </CardHeader>
      <CardBody>
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input type="text" placeholder="Search" />
          </InputGroup>
        </Stack>

        {ChatItems.map((text)=>{
            return <Box key={text.name} paddingY={2} display={'flex'} gap={2} alignItems={'center'}>
                <Image src={text.img}/>
                <Stack paddingTop={0}>
                    <Flex justifyContent={'space-between'} gap={110} alignItems={'center'}>
                        <Text>{text.name}</Text>
                        <Badge colorScheme={'orange'}>{text.badge}</Badge>
                    </Flex>
                    <Text>{text.txt}{text.time}</Text>
                </Stack>
            </Box>

        })}
      </CardBody>
    </Card>
  );
};

export default Contacts;
