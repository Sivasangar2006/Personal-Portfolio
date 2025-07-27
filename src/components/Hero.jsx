import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const Hero = () => {
  const accentColor = useColorModeValue("teal.500", "teal.300");

  return (
    <Box
      id="home"
      minH="100vh"
      pt="80px"
      px={[4, 8, 16]}
      position="relative"
      overflow="hidden"
    >
      {/* Animated background elements */}
      <MotionBox
        position="absolute"
        top="-100px"
        right="-100px"
        w="400px"
        h="400px"
        borderRadius="full"
        bg="rgba(129, 230, 217, 0.1)"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <MotionBox
        position="absolute"
        bottom="-50px"
        left="-50px"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="rgba(129, 230, 217, 0.1)"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <Flex
        maxW="1200px"
        mx="auto"
        align="center"
        justify="space-between"
        direction={["column-reverse", "column-reverse", "row"]}
        pt={[8, 16]}
      >
        <Box flex="1" zIndex="1">
          <MotionText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            fontSize={["sm", "md"]}
            color={accentColor}
            mb={2}
          >
            Hi, my name is
          </MotionText>

          <MotionText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            fontSize={["4xl", "5xl", "6xl"]}
            fontWeight="bold"
            lineHeight="1.2"
            mb={4}
          >
            Sivasangar.
          </MotionText>

          <MotionText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            fontSize={["2xl", "3xl", "4xl"]}
            fontWeight="bold"
            color="gray.400"
            lineHeight="1.2"
            mb={6}
          >
            I build things for the web.
          </MotionText>

          <MotionText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            maxW="600px"
            color="gray.400"
            mb={8}
          >
            I'm a third-year student at VIT Vellore passionate about creating
            exceptional digital experiences. Currently focused on building
            responsive and user-friendly web applications.
          </MotionText>

          <MotionButton
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            as="a"
            href="#contact"
            colorScheme="teal"
            size="lg"
            mr={4}
            mb={[4, 0]}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </MotionButton>

          <MotionButton
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            as="a"
            href="/resume.pdf"
            download
            variant="outline"
            colorScheme="teal"
            size="lg"
            rightIcon={<FiDownload />}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </MotionButton>
        </Box>

        <MotionBox
          flex="1"
          display="flex"
          justifyContent="center"
          mb={[8, 8, 0]}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          zIndex="1"
        >
          <Box
            position="relative"
            w="300px"
            h="300px"
            borderRadius="full"
            overflow="hidden"
            border="4px solid"
            borderColor={accentColor}
            boxShadow={`0 0 20px ${useColorModeValue(
              "rgba(129, 230, 217, 0.5)",
              "rgba(129, 230, 217, 0.8)"
            )}`}
          >
            <Image
              src="/profile.jpg" // Replace with your profile image
              alt="Sivasangar"
              objectFit="cover"
              w="100%"
              h="100%"
            />
          </Box>
        </MotionBox>
      </Flex>
    </Box>
  );
};

export default Hero;
