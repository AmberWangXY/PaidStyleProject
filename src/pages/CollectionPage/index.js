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
import { useTranslation, Trans } from "react-i18next";
import { ContentContainer } from "../../components/Layout/ContentContainer";
import img1 from "../../assets/homepageIMG/candle11.jpg";
import img2 from "../../assets/homepageIMG/candle11.jpg";
import img3 from "../../assets/homepageIMG/candle00.jpg";
import img4 from "../../assets/homepageIMG/candle02.jpg";
import img5 from "../../assets/homepageIMG/candle-collection01.jpg";
import img6 from "../../assets/homepageIMG/candle12.jpg";
const CollectionPage = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const currentImages = [img1, img2, img3, img4, img5, img6];
  // 子导航链接定义

  return (
    <>
      <Box bg="brand.mid" pt={{ base: "28vw", md: "13.8vw" }} pb="6.5vw">
        <ContentContainer>
          {/* 第一段：图片格子 */}
          <Box>
            <Grid
              templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
              gap={{ base: "1.88vw", md: "1vw" }}
            >
              {currentImages.map((img, idx) => (
                <Box key={idx} position="relative" aspectRatio={1}>
                  {idx == 1 ? (
                    <Box
                      bg="brand.nude"
                      w="100%"
                      p={{ base: "3vw", md: "2vw" }}
                      aspectRatio={1 / 1}
                      display="flex"
                      flexDirection="column"
                    >
                      <Text
                        variant={"Text-36px-heading"}
                        flex="1"
                        color="brand.dark"
                      >
                        {t("home.grid-content1")}
                      </Text>
                      <Flex
                        w="100%"
                        justify="flex-end"
                        align="center"
                        mt="auto"
                        pt="1vw"
                      >
                        <Text
                          textAlign="right"
                          fontWeight={"bold"}
                          color={"brand.dark"}
                        >
                          {t("home.grid-price")}
                        </Text>
                      </Flex>
                    </Box>
                  ) : (
                    <Image
                      src={img}
                      alt={`Moment ${idx}`}
                      objectFit="cover"
                      w="100%"
                      h="100%"
                    />
                  )}
                </Box>
              ))}
            </Grid>
          </Box>

          <Box>
            <Flex
              border="1px solid"
              borderColor="brand.dark"
              p={{ base: "5.1vw", md: "2vw" }}
              my={{ base: "7.82vw", md: "4vw" }}
              w="full"
              justify="flex-start"
            >
              <VStack align="flex-start" spacing={{ base: "5.1vw", md: "2vw" }}>
                <Text variant={"collection-heading-36px"} mb="1vw">
                  {t("collection.Signature-collection")}
                </Text>
                <Text whiteSpace="pre-line">
                  <Trans
                    i18nKey={t("collection.Signature-collection1")}
                    components={{ bold: <Text as="span" fontWeight="bold" /> }}
                  />
                </Text>
                <Text whiteSpace="pre-line">
                  <Trans
                    i18nKey={t("collection.Signature-collection2")}
                    components={{ bold: <Text as="span" fontWeight="bold" /> }}
                  />
                </Text>
                <Text whiteSpace="pre-line">
                  <Trans
                    i18nKey={t("collection.Signature-collection3")}
                    components={{ bold: <Text as="span" fontWeight="bold" /> }}
                  />
                </Text>
              </VStack>
            </Flex>
          </Box>
          {/* 第二段：图片格子 */}
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
            gap={{ base: "1.88vw", md: "1vw" }}
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
      <Box py={{ base: "15.2vw", md: "6.15vw" }} bg="brand.light">
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
                {t("collection.design-inspiration")}
              </Text>
              <Text>{t("collection.design-inspiration-text")}</Text>
            </Box>
          </Flex>
        </ContentContainer>
      </Box>
    </>
  );
};

export default CollectionPage;
