import React from "react";
import {
  Card,
  CardBody,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";
import Image from "./ImagesComponets";
import { BoxProps } from "@chakra-ui/react";

interface CardDeckProps extends BoxProps {
  imageSrc?: string;
  imageAlt?: string;
  achievement: string;
  text: string;
}

const CardDeck: React.FC<CardDeckProps> = ({ imageSrc, imageAlt, achievement,  text, ...rest}) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      {...rest}
      border="none"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={imageSrc}
        alt={imageAlt}
      />

      <Stack
        mt={{ base: 4, sm: 0 }}
        ml={{ base: 0, sm: 4 }}
        textAlign={{ base: "center", sm: "left" }}
      >
        {/* CardBody Section */}
        <CardBody mt="50px">
          {/* Project Achievement Heading */}
          <Heading size="lg">{achievement}</Heading>

          {/* Project Description Text */}
          <Text py="2">{text}</Text>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default CardDeck;
