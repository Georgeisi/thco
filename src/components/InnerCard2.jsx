import { Box, Card, Image } from "@chakra-ui/react";
import React from "react";
import InnerCard4 from "./InnerCard4";
import InnerCard5 from "./InnerCard5";
import chart from "../assets/assets/chart.png";

const InnerCard2 = () => {
  return (
    <Box>
      <Box className="card2">
        <InnerCard4 />
        <InnerCard5 />
      </Box>
      <Card marginTop={10}>
        <Image src={chart} />
      </Card>
    </Box>
  );
};

export default InnerCard2;
