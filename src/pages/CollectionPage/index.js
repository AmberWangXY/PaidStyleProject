import React from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  Grid,
  Image,
  Link as ChakraLink,
  Heading,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { ContentContainer } from "../../components/Layout/ContentContainer";
import { ContentGrid } from "../../components/HomePage/ContentGrid";
import img1 from "../../assets/homepageIMG/candle00.jpg";
import img2 from "../../assets/homepageIMG/candle11.jpg";
import img3 from "../../assets/homepageIMG/candle00.jpg";
import img4 from "../../assets/homepageIMG/candle12.jpg";
import img5 from "../../assets/homepageIMG/candle00.jpg";
import img6 from "../../assets/homepageIMG/candle02.jpg";
const CollectionPage = () => {
  const location = useLocation();
  const currentImages = [img1, img2, img3, img4, img5, img6];
  // 子导航链接定义
  const subLinks = [
    { label: "Signature", path: "/collection" },
    { label: "Moment", path: "/collection/moment" },
    { label: "Customization", path: "/collection/customization" },
  ];

  return (
    <Box bg="brand.mid" pt={"14vw"} pb="6.5vw">
      <ContentContainer>
        {/* 第一段：图片格子 */}
        <Box>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
            gap="1.58vw"
          >
            {currentImages.map((img, idx) => (
              <Box key={idx} position="relative" aspectRatio={1}>
                <Image
                  src={img}
                  alt={`Moment ${idx}`}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
              </Box>
            ))}
          </Grid>
        </Box>

        <Box>
          <Flex
            border="1px solid"
            borderColor="brand.dark"
            p="2vw"
            my="4vw"
            w="full"
            justify="flex-start"
          >
            <VStack align="flex-start" spacing="2vw">
              <Heading
                fontSize="xl"
                color="brand.dark"
                fontWeight="black"
                mb="1vw"
              >
                Signature Collection
              </Heading>
              <Text fontSize="md" color="brand.dark">
                Mini Signature Candle 20g — USD $12.00 <br />
                Fragrance Set 30ml — USD $42.00 <br />
                Seasonal Signature Candle — USD $39.00
              </Text>
            </VStack>
          </Flex>
        </Box>
        {/* 第二段：图片格子 */}
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
          gap="1.58vw"
        >
          {currentImages.map((img, idx) => (
            <Box key={idx} position="relative" aspectRatio={1}>
              <Image
                src={img}
                alt={`Moment ${idx}`}
                objectFit="cover"
                w="100%"
                h="100%"
              />
            </Box>
          ))}
        </Grid>
      </ContentContainer>
    </Box>
  );
};

export default CollectionPage;
