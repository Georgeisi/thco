import React from "react";
import { InnerCard } from "./InnerCard.JSX";
import InnerCard2 from "./InnerCard2";
import { Box } from "@chakra-ui/react";
import InnerCard3 from "./InnerCard3";
// import { InnerCard } from './InnerCard.jsx'

const Cards = () => {
  return (
    <div style={{ backgroundColor: "whitesmoke", padding: "20px" }}>
      <InnerCard />
      <div style={{ padding: "20px 0px" }} className="card">
        <InnerCard2 />
        <InnerCard3 />
      </div>
    </div>
  );
};

export default Cards;
