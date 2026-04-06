import { Hanuman, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout";

const fontHanuman = Hanuman({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["khmer", "latin"],
  variable: "--font-hanuman",
});

const fontJetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata = {
  title: "Khmer GRS Academy",
  description: "Khmer GRS Academy",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e8edf5" },
    { media: "(prefers-color-scheme: dark)", color: "#244C8F" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fontHanuman.variable} ${fontJetbrains.variable}`}>
      <body className="font-body" suppressHydrationWarning>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
