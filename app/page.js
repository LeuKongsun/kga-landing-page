import dynamic from "next/dynamic";
import Hero from "./components/ui/Hero";
import GradientWrapper from "./components/GradientWrapper";

const Courses = dynamic(() => import("./components/ui/Courses"), { ssr: true });
const CTA = dynamic(() => import("./components/ui/CTA"), { ssr: true });
const Testimonials = dynamic(() => import("./components/ui/Testimonials"), { ssr: true });
const Products = dynamic(() => import("./components/ui/Products"), { ssr: true });
const ProjectPreview = dynamic(() => import("./components/ui/Project/ProjectPreview"), { ssr: true });
const BlogPreview = dynamic(() => import("./components/ui/Blog/BlogPreview"), { ssr: true });
const OpenKGAPreview = dynamic(() => import("./components/ui/OpenKGA/OpenKGAPreview"), { ssr: true });
const Contact = dynamic(() => import("./components/ui/Contact"), { ssr: true });

export default function Home() {
  return (
    <>
      <Hero />
      <GradientWrapper>
        <Courses />
        <CTA />
      </GradientWrapper>
      <Products />
      <ProjectPreview />
      <BlogPreview />
      <OpenKGAPreview />
      <GradientWrapper>
        <Testimonials />
      </GradientWrapper>
      <Contact />
    </>
  );
}
