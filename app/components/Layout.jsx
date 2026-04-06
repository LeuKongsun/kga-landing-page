'use client'
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";
import { ThemeProvider } from "next-themes";
import { HeroUIProvider } from "@heroui/react";

const Layout = ({ children }) => {
  return (
    <HeroUIProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        <div className="min-h-screen">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </HeroUIProvider>
  );
};

export default Layout;
