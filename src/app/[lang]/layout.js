import { Inter } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import { ToasterWrapper } from "@/components/ToastWrapper";
import { ThemeProvider } from "next-themes";
import StoreProvider from "./StoreProvider";
import { i18n } from "../../../i18n-config";

const inter = Inter({ subsets: ["latin"] });
const dubai = localFont({
  src: [
    {
      path: "../../fonts/dubai/Dubai-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/dubai/Dubai-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/dubai/Dubai-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata = {
  title: "Rasi",
  description: "Next frontend",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({ children, params }) {
  return (
    <html dir={params.lang === "ar" ? "rtl" : "ltr"} lang={params.lang}>
      <body
        className={params.lang === "ar" ? dubai.className : inter.className}
      >
        <StoreProvider>
          <ThemeProvider attribute="class">
            {children}
            <ToasterWrapper />
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
