import dynamic from "next/dynamic";
import Hero from "./components/ui/Hero";
import GradientWrapper from "./components/GradientWrapper";

const LogoGrid = dynamic(() => import("./components/ui/LogoGrid"), { ssr: true });
const Courses = dynamic(() => import("./components/ui/Courses"), { ssr: true });
const CTA = dynamic(() => import("./components/ui/CTA"), { ssr: true });
const ToolKit = dynamic(() => import("./components/ui/ToolKit"), { ssr: true });
const Testimonials = dynamic(() => import("./components/ui/Testimonials"), { ssr: true });
const Products = dynamic(() => import("./components/ui/Products"), { ssr: true });
const BlogPreview = dynamic(() => import("./components/ui/Blog/BlogPreview"), { ssr: true });
const Contact = dynamic(() => import("./components/ui/Contact"), { ssr: true });

export default function Home() {
  return (
    <>
      <Hero />
      <LogoGrid />
      <GradientWrapper>
        <Courses />
        <CTA />
      </GradientWrapper>
      <ToolKit />
      <GradientWrapper>
        <Testimonials />
      </GradientWrapper>
      <Products />
      <BlogPreview />
      <Contact />
    </>
  );
}
