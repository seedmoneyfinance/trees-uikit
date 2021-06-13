import { Colors } from "./types";

export const baseColors = {
  failure: "#F72B50",
  primary: "#09cf60",
  primaryBright: "#09cf60",
  primaryDark: "#09cf60",
  secondary: "#09cf60",
  success: "#09cf60",
  warning: "#FFAB2D",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#0f0e2e",
  backgroundDisabled: "#E9EAEB",
  contrast: "#000022",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputBorder: "#cccccc",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#09cf60",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#09cf60",
  background: "#0f0e2e",
  backgroundDisabled: "#3c3742",
  contrast: "#000022",
  invertedContrast: "#0a0e17",
  input: "#483f3b",
  inputBorder: "#cccccc",
  primaryDark: "#09cf60",
  tertiary: "#2d2f37",
  text: "#FFFFFF",
  textDisabled: "#666171",
  textSubtle: "#09cf60",
  borderColor: "#524B63",
  card: "#121827",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #1f606f 0%, #164865 100%)",
  },
};
