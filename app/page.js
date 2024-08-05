import Head from "next/head";
import Hero from "./components/ui/Hero";
import LogoGrid from "./components/ui/LogoGrid";
import GradientWrapper from "./components/GradientWrapper";
import CTA from "./components/ui/CTA";
import ToolKit from "./components/ui/ToolKit";
import Testimonials from "./components/ui/Testimonials";
import FooterCTA from "./components/ui/FooterCTA";
import Courses from "./components/ui/Courses";
import Contact from "./components/ui/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
      </Head>
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
      <Contact />
      <FooterCTA />
    </>
  );
}
