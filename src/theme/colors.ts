import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#6bffb5",
  white: "#ffffff",
  primaryBright: "#54e89e",
  primaryDark: "#00a150",
  secondary: "#13261d",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f9faf9",
  backgroundDisabled: "#e9ebea",
  contrast: "#13261d",
  invertedContrast: "#FFFFFF",
  input: "#eaf4ef",
  inputSecondary: "#caecdb",
  tertiary: "#f0f5f2",
  text: "#2a7a52",
  textDisabled: "#bcc4c0",
  textSubtle: "#80ba9d",
  borderColor: "#e8ebe9",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #e6fff2 0%, #f0fff7 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#6bffb5",
  background: "#0b1711",
  backgroundDisabled: "#37423d",
  contrast: "#FFFFFF",
  invertedContrast: "#13261d",
  input: "#3e594c",
  inputSecondary: "#578c72",
  primaryDark: "#00a150",
  tertiary: "#36473e",
  text: "#e3fcf0",
  textDisabled: "#607068",
  textSubtle: "#8cd4b0",
  borderColor: "#4c6358",
  card: "#252b28",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #315c46 0%, #2a543f 100%)",
  },
};
