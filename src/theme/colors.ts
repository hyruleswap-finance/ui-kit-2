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
  background: "#f7f2da",
  backgroundDisabled: "#ebeae8",
  contrast: "#262313",
  invertedContrast: "#FFFFFF",
  input: "#f5f3eb",
  inputSecondary: "#ede8cc",
  tertiary: "#f5f4f0",
  text: "#7a6d2a",
  textDisabled: "#c4c3bc",
  textSubtle: "#bab180",
  borderColor: "#ebeae8",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #fffbe6 0%, #fffcf0 100%)",
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
