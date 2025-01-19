"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import NavLink from "../NavLink";

const ShuffleHero = () => {
  return (
    <section className="w-full py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 custom-screen">
      <div>
        <span className="block mb-4 text-xl md:text-md text-indigo-500 font-bold">
          KHMER GRS ACADEMY
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold md:leading-tight">
          សិក្សាលម្អិតទៅលើជំនាញគ្រប់គ្រងទិន្នន័យភូមិសាស្រ្ត និងផែនទី
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6 dark:text-slate-300">
          យើងផ្តល់ឲ្យនូវការបង្រៀនដែលយកចិត្តទុកដាក់ ប្រកបដោយគុណភាព
          និងទំនួលខុសត្រូវ។ ការពេញចិត្តរបស់អ្នក គឺជាតម្លៃរបស់យើងខ្ញុំ។
        </p>
        <div className="flex gap-x-3 font-medium text-sm">
          <NavLink
            href="https://t.me/khmergrsacademy"
            className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 border"
          >
            ចុះឈ្មោះឥលូវនេះ
          </NavLink>
          <NavLink
            href="https://www.youtube.com/@Khmergisacademy"
            className="border bg-red-600 text-white hover:bg-gray-50 dark:text-gray-300 dark:hover:text-gray-700"
            scroll={false}
          >
            មើលវីដេអូ​នៅ <span>Youtube</span>
          </NavLink>
        </div>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/gallery/1.jpg",
  },
  {
    id: 2,
    src: "/gallery/2.jpg",
  },
  {
    id: 3,
    src: "/gallery/3.jpg",
  },
  {
    id: 4,
    src: "/gallery/4.jpg",
  },
  {
    id: 5,
    src: "/gallery/5.jpg",
  },
  {
    id: 6,
    src: "/gallery/6.jpg",
  },
  {
    id: 7,
    src: "/gallery/7.jpg",
  },
  {
    id: 8,
    src: "/gallery/8.jpg",
  },
  {
    id: 9,
    src: "/gallery/9.jpg",
  },
  {
    id: 10,
    src: "/gallery/10.jpg",
  },
  {
    id: 11,
    src: "/gallery/11.jpg",
  },
  {
    id: 12,
    src: "/gallery/12.jpg",
  },
  {
    id: 13,
    src: "/gallery/13.jpg",
  },
  {
    id: 14,
    src: "/gallery/14.jpg",
  },
  {
    id: 15,
    src: "/gallery/15.jpg",
  },
  {
    id: 16,
    src: "/gallery/16.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
