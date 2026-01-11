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
        w={{ base: "auto", md: "100vw" }}
        h={{ base: "133vw", md: "auto" }}
        objectFit="cover"
        objectPosition="center"
      />

      {/* 主体部分 */}
      <ContentContainer py={{ base: "10.17vw", md: "6.15vw" }}>
        <Flex
          justify="space-between"
          align="flex-start"
          gap="6vw"
          flexWrap="nowrap"
          direction={{ base: "column", md: "row" }} // ✅ 小屏竖排，大屏横排
        >
          {/* 图片：小屏在最上面居中，大屏在左侧 */}
          <Box
            flex="1"
            display="flex"
            justifyContent={{ base: "center", md: "flex-start" }}
            w="100%"
          >
            <Image
              src={leftImage}
              alt="Contact illustration"
              w="100%"
              maxW={{ base: "22.4vw", md: "15.6vw" }}
              borderRadius="lg"
              objectFit="cover"
            />
          </Box>

          {/* 右侧：welcome + 表单；小屏整体居中，大屏左对齐 */}
          <Box flex="1" textAlign={{ base: "center", md: "left" }} w="100%">
            <Text variant={"heading-main"} mb={{ base: "10vw", md: "6.6vw" }}>
              {t("contact.welcome")}
            </Text>

            <VStack
              as="form"
              align="stretch"
              spacing={{ base: "8.65vw", md: "1.9vw" }}
              onSubmit={handleSubmit}
            >
              {/* Name */}
              <Flex
                align="center"
                borderBottom="1px solid"
                borderColor="brand.dark"
              >
                <Input
                  variant="input-contact"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  flex="1"
                  placeholder={t("contact.name")} // ✅ 改成 placeholder
                />
              </Flex>

              {/* Email */}
              <Flex
                align="center"
                borderBottom="1px solid"
                borderColor="brand.dark"
              >
                <Input
                  variant="input-contact"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  flex="1"
                  placeholder={t("contact.email")}
                />
              </Flex>

              {/* Phone */}
              <Flex
                align="center"
                borderBottom="1px solid"
                borderColor="brand.dark"
              >
                <Input
                  variant="input-contact"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  flex="1"
                  placeholder={t("contact.phone")}
                />
              </Flex>

              {/* Message */}
              <Flex
                align="center"
                borderBottom="1px solid"
                borderColor="brand.dark"
              >
                <Input
                  variant="input-contact"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  flex="1"
                  placeholder={t("contact.message")}
                />
              </Flex>

              {/* Submit */}
              <Button
                type="submit"
                mt={{ base: "4vw", md: "3.3vw" }}
                variant="contact-submit"
                borderRadius="none"
                w="fit-content"
                px={0}
                h="auto"
                isLoading={isSubmitting}
                _hover={{
                  transform: "translateY(-2px)",
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
      <Box py={{ base: "10.17vw", md: "6.15vw" }}>
        <ContentContainer pb={{ base: "10.17vw", md: "0" }}>
          <Text
            variant={"heading-main"}
            mb={{ base: "10vw", md: "3vw" }}
            textAlign={{ base: "center", md: "left" }}
          >
            {t("contact.typical-clients")}
          </Text>
          <SimpleGrid
            columns={{ base: 2, md: 4 }}
            spacing={{ base: "2vw", md: "1vw" }}
          >
            {[client1, client2, client3, client4].map((img, index) => (
              <VStack key={index} spacing={{ base: "3vw", md: "1vw" }}>
                <Image src={img} alt={`Client ${index + 1}`} w="255px" />
                <Text variant={"contact-dark"} w="full">
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
