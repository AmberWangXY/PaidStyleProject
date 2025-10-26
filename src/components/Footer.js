import React from "react";
import {
  Box,
  Container,
  VStack,
  HStack,
  Image,
  Text,
  Link,
  Flex,
  Icon,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import { ContentContainer } from "./Layout/ContentContainer";
import qrcode1 from "../assets/homepageIMG/QR-Wechat.png";

import logo from "../assets/Logo.svg";
const Footer = () => {
  const { t } = useTranslation();
  const bg = "brand.dark";
  const color = "brand.mid";

  return (
    <Box bg={bg} color={color}>
      <ContentContainer py="6.5vw">
        <Flex justify="space-between" align="flex-start" wrap="wrap" gap="auto">
          {/* 第一栏：Logo */}
          <VStack align="flex-start" spacing={4}>
            <Image src={logo} alt="Paidstyle Logo" w="10.8vw" />
          </VStack>

          {/* 第二栏：导航页 */}
          <VStack align="flex-start" spacing={3}>
            <Text
              fontWeight="semibold"
              fontSize="md"
              mb={2}
              fontFamily="Montserrat, sans-serif"
              color={"brand.main"}
            >
              Pages
            </Text>
            <ChakraLink
              as={RouterLink}
              to="/"
              fontFamily={"Montserrat, sans-serif"}
              fontSize={"sm"}
              color={"brand.mid"}
              _hover={{ color: "brand.main", textDecoration: "none" }}
            >
              Home
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              to="/story"
              fontFamily={"Montserrat, sans-serif"}
              fontSize={"sm"}
              color={"brand.mid"}
              _hover={{ color: "brand.main", textDecoration: "none" }}
            >
              Story
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              to="/collection"
              fontFamily={"Montserrat, sans-serif"}
              fontSize={"sm"}
              color={"brand.mid"}
              _hover={{ color: "brand.main", textDecoration: "none" }}
            >
              Collection
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              to="/contact"
              fontFamily={"Montserrat, sans-serif"}
              fontSize={"sm"}
              color={"brand.mid"}
              _hover={{ color: "brand.main", textDecoration: "none" }}
            >
              Contact
            </ChakraLink>
          </VStack>

          {/* 第三栏：联系方式 */}
          <VStack align="flex-start" spacing={3} maxW={"23vw"}>
            <Text
              fontWeight="semibold"
              fontSize="md"
              mb={2}
              fontFamily="Montserrat, sans-serif"
              color={"brand.main"}
            >
              Contact
            </Text>
            <Text variant={"Text-footer"}>
              Room D07, 8/F, Phase 2, Kai Tak Industrial Building, 99 King Fuk
              Street, San Po Kong, Hong Kong.
            </Text>

            <Text variant={"Text-footer"}>Contact@paidstyle.co</Text>
          </VStack>

          {/* 第四栏：二维码 */}
          <HStack spacing={4}>
            <VStack spacing={2}>
              <Flex
                bg="#D9D9D9"
                w="5vw"
                aspectRatio={1 / 1}
                borderRadius="15px"
                align="center"
                justify="center"
              >
                <Image src={qrcode1} alt="WeChat" w="80%" h="auto" />
              </Flex>
              <Text variant={"Text-footer"}>WeChat</Text>
            </VStack>

            {/* RedNote */}
            <VStack spacing={2}>
              <Flex
                bg="#D9D9D9"
                w="5vw"
                aspectRatio={1 / 1}
                borderRadius="15px"
                align="center"
                justify="center"
              >
                <Image src={qrcode1} alt="RedNote" w="80%" h="auto" />
              </Flex>
              <Text variant={"Text-footer"}>RedNote</Text>
            </VStack>
          </HStack>
        </Flex>
      </ContentContainer>
    </Box>
  );
};

export default Footer;
