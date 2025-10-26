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
        Paidstyle — a quiet ritual of living.
      </Text>
    </Marquee>
  );
};
const HomePage = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: "Premium Quality",
      description: "Handpicked materials and craftsmanship",
    },
    {
      title: "Modern Design",
      description: "Contemporary styles for the modern lifestyle",
    },
    {
      title: "Sustainable",
      description: "Eco-friendly and ethical fashion choices",
    },
  ];

  return (
    <Box bg="brand.light">
      {/* Hero Section */}
      <Image
        w="100vw"
        src={brandImage}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
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
            More Products
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
                  Brand symbolism
                </Heading>
                <Text w={"34vw"}>
                  The hedgehog symbolizes：A hedgehog’s spines may be small, yet
                  it still uses them to guard its quiet persistence.
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
