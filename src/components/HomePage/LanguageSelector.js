import {
  Box,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "cn", label: "中文" },
  { code: "jp", label: "日本語" },
  { code: "kr", label: "한국어" },
  { code: "it", label: "Italiano" },
];

const LanguageSelector = ({ scrolled = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isCollectionPage = location.pathname.startsWith("/collection");
  const isDarkMode = isCollectionPage || scrolled;
  const getLangName = (locale) =>
    LANGUAGES.find((lang) => lang.code === locale)?.label || locale;

  return (
    <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <MenuButton
        as={Button}
        variant="ghost"
        w="11vw"
        h="2.7vw"
        alignItems="center"
        justifyContent="center"
        gap="1.85vw"
        py="0.4vw"
        px="1vw"
        border="0.5px solid rgba(255, 255, 255, 0.3)"
        borderColor={isDarkMode ? "brand.dark" : ""}
        borderRadius="0.66vw"
        color={isDarkMode ? "brand.dark" : "brand.light"}
        fontWeight={"normal"}
        fontSize={"1.587vw"}
        _hover={{ bg: "rgba(0, 0, 0, 0.3)" }}
        _expanded={{
          bg: "brand.light",
          color: "brand.main",
          fontWeight: "extrabold",
          border: "1px solid #6D6D6D",
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Flex align="center" w="full" justify="space-between">
          <Box as="span" whiteSpace="nowrap">
            {getLangName(i18n.language)}
          </Box>
          {isOpen ? (
            <Icon
              as={LuChevronUp}
              boxSize="1.58vw"
              strokeWidth={2}
              color="brand.main"
            />
          ) : (
            <Icon
              as={LuChevronDown}
              boxSize="1.58vw"
              strokeWidth={2}
              color={isDarkMode ? "brand.dark" : "brand.light"}
            />
          )}
        </Flex>
      </MenuButton>

      <MenuList
        border="1px solid #6D6D6D"
        borderRadius="lg"
        textAlign="center"
        bg="brand.light"
        color="brand.dark"
        minW="unset"
        w="11vw"
      >
        {LANGUAGES.map((lang) => {
          const isActive = i18n.language === lang.code;
          return (
            <MenuItem
              key={lang.code}
              textAlign="left"
              px="1vw"
              borderRadius="2xl"
              fontSize={"1.587vw"}
              bg="transparent"
              fontWeight={isActive ? "extrabold" : "normal"}
              color={isActive ? "brand.main" : "brand.dark"}
              _hover={{
                color: "brand.main",
                bg: "transparent",
              }}
              onClick={() => {
                setIsOpen(false);
                i18n.changeLanguage(lang.code);
              }}
            >
              {lang.label}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default LanguageSelector;
