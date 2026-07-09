import Testimonials from "../components/ui/Testimonials";

export const metadata = {
  title: "Our Students",
  alternates: {
    canonical: "/our-student",
  },
};

export default function OurStudentPage() {
  return (
    <div className="pt-24">
      <Testimonials />
    </div>
  );
}