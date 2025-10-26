import React, { useState } from "react";
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

// 假设每个分类对应不同图片
import img1 from "../../assets/homepageIMG/candle00.jpg";
import img2 from "../../assets/homepageIMG/candle11.jpg";
import img3 from "../../assets/homepageIMG/candle00.jpg";
import img4 from "../../assets/homepageIMG/candle12.jpg";
import img5 from "../../assets/homepageIMG/candle00.jpg";
import img6 from "../../assets/homepageIMG/candle02.jpg";

const categories = [
  "Beachside Coconuts",
  "Peninsula Neroli",
  "Tea Plantation Osmanthus",
  "Snowfog Ice Pear",
  "Lovely Thorny Creatures",
  "White Garden Oolong",
  "Clliffside Magnolia",
];

// 每个分类对应不同图片集
const imageGroups = [
  [img1, img2, img3, img4, img5, img6],
  [img3, img4, img5, img6, img1, img2],
  [img2, img4, img5, img1, img6, img3],
  [img4, img5, img1, img2, img3, img6],
  [img6, img5, img4, img3, img2, img1],
  [img1, img3, img5, img2, img4, img6],
  [img2, img6, img1, img3, img4, img5],
];

export const CollectionMoment = () => {
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
  };

  const currentImages = imageGroups[page - 1] || [];
  return (
    <Box bg="brand.mid" pt={"14vw"} pb="6.5vw">
      <ContentContainer>
        {/* ✅ 顶部分类按钮 */}
        <Flex
          justify="space-between"
          w="100%"
          align="center"
          flexWrap="wrap"
          //gap="32px"
          mb="5vw"
        >
          {categories.map((cat, index) => (
            <Button
              key={cat}
              w="8.73vw"
              h="8.73vw"
              borderRadius="full"
              border={
                selectedCategory === cat
                  ? "1px solid var(--chakra-colors-brand-dark)"
                  : "none"
              }
              bg={"brand.light"}
              color={"brand.dark"}
              fontSize="1.2vw"
              whiteSpace={"normal"}
              fontWeight={selectedCategory === cat ? "bold" : "regular"}
              onClick={() => {
                setSelectedCategory(cat);
                setPage(index + 1);
              }}
              _hover={{
                transform: "scale(1.05)",
                transition: "all 0.2s ease",
              }}
            >
              {cat}
            </Button>
          ))}
        </Flex>

        {/* ✅ 图片 Grid */}
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

        {/* ✅ 分页控制 */}
        <Flex justify="center" align="center" gap="1.58vw" mt="4vw">
          <Text
            cursor={page > 1 ? "pointer" : "not-allowed"}
            color={page > 1 ? "brand.dark" : "gray.400"}
            onClick={handlePrev}
          >
            Previous
          </Text>

          <Text fontSize="md" color="brand.dark" fontWeight="bold">
            {page}
          </Text>

          <Text
            cursor={page < totalPages ? "pointer" : "not-allowed"}
            color={page < totalPages ? "brand.dark" : "gray.400"}
            onClick={handleNext}
          >
            Next
          </Text>
        </Flex>
      </ContentContainer>
    </Box>
  );
};

export default CollectionMoment;
