import CourseAd from "../../components/ui/CourseAd/CourseAd";
import { arcgisProAdvanced as data } from "../../components/ui/CourseAd/courses";

export const metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: "/course-announcement/arcgis-pro-advanced" },
  openGraph: {
    title: data.meta.ogTitle,
    description: data.meta.description,
    url: "/course-announcement/arcgis-pro-advanced",
    images: [{ url: data.poster || "/gallery/6.jpg", alt: data.title }],
    locale: "km-KH",
    type: "website",
  },
};

export default function Page() {
  return <CourseAd data={data} />;
}
