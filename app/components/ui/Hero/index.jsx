"use client";
import { m } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import NavLink from "../NavLink";
import { ArrowRight, Play } from "lucide-react";
import { 
  Modal, 
  ModalContent, 
  ModalBody, 
  useDisclosure 
} from "@heroui/react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    setIsMobile(mediaQuery.matches);

    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return isMobile;
};

const Hero = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedImg, setSelectedImg] = useState(null);
  const isMobile = useIsMobile();

  const handleImgClick = (src) => {
    setSelectedImg(src);
    onOpen();
  };

  return (
    <section className="relative w-full pt-32 pb-20 overflow-hidden hero-gradient grid-bg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 hidden lg:block">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-blue/20 blur-[80px] md:blur-[120px] md:animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-orange/10 blur-[80px] md:blur-[120px] md:animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="custom-screen relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        <m.div
          initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={isMobile ? "text-center" : ""}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-800 leading-[1.8] md:leading-[2] mb-8 text-brand-text dark:text-white">
            <span className="block">សិក្សាលម្អិតទៅលើ</span>
            <span className="text-brand-orange italic block py-4">ជំនាញគ្រប់គ្រងទិន្នន័យ</span>
            <span className="block">ភូមិសាស្រ្ត និងផែនទី</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-text/60 dark:text-white/60 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-body text-center lg:text-left">
            យើងផ្តល់ឲ្យនូវការបង្រៀនដែលយកចិត្តទុកដាក់ ប្រកបដោយគុណភាព និងទំនួលខុសត្រូវ។
            ការពេញចិត្តរបស់អ្នក គឺជាតម្លៃរបស់យើងខ្ញុំ។
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-5">
            <NavLink
              href="https://t.me/khmergrsacademy"
              className="flex items-center gap-2 rounded-xl px-7 py-3.5 bg-brand-orange text-white hover:bg-brand-orange-hover transition-all hover:scale-105 active:scale-95 font-display font-700 orange-glow group"
            >
              ចុះឈ្មោះឥលូវនេះ
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </NavLink>
            <NavLink
              href="https://www.youtube.com/@Khmergisacademy"
              className="flex items-center gap-2 rounded-xl px-7 py-3.5 border-2 border-brand-blue/25 dark:border-white/25 text-brand-text dark:text-white font-display font-700 hover:bg-brand-blue/10 dark:hover:bg-white/10 transition-all hover:scale-105 active:scale-95 group"
              scroll={false}
            >
              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 text-white fill-current ml-0.5" />
              </div>
              YouTube
            </NavLink>
          </div>
        </m.div>

        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-brand-blue/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm lg:backdrop-blur-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/5 to-brand-orange/5 blur-3xl opacity-50"></div>
          <HorizontalSlidingShowcase onImgClick={handleImgClick} isMobile={isMobile} />
        </m.div>
      </div>

      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        size="4xl"
        backdrop="blur"
        classNames={{
          base: "bg-transparent shadow-none",
          closeButton: "hover:bg-white/10 active:bg-white/20 text-white",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <ModalBody className="p-2 md:p-4 flex items-center justify-center">
              {selectedImg && (
                <m.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative w-full aspect-video max-h-[85vh] flex items-center justify-center"
                >
                  <Image
                    src={selectedImg}
                    alt="Gallery Image Full"
                    fill
                    className="object-contain rounded-xl shadow-2xl border border-white/10"
                    sizes="90vw"
                    priority
                  />
                </m.div>
              )}
            </ModalBody>
          )}
        </ModalContent>
      </Modal>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-light dark:from-[#0B1929] to-transparent pointer-events-none"></div>
    </section>
  );
};

const images = [
  "/gallery/1.jpg", "/gallery/2.jpg", "/gallery/3.jpg", "/gallery/4.jpg",
  "/gallery/5.jpg", "/gallery/6.jpg", "/gallery/7.jpg", "/gallery/8.jpg",
  "/gallery/9.jpg", "/gallery/10.jpg", "/gallery/11.jpg", "/gallery/12.jpg",
  "/gallery/13.jpg", "/gallery/14.jpg", "/gallery/15.jpg", "/gallery/16.jpg",
];

const HorizontalSlidingShowcase = ({ onImgClick, isMobile }) => {
  const [mounted, setMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-full w-full" />;

  const displayImages = isMobile ? images : [...images, ...images];

  return (
    <div 
      className={`relative w-full h-full flex items-center ${isMobile ? "overflow-x-auto scrollbar-hide snap-x pointer-events-auto" : "overflow-hidden"}`}
      onMouseEnter={() => !isMobile && setIsPaused(true)}
      onMouseLeave={() => !isMobile && setIsPaused(false)}
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      <m.div
        animate={isMobile ? { x: 0 } : {
          x: isPaused ? undefined : ["0%", "-50%"],
        }}
        transition={isMobile ? { duration: 0 } : {
          duration: 60,
          repeat: Infinity,
          ease: "linear",
          x: {
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }
        }}
        className="flex gap-4 px-4 h-full items-center"
        style={{ width: isMobile ? "auto" : "fit-content" }}
      >
        {displayImages.map((src, i) => (
          <m.div
            key={i}
            whileHover={isMobile ? undefined : { scale: 1.02 }}
            onClick={() => onImgClick(src)}
            className="relative w-[260px] h-[330px] md:w-[320px] md:h-[380px] rounded-2xl overflow-hidden shadow-xl border border-white/10 group flex-shrink-0 cursor-zoom-in snap-center"
          >
            <Image
              src={src}
              alt={`Gallery ${i}`}
              fill
              className={`object-cover transition-transform duration-700 ${!isMobile ? "group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0" : ""}`}
              sizes="(max-width: 768px) 260px, 400px"
              priority={i < 2}
              quality={isMobile ? 65 : 75}
            />
            {!isMobile && (
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                 <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    មើលរូបភាពធំ
                 </span>
              </div>
            )}
          </m.div>
        ))}
      </m.div>
    </div>
  );
};

export default Hero;
