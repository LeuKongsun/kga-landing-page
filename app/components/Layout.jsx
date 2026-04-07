'use client'
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";
import { ThemeProvider } from "next-themes";
import { HeroUIProvider } from "@heroui/react";

import { LazyMotion, domAnimation } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <HeroUIProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        <LazyMotion features={domAnimation}>
          <div className="min-h-screen">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </LazyMotion>
      </ThemeProvider>
    </HeroUIProvider>
  );
};

export default Layout;
