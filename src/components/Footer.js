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
  useBreakpointValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { ContentContainer } from "./Layout/ContentContainer";
import qrcode1 from "../assets/homepageIMG/QR-Wechat.png";

import logo from "../assets/Logo.svg";
import { QrCode } from "lucide-react";
const Footer = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const bg = "brand.dark";
  const color = "brand.mid";
  const isMobile = useBreakpointValue({ base: true, md: false });

  const NavLink = ({ to, collectionP, children }) => {
    const isCollectionPage = location.pathname.startsWith("/collection");
    const isActive = location.pathname === to;
    const inactiveColor =
      isCollectionPage && collectionP ? "brand.main" : "brand.light";

    return (
      <ChakraLink
        as={RouterLink}
        to={to}
        variant={"Link-footer"}
        _hover={{ color: "brand.main", textDecoration: "none" }}
        color={isActive ? "brand.main" : inactiveColor}
      >
        {children}
      </ChakraLink>
    );
  };
  const NavigationBar = () => {
    {
      /* 第二栏：导航页 */
    }
    return (
      <VStack align="flex-start" spacing={3}>
        <Text variant="Text-footer-heading" mb={2}>
          {t("footer.pages")}
        </Text>
        <NavLink to="/">{t("navigation.home")}</NavLink>
        <NavLink to="/story">{t("navigation.story")}</NavLink>
        <NavLink to="/collection" collectionP>
          {t("navigation.collection")}
        </NavLink>
        <NavLink to="/contact">{t("navigation.contact")}</NavLink>
      </VStack>
    );
  };
  const ContactBar = () => {
    {
      /* 第三栏：联系方式 */
    }
    return (
      <VStack
        align="flex-start"
        spacing={3}
        maxW={{ base: "38vw", md: "23vw" }}
      >
        <Text variant="Text-footer-heading" mb={2}>
          {t("navigation.contact")}
        </Text>
        <Text variant={"Text-footer"}>{t("footer.address")}</Text>

        <Text variant={"Text-footer"}>Contact@paidstyle.co</Text>
      </VStack>
    );
  };
  const QrCode = () => {
    return (
      <HStack spacing={4}>
        <VStack spacing={2}>
          <Flex
            bg="#D9D9D9"
            w={{ base: "9.2vw", md: "5vw" }}
            aspectRatio={1 / 1}
            borderRadius="0.99vw"
            align="center"
            justify="center"
          >
            <Image src={qrcode1} alt="WeChat" w="80%" h="auto" />
          </Flex>
          <Text variant={"Text-footer"}>{t("footer.wechat")}</Text>
        </VStack>

        {/* RedNote */}
        <VStack spacing={2}>
          <Flex
            bg="#D9D9D9"
            w={{ base: "9.2vw", md: "5vw" }}
            aspectRatio={1 / 1}
            borderRadius="0.99vw"
            align="center"
            justify="center"
          >
            <Image src={qrcode1} alt="RedNote" w="80%" h="auto" />
          </Flex>
          <Text variant={"Text-footer"}>{t("footer.Rednote")}</Text>
        </VStack>
      </HStack>
    );
  };
  return (
    <Box bg={bg} color={color}>
      <ContentContainer py="6.5vw">
        {!isMobile ? (
          <Flex
            justify="space-between"
            align="flex-start"
            wrap="wrap"
            gap="auto"
          >
            {/* 第一栏：Logo */}
            <VStack align="flex-start" spacing={4}>
              <Image src={logo} alt="Paidstyle Logo" w="10.8vw" />
            </VStack>

            <NavigationBar />
            <ContactBar />

            {/* 第四栏：二维码 */}
            <QrCode />
          </Flex>
        ) : (
          <Flex
            justify="flex-start"
            align="flex-start"
            wrap="wrap"
            gap="6vw"
            direction={"column"}
            w="full"
          >
            {/* 第一栏：Logo */}

            <Image src={logo} alt="Paidstyle Logo" w="25.8vw" />

            <Flex
              justify="space-between"
              align="flex-start"
              wrap="wrap"
              gap="auto"
              w="full"
            >
              <NavigationBar />
              <ContactBar />
            </Flex>
            {/* 第四栏：二维码 */}
            <QrCode />
          </Flex>
        )}
      </ContentContainer>
    </Box>
  );
};

export default Footer;
