import React from "react";
import { Box, Flex, Text, Divider, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";

const MotionBox = motion(Box);

const Footer = () => {
  const accentColor = useColorModeValue("teal.500", "teal.300");

  return (
    <Box
      py={12}
      px={[4, 8, 16]}
      bg={useColorModeValue("gray.900", "gray.800")}
      color="white"
    >
      <Flex maxW="1200px" mx="auto" direction="column" align="center">
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center"
          mb={8}
        >
          <Text fontSize="3xl" fontWeight="bold" mb={4}>
            Sivasangar
          </Text>
          <Text maxW="600px" mx="auto" color="gray.400">
            A passionate third-year student at VIT Vellore dedicated to creating
            exceptional digital experiences.
          </Text>
        </MotionBox>

        <Divider mb={8} borderColor="gray.700" />

        <Flex
          direction={["column", "column", "row"]}
          justify="space-between"
          w="100%"
          align="center"
          gap={4}
        >
          <Text color="gray.400">
            &copy; {new Date().getFullYear()} Sivasangar. All rights reserved.
          </Text>

          <Flex gap={6}>
            {["Home", "About", "Experience", "Contact"].map((item) => (
              <Text
                key={item}
                as="a"
                href={`#${item.toLowerCase()}`}
                color="gray.400"
                _hover={{ color: accentColor }}
              >
                {item}
              </Text>
            ))}
          </Flex>
        </Flex>

        <MotionBox
          mt={8}
          display="flex"
          alignItems="center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Text mr={2} color="gray.400">
            Made with
          </Text>
          <Box as={FiHeart} color="red.500" />
          <Text ml={2} color="gray.400">
            by Sivasangar
          </Text>
        </MotionBox>
      </Flex>
    </Box>
  );
};

export default Footer;
