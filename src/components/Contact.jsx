import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const accentColor = useColorModeValue("teal.500", "teal.300");
  const textColor = useColorModeValue("gray.800", "white");
  const cardBg = useColorModeValue("white", "gray.700");

  return (
    <Box
      id="contact"
      py={20}
      px={[4, 8, 16]}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Heading
        fontSize={["3xl", "4xl"]}
        mb={12}
        textAlign="center"
        color={textColor}
        position="relative"
        _after={{
          content: '""',
          position: "absolute",
          bottom: "-10px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80px",
          height: "4px",
          bg: accentColor,
          borderRadius: "full",
        }}
      >
        Contact Me
      </Heading>

      <Flex
        maxW="600px"
        mx="auto"
        direction="column"
        gap={8}
        bg={cardBg}
        p={[6, 8]}
        borderRadius="lg"
        boxShadow="lg"
      >
        <Flex align="center">
          <Icon as={FiMail} mr={4} color={accentColor} fontSize="2xl" />
          <Box>
            <Text fontWeight="bold" color={textColor}>
              Email
            </Text>
            <Text fontSize="lg" color={textColor}>
              sivasangar.anantha@gmail.com
            </Text>
          </Box>
        </Flex>

        <Flex align="center">
          <Icon as={FiPhone} mr={4} color={accentColor} fontSize="2xl" />
          <Box>
            <Text fontWeight="bold" color={textColor}>
              Phone
            </Text>
            <Text fontSize="lg" color={textColor}>
              +91 9500317685
            </Text>
          </Box>
        </Flex>

        <Flex align="center">
          <Icon as={FiMapPin} mr={4} color={accentColor} fontSize="2xl" />
          <Box>
            <Text fontWeight="bold" color={textColor}>
              Location
            </Text>
            <Text fontSize="lg" color={textColor}>
              VIT Vellore, Tamil Nadu, India
            </Text>
          </Box>
        </Flex>
      </Flex>

      <Text mt={8} textAlign="center" color={textColor}>
        Feel free to reach out via email or phone. I'm always open to discussing
        new opportunities!
      </Text>
    </Box>
  );
};

export default Contact;
