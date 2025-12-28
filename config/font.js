import {
  Poppins,
  Inter,
} from "next/font/google";


export const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

/* =========================
   FONT 4 – Inter
========================= */
export const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* =========================
   EXPORT ALL VARIABLES
========================= */
export const FONT_VARIABLES = 
`
  ${fontPoppins.variable}
  ${fontInter.variable}
`;
