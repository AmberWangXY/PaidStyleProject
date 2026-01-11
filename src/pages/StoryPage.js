import React from "react";
import { Box, Text, Heading, Image, Flex, Center } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import brandImage from "../assets/storypageIMG/storyBG.png";
import iconImage from "../assets/storypageIMG/logoIcon2.png";
import iconSequence from "../assets/homepageIMG/IconBySequence.svg";
import { ContentContainer } from "../components/Layout/ContentContainer";
import { HeroMarquee } from "../components/HomePage/marquee";

const StoryPage = () => {
  const { t } = useTranslation();

  return (
    <Box bg="brand.light">
      {/* Hero Section */}
      <Box position="relative" w="100vw">
        <Image
          src={brandImage}
          w={{ base: "auto", md: "100vw" }}
          h={{ base: "133vw", md: "auto" }}
          objectFit="cover"
          objectPosition="center"
        />

        {/* 文字覆盖在图片中间 */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          color="brand.main"
          fontWeight="black"
          fontSize={{ base: "3.6vw", md: "2.38vw" }}
          textAlign="center"
        >
          {t("story.point-of-origin")}
        </Box>
      </Box>

      <Box py={{ base: "15.2vw", md: "6.15vw" }}>
        <ContentContainer>
          <Center pb="4.5vw">
            <Image src={iconSequence} w={{ base: "full", md: "32vw" }} />
          </Center>
          <Flex
            w="100%"
            direction={{ base: "column", md: "row" }}
            align={{ base: "center", md: "flex-start" }}
            gap={{ base: "5.1vw", md: "0" }}
          >
            {/* 左侧标题 */}
            <Box flex="1" maxW={{ base: "100%", md: "28%" }}>
              <Heading
                display={{ base: "block", md: "none" }}
                whiteSpace="pre-line"
                fontWeight="semibold"
                fontSize="5.1vw"
                lineHeight="2.45"
              >
                {t("story.where-it-begin-line")}
              </Heading>

              {/* Desktop */}
              <Heading
                display={{ base: "none", md: "block" }}
                whiteSpace="pre-line"
                fontWeight="bold"
                fontSize="4.63vw"
                lineHeight="1.1"
              >
                {t("story.where-it-begin")}
              </Heading>
            </Box>

            {/* 右侧正文 */}
            <Box flex="2" maxW={{ base: "78%", md: "72%" }}>
              <Text
                whiteSpace="pre-line" // ✅ 支持多段落间的换行
              >
                {t("story.where-it-brgin-text")}
              </Text>
            </Box>
          </Flex>
        </ContentContainer>
      </Box>

      {/* Features Section */}

      {/* CTA Section */}
      <Box bg="brand.mid" py={{ base: "15.2vw", md: "6.15vw" }}>
        <ContentContainer>
          <Flex
            w={{ base: "100%", md: "58.5vw" }}
            align={"center"}
            direction={{ base: "column", md: "row" }}
            gap={{ base: "6vw", md: "8vw" }}
          >
            {/* 左侧标题 */}
            <Box
              w={{ base: "78%", md: "34vw" }}
              py={{ base: 0, md: 8 }}
              order={{ base: 2, md: 1 }}
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

            {/* 右侧logo */}
            <Box w={{ base: "32vw", md: "17vw" }} order={{ base: 1, md: 2 }}>
              <Image src={iconImage} alt="PaidStyle Logo Icon" w="100%" />
            </Box>
          </Flex>
        </ContentContainer>
      </Box>
      <Box py={{ base: "15.2vw", md: "6.15vw" }}>
        <ContentContainer>
          <Flex
            w="100%"
            direction={{ base: "column", md: "row" }}
            align={{ base: "center", md: "flex-end" }}
            justifyContent={{ md: "flex-end" }}
            gap={{ base: "4vw", md: "0" }}
          >
            <Box w={{ base: "78%", md: "47vw" }}>
              <Text
                mb={4}
                variant="heading-main"
                textAlign={{ base: "center", md: "left" }}
              >
                {t("story.Brand-Philosophy")}
              </Text>
              <Text>{t("story.Brand-Philosophy-text")}</Text>
            </Box>
          </Flex>
        </ContentContainer>
        <Box display={{ base: "block", md: "none" }} mt="14.2vw">
          <HeroMarquee text={t("story.marquee-text")} />
        </Box>
        <Box display={{ base: "none", md: "block" }} mt={"5.3vw"}>
          <Text
            fontSize={"5.5vw"}
            color="brand.main"
            fontWeight="semibold"
            lineHeight="1.2"
            textAlign={"center"}
          >
            {t("story.marquee-text")}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default StoryPage;
