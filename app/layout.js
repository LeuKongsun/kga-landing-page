import { Hanuman, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout";

const fontHanuman = Hanuman({
  weight: ["300", "400", "700", "900"],
  subsets: ["khmer", "latin"],
  variable: "--font-hanuman",
  display: "swap",
});

const fontJetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
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
    <html lang="km" suppressHydrationWarning className={`${fontHanuman.variable} ${fontJetbrains.variable}`}>
      <body className="font-body" suppressHydrationWarning>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
