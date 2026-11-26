import CourseAd from "../../components/ui/CourseAd/CourseAd";
import { arcgisProBasic as data } from "../../components/ui/CourseAd/courses";

export const metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: "/course-announcement/arcgis-pro-basic" },
  openGraph: {
    title: data.meta.ogTitle,
    description: data.meta.description,
    url: "/course-announcement/arcgis-pro-basic",
    images: [{ url: data.ogImage || data.poster || "/gallery/6.jpg", alt: data.title }],
    locale: "km-KH",
    type: "website",
  },
};

export default function Page() {
  return <CourseAd data={data} />;
}
