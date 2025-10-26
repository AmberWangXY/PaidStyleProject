// src/components/Layout/ContentContainer.js
import { Container } from "@chakra-ui/react";

export const ContentContainer = ({ children, ...props }) => (
  <Container maxW="70vw"  {...props}>
    {children}
  </Container>
);
