import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Box flex="1" as="main" bg="brand.mid">
        <Outlet />
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
