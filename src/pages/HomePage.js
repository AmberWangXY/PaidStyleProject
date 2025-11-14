import React from "react";
import {
  Box,
  VStack,
  Text,
  Button,
  Heading,
  Image,
  Flex,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import brandImage from "../assets/homepageIMG/HomeBgPic.jpg";
import iconImage from "../assets/homepageIMG/logoIcon.svg";
import iconSequence from "../assets/homepageIMG/IconBySequence.svg";
import { ContentContainer } from "../components/Layout/ContentContainer";
import { ContentGrid } from "../components/HomePage/ContentGrid";

const HomePage = () => {
  const { t } = useTranslation();
  const HeroMarquee = () => {
    return (
      <Marquee
        speed={80}
        gradient={false}
        pauseOnHover={false}
        style={{ overflow: "hidden", whiteSpace: "nowrap" }}
      >
        <Text
          color="brand.main"
          fontWeight="semibold"
          fontSize={{ base: "5xl", md: "7xl" }}
          letterSpacing="wide"
          lineHeight="1.2"
          mx="40px" // 左右留白
        >
          {t("home.marquee")}
        </Text>
      </Marquee>
    );
  };

  return (
    <Box bg="brand.light">
      {/* Hero Section */}
      <Image
        src={brandImage}
        w="100vw"
        h={{ base: "75vw", md: "auto" }}
        objectFit="cover"
        objectPosition="center"
      />
      <Box py="6.5vw">
        <ContentGrid />
        <Box textAlign="center" mt={8}>
          <ChakraLink
            as={RouterLink}
            to="/collection"
            color="brand.main"
            fontSize="lg"
            fontWeight="medium"
            _hover={{ textDecoration: "none" }}
          >
            {t("home.more-product")}
          </ChakraLink>
        </Box>
        <Box pt="6.5vw">
          <HeroMarquee />
        </Box>
      </Box>

      {/* Features Section */}

      {/* CTA Section */}
      <Box bg="brand.mid" py="6.5vw">
        <ContentContainer>
          <VStack alignItems={"center"}>
            <Box>
              <Image src={iconImage} w={"12vw"} position={"center"} />
            </Box>
            <Flex w="full" py={8}>
              <Box flex="1">
                <Heading mb={4} color={"brand.main"}>
                  {t("home.Brand-symbolism")}
                </Heading>
                <Text w={{ md: "34vw", base: "full" }}>
                  {t("home.Brand-symbolism-text")}
                </Text>
              </Box>
            </Flex>
            <Flex justifyContent={"flex-end"} w="full">
              <Image src={iconSequence} w={"51vw"} />
            </Flex>
          </VStack>
        </ContentContainer>
      </Box>
    </Box>
  );
};

export default HomePage;
