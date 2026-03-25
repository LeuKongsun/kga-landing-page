"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Brand from "../Brand";
import NavLink from "../NavLink";
import ThemeSwitcher from "../ThemeSwitcher";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [state, setState] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { title: "មុខវិជ្ជា", path: "#courses" },
    { title: "អំពីយើង", path: "#toolkit" },
    { title: "សិស្សរបស់យើង", path: "#testimonials" },
    // { title: "ឯកសារ", path: "http://doc.khmergrs.com" },
  ];

  const toggleMenu = () => {
    setState(!state);
  };

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <nav
        className={`mx-auto max-w-screen-xl px-4 md:px-8 transition-all duration-300 ${
          scrolled || state ? "glass rounded-2xl mx-4" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between py-3">
          <Brand />
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8 text-sm font-medium">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={item.path} 
                    className="text-foreground/70 hover:text-primary transition-colors duration-200 relative group"
                  >
                    {item.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-4 border-l pl-6 border-border">
              <ThemeSwitcher />
              <NavLink
                href="https://t.me/khmergrsacademy"
                className="rounded-full px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-md hover:shadow-primary/20"
              >
                ទំនាក់ទំនង
              </NavLink>
            </div>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <ThemeSwitcher />
            <button
              role="button"
              aria-label="Open the menu"
              className="p-2 text-foreground/70 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              {state ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        <AnimatePresence>
          {state && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden pb-6"
            >
              <ul className="flex flex-col space-y-4 pt-4 border-t border-border">
                {navigation.map((item, idx) => (
                  <li key={idx}>
                    <Link 
                      href={item.path} 
                      className="block text-lg font-medium text-foreground/80 hover:text-primary"
                      onClick={() => setState(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <NavLink
                    href="https://t.me/khmergrsacademy"
                    className="block w-full text-center rounded-xl py-3 bg-primary text-primary-foreground shadow-lg"
                    onClick={() => setState(false)}
                  >
                    ទំនាក់ទំនង
                  </NavLink>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
