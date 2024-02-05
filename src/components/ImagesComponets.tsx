// ImageCard.tsx
import React from "react";
import { Image, ImageProps } from "@chakra-ui/react";

interface ImageCardProps extends ImageProps {
  src?: string;
  alt?: string;
  maxW?:any
}

const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt,
  maxW,
  ...rest
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      {...rest}
      borderRadius="md"
      maxW={maxW || "100%"}
    />
  );
};

export default ImageCard;
