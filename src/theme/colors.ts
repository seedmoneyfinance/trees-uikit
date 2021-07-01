import { Colors } from "./types";

export const baseColors = {
  failure: "#F72B50",
  primary: "#33E7FF",
  primaryBright: "#33E7FF",
  primaryDark: "#33E7FF",
  secondary: "#FFFFFF",
  success: "#09cf60",
  warning: "#FFAB2D",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#2f4e55",
  backgroundDisabled: "#E9EAEB",
  contrast: "#499380",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputBorder: "#cccccc",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#FFFFFF",
  borderColor: "#E9EAEB",
  card: "#499380",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#FFFFFF",
  background: "#2f4e55",
  backgroundDisabled: "#3c3742",
  contrast: "#499380",
  invertedContrast: "#0a0e17",
  input: "#483f3b",
  inputBorder: "#cccccc",
  primaryDark: "#FFFFFF",
  tertiary: "#2d2f37",
  text: "#FFFFFF",
  textDisabled: "#666171",
  textSubtle: "#33E7FF",
  borderColor: "#524B63",
  card: "#499380",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #1f606f 0%, #164865 100%)",
  },
};
