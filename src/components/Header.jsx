import {
  Flex,
  Box,
  Text,
  Link,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiMenu } from "react-icons/fi";

const MotionBox = motion(Box);

const Header = () => {
  const bg = useColorModeValue(
    "rgba(26, 32, 44, 0.8)",
    "rgba(26, 32, 44, 0.8)"
  );

  return (
    <MotionBox
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      position="fixed"
      w="100%"
      bg={bg}
      zIndex="999"
      backdropFilter="blur(10px)"
      px={8}
      py={4}
    >
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Text
          fontSize="xl"
          fontWeight="bold"
          bgGradient="linear(to-r, teal.300, blue.500)"
          bgClip="text"
        >
          Sivasangar
        </Text>

        <Flex display={["none", "none", "flex"]} gap={8}>
          {["About", "Experience", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              _hover={{ textDecoration: "none" }}
            >
              <Text
                position="relative"
                _after={{
                  content: '""',
                  position: "absolute",
                  width: "0%",
                  height: "2px",
                  bottom: "-2px",
                  left: "0",
                  bg: "teal.300",
                  transition: "width 0.3s ease",
                }}
                _hover={{
                  _after: {
                    width: "100%",
                  },
                }}
              >
                {item}
              </Text>
            </Link>
          ))}
        </Flex>

        <Flex gap={4} display={["none", "none", "flex"]}>
          <IconButton
            as="a"
            href="https://github.com/sivasangar2006"
            target="_blank"
            aria-label="GitHub"
            icon={<FiGithub />}
            variant="ghost"
            fontSize="xl"
            _hover={{ color: "teal.300" }}
          />
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/sivasangar-a-b8079528a/"
            target="_blank"
            aria-label="LinkedIn"
            icon={<FiLinkedin />}
            variant="ghost"
            fontSize="xl"
            _hover={{ color: "teal.300" }}
          />
          <IconButton
            as="a"
            href="mailto:sivasangar.anantha@gmail.com"
            aria-label="Email"
            icon={<FiMail />}
            variant="ghost"
            fontSize="xl"
            _hover={{ color: "teal.300" }}
          />
        </Flex>

        <IconButton
          display={["flex", "flex", "none"]}
          aria-label="Menu"
          icon={<FiMenu />}
          variant="outline"
        />
      </Flex>
    </MotionBox>
  );
};

export default Header;
