// components/HeroMarquee.jsx
import React from "react";
import Marquee from "react-fast-marquee";
import { Text } from "@chakra-ui/react";

export const HeroMarquee = ({
  text,
  speed = 80,
  pauseOnHover = false,
  gradient = false,
  fontSize = { base: "5xl", md: "7xl" },
  color = "brand.main",
  fontWeight = "semibold",
  letterSpacing = "wide",
  lineHeight = "1.2",
  mx = "40px",
}) => {
  return (
    <Marquee
      speed={speed}
      gradient={gradient}
      pauseOnHover={pauseOnHover}
      style={{ overflow: "hidden", whiteSpace: "nowrap" }}
    >
      <Text
        color={color}
        fontWeight={fontWeight}
        fontSize={fontSize}
        letterSpacing={letterSpacing}
        lineHeight={lineHeight}
        mx={mx}
        whiteSpace="nowrap"
      >
        {text}
      </Text>
    </Marquee>
  );
};
