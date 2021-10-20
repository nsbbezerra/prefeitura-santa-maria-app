import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { customTheme } from "./styles/theme";
import { MemoryRouter as Router } from "react-router-dom";
import Layout from "./layout";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/calendar.css";

function App() {
  return (
    <Router>
      <Box w="100vw" h="100vh" maxW="100vw" maxH="100vh" overflow="hidden">
        <ChakraProvider theme={customTheme} resetCSS>
          <Layout />
        </ChakraProvider>
      </Box>
    </Router>
  );
}

export default App;
