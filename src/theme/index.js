import { extendTheme } from "@chakra-ui/react";

const pxToVw = (px) => `${(px / 1512) * 100}vw`;
//const pxToVwSm = (px) => `${(px / 832) * 100}vw`;
const pxToVwMobile = (px) => `${(px / 395) * 100}vw`;
// Brand Colors
const brandColors = {
  main: "#ED7D31", // Main brand color
  dark: "#654C45", // Dark color
  light: "#FBF7F1", // Light background
  mid: "#FAF1DD", // Mid tone
  nude: "#E9D7AF", // Nude accent
};

// Custom theme configuration
const theme = extendTheme({
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Inter, sans-serif",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  textStyles: {
    sm: { fontSize: pxToVw(16) }, //1.058vw
    md: { fontSize: pxToVw(20) }, //1.323vw
    lg: { fontSize: pxToVw(24) }, //1.587vw
    xl: { fontSize: pxToVw(36) }, //2.381vw
  },
  colors: {
    brand: brandColors,
    // Override Chakra's default colors with brand colors
    orange: {
      50: "#FEF7F0",
      100: "#FEE8D1",
      200: "#FDD0A3",
      300: "#FCB875",
      400: "#FBA047",
      500: brandColors.main, // #ED7D31
      600: "#D66B1F",
      700: "#BF590D",
      800: "#A84700",
      900: "#913500",
    },
    gray: {
      50: brandColors.light, // #FBF7F1
      100: brandColors.mid, // #FAF1DD
      200: brandColors.nude, // #E9D7AF
      300: "#D4C4A8",
      400: "#BFB19A",
      500: "#9E8B7A",
      600: "#7D6B5A",
      700: brandColors.dark, // #654C45
      800: "#4A3A35",
      900: "#2F2825",
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontFamily: "Montserrat, sans-serif",
      },
      variants: {
        brand: {
          bg: "brand.main",
          color: "white",
          _hover: {
            bg: "brand.dark",
            transform: "translateY(-2px)",
            boxShadow: "lg",
          },
          _active: {
            bg: "brand.dark",
            transform: "translateY(0)",
          },
        },
        "moment-button": {
          bg: "brand.light",
          color: "brand.dark",
          fontSize: { base: pxToVwMobile(10), md: pxToVw(16) },
          lineHeight: { base: "1.2", md: "1.25" },
          _hover: {
            transform: "scale(1.05)",
            transition: "all 0.2s ease",
          },
        },
        "brand-ghost": {
          color: "brand.main",
          bg: "transparent",
          _hover: {
            bg: "brand.light",
            color: "brand.dark",
          },
        },
        "contact-submit": {
          color: "brand.main",
          bg: "none",
          fontWeight: { md: "bold", base: "black" },
          fontSize: { base: pxToVwMobile(24), md: pxToVw(24) },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: "Montserrat, sans-serif",
        fontSize: { base: pxToVwMobile(20), md: pxToVw(36) },
        lineHeight: { md: "1.36", base: "2.45" },
        fontWeight: "semibold",
        color: "brand.main",
      },
      variants: {
        "heading-36px": {
          fontFamily: "Montserrat, sans-serif",
          fontSize: { base: pxToVwMobile(20), md: pxToVw(36) },
          lineHeight: "1.17",
          fontWeight: { base: "black", md: "bold" },
          color: "brand.dark",
        },
      },
    },
    Text: {
      baseStyle: {
        fontFamily: "Montserrat, sans-serif",
        color: "brand.Dark",
        fontSize: { base: pxToVwMobile(14), md: pxToVw(24) },
        lineHeight: { md: "1.58", base: "1.285" },
      },
      variants: {
        "text-collection": {
          fontSize: { base: pxToVwMobile(8), md: pxToVw(20) },
          lineHeight: { md: "1.2", base: "auto" },
        },
        "Text-footer": {
          fontFamily: "Montserrat, sans-serif",
          color: "brand.mid",
          fontSize: { base: pxToVwMobile(14), md: pxToVw(16) },
          lineHeight: { md: "1.25", base: "2.57" },

          fontWeight: "regular",
        },
        "Text-footer-heading": {
          fontFamily: "Montserrat, sans-serif",
          color: "brand.main",
          fontSize: { base: pxToVwMobile(14), md: pxToVw(20) },
          lineHeight: { md: "1.58", base: "3.5" },

          fontWeight: "semibold",
        },
        "Text-36px-heading": {
          fontFamily: "Montserrat, sans-serif",
          color: "brand.light",
          fontSize: { base: pxToVwMobile(18), md: pxToVw(36) },
          lineHeight: { base: "1.44", md: "1.36" },
          fontWeight: { md: "bold", base: "extrabold" },
        },
        "collection-heading-36px": {
          fontFamily: "Montserrat, sans-serif",
          fontSize: { base: pxToVwMobile(18), md: pxToVw(36) },
          lineHeight: { base: "1.44", md: "1.17" },
          fontWeight: { base: "extrabold", md: "black" },
          color: "brand.dark",
        },
        "heading-main": {
          fontFamily: "Montserrat, sans-serif",
          fontSize: { base: pxToVwMobile(20), md: pxToVw(36) },
          lineHeight: { md: "1.36", base: "2.45" },
          fontWeight: { md: "bold", base: "semibold" },
          color: "brand.main",
        },
        "contact-dark": {
          fontFamily: "Montserrat, sans-serif",
          fontSize: { base: pxToVwMobile(20), md: pxToVw(24) },
          lineHeight: { md: "1.5", base: "1.8" },
          textAlign: { base: "left", md: "center" },
          color: "brand.dark",
        },
      },
    },
    Link: {
      baseStyle: {
        fontFamily: "Montserrat, sans-serif",
      },
      variants: {
        "Link-footer": {
          fontFamily: "Montserrat, sans-serif",
          color: "brand.mid",
          lineHeight: { md: "1.36", base: "2.58" },
          fontSize: { base: pxToVwMobile(14), md: pxToVw(16) },
        },
        "Link-header": {
          fontFamily: "Montserrat, sans-serif",
          lineHeight: { base: "0.9", md: "auto" },
          fontSize: { base: pxToVwMobile(20), md: pxToVw(24) },
        },
      },
    },
    Container: {
      baseStyle: {
        maxW: "container.xl",
      },
    },
    Box: {
      baseStyle: {
        fontFamily: "Montserrat, sans-serif",
      },
      variants: {
        "brand-section-light": {
          bg: "brand.light",
        },
        "brand-section-mid": {
          bg: "brand.mid",
        },
        "brand-section-dark": {
          bg: "brand.dark",
        },
      },
    },
    Input: {
      variants: {
        "input-contact": {
          field: {
            bg: "transparent",
            border: "none",
            outline: "none",
            boxShadow: "none",
            px: 0,
            lineHeight: { base: "2", md: "1.5" },
            fontSize: { base: pxToVwMobile(20), md: pxToVw(24) },

            _placeholder: {
              color: "brand.dark",
              opacity: 1,
            },

            _focusVisible: {
              border: "none",
              boxShadow: "none",
              outline: "none",
            },
          },
        },
        brand: {
          field: {
            border: "2px solid",
            borderColor: "brand.nude",
            bg: "white",
            _hover: {
              borderColor: "brand.main",
            },
            _focus: {
              borderColor: "brand.main",
              boxShadow: "0 0 0 1px brand.main",
            },
          },
        },
      },
    },
    Textarea: {
      variants: {
        brand: {
          border: "2px solid",
          borderColor: "brand.nude",
          bg: "white",
          _hover: {
            borderColor: "brand.main",
          },
          _focus: {
            borderColor: "brand.main",
            boxShadow: "0 0 0 1px brand.main",
          },
        },
      },
    },
    Select: {
      variants: {
        brand: {
          field: {
            border: "2px solid",
            borderColor: "brand.nude",
            bg: "white",
            _hover: {
              borderColor: "brand.main",
            },
            _focus: {
              borderColor: "brand.main",
              boxShadow: "0 0 0 1px brand.main",
            },
          },
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "brand.light",
        color: "brand.dark",
        fontFamily: "Inter, sans-serif",
      },
      html: {
        scrollBehavior: "smooth",
      },
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export default theme;
