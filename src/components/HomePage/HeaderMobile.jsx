import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Button,
  IconButton,
  Image,
  VStack,
  HStack,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { BookA, X, Menu as MenuIcon } from "lucide-react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/Logo.svg";
import logo2 from "../../assets/LogoDark.png";

import { ContentContainer } from "../../components/Layout/ContentContainer";
const HeaderMobile = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isCollectionPage = location.pathname.startsWith("/collection");

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLangOpen, setLangOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen || isLangOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen, isLangOpen]);

  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "fr", label: "Français" },
    { code: "cn", label: "中文" },
    { code: "jp", label: "日本語" },
    { code: "kr", label: "한국어" },
    { code: "it", label: "Italiano" },
  ];

  const NavItem = ({
    to,
    label,
    fontSize = "8.14vw",
    isCollectionChild,
    visibillity,
  }) => {
    const isActive = location.pathname === to;
    let color = "brand.dark";
    let weight = "medium";

    if (isActive) {
      color = "brand.main";
      weight = isCollectionPage ? "medium" : "black";
    }
    if (isCollectionChild && isCollectionPage) {
      color = "brand.main";
      weight = "black";
    }
    return (
      <ChakraLink
        as={RouterLink}
        to={to}
        onClick={() => setMenuOpen(false)}
        fontFamily="Montserrat, sans-serif"
        fontSize={fontSize}
        color={color}
        fontWeight={weight}
        _hover={{ textDecoration: "none", color: "brand.main" }}
        visibility={visibillity ? "hidden" : ""}
      >
        {label}
      </ChakraLink>
    );
  };
  const Divider = () => (
    <Text fontSize="4vw" color="brand.nude" fontWeight="medium">
      |
    </Text>
  );
  return (
    <>
      {/* ✅ Mobile Header Bar */}
      <Flex
        display={{ base: "flex", md: "none" }}
        position="fixed"
        top="0"
        left="0"
        w="100%"
        p="6vw"
        zIndex="20"
        bg="transparent"
      >
        <ContentContainer>
          {/* 左边 BookA */}
          <Flex align="center" justify="space-between">
            <Button
              onClick={() => setLangOpen(true)}
              variant="unstyled"
              color={isCollectionPage ? "brand.dark" : "white"}
              minW="auto"
              _hover={{ bg: "transparent" }}
            >
              <BookA size={24} />
            </Button>

            {/* 中间 Logo */}
            <Image
              src={isCollectionPage ? logo2 : logo}
              alt="Logo"
              w="39.5vw" // ✅ 155.77 / 394
              mx="auto"
            />

            {/* 右边汉堡按钮 */}
            <Button
              onClick={() => setMenuOpen(true)}
              variant="unstyled"
              color={isCollectionPage ? "brand.dark" : "white"}
              minW="auto"
              _hover={{ bg: "transparent" }}
            >
              <MenuIcon size={24} />
            </Button>
          </Flex>
        </ContentContainer>
      </Flex>

      {/* ✅ 全屏导航菜单 */}
      {isMenuOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="brand.mid"
          zIndex="200"
          alignContent={"center"}
        >
          {/* 右上角 X */}
          <IconButton
            icon={<X size="32" />}
            variant="ghost"
            position="absolute"
            top="6vw"
            right="6vw"
            onClick={() => setMenuOpen(false)}
          />

          <VStack align="center" py="10vh" alignItems={"center"} w="100%">
            <NavItem to="/" label={t("navigation.home")} />
            <Divider />
            <NavItem to="/story" label={t("navigation.story")} />
            <Divider />
            {/* ✅ Collection */}
            <Box align="center">
              <NavItem
                to="/collection"
                label={t("navigation.collection")}
                isCollectionChild
              />

              {/* ✅ 子菜单 */}
              <VStack spacing="2vw" mt="1vw" w="100%" align="center">
                <NavItem
                  to="/collection"
                  label={t("collection.Signature")}
                  fontSize="6.11vw"
                />
                <NavItem
                  to="/collection/moment"
                  label={t("collection.Moment")}
                  fontSize="6.11vw"
                />
                <NavItem
                  to="/collection/customization"
                  label={t("collection.Customization")}
                  fontSize="6.11vw"
                  visibillity
                />
              </VStack>
            </Box>
            <Divider />
            <NavItem to="/contact" label={t("navigation.contact")} />
          </VStack>
        </Box>
      )}

      {/* ✅ 全屏语言选择菜单 */}
      {isLangOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="brand.mid"
          zIndex="200"
          alignContent={"center"}
        >
          {/* 右上角 X */}
          <IconButton
            icon={<X size="32" />}
            variant="ghost"
            position="absolute"
            top="6vw"
            right="6vw"
            onClick={() => setLangOpen(false)}
          />

          <VStack
            align="center"
            py="10vh"
            alignItems={"center"}
            w="100%"
            spacing={"6vh"}
          >
            {languages.map((lang) => {
              const isActiveLang = i18n.language === lang.code;
              return (
                <Text
                  key={lang.code}
                  fontFamily="Montserrat, sans-serif"
                  fontSize="6vw"
                  color={isActiveLang ? "brand.main" : "brand.dark"}
                  fontWeight="medium"
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                    setLangOpen(false);
                  }}
                >
                  {lang.label}
                </Text>
              );
            })}
          </VStack>
        </Box>
      )}
    </>
  );
};

export default HeaderMobile;
