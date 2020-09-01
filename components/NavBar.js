import React from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  PseudoBox,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/core";
import { SelectableIcon } from "./SelectableIcon";
import { GitHub, Linkedin, Mail, Menu } from "react-feather";
import {
  EMAIL_LINK,
  GITHUB_LINK,
  LINKED_IN_LINK,
} from "../public/constants/urls";
import ColorToggle from "./ColorToggle";
import { NAV_LINKS } from "../public/constants/links";
import { backgroundColor, GRAY_COLOR } from "../public/constants/theme-styles";

export const NAV_HEIGHT = 80;

const CustomDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer
      isOpen={isOpen}
      size={"xs"}
      isFullHeight={false}
      placement="right"
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          {NAV_LINKS.map(({ link, label }) => (
            <Box key={link}>
              <a href={`#${link}`} onClick={onClose}>
                <Text fontSize={24} pt={4} pb={4}>
                  {label}
                </Text>
              </a>
              <Divider />
            </Box>
          ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

const NavBar = () => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      align={"center"}
      boxShadow={"sm"}
      direction={"row"}
      backgroundColor={backgroundColor[colorMode]}
      justify={"space-between"}
      position={"sticky"}
      p={4}
      height={NAV_HEIGHT}
      w={"100%"}
      top={0}
    >
      <CustomDrawer isOpen={isOpen} onClose={onClose} />
      <Flex align={"center"}>
        <Avatar
          name={"Duong Bao Hung"}
          src={"/assets/Headshot.jpg"}
          size={"lg"}
          mr={4}
        />
        <SelectableIcon ComponentType={GitHub} href={GITHUB_LINK} />
        <SelectableIcon ComponentType={Linkedin} href={LINKED_IN_LINK} />
        <SelectableIcon ComponentType={Mail} href={EMAIL_LINK} />
      </Flex>
      <Flex align={"center"} justify={"space-between"}>
        <Box display={["none", "none", "none", "flex"]}>
          {NAV_LINKS.map(({ link, label }) => (
            <a key={link} href={`#${link}`}>
              <PseudoBox
                pl={3}
                pr={3}
                color={GRAY_COLOR}
                _hover={{ color: "current" }}
              >
                <Text>{label}</Text>
              </PseudoBox>
            </a>
          ))}
        </Box>
        <ColorToggle />
        <Box
          as={Menu}
          cursor={"pointer"}
          color={GRAY_COLOR}
          display={["flex", "flex", "flex", "none"]}
          onClick={onOpen}
          ml={4}
        />
      </Flex>
    </Flex>
  );
};

export default NavBar;
