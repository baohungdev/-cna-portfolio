import { Box, Flex, SimpleGrid, useColorMode } from "@chakra-ui/core";
import Header from "../components/Header";
import React, { useEffect } from "react";
import { Body, BodyTitleLink } from "../components/Generic";
import { projects } from "../public/constants/projects";
import { ProjectLink } from "../components/ProjectLink";
import { intro } from "../public/constants/intro";
import { ExperienceItem } from "../components/ExperienceItem";
import { experiences } from "../public/constants/experience";
import { Skill } from "../components/Skill";
import {
  APOLLO_CLIENT,
  FIREBASE,
  GRAPHQL,
  JAVASCRIPT,
  NEXTJS,
  REACT_NATIVE,
  REDUX,
  TYPESCRIPT,
  SASS,
} from "../public/constants/icons";
import NavBar from "../components/NavBar";
import {
  ABOUT_ME,
  EXPERIENCE,
  TECHNOLOGIES,
  PROJECTS,
} from "../public/constants/links";

const Home = () => {
  return (
    <Flex align={"center"} direction={"column"} justifyContent={"center"}>
      <NavBar />
      <Box p={8}>
        <Header />
        <Box
          w={[
            "100%", // base
            450, // 480px upwards
            700, // 768px upwards
            900, // 992px upwards
          ]}
        >
          <Box mt={8}>
            <BodyTitleLink id={ABOUT_ME}>{"About Me"}</BodyTitleLink>
            <Body>{intro}</Body>
          </Box>
          <Flex align={"center"} direction={"column"} justify={"center"} mt={8}>
            <BodyTitleLink id={TECHNOLOGIES}>{"Technologies"}</BodyTitleLink>
            <SimpleGrid columns={[1, 1, 2, 2]} spacingX={32}>
              <Skill label={JAVASCRIPT}>{"JavaScript"}</Skill>
              <Skill label={TYPESCRIPT}>{"TypeScript"}</Skill>
              <Skill label={REACT_NATIVE}>{"React"}</Skill>
              <Skill label={NEXTJS}>{"NextJS"}</Skill>

              <Skill label={GRAPHQL}>{"GraphQL"}</Skill>
              <Skill label={APOLLO_CLIENT}>{"Apollo Client"}</Skill>

              <Skill label={REDUX}>{"Redux"}</Skill>
              <Skill label={FIREBASE}>{"Firebase"}</Skill>
              <Skill label={SASS}>{"Sass"}</Skill>
            </SimpleGrid>
          </Flex>
          <Box mt={8}>
            <BodyTitleLink id={PROJECTS}>{"Projects"}</BodyTitleLink>
            <SimpleGrid minChildWidth={["100%", "100%", 350, 350]}>
              {projects.map((project) => (
                <ProjectLink key={project.link} {...project} />
              ))}
            </SimpleGrid>
          </Box>
          <Box mt={8}>
            <BodyTitleLink id={EXPERIENCE}>{"Experience"}</BodyTitleLink>
            {experiences.reverse().map((experience) => (
              <ExperienceItem key={experience.title} {...experience} />
            ))}
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Home;
