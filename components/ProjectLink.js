import React from "react";

import { LabelToIcon } from "../public/constants/icons";

import { Selectable, Small, TextWrapper, TitleSmall } from "./Generic";
import { Box, Image, Flex } from "@chakra-ui/core";
import { SelectableIcon } from "./SelectableIcon";
import { GitHub, Globe } from "react-feather";

const Icon = ({ label }) => (
  <Box p={2}>
    <Image
      alt={label}
      objectFit="fill"
      height={[8, 10, 12, 12]}
      htmlWidth={"auto"}
      src={LabelToIcon[label]}
    />
  </Box>
);

export const ProjectLink = (project) => (
  <Selectable href={project.link} target={"__blank"}>
    <TextWrapper>
      <Flex textAlign="center">
        <TitleSmall
          style={{
            margin: 8,
          }}
        >
          {project.title}
        </TitleSmall>
        <SelectableIcon ComponentType={GitHub} href={project.link} />
        <SelectableIcon ComponentType={Globe} href={project.website} />
      </Flex>
      <Small
        style={{
          marginLeft: 8,
        }}
      >
        {project.subTitle}
      </Small>
      <Box
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {project.labels.map((label) => (
          <Icon key={label} label={label} />
        ))}
      </Box>
    </TextWrapper>
  </Selectable>
);
