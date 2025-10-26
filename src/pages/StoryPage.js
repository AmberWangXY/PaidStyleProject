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
          w="100vw"
          src={brandImage}
          objectFit="cover"
          objectPosition="center"
          alt="Point of Origin"
        />

        {/* 文字覆盖在图片中间 */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          color="brand.main"
          fontWeight="black"
          fontSize="xl"
          textAlign="center"
        >
          Point of Origin
        </Box>
      </Box>

      <Box py="6.5vw">
        <ContentContainer>
          <Center pb="4.5vw">
            <Image src={iconSequence} w={"32vw"} />
          </Center>
          <Flex w="100%" align="flex-start">
            {/* 左侧标题 */}
            <Box flex="1" maxW="28%">
              <Text
                fontWeight="bold"
                fontSize="4.63vw" //70px
                lineHeight="1.1"
                color="brand.main"
                whiteSpace="pre-line" // ✅ 保留换行
              >
                {`Where\n\u00A0\u00A0\u00A0It All\nBegan`}
              </Text>
            </Box>

            {/* 右侧正文 */}
            <Box flex="2" maxW="72%">
              <Text
                whiteSpace="pre-line" // ✅ 支持多段落间的换行
              >
                {`I once kept two hedgehogs in LA. They seemed too guarded, too sharp. So, I released them into the Hollywood hills.        
Watching them disappear into the wild, I realized their spikes weren't a weapon—they were a protective shell, a gentle defense for surviving in a vast world.        
That's when it hit me: like those hedgehogs, people with sharp style use it as protection to stay true to themselves.         
Paidstyle exists to celebrate and safeguard this personal armor through our products.`}
              </Text>
            </Box>
          </Flex>
        </ContentContainer>
      </Box>

      {/* Features Section */}

      {/* CTA Section */}
      <Box bg="brand.mid" py="6.5vw">
        <ContentContainer>
          <Flex w="58.5vw" align="flex-start" gap={"8vw"}>
            {/* 左侧标题 */}
            <Box w="34vw" py={8}>
              <Heading mb={4}>Brand symbolism</Heading>
              <Text>
                The hedgehog symbolizes：A hedgehog’s spines may be small, yet
                it still uses them to guard its quiet persistence.
              </Text>
            </Box>

            {/* 右侧正文 */}
            <Box w={"17vw"}>
              <Image src={iconImage} alt="PaidStyle Logo Icon" w="100%" />
            </Box>
          </Flex>
        </ContentContainer>
      </Box>
      <Box py="6.5vw">
        <ContentContainer>
          <Flex justifyContent="flex-end" w="full">
            <Box py={8} w="47vw">
              <Heading mb={4}>Brand Philosophy</Heading>
              <Text>
                {`Paidstyle is a fragrance and lifestyle aesthetics brand rooted in the principles of sincerity, moderation, and warmth. It champions the philosophy of "paying for your style," transforming everyday details into a practice of personal elegance through materials and artisanal craftsmanship.`}
              </Text>
            </Box>
          </Flex>
        </ContentContainer>
      </Box>
    </Box>
  );
};

export default StoryPage;
