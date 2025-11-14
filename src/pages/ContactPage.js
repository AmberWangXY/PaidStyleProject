import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  VStack,
  Image,
  useToast,
  SimpleGrid,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import brandImage from "../assets/contactpageIMG/contactBG.png";
import leftImage from "../assets/contactpageIMG/@.png"; // ← 你可以替换成任意图片
import client1 from "../assets/contactpageIMG/client1.png";
import client2 from "../assets/contactpageIMG/client2.png";
import client3 from "../assets/contactpageIMG/client3.png";
import client4 from "../assets/contactpageIMG/client4.png";

import { ContentContainer } from "../components/Layout/ContentContainer";

const ContactPage = () => {
  const { t } = useTranslation();
  const toast = useToast();

  // 表单状态
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 监听输入
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 提交表单：调用后端 /api/contact
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Send failed");

      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      toast({
        title: "Failed to send",
        description: "Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box bg="brand.light" color="brand.dark">
      {/* 顶部背景图 */}
      <Image
        src={brandImage}
        w="100vw"
        h={{ base: "75vw", md: "auto" }} // ✅ 小屏 75vw，高度固定
        objectFit="cover" // ✅ 保持原比例，裁剪
        objectPosition="center" // ✅ 裁剪图片的最中间部分
      />

      {/* 主体部分 */}
      <ContentContainer py="6.5vw">
        <Flex
          justify="space-between"
          align="flex-start"
          gap="6vw"
          flexWrap={{ base: "wrap", md: "nowrap" }}
        >
          {/* 左侧图片 */}
          <Box flex="1" display="flex" justifyContent="flex-start">
            <Image
              src={leftImage}
              alt="Contact illustration"
              w="100%"
              maxW="15.6vw"
              borderRadius="lg"
              objectFit="cover"
            />
          </Box>

          {/* 右侧表单 */}
          <Box flex="1" textAlign="left">
            <Heading mb="6.6vw">{t("contact.welcome")}</Heading>

            <VStack
              as="form"
              align="stretch"
              spacing="1.9vw"
              onSubmit={handleSubmit}
            >
              {/* Name */}
              <Flex
                align="center"
                borderBottom="1px solid"
                borderColor="brand.dark"
              >
                <Text fontWeight="medium" w="8vw" whiteSpace="nowrap">
                  {t("contact.name")}
                </Text>
                <Input
                  variant="unstyled"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  focusBorderColor="none"
                  flex="1"
                />
              </Flex>

              {/* Email */}
              <Flex
                align="center"
                borderBottom="1px solid"
                borderColor="brand.dark"
              >
                <Text fontWeight="medium" w="8vw" whiteSpace="nowrap">
                  {t("contact.email")}
                </Text>
                <Input
                  variant="unstyled"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  focusBorderColor="none"
                  flex="1"
                />
              </Flex>

              {/* Phone */}
              <Flex
                align="center"
                borderBottom="1px solid"
                borderColor="brand.dark"
              >
                <Text fontWeight="medium" w="8vw" whiteSpace="nowrap">
                  {t("contact.phone")}
                </Text>
                <Input
                  variant="unstyled"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  focusBorderColor="none"
                  flex="1"
                />
              </Flex>

              {/* Message */}

              <Flex
                align="center"
                borderBottom="1px solid"
                borderColor="brand.dark"
              >
                <Text fontWeight="medium" w="8vw" whiteSpace="nowrap">
                  {t("contact.message")}
                </Text>
                <Input
                  variant="unstyled"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  focusBorderColor="none"
                  flex="1"
                />
              </Flex>

              {/* Submit */}
              <Button
                type="submit"
                mt="3.3vw"
                variant={"contact-submit"}
                textAlign="left"
                borderRadius="none"
                w="fit-content"
                px={0}
                h="auto"
                isLoading={isSubmitting}
                _hover={{
                  transform: "translateY(-2px)", // ✅ 轻微上浮
                  transition: "all 0.2s ease",
                  bg: "none",
                }}
              >
                {t("contact.submit")}
              </Button>
            </VStack>
          </Box>
        </Flex>
      </ContentContainer>

      {/* 客户展示部分 */}
      <Box py="6.5vw">
        <ContentContainer>
          <Heading mb="3vw" textAlign="left">
            {t("contact.typical-clients")}
          </Heading>

          <SimpleGrid columns={[1, 2, 4]} spacing="15px">
            {[client1, client2, client3, client4].map((img, index) => (
              <VStack key={index} spacing="16px">
                <Image src={img} alt={`Client ${index + 1}`} w="255px" />
                <Text
                  fontFamily="Montserrat, sans-serif"
                  lineHeight="1.5"
                  textAlign="center"
                >
                  {
                    [
                      t("contact.typical-clients1"),
                      t("contact.typical-clients2"),
                      t("contact.typical-clients3"),
                      t("contact.typical-clients4"),
                    ][index]
                  }
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </ContentContainer>
      </Box>
    </Box>
  );
};

export default ContactPage;
