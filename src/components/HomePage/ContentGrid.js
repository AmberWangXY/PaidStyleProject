// src/components/Layout/ContentGrid.js
import { Grid, GridItem, Box, Image, Text, Flex } from "@chakra-ui/react";

import { useTranslation } from "react-i18next";
import { ContentContainer } from "../Layout/ContentContainer";
import brandImage1 from "../../assets/homepageIMG/candle00.jpg";
import brandImage2 from "../../assets/homepageIMG/candle02.jpg";
import brandImage3 from "../../assets/homepageIMG/candle11.jpg";
import brandImage4 from "../../assets/homepageIMG/candle12.jpg";
export const ContentGrid = () => {
  const { t } = useTranslation();
  const images = [brandImage1, brandImage2, brandImage3, brandImage4];

  return (
    <ContentContainer>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
        gap={{ base: "1.86vw", md: "0.99vw" }}
      >
        {/* 第1行第1列：图片 */}
        <GridItem order={{ base: 1, md: "initial" }}>
          <Box position="relative" w="100%" aspectRatio={1 / 1}>
            {" "}
            {/* ✅ 保持正方形 */}
            <Image
              src={images[0]}
              alt="Grid 1"
              objectFit="cover"
              position="absolute"
              inset="0"
              w="100%"
              h="100%"
            />
          </Box>
        </GridItem>

        {/* 第1行第2列：brand.main 背景 + 文字 */}
        <GridItem order={{ base: 2, md: "initial" }}>
          <Box
            bg="brand.main"
            w="100%"
            p={{ base: "3vw", md: "2vw" }}
            aspectRatio={1 / 1}
            display="flex"
            flexDirection="column"
          >
            <Text variant={"Text-36px-heading"} flex="1">
              {t("home.grid-content1")}
            </Text>
            <Flex
              w="100%"
              justify="space-between"
              align="center"
              mt="auto"
              pt="1vw"
            >
              <Text textAlign="left" color={"brand.light"}>
                150g
              </Text>
              <Text textAlign="right" fontWeight={"bold"} color={"brand.light"}>
                {t("home.grid-price")}
              </Text>
            </Flex>
          </Box>
        </GridItem>

        {/* 第1行第3列：图片 */}
        <GridItem order={{ base: 4, md: "initial" }}>
          <Box position="relative" w="100%" aspectRatio={1 / 1}>
            <Image
              src={images[1]}
              alt="Grid 3"
              objectFit="cover"
              position="absolute"
              inset="0"
              w="100%"
              h="100%"
            />
          </Box>
        </GridItem>

        {/* 第2行第1列：brand.main 背景 + 文字 */}
        <GridItem order={{ base: 3, md: "initial" }}>
          <Box
            bg="brand.main"
            position="relative"
            w="100%"
            p={{ base: "3vw", md: "2vw" }}
            aspectRatio={1 / 1}
            display="flex"
            alignItems={{ base: "center", md: "flex-start" }}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <Text
              color={"brand.light"}
              lineHeight={{ md: "1.2", base: "1.3" }}
              textAlign={{ base: "center", md: "left" }}
            >
              {t("home.grid-content-text")}
            </Text>
          </Box>
        </GridItem>

        {/* 第2行第2列：图片 */}
        <GridItem order={{ base: 5, md: "initial" }}>
          <Box position="relative" w="100%" aspectRatio={1 / 1}>
            <Image
              src={images[2]}
              alt="Grid 5"
              objectFit="cover"
              position="absolute"
              inset="0"
              w="100%"
              h="100%"
            />
          </Box>
        </GridItem>

        {/* 第2行第3列：图片 */}
        <GridItem order={{ base: 6, md: "initial" }}>
          <Box position="relative" w="100%" aspectRatio={1 / 1}>
            <Image
              src={images[3]}
              alt="Grid 6"
              objectFit="cover"
              position="absolute"
              inset="0"
              w="100%"
              h="100%"
            />
          </Box>
        </GridItem>
      </Grid>
    </ContentContainer>
  );
};
