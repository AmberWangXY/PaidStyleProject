// src/components/Layout/ContentGrid.js
import { Grid, GridItem, Box, Image, Text, useTheme } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { ContentContainer } from "../Layout/ContentContainer";
import brandImage1 from "../../assets/homepageIMG/candle00.jpg";
import brandImage2 from "../../assets/homepageIMG/candle02.jpg";
import brandImage3 from "../../assets/homepageIMG/candle11.jpg";
import brandImage4 from "../../assets/homepageIMG/candle12.jpg";
export const ContentGrid = () => {
  const theme = useTheme();

  const images = [brandImage1, brandImage2, brandImage3, brandImage4];

  return (
    <ContentContainer>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
        gap="1.58vw"
      >
        {/* 第1行第1列：图片 */}
        <GridItem>
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
        <GridItem>
          <Box
            bg="brand.main"
            color="white"
            fontWeight="bold"
            fontSize={"xl"}
            position="relative"
            w="100%"
            aspectRatio={1 / 1} // ✅ 维持正方形
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            Brand Section
          </Box>
        </GridItem>

        {/* 第1行第3列：图片 */}
        <GridItem>
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
        <GridItem>
          <Box
            bg="brand.main"
            color="brand.light"
            fontWeight="medium"
            fontSize={"lg"}
            position="relative"
            w="100%"
            aspectRatio={1 / 1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            Brand Section
          </Box>
        </GridItem>

        {/* 第2行第2列：图片 */}
        <GridItem>
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
        <GridItem>
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
