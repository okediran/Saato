import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Link,
  Button,
  Image,
  Container,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/images/logo.png";
import { FaAngleDown } from "react-icons/fa";

const Navbar: React.FC = () => {
  // navlinks array
  const navLinks = ["Home", "About", "Services", "Blog", "Contact Us"];

  return (
    <Container maxW="1200px">
      <Flex p={4} align="center">
        {/* navbar brand */}
        <Box as="h1" color="white">
          <Image src={Logo} alt="Logo" width="178.57px" height="40px" mr={2} />
        </Box>
        <Spacer />

        {/* Map over the links array and create a Link component for each link in the middle */}
        <Box display={{ base: "none", md: "flex" }}>
          {/* Map over the links array and create a Link component for each link */}
          {navLinks.map((link, index) => (
            <Link
              key={index}
              mx={2}
              color="#8976FD"
              href="#"
              fontSize="18px"
              display={{ base: "none", md: "flex" }}
            >
              {link}
              {/* It checks if 'Contact Us' is inside the navLinks array; if it is, don't display the FaAngleDown icon */}
              {link === "Contact Us" ? null : (
                <FaAngleDown style={{ margin: "5px" }} />
              )}
            </Link>
          ))}
        </Box>
        <Spacer />

        {/* navlink at the left */}
        <Box display={{ base: "none", md: "block" }}>
          <Link mx={7} color="#8976FD" href="#" fontSize="18px">
            Login
          </Link>
          <Button
            size="md"
            height="48px"
            width="100px"
            border="2px"
            color="#8976FD"
            borderColor="#8976FD"
            fontSize="18px"
          >
            Sign up
          </Button>
        </Box>

        {/*  Hamburger Menu for phone and tab resposiveness */}
        <Box display={{ base: "block", md: "none" }}>
          <GiHamburgerMenu style={{color:'#8976FD', fontSize:'40px', cursor:'pointer'}} onClick={() => console.log("Open Menu")} />
        </Box>
      </Flex>
    </Container>
  );
};

export default Navbar;
