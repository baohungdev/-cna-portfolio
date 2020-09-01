import React from "react";

import { Selectable } from "./Generic";
import { Icon } from "@chakra-ui/core";
import { GRAY_COLOR } from "../public/constants/theme-styles";

export const SelectableIcon = ({ href, ComponentType }) => (
  <Selectable href={href} style={{ margin: 10 }} target={"__blank"}>
    <Icon
      as={ComponentType}
      color={GRAY_COLOR}
      height={25}
      size={"25px"}
      mr={2}
    />
  </Selectable>
);
