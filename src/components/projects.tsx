import React from "react";
import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import CardDeck from "./card";
import Icon from "../assets/images/Icon.png";
import Icon2 from "../assets/images/Icon2.png";
import Icon3 from "../assets/images/Icon3.png";

interface Project {
  achievement: string;
  text: string;
  imageSrc: any;
}

const projects: Project[] = [
  {
    achievement: "15k+",
    text: "Active User",
    imageSrc: Icon,
  },
  {
    achievement: "30k",
    text: "Total Download",
    imageSrc: Icon2,
  },
  {
    achievement: "10k",
    text: "Customer",
    imageSrc: Icon3,
  },
];

const HeroSection: React.FC = () => {
  return (
    <Box overflow="hidden">
      <Container maxW="1200px" position="relative" mt="80px">
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(370px, 1fr))"
        >
          {/* Map over the projects array to render multiple CardDeck components */}
          {projects.map((project, index) => (
            <CardDeck
              key={index}
              imageSrc={project.imageSrc}
              imageAlt="icon"
              achievement={project.achievement}
              text={project.text}
              // Spread the project object to pass achievement and text as props
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default HeroSection;
