import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Grid,
  Image,
  Button,
  Text,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { ContentContainer } from "../../components/Layout/ContentContainer";
import { useTranslation, Trans } from "react-i18next";
// 假设每个分类对应不同图片
import img1_1 from "../../assets/momentpageIMG/moment1/1.png";
import img1_3 from "../../assets/momentpageIMG/moment1/3.png";
import img1_4 from "../../assets/momentpageIMG/moment1/4.png";
import img1_5 from "../../assets/momentpageIMG/moment1/5.png";
import img1_6 from "../../assets/momentpageIMG/moment1/6.png";

import img2_2 from "../../assets/momentpageIMG/moment2/2.png";
import img2_3 from "../../assets/momentpageIMG/moment2/3.png";
import img2_4 from "../../assets/momentpageIMG/moment2/4.png";
import img2_5 from "../../assets/momentpageIMG/moment2/5.png";
import img2_6 from "../../assets/momentpageIMG/moment2/6.png";

import img3_1 from "../../assets/momentpageIMG/moment3/1.png";
import img3_2 from "../../assets/momentpageIMG/moment3/2.png";
import img3_4 from "../../assets/momentpageIMG/moment3/4.png";
import img3_5 from "../../assets/momentpageIMG/moment3/5.png";
import img3_6 from "../../assets/momentpageIMG/moment3/6.png";

import img4_2 from "../../assets/momentpageIMG/moment4/2.png";
import img4_3 from "../../assets/momentpageIMG/moment4/3.png";
import img4_4 from "../../assets/momentpageIMG/moment4/4.png";
import img4_5 from "../../assets/momentpageIMG/moment4/5.png";
import img4_6 from "../../assets/momentpageIMG/moment4/6.png";

import img5_1 from "../../assets/momentpageIMG/moment5/1.png";
import img5_3 from "../../assets/momentpageIMG/moment5/3.png";
import img5_4 from "../../assets/momentpageIMG/moment5/4.png";
import img5_5 from "../../assets/momentpageIMG/moment5/5.png";
import img5_6 from "../../assets/momentpageIMG/moment5/6.png";

import img6_1 from "../../assets/momentpageIMG/moment6/1.png";
import img6_3 from "../../assets/momentpageIMG/moment6/3.png";
import img6_2 from "../../assets/momentpageIMG/moment6/2.png";
import img6_5 from "../../assets/momentpageIMG/moment6/5.png";
import img6_6 from "../../assets/momentpageIMG/moment6/6.png";

import img7_1 from "../../assets/momentpageIMG/moment7/1.png";
import img7_3 from "../../assets/momentpageIMG/moment7/3.png";
import img7_4 from "../../assets/momentpageIMG/moment7/4.png";
import img7_5 from "../../assets/momentpageIMG/moment7/5.png";
import img7_6 from "../../assets/momentpageIMG/moment7/6.png";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

// 每个分类对应不同图片集
const imageGroups = [
  [img1_1, null, img1_3, img1_4, img1_5, img1_6],
  [null, img2_2, img2_3, img2_4, img2_5, img2_6],
  [null, img4_2, img4_3, img4_4, img4_5, img4_6],
  [img3_1, img3_2, null, img3_4, img3_5, img3_6],
  [img5_1, null, img5_3, img5_4, img5_5, img5_6],
  [img6_1, img6_2, img6_3, null, img6_5, img6_6],
  [img7_1, null, img7_3, img7_4, img7_5, img7_6],
];

