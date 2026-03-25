"use client";
import { motion } from "framer-motion";
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

const Hero = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImgClick = (src) => {
    setSelectedImg(src);
    onOpen();
  };

  return (
    <section className="relative w-full pt-32 pb-20 overflow-hidden bg-mesh-gradient">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-400/20 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="custom-screen relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-6xl font-extrabold leading-[1.1] md:leading-[1.4] mb-8">
            <span className="block">សិក្សាលម្អិតទៅលើ</span>
            <span className="gradient-text italic">ជំនាញគ្រប់គ្រងទិន្នន័យ</span>
            <span className="block">ភូមិសាស្រ្ត និងផែនទី</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
            យើងផ្តល់ឲ្យនូវការបង្រៀនដែលយកចិត្តទុកដាក់ ប្រកបដោយគុណភាព និងទំនួលខុសត្រូវ។
            ការពេញចិត្តរបស់អ្នក គឺជាតម្លៃរបស់យើងខ្ញុំ។
          </p>
          <div className="flex flex-wrap gap-5">
            <NavLink
              href="https://t.me/khmergrsacademy"
              className="flex items-center gap-2 rounded-full px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20 font-bold group"
            >
              ចុះឈ្មោះឥលូវនេះ
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </NavLink>
            <NavLink
              href="https://www.youtube.com/@Khmergisacademy"
              className="flex items-center gap-2 rounded-full px-8 py-4 glass-liquid transition-all hover:scale-105 active:scale-95 font-bold group"
              scroll={false}
            >
              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 text-white fill-current ml-0.5" />
              </div>
              YouTube
            </NavLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden glass-card"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-blue-400/5 blur-3xl opacity-50"></div>
          <HorizontalSlidingShowcase onImgClick={handleImgClick} />
        </motion.div>
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
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative max-w-full max-h-[90vh] flex items-center justify-center"
                >
                  <img
                    src={selectedImg}
                    alt="Gallery Image Full"
                    className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10"
                  />
                </motion.div>
              )}
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

const images = [
  "/gallery/1.jpg", "/gallery/2.jpg", "/gallery/3.jpg", "/gallery/4.jpg",
  "/gallery/5.jpg", "/gallery/6.jpg", "/gallery/7.jpg", "/gallery/8.jpg",
  "/gallery/9.jpg", "/gallery/10.jpg", "/gallery/11.jpg", "/gallery/12.jpg",
  "/gallery/13.jpg", "/gallery/14.jpg", "/gallery/15.jpg", "/gallery/16.jpg",
];

const HorizontalSlidingShowcase = ({ onImgClick }) => {
  const [mounted, setMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-full w-full" />;

  const doubledImages = [...images, ...images];

  return (
    <div 
      className="relative w-full h-full flex items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        animate={{
          x: isPaused ? undefined : ["0%", "-50%"],
        }}
        transition={{
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
        style={{ width: "fit-content" }}
      >
        {doubledImages.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            onClick={() => onImgClick(src)}
            className="relative w-[280px] h-[350px] md:w-[320px] md:h-[380px] rounded-2xl overflow-hidden shadow-xl border border-white/10 group flex-shrink-0 cursor-zoom-in"
          >
            <Image
              src={src}
              alt={`Gallery ${i}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
              sizes="(max-width: 768px) 280px, 320px"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
               <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  មើលរូបភាពធំ
               </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
