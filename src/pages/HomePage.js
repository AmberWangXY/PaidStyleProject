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
import { HeroMarquee } from "../components/HomePage/marquee";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Box bg="brand.light">
      {/* Hero Section */}
      <Image
        src={brandImage}
        w={{ base: "auto", md: "100vw" }}
        h={{ base: "133vw", md: "auto" }}
        objectFit="cover"
        objectPosition="center"
      />
      <Box pt={{ base: "13.7vw", md: "6.15vw" }}>
        <ContentGrid />
        <Box textAlign="center" mt={{ base: "10vw", md: "2.2vw" }}>
          <ChakraLink
            as={RouterLink}
            to="/collection"
            color="brand.main"
            variant={"Link-header"}
            fontWeight="medium"
            _hover={{ textDecoration: "none" }}
          >
            {t("home.more-product")}
          </ChakraLink>
        </Box>
        <Box
          pt={{ base: "15.2vw", md: "5.3vw" }}
          pb={{ base: "20.3vw", md: "5.3vw" }}
        >
          <HeroMarquee text={t("home.marquee")} />
        </Box>
      </Box>

      {/* Features Section */}

      {/* CTA Section */}
      <Box bg="brand.mid" py={{ base: "15.3vw", md: "6.5vw" }}>
        <ContentContainer>
          <VStack alignItems={"center"}>
            <Box>
              <Image
                src={iconImage}
                w={{ base: "32vw", md: "12vw" }}
                position={"center"}
              />
            </Box>
            <Flex w="full" py={8}>
              <Box
                flex="1"
                maxW={{ base: "65vw", md: "34vw" }}
                mx={{ base: "auto", md: "0" }}
              >
                <Text
                  mb={4}
                  variant="heading-main"
                  textAlign={{ base: "center", md: "left" }}
                >
                  {t("home.Brand-symbolism")}
                </Text>

                <Text>{t("home.Brand-symbolism-text")}</Text>
              </Box>
            </Flex>

            <Flex justifyContent={"flex-end"} w="full">
              <Image src={iconSequence} w={{ base: "100%", md: "51vw" }} />
            </Flex>
          </VStack>
        </ContentContainer>
      </Box>
    </Box>
  );
};

export default HomePage;
