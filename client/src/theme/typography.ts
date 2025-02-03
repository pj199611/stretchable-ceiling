import { Open_Sans } from "next/font/google";
export const openSans = Open_Sans({ subsets: ["latin"] });

export const fontSize = 14;

export const typography = {
  fontSize,
  htmlFontSize: 16,
  fontFamily: openSans.style.fontFamily,
  body1: { fontSize },
  body2: { fontSize },
};