export const CollectionMoment = () => {
  const { t, i18n } = useTranslation();
  const categories = [
    t("collection.moment1"),
    t("collection.moment2"),
    t("collection.moment4"),
    t("collection.moment3"),
    t("collection.moment5"),
    t("collection.moment6"),
    t("collection.moment7"),
  ];
  const [page, setPage] = useState(1);
  const totalPages = 7;
  const [selectedCategory, setSelectedCategory] = useState(
    categories[page - 1]
  );
  const handlePrev = () => {
    if (page > 1) {
      setSelectedCategory(categories[page - 2]);
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
      setSelectedCategory(categories[page]);
    }
    console.log(categories);
  };

  const currentImages = imageGroups[page - 1] || [];
  useEffect(() => {
    // 当语言变化时，更新选中分类的文字
    setSelectedCategory(categories[page - 1]);
  }, [i18n.language, categories, page]);

  return (
    <>
      <Box bg="brand.mid" pt={{ base: "23vw", md: "14vw" }} pb="6.5vw">
        <ContentContainer>
          {/* ✅ 顶部分类按钮 */}
          <Flex
            justify={{ base: "flex-start", md: "space-between" }}
            w="100%"
            align="center"
            flexWrap="wrap"
            mb={{ base: "7.6vw", md: "2.2vw" }}
            rowGap={{ base: "3vw", md: "0" }}
            columnGap={{ base: "1.5vw", md: "0" }}
          >
            {categories.map((cat, index) => (
              <Button
                key={cat}
                w={{ base: "auto", md: "8.73vw" }} // ✅ 小屏自适应宽度
                h={{ base: "auto", md: "8.73vw" }} // ✅ 小屏高度由 padding 决定
                px={{ base: "2.3vw", md: "0" }} // ✅ 小屏 padding
                py={{ base: "2.3vw", md: "0" }}
                borderRadius={{ base: "5vw", md: "full" }}
                border={
                  selectedCategory === cat
                    ? "1px solid var(--chakra-colors-brand-dark)"
                    : "none"
                }
                variant={"moment-button"}
                whiteSpace={{ base: "nowarp", md: "normal" }}
                fontWeight={selectedCategory === cat ? "bold" : "regular"}
                onClick={() => {
                  setSelectedCategory(cat);
                  setPage(index + 1);
                }}
              >
                {cat}
              </Button>
            ))}
          </Flex>

          {/* ✅ 图片 Grid */}
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
            gap={{ base: "2vw", md: "1vw" }}
          >
            {currentImages.map((img, idx) => (
              <Box key={idx} position="relative" aspectRatio={1}>
                {img ? (
                  <Image
                    src={img}
                    alt={`Moment ${idx}`}
                    objectFit="cover"
                    w="100%"
                    h="100%"
                  />
                ) : (
                  <Box
                    bg="brand.nude"
                    w="100%"
                    p={{ base: "3vw", md: "1.65vw" }}
                    aspectRatio={1 / 1}
                    display="flex"
                    flexDirection="column"
                  >
                    <Text
                      variant={"Text-36px-heading"}
                      flex="1"
                      color="brand.dark"
                      fontWeight={"black"}
                      lineHeight={{ base: "1.44", md: "1.16" }}
                    >
                      {selectedCategory}
                    </Text>
                    <Flex
                      w="100%"
                      align="flex-start"
                      direction={"column"}
                      justify={"flex-end"}
                      gap={{ base: "2vw", md: "1.5vw" }}
                    >
                      <Text whiteSpace="pre-line" variant={"text-collection"}>
                        <Trans
                          i18nKey={t("collection.moment-collection1")}
                          components={{
                            bold: (
                              <Text
                                as="span"
                                fontWeight="extrabold"
                                variant={"text-collection"}
                              />
                            ),
                          }}
                        />
                      </Text>

                      <Text whiteSpace="pre-line" variant={"text-collection"}>
                        <Trans
                          i18nKey={t("collection.moment-collection2")}
                          components={{
                            bold: (
                              <Text
                                as="span"
                                fontWeight="extrabold"
                                variant={"text-collection"}
                              />
                            ),
                          }}
                        />
                      </Text>

                      <Text whiteSpace="pre-line" variant={"text-collection"}>
                        <Trans
                          i18nKey={t("collection.moment-collection3")}
                          components={{
                            bold: (
                              <Text
                                as="span"
                                fontWeight="extrabold"
                                variant={"text-collection"}
                              />
                            ),
                          }}
                        />
                      </Text>
                    </Flex>
                  </Box>
                )}
              </Box>
            ))}
          </Grid>

          {/* ✅ 分页控制 */}
          <Flex
            justify="center"
            align="center"
            mt={{ base: "7.6vw", md: "2.3vw" }}
            w="full"
          >
            <Text
              cursor={page > 1 ? "pointer" : "not-allowed"}
              color={page > 1 ? "brand.dark" : "gray.400"}
              onClick={handlePrev}
              w="33.3%"
              textAlign={{ base: "left", md: "center" }}
            >
              {t("collection.button-previous")}
            </Text>
            <Flex justify="center" align="center" gap={2} w="33.3%">
              <LuChevronLeft
                size="1.2em"
                style={{
                  cursor: page > 1 ? "pointer" : "not-allowed",
                  color: page > 1 ? "#654C45" : "#CBD5E0", // brand.dark / gray.400
                }}
                onClick={page > 1 ? handlePrev : undefined}
              />

              <Text fontSize="md" color="brand.dark" fontWeight="bold">
                {page}
              </Text>
              <LuChevronRight
                size="1.2em"
                style={{
                  cursor: page < totalPages ? "pointer" : "not-allowed",
                  color: page < totalPages ? "#654C45" : "#CBD5E0",
                }}
                onClick={page < totalPages ? handleNext : undefined}
              />
            </Flex>
            <Text
              cursor={page < totalPages ? "pointer" : "not-allowed"}
              color={page < totalPages ? "brand.dark" : "gray.400"}
              onClick={handleNext}
              textAlign={{ base: "right", md: "center" }}
              w="33.3%"
            >
              {t("collection.button-next")}
            </Text>
          </Flex>
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

export default CollectionMoment;
