import React from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  Flex,
  Container,
  Spacer,
} from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import candleImage from "../assets/images/image.png";
import RectangleImage from "../assets/images/rectangle.png";
import kitImage from "../assets/images/kit.png";
import image1 from "../assets/images/image1.png";
import dotsImage from "../assets/images/dots.png";
import dotsImage2 from "../assets/images/dots2.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import vectorImage from "../assets/images/vector.png";
import Image from "./ImagesComponets";

const HeroSection: React.FC = () => {
  const buttonSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <Box overflow="hidden">
      <Container maxW="1200px" position="relative" mt="80px">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          p={8}
        >
          {/* Left Content */}
          <Box flex="1" >
            <Image src={candleImage} alt="Candle" position="absolute" top='30px' left='-100px'/>
            <Heading size={["md", "lg", "xl", "2xl"]} color="#332C5C">
              Committed To People Committed To{" "}
              <span style={{ color: "#8976FD" }}>The Future</span>
            </Heading>
            <Text fontSize={["sm", "md", "lg", "xl"]}  my='30px'>
              An enim nullam tempor sapien gravida donec enim ipsum porta justo
              congue magna at
            </Text>
            <Button color="white" background="#8976FD" size={buttonSize}>
              Get Started Now
            </Button>
          </Box>

          {/* Right Images */}
          <Box flex="1" ml={{ base: 0, md: 0 }} position="relative">
            <Flex justify="center" alignItems="center">
              {/* Background Images */}
              <Image
                src={RectangleImage}
                alt="Background Rectangle"
                position="absolute"
                zIndex="-1"
                right="-300px"
                top="-50"
              />
              <Image
                src={vectorImage}
                alt="Background Vector"
                position="absolute"
                zIndex="-1"
                right="300px"
                top="60px"
              />

              {/* Images in the Foreground */}
              <Spacer />
              <Image
                src={image1}
                alt="Foreground Image 1"
              />
            </Flex>

            {/* the statistics Images */}
            <Flex mt="30px" gap="20px">
              <Image
                src={kitImage}
                alt="Kit Image"
              />
              <Spacer />
              <Box>
                <Image
                  src={image2}
                  alt="Image 2"
                  mb="20px"
                  maxW="337px"

                />
                 <Image
                  src={image3}
                  alt="Image 3"
                />
              </Box>
            </Flex>

            {/* Dots background Image */}
            <Box>
              <Image
                src={dotsImage}
                alt="Dots Image"
                borderRadius="md"
                position="absolute"
                top="400px"
                right="500px"
                zIndex="-1"
              />
            </Box>
          </Box>
        </Flex>
      </Container>
      <Image  src={dotsImage2} alt="Dots Image"/>
    </Box>
  );
};

export default HeroSection;
