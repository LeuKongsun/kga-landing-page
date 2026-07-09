import Courses from "../components/ui/Courses";

export const metadata = {
  title: "Courses",
  alternates: {
    canonical: "/courses",
  },
};

export default function CoursesPage() {
  return (
    <div className="pt-24">
      <Courses />
    </div>
  );
}