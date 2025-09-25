import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const colors = {
  brand: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1", // indigo
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
  },
  accent: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4", // cyan
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
  },
  emphasis: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b", // amber
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
  },
};

const fonts = {
  heading: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
  body: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
};

export const theme = extendTheme({
  config,
  colors,
  fonts,
  components: {
    Button: {
      defaultProps: {
        colorScheme: "brand",
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: { base: "white", _dark: "gray.900" },
      },
    },
  },
});

export default theme;