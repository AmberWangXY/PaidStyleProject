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

import React, { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
];

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const getLangName = (locale) =>
    LANGUAGES.find((lang) => lang.code === locale)?.label || locale;
  return (
    <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <MenuButton
        as={Button}
        variant="ghost"
        w="fit-content"
        h="2.7vw"
        alignItems="center" // ✅ 垂直居中
        justifyContent="center"
        gap="1.85vw"
        py="0.4vw"
        px="1vw"
        border="0.5px solid rgba(255, 255, 255, 0.3)"
        borderRadius="10px"
        color={"brand.light"}
        fontWeight={"regular"}
        fontSize={"lg"}
        _hover={{ bg: "rgba(0, 0, 0, 0.3)" }}
        _expanded={{
          bg: "brand.light",
          color: "brand.main",
          fontWeight: "extrabold",
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Flex align="center" gap={6}>
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
              color="brand.light"
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
      >
        {LANGUAGES.map((lang) => {
          const isActive = i18n.language === lang.code;
          return (
            <MenuItem
              key={lang.code}
              textAlign="center"
              justifyContent="center"
              borderRadius="2xl"
              fontSize={"lg"}
              fontWeight={isActive ? "extrabold" : "normal"}
              color={isActive ? "brand.main" : "brand.dark"}
              _hover={{
                color: "brand.light",
                bg: "gray.700",
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
