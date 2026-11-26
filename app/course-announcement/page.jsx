import CourseCatalog from "../components/ui/CourseAd/CourseCatalog";

export const metadata = {
  title: "វគ្គសិក្សា GIS | ArcGIS Pro និង QGIS",
  description: "ជ្រើសរើសវគ្គសិក្សា GIS ពី Khmer GRS Academy៖ ArcGIS Pro Basic, ArcGIS Pro Advanced និង QGIS Basic។ ថ្នាក់ផ្ទាល់ ឬអនឡាញ។",
  alternates: { canonical: "/course-announcement" },
  openGraph: {
    title: "វគ្គសិក្សា GIS | Khmer GRS Academy",
    description: "ArcGIS Pro Basic, ArcGIS Pro Advanced និង QGIS Basic។ ថ្នាក់ផ្ទាល់ ឬអនឡាញ។",
    url: "/course-announcement",
    images: [{ url: "/posters/arcgis-pro-2026.png", alt: "វគ្គសិក្សា GIS" }],
  },
};

export default function Page() {
  return <CourseCatalog />;
}
