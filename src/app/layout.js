import { Inter } from "next/font/google";
import "./globals.css";
import { ToasterWrapper } from "@/components/ToastWrapper";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rasi",
  description: "Next frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          {children}
          <ToasterWrapper />
        </ThemeProvider>
      </body>
    </html>
  );
}
