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
import img1 from "../../assets/homepageIMG/candle00.jpg";
import img2 from "../../assets/homepageIMG/candle11.jpg";
import img3 from "../../assets/homepageIMG/candle00.jpg";
import img4 from "../../assets/homepageIMG/candle12.jpg";
import img5 from "../../assets/homepageIMG/candle00.jpg";
import img6 from "../../assets/homepageIMG/candle02.jpg";
const CollectionPage = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const currentImages = [img1, img2, img3, img4, img5, img6];
  // 子导航链接定义

  return (
    <Box bg="brand.mid" pt={{ base: "20vw", md: "14vw" }} pb="6.5vw">
      <ContentContainer>
        {/* 第一段：图片格子 */}
        <Box>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
            gap="1.58vw"
          >
            {currentImages.map((img, idx) => (
              <Box key={idx} position="relative" aspectRatio={1}>
                {idx == 1 ? (
                  <Box
                    bg="brand.nude"
                    w="100%"
                    p="2vw"
                    aspectRatio={1 / 1}
                    display="flex"
                    flexDirection="column"
                  >
                    <Text
                      variant={"Text-36px-heading"}
                      flex="1"
                      color="brand.dark"
                      fontWeight={"black"}
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
            p="2vw"
            my="4vw"
            w="full"
            justify="flex-start"
          >
            <VStack align="flex-start" spacing="2vw">
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
