import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Divider,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const Projects = () => {
  const accentColor = useColorModeValue("teal.500", "teal.300");

  // Placeholder for your projects - add your actual projects here
  const projects = [
    {
      title: "Project 1",
      description:
        "A brief description of what this project is about and what technologies you used.",
      tags: ["React", "Node.js", "MongoDB"],
      githubLink: "#",
      liveLink: "#",
      image: "/project1.jpg",
    },
    {
      title: "Project 2",
      description:
        "A brief description of what this project is about and what technologies you used.",
      tags: ["React", "Firebase", "Chakra UI"],
      githubLink: "#",
      liveLink: "#",
      image: "/project2.jpg",
    },
    {
      title: "Project 3",
      description:
        "A brief description of what this project is about and what technologies you used.",
      tags: ["Python", "Django", "PostgreSQL"],
      githubLink: "#",
      liveLink: "#",
      image: "/project3.jpg",
    },
  ];

  return (
    <Box id="projects" py={20} px={[4, 8, 16]}>
      <MotionHeading
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        fontSize={["3xl", "4xl"]}
        mb={12}
        textAlign="center"
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
        My Projects
      </MotionHeading>

      <Text textAlign="center" maxW="800px" mx="auto" mb={12} fontSize="lg">
        Here are some of the projects I've worked on. Each project was an
        opportunity to learn something new and improve my skills.
      </Text>

      <SimpleGrid columns={[1, 1, 2, 3]} spacing={8} maxW="1200px" mx="auto">
        {projects.map((project, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            bg={useColorModeValue("white", "gray.700")}
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
            _hover={{
              transform: "translateY(-5px)",
              boxShadow: "xl",
            }}
            // transition="all 0.3s ease"
          >
            <Box h="200px" bg="gray.100" position="relative" overflow="hidden">
              {/* Replace with your project image */}
              <Box
                bgImage={`url(${project.image})`}
                bgSize="cover"
                bgPosition="center"
                w="100%"
                h="100%"
                _hover={{
                  transform: "scale(1.1)",
                }}
                transition="all 0.5s ease"
              />
            </Box>

            <Box p={6}>
              <Flex justify="space-between" align="center" mb={4}>
                <Heading fontSize="xl">{project.title}</Heading>
                <Flex gap={3}>
                  <Box
                    as="a"
                    href={project.githubLink}
                    target="_blank"
                    color="gray.500"
                    _hover={{ color: accentColor }}
                  >
                    <FiGithub size={20} />
                  </Box>
                  <Box
                    as="a"
                    href={project.liveLink}
                    target="_blank"
                    color="gray.500"
                    _hover={{ color: accentColor }}
                  >
                    <FiExternalLink size={20} />
                  </Box>
                </Flex>
              </Flex>

              <Text mb={4} color="gray.600" _dark={{ color: "gray.300" }}>
                {project.description}
              </Text>

              <Flex wrap="wrap" gap={2}>
                {project.tags.map((tag, i) => (
                  <Text
                    key={i}
                    px={3}
                    py={1}
                    bg={useColorModeValue("gray.100", "gray.600")}
                    borderRadius="full"
                    fontSize="sm"
                  >
                    {tag}
                  </Text>
                ))}
              </Flex>
            </Box>
          </MotionBox>
        ))}
      </SimpleGrid>

      <Box textAlign="center" mt={12}>
        <MotionBox
          as="a"
          href="https://github.com/yourusername"
          target="_blank"
          display="inline-block"
          px={8}
          py={3}
          bg={accentColor}
          color="white"
          borderRadius="md"
          fontWeight="bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View More on GitHub
        </MotionBox>
      </Box>
    </Box>
  );
};

export default Projects;
