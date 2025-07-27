import {
  Box,
  Flex,
  Text,
  Heading,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { FiCode, FiServer, FiCpu, FiCoffee } from "react-icons/fi";
import { motion } from "framer-motion";

const About = () => {
  const accentColor = useColorModeValue("teal.500", "teal.300");
  const textColor = useColorModeValue("gray.800", "white");
  const cardBg = useColorModeValue("white", "gray.700");

  const skills = [
    {
      title: "Frontend Development",
      icon: FiCode,
      items: ["HTML/CSS", "JavaScript", "React", "Chakra UI", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      icon: FiServer,
      items: ["Node.js", "Express", "MongoDB", "Firebase", "REST APIs"],
    },
    {
      title: "Other Skills",
      icon: FiCpu,
      items: ["Git/GitHub", "Data Structures", "Algorithms", "Problem Solving"],
    },
  ];

  return (
    <Box
      id="about"
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
        About Me
      </Heading>

      <Flex
        maxW="1200px"
        mx="auto"
        direction={["column", "column", "row"]}
        gap={12}
      >
        <Box flex="1">
          <Text fontSize="lg" mb={6} lineHeight="1.8" color={textColor}>
            Hello! I'm Sivasangar, a passionate third-year Computer Science
            student at VIT Vellore with a strong interest in web development and
            software engineering.
          </Text>

          <Text fontSize="lg" mb={6} lineHeight="1.8" color={textColor}>
            My journey in tech began when I first discovered programming during
            my freshman year, and since then, I've been constantly learning and
            building projects to improve my skills.
          </Text>

          <Text fontSize="lg" mb={6} lineHeight="1.8" color={textColor}>
            Currently, I'm focused on mastering modern web technologies and
            frameworks while also exploring areas like cloud computing and
            DevOps.
          </Text>

          <Flex align="center" color={textColor}>
            <Icon as={FiCoffee} mr={3} />
            <Text fontSize="lg" lineHeight="1.8">
              When I'm not coding, you can find me reading tech blogs,
              contributing to open-source projects, or exploring new coffee
              shops.
            </Text>
          </Flex>
        </Box>

        <Box flex="1">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box bg={cardBg} p={6} mb={8} borderRadius="lg" boxShadow="md">
                <Flex align="center" mb={4}>
                  <Icon
                    as={skill.icon}
                    mr={3}
                    color={accentColor}
                    fontSize="xl"
                  />
                  <Heading fontSize="xl" color={textColor}>
                    {skill.title}
                  </Heading>
                </Flex>

                <Flex wrap="wrap" gap={3}>
                  {skill.items.map((item) => (
                    <Box
                      key={item}
                      px={4}
                      py={2}
                      bg={useColorModeValue("gray.100", "gray.600")}
                      borderRadius="md"
                      fontWeight="medium"
                      color={textColor}
                      _hover={{
                        bg: accentColor,
                        color: "white",
                        transform: "translateY(-2px)",
                      }}
                      transition="all 0.2s ease"
                    >
                      {item}
                    </Box>
                  ))}
                </Flex>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
