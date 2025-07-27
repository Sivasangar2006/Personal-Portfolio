import {
  Box,
  Flex,
  Text,
  Heading,
  Divider,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiBook } from "react-icons/fi";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const Experience = () => {
  const accentColor = useColorModeValue("teal.500", "teal.300");
  const cardBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.800", "black");

  const experiences = [
    {
      id: 1,
      role: "Bachelor of Technology in Computer Science",
      company: "VIT Vellore",
      duration: "2023 - 2027",
      icon: FiBook,
      description: [
        "Specializing in software development and web technologies with a strong academic foundation",
        "Key courses: Data Structures, Algorithms, Database Systems, Web Development",
        "Currently pursuing B.Tech at VIT Vellore, actively involved in technical communities and clubs",
        "Secured 2nd place in a university-level competitive coding competition during my first year",
        "Part of the organizing committee for Riviera 2025, VIT's international cultural fest",
        "Consistently exploring new technologies through hands-on projects and collaboration",
      ],
    },
    {
      id: 2,
      role: "Intern",
      company: "Sai Techno Solutions",
      duration: "Jun 2025",
      icon: FiBriefcase,
      description: [
        "Developed and maintained web applications using React and Node.js",
        "Collaborated with senior developers on client projects",
        "Implemented responsive UI components following design specifications",
        "Participated in daily standups and code review sessions",
      ],
    },

    {
      id: 3,
      role: "Web Developer",
      company: "RoboVITics - The official robotics club of VIT",
      duration: "2024-2025",
      icon: FiBook,
      description: [
        "Active core member of RoboVITics, VIT Vellore’s official robotics and innovation club",
        "Contributed to various technical workshops and collaborative robotics-software integration projects",
        "Delivered a session on WebGL during the Machine Design workshop, a pre-Gravitas event",
        "Collaborated with team members on prototyping, software development, and system design for robotics challenges",
        "Engaged in peer learning, mentoring, and ideation sessions to foster innovation within the club",
      ],
    },
  ];

  return (
    <Box
      id="experience"
      py={20}
      px={[4, 6, 8]}
      w="100vw"
      maxW="100%"
      bg={useColorModeValue("gray.50", "gray.800")}
    >
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
        color="black"
      >
        Experience & Education
      </MotionHeading>

      <Flex direction="column" w="100%" maxW="1200px" mx="auto">
        {experiences.map((exp, index) => (
          <MotionBox
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            mb={8}
            w="100%"
          >
            <Box
              p={[6, 8]}
              bg={cardBg}
              borderRadius="lg"
              boxShadow="lg"
              color={textColor}
              _hover={{
                transform: "translateY(-5px)",
                boxShadow: "xl",
              }}
              transition="all 0.3s ease"
            >
              <Flex direction={["column", "row"]} gap={6}>
                <Box flexShrink={0} mb={[4, 0]}>
                  <Icon
                    as={exp.icon}
                    w={10}
                    h={10}
                    p={2}
                    color="white"
                    bg={accentColor}
                    borderRadius="full"
                    boxShadow={`0 0 0 4px ${useColorModeValue(
                      "rgba(129, 230, 217, 0.2)",
                      "rgba(129, 230, 217, 0.3)"
                    )}`}
                  />
                </Box>

                <Box flex="1">
                  <Flex
                    direction={["column", "row"]}
                    justify="space-between"
                    mb={4}
                  >
                    <Box>
                      <Heading fontSize={["xl", "2xl"]} mb={1}>
                        {exp.role}
                      </Heading>
                      <Text
                        fontSize={["lg", "xl"]}
                        fontWeight="medium"
                        color={accentColor}
                      >
                        {exp.company}
                      </Text>
                    </Box>
                    <Flex align="center" color="gray.500" mt={[2, 0]}>
                      <FiCalendar style={{ marginRight: "8px" }} />
                      <Text fontSize={["md", "lg"]}>{exp.duration}</Text>
                    </Flex>
                  </Flex>

                  <Box as="ul" listStyleType="none">
                    {exp.description.map((item, i) => (
                      <Box as="li" key={i} mb={3} position="relative" pl={6}>
                        <Box
                          position="absolute"
                          left={0}
                          top="8px"
                          width="8px"
                          height="8px"
                          borderRadius="full"
                          bg={accentColor}
                        />
                        <Text fontSize={["md", "lg"]}>{item}</Text>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Flex>
            </Box>
          </MotionBox>
        ))}
      </Flex>
    </Box>
  );
};

export default Experience;
