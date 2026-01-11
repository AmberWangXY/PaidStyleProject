// src/components/Layout/ContentContainer.js
import { Container } from "@chakra-ui/react";

export const ContentContainer = ({ children, ...props }) => (
  <Container px={"none"} maxW={{ base: "87.8vw", md: "70vw" }} {...props}>
    {children}
  </Container>
);
