"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Brand from "../Brand";
import NavLink from "../NavLink";
import ThemeSwitcher from "../ThemeSwitcher";
import { m, AnimatePresence } from "framer-motion";

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
    { 
      title: "សមិទ្ធផលរបស់យើង", 
      submenu: [
        { title: "KGA Toolbox", path: "/kga-toolbox", target: "_blank" },
        { title: "KGA Geodigitizer", path: "/geodigitizer", target: "_blank" },
      ]
    },
    // { title: "ឯកសារ", path: "http://doc.khmergrs.com" },
  ];

  const toggleMenu = () => {
    setState(!state);
  };

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "py-2" : "py-4 md:py-4"}`}>
      <nav
        className={`mx-auto max-w-screen-xl px-4 md:px-8 transition-all duration-300 ${
          scrolled || state ? "nav-blur bg-white/80 dark:bg-[#0B1929]/80 border border-brand-blue/10 dark:border-white/5 rounded-2xl mx-4" : "bg-white/40 dark:bg-black/20 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none"
        }`}
      >
        <div className="flex items-center justify-between py-3">
          <Brand />
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8 text-sm font-medium">
              {navigation.map((item, idx) => (
                <li key={idx} className="relative group">
                  {item.submenu ? (
                    <>
                      <button 
                        className="text-foreground/70 group-hover:text-brand-orange transition-colors duration-200 relative flex items-center gap-1"
                      >
                        {item.title}
                        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
                      </button>
                      
                      <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <div className="glass rounded-xl shadow-lg border border-border/50 py-2 w-48 flex flex-col bg-background/80 backdrop-blur-xl">
                          {item.submenu.map((subItem, subIdx) => (
                            <Link 
                              key={subIdx}
                              href={subItem.path}
                              target={subItem.target}
                              className="px-4 py-2 hover:bg-brand-orange/10 hover:text-brand-orange text-sm text-foreground/80 transition-colors"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link 
                      href={item.path} 
                      className="text-foreground/70 hover:text-brand-orange transition-colors duration-200 relative flex items-center group pointer-events-auto"
                      target={item.target}
                    >
                      {item.title}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-4 border-l pl-6 border-border">
              <ThemeSwitcher />
              <NavLink
                href="https://t.me/khmergrsacademy"
                className="rounded-xl px-6 py-2 bg-brand-orange text-white text-sm font-display font-700 hover:bg-brand-orange-hover transition-all hover:scale-105 active:scale-95 orange-glow"
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
              className="p-2 text-foreground/70 hover:text-brand-orange transition-colors"
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
            <m.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden pb-6"
            >
              <ul className="flex flex-col space-y-4 pt-4 border-t border-border">
                {navigation.map((item, idx) => (
                  <li key={idx} className="flex flex-col">
                    {item.submenu ? (
                      <>
                        <div className="text-lg font-medium text-foreground/80 pb-2">
                          {item.title}
                        </div>
                        <ul className="flex flex-col space-y-3 pl-4 border-l-2 border-border/50 ml-2">
                          {item.submenu.map((subItem, subIdx) => (
                            <li key={subIdx}>
                              <Link 
                                href={subItem.path} 
                                className="block text-base font-medium text-foreground/70 hover:text-brand-orange"
                                onClick={() => setState(false)}
                                target={subItem.target}
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link 
                        href={item.path} 
                        className="block text-lg font-medium text-foreground/80 hover:text-brand-orange"
                        onClick={() => setState(false)}
                        target={item.target}
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
                <li>
                  <NavLink
                    href="https://t.me/khmergrsacademy"
                    className="block w-full text-center rounded-xl py-3 bg-brand-orange text-white font-display font-700 orange-glow"
                    onClick={() => setState(false)}
                  >
                    ទំនាក់ទំនង
                  </NavLink>
                </li>
              </ul>
            </m.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
