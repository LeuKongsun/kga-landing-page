import CourseAd from "../../components/ui/CourseAd/CourseAd";
import { qgisBasic as data } from "../../components/ui/CourseAd/courses";

export const metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: "/course-announcement/qgis-basic" },
  openGraph: {
    title: data.meta.ogTitle,
    description: data.meta.description,
    url: "/course-announcement/qgis-basic",
    images: [{ url: data.poster || "/gallery/6.jpg", alt: data.title }],
    locale: "km-KH",
    type: "website",
  },
};

export default function Page() {
  return <CourseAd data={data} />;
}
