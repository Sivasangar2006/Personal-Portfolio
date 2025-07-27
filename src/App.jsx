import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "white",
        overflowX: "hidden",
      },
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box maxW="100vw" overflowX="hidden">
        <Header />
        <Hero />
        <About />
        <Experience />
        {/* <Projects /> */}
        <Contact />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
