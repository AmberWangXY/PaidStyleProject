import React from "react";
import { Box, Text, Heading, Image, Flex, Center } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import brandImage from "../assets/storypageIMG/storyBG.png";
import iconImage from "../assets/storypageIMG/logoIcon2.png";
import iconSequence from "../assets/homepageIMG/IconBySequence.svg";
import { ContentContainer } from "../components/Layout/ContentContainer";

const StoryPage = () => {
  const { t } = useTranslation();

  return (
    <Box bg="brand.light">
      {/* Hero Section */}
      <Box position="relative" w="100vw">
        <Image
          src={brandImage}
          w="100vw"
          h={{ base: "75vw", md: "auto" }}
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
          fontSize={{ base: "4.32vw", md: "2.38vw" }}
          textAlign="center"
        >
          {t("story.point-of-origin")}
        </Box>
      </Box>

      <Box py="6.5vw">
        <ContentContainer>
          <Center pb="4.5vw">
            <Image src={iconSequence} w={"32vw"} />
          </Center>
          <Flex
            w="100%"
            direction={{ base: "column", md: "row" }}
            align={{ base: "center", md: "flex-start" }}
            gap={{ base: "4vw", md: "0" }}
          >
            {/* 左侧标题 */}
            <Box flex="1" maxW={{ base: "100%", md: "28%" }}>
              <Heading
                whiteSpace="pre-line"
                fontWeight={"bold"}
                fontSize={{ md: "4.63vw", base: "7.8vw" }} //70px
                lineHeight={{ md: "1.1" }}
              >
                {t("story.where-it-begin")}
              </Heading>
            </Box>

            {/* 右侧正文 */}
            <Box flex="2" maxW={{ base: "100%", md: "72%" }}>
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
      <Box bg="brand.mid" py="6.5vw">
        <ContentContainer>
          <Flex
            w={{ base: "100%", md: "58.5vw" }}
            align={"center"}
            direction={{ base: "column", md: "row" }}
            gap={{ base: "6vw", md: "8vw" }}
          >
            {/* 左侧标题 */}
            <Box
              w={{ base: "100%", md: "34vw" }}
              py={{ base: 0, md: 8 }}
              gap={{ base: "4vw", md: "0" }}
            >
              <Heading mb={4}>{t("home.Brand-symbolism")}</Heading>
              <Text>{t("home.Brand-symbolism-text")}</Text>
            </Box>

            {/* 右侧正文 */}
            <Box w={{ base: "25vw", md: "17vw" }}>
              <Image src={iconImage} alt="PaidStyle Logo Icon" w="100%" />
            </Box>
          </Flex>
        </ContentContainer>
      </Box>
      <Box py="6.5vw">
        <ContentContainer>
          <Flex
            w="100%"
            direction={{ base: "column", md: "row" }}
            align={{ base: "center", md: "flex-end" }}
            justifyContent={{ md: "flex-end" }}
            gap={{ base: "4vw", md: "0" }}
          >
            <Box py={{ base: 0, md: 8 }} w={{ base: "100%", md: "47vw" }}>
              <Heading mb={4}>{t("story.Brand-Philosophy")}</Heading>
              <Text>{t("story.Brand-Philosophy-text")}</Text>
            </Box>
          </Flex>
        </ContentContainer>
      </Box>
    </Box>
  );
};

export default StoryPage;
