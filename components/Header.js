import React from "react";
import { Avatar, Divider, Flex, Heading } from "@chakra-ui/core";

const Header = () => (
  <Flex
    align={"center"}
    direction={"column"}
    id={"header"}
    justify={"center"}
    p={2}
    w={"100%"}
  >
    <Avatar
      name={"Duong Bao Hung"}
      src={"/assets/Headshot.jpg"}
      size={"2xl"}
      zIndex={-1}
    />
    <Heading mt={4}>{"Duong Bao Hung"}</Heading>
    <Heading size={"lg"}>{"Web Developer"}</Heading>
  </Flex>
);

export default Header;
