import { extendTheme } from "@chakra-ui/react";

const pxToVw = (px) => `${(px / 1512) * 100}vw`;
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
  textStyles: {
    sm: { fontSize: pxToVw(16) },
    md: { fontSize: pxToVw(20) },
    lg: { fontSize: pxToVw(24) },
    xl: { fontSize: pxToVw(36) },
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
        "brand-outline": {
          border: "2px solid",
          borderColor: "brand.main",
          color: "brand.main",
          bg: "transparent",
          _hover: {
            bg: "brand.main",
            color: "white",
            transform: "translateY(-2px)",
            boxShadow: "lg",
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
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "bold",
        fontSize: pxToVw(36),
        lineHeight: "1.36",
        color: "brand.main",
      },
    },
    Text: {
      baseStyle: {
        fontFamily: "Montserrat, sans-serif",
        color: "brand.Dark",
        fontSize: pxToVw(24),
        lineHeight: "1.58",
      },
      variants: {
        "Text-footer": {
          fontFamily: "Montserrat, sans-serif",
          color: "brand.mid",
          fontSize: pxToVw(16),
          lineHeight: "1.25",
          fontWeight: "regular",
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
