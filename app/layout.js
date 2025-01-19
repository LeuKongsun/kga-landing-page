import { Noto_Sans_Khmer } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout";
import { ThemeProvider } from "next-themes";

const inter = Noto_Sans_Khmer({ subsets: ["khmer"], weight: "400" });

export const metadata = {
  title: "Khmer GRS Academy",
  description: "Khmer GRS Academy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
