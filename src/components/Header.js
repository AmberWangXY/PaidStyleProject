import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  Image,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ContentContainer } from "../components/Layout/ContentContainer";
import logo from "../assets/Logo.svg";
import logo2 from "../assets/LogoDark.svg";
import LanguageSelector from "./HomePage/LanguageSelector";
import HeaderMobile from "./HomePage/HeaderMobile";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  // 你想要的阈值（vw）
  const THRESHOLD_VW = 43;
  useEffect(() => {
    const vwToPx = (vw) => (window.innerWidth * vw) / 100;

    const onScroll = () => {
      const thresholdPx = vwToPx(THRESHOLD_VW);
      setScrolled(window.scrollY > thresholdPx);
    };

    onScroll(); // 初始化
    window.addEventListener("scroll", onScroll, { passive: true });

    // 如果窗口大小变化（vw 对应的 px 会变），需要重新计算
    const onResize = () => onScroll();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  const location = useLocation();
  const isCollectionPage = location.pathname.startsWith("/collection");

  const NavLink = ({ to, collectionP, children }) => {
    const isActive = location.pathname === to;
    const inactiveColor =
      isCollectionPage || scrolled ? "brand.dark" : "brand.light";

    return (
      <ChakraLink
        as={RouterLink}
        to={to}
        variant={"Link-header"}
        _hover={{
          textDecoration: "none",
        }}
        color={
          isActive || (collectionP && isCollectionPage)
            ? "brand.main"
            : inactiveColor
        }
        fontWeight={
          isActive || (collectionP && isCollectionPage) ? "black" : "regular"
        }
      >
        {children}
      </ChakraLink>
    );
  };

  const SubLink = ({ to, label, visibility }) => {
    const isActive = location.pathname === to;
    return (
      <ChakraLink
        as={RouterLink}
        to={to}
        fontFamily={"Montserrat, sans-serif"}
        fontSize={"1.32vw"}
        color={isActive ? "brand.main" : "brand.dark"}
        _hover={{ textDecoration: "none", color: "brand.main" }}
        visibility={visibility ? "hidden" : ""}
      >
        {label}
      </ChakraLink>
    );
  };
  return (
    <>
      {/* ✅ Mobile Header */}
      <Box display={{ base: "block", md: "none" }}>
        <HeaderMobile />
      </Box>

      {/* ✅ Desktop / Tablet Header */}
      <Box display={{ base: "none", md: "block" }}>
        <Box
          as="header"
          position="fixed"
          pt="3.5vw"
          pb={isCollectionPage ? { md: "7vw" } : "3.5vw"}
          left="0"
          w="100%"
          zIndex="10"
          bg={isCollectionPage || scrolled ? "brand.mid" : "transparent"}
          //transition="background-color 0.25s ease"
          border="none"
        >
          <ContentContainer>
            <Flex
              h="2,8vw"
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Image
                src={isCollectionPage || scrolled ? logo2 : logo}
                alt="PaidStyle"
                w="11vw"
              />

              <HStack spacing={10} alignItems={"center"}>
                <HStack
                  as={"nav"}
                  spacing={"3.6vw"}
                  display={{ base: "none", md: "flex" }}
                >
                  <NavLink to="/">{t("navigation.home")}</NavLink>
                  <NavLink to="/story">{t("navigation.story")}</NavLink>
                  <Flex direction="column" align="center" position="relative">
                    {/* ✅ 一级菜单：固定高度盒子 */}
                    <Box display="flex">
                      <NavLink to="/collection" collectionP>
                        {t("navigation.collection")}
                      </NavLink>
                    </Box>

                    {/* ✅ 二级菜单：绝对定位在下方 */}
                    {isCollectionPage && (
                      <VStack
                        position="absolute"
                        top="100%" // 紧贴一级菜单下方
                        left="0"
                        align="flex-start"
                        spacing="2px"
                        mt="4px"
                      >
                        <SubLink
                          to="/collection"
                          label={t("collection.Signature")}
                        />
                        <SubLink
                          to="/collection/moment"
                          label={t("collection.Moment")}
                        />
                        <SubLink
                          to="/collection/customization"
                          label={t("collection.Customization")}
                          //visibility
                        />
                      </VStack>
                    )}
                  </Flex>
                  <NavLink to="/contact">{t("navigation.contact")}</NavLink>
                </HStack>

                <LanguageSelector scrolled={scrolled} />
              </HStack>
            </Flex>
          </ContentContainer>
        </Box>
      </Box>
    </>
  );
};

export default Header;
