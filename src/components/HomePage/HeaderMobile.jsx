import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Button,
  Icon,
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
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { ContentContainer } from "../../components/Layout/ContentContainer";
const HeaderMobile = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isCollectionPage = location.pathname.startsWith("/collection");
  const [scrolled, setScrolled] = useState(false);

  // 你想要的阈值（vw）
  const THRESHOLD_VW = 122;
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLangOpen, setLangOpen] = useState(false);
  const [isCollectionOpen, setCollectionOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen || isLangOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen, isLangOpen]);
  useEffect(() => {
    if (!isMenuOpen) setCollectionOpen(false);
  }, [isMenuOpen]);
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
  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "fr", label: "Français" },
    { code: "cn", label: "中文" },
    { code: "jp", label: "日本語" },
    { code: "kr", label: "한국어" },
    { code: "it", label: "Italiano" },
  ];
  const getLangName = (code) =>
    languages.find((l) => l.code === code)?.label || "English";

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
        onClick={() => {
          setMenuOpen(false);
          setCollectionOpen(false);
        }}
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
        bg={isCollectionPage || scrolled ? "brand.mid" : "transparent"}
        //transition="background-color 0.25s ease"
      >
        <ContentContainer>
          {/* 左边 BookA */}
          <Flex align="center" justify="space-between">
            <Button
              onClick={() => setLangOpen(true)}
              variant="unstyled"
              color={isCollectionPage || scrolled ? "brand.dark" : "white"}
              minW="auto"
              _hover={{ bg: "transparent" }}
            >
              <BookA size={24} />
            </Button>

            {/* 中间 Logo */}
            <Image
              src={isCollectionPage || scrolled ? logo2 : logo}
              alt="Logo"
              w="39.5vw" // ✅ 155.77 / 394
              mx="auto"
            />

            {/* 右边汉堡按钮 */}
            <Button
              onClick={() => setMenuOpen(true)}
              variant="unstyled"
              color={isCollectionPage || scrolled ? "brand.dark" : "white"}
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
          {/* ✅ 左上角 Language Button（打开全屏语言菜单） */}
          <Button
            position="absolute"
            top="6vw"
            left="6vw"
            variant="ghost"
            w="38.4vw"
            h="12.7vw"
            alignItems="center"
            justifyContent="center"
            gap="3vw"
            py="1.8vw"
            px="4.1vw"
            borderColor={"brand.dark"}
            border="1px solid "
            borderRadius="2.55vw"
            color={"brand.dark"}
            fontWeight="regular"
            fontSize="6.1vw"
            onClick={() => {
              //setMenuOpen(false);
              setLangOpen(true);
            }}
          >
            <Flex align="center" w="full" justify="space-between">
              <Box as="span" whiteSpace="nowrap">
                {getLangName(i18n.language)}
              </Box>
              <Icon
                as={LuChevronDown}
                boxSize="5.4vw"
                strokeWidth={2}
                color="brand.dark"
              />
            </Flex>
          </Button>

          {/* 右上角 X */}

          <IconButton
            icon={<X size="32" />}
            variant="ghost"
            position="absolute"
            top="6vw"
            right="6vw"
            onClick={() => setMenuOpen(false)}
          />

          <VStack
            align="center"
            py="10vh"
            alignItems={"center"}
            w="100%"
            spacing={"21.4vw"}
          >
            <NavItem to="/" label={t("navigation.home")} />

            <NavItem to="/story" label={t("navigation.story")} />

            {/* ✅ Collection */}
            <Box w="100%" textAlign="center">
              {/* Collection 标题：只负责展开/收起，不导航 */}
              <Button
                variant="unstyled"
                onClick={() => setCollectionOpen((v) => !v)}
                fontFamily="Montserrat, sans-serif"
                fontSize="8.14vw"
                fontWeight={isCollectionPage ? "black" : "medium"}
                color={isCollectionPage ? "brand.main" : "brand.dark"}
                _hover={{ textDecoration: "none", color: "brand.main" }}
              >
                {t("navigation.collection")}
              </Button>

              {/* 子菜单：展开才显示 */}
              {isCollectionOpen && (
                <VStack spacing="2vw" mt="2vw" w="100%" align="center">
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
                  {/* customization 如果要继续隐藏就保留 
                  <NavItem
                    to="/collection/customization"
                    label={t("collection.Customization")}
                    fontSize="6.11vw"
                  />*/}
                </VStack>
              )}
            </Box>
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
          bg="brand.light"
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
