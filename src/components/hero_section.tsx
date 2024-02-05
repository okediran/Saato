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
  const buttonSize = useBreakpointValue({ base: "md", md: "md" });

  return (
    <Box overflow="hidden">
      <Container
        maxW="1200px"
        position="relative"
        mt={{ base: "", md: "80px" }}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          p={8}
        >
          {/* Left Content */}
          <Box flex="1">
            <Image
              src={candleImage}
              alt="Candle"
              position="absolute"
              top="30px"
              left="-100px"
              display={{ base: "none", md: "block" }}
            />
            <Box>
              <Heading size={["md", "lg","2xl"]} color="#332C5C">
                Committed To People Committed To
                <span style={{ color: "#8976FD" }}>The Future</span>
              </Heading>
              <Text fontSize={["sm", "md", "lg", "xl"]} my="30px">
                An enim nullam tempor sapien gravida donec enim ipsum porta
                justo congue magna at
              </Text>
              <Button color="white" background="#8976FD" size={buttonSize}>
                Get Started Now
              </Button>
            </Box>
            <Image
              src={vectorImage}
              alt="Background Vector"
              position="absolute"
              zIndex="-1"
              right="10px"
              top="30px"
              maxW="70px"
              display={{ base: "block", md: "none" }}
            />
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
                maxW={{ base: "70%", md: "100%" }}
                right={{ base: "-90px", md: "-300px" }}
                top={{ base: "100", md: "-50" }}
              />
              <Image
                src={vectorImage}
                alt="Background Vector"
                position="absolute"
                zIndex="-1"
                right="300px"
                top="60px"
                display={{ base: "none", md: "block" }}
              />

              {/* Images in the Foreground */}
              <Spacer />
              <Image
                src={image1}
                alt="Foreground Image 1"
                maxW={{ base: "150px", md: "100%" }}
                mr={{ base: "-50px", md: "0" }}
                boxShadow="lg"
              />
            </Flex>

            {/* the statistics Images */}
            <Flex
              mt="30px"
              gap="20px"
              direction={{ base: "row-reverse", md: "row" }}
            >
              <Image
                src={kitImage}
                alt="Kit Image"
                maxW={{ base: "200px", md: "100%" }}
                boxShadow="lg"
              />
              <Spacer />
              <Box>
                <Image
                  src={image2}
                  alt="Image"
                  mb="20px"
                  maxW="337px"
                  display={{ base: "none", md: "block" }}
                />
                <Image
                  src={image3}
                  alt="Image"
                  maxW={{ base: "150px", md: "100%" }}
                  mt={{ base: "-100px", md: "0px" }}
                  boxShadow="lg"
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
                top={{ base: "250px", md: "400px" }}
                right={{ base: "120px", md: "500px" }}
                zIndex="-1"
                maxW={{ base: "120px", md: "100%" }}
              />
            </Box>
          </Box>
        </Flex>
      </Container>
      <Image
        display={{ base: "none", md: "block" }}
        src={dotsImage2}
        alt="Dots Image"
      />
    </Box>
  );
};

export default HeroSection;
