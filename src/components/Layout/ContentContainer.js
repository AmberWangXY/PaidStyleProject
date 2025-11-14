// src/components/Layout/ContentContainer.js
import { Container } from "@chakra-ui/react";

export const ContentContainer = ({ children, ...props }) => (
  <Container maxW={{ base: "85vw", md: "70vw" }} {...props}>
    {children}
  </Container>
);
