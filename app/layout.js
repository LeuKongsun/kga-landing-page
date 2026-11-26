import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Layout from "./components/Layout";

// Both fonts are self-hosted (app/fonts) so each is restricted to its own script via unicode-range.
// Khmer text → Battambang (Khmer subset only; static weights)
const fontKhmer = localFont({
  src: [
    { path: "./fonts/Battambang-300.woff2", weight: "300", style: "normal" },
    { path: "./fonts/Battambang-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Battambang-700.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Battambang-900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-khmer",
  display: "swap",
  declarations: [{ prop: "unicode-range", value: "U+1780-17FF, U+19E0-19FF, U+200C-200D, U+25CC" }],
});

// English/Latin text → Kantumruy Pro (Latin subset only; its bundled Khmer glyphs are not loaded)
const fontLatin = localFont({
  src: [
    {
      path: "./fonts/KantumruyPro-latin.woff2",
      weight: "100 700",
      style: "normal",
    },
  ],
  variable: "--font-latin",
  display: "swap",
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
  ],
});

const fontJetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.khmergrs.com"),
  title: {
    default: "Khmer GRS Academy | ជំនាញគ្រប់គ្រងទិន្នន័យភូមិសាស្រ្ត និងផែនទី",
    template: "%s | Khmer GRS Academy",
  },
  description: "Khmer GRS Academy គឺជាស្ថាប័នអប់រំផ្តោតទៅលើទីតាំងភូមិសាស្រ្ត (GIS) ដែលបានបង្កើតឡើងក្នុងឆ្នាំ២០១៨។ យើងផ្តល់ឲ្យនូវការបង្រៀនដែលយកចិត្តទុកដាក់ ប្រកបដោយគុណភាព និងទំនួលខុសត្រូវ។",
  keywords: ["Khmer GRS Academy", "GIS", "ArcGIS", "QGIS", "Map", "Cambodia", "Academy"],
  openGraph: {
    title: "Khmer GRS Academy",
    description: "សិក្សាលម្អិតទៅលើជំនាញគ្រប់គ្រងទិន្នន័យភូមិសាស្រ្ត និងផែនទី",
    url: "https://khmergrs.com",
    siteName: "Khmer GRS Academy",
    images: [
      {
        url: "/cta-image.jpg",
        width: 1200,
        height: 630,
        alt: "Khmer GRS Academy Training",
      },
    ],
    locale: "km-KH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khmer GRS Academy",
    description: "សិក្សាលម្អិតទៅលើជំនាញគ្រប់គ្រងទិន្នន័យភូមិសាស្រ្ត និងផែនទី",
    images: ["/cta-image.jpg"],
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e8edf5" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1929" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="km" suppressHydrationWarning className={`${fontKhmer.variable} ${fontLatin.variable} ${fontJetbrains.variable}`}>
      <body className="font-body" suppressHydrationWarning>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
