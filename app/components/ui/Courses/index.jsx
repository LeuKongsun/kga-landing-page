'use client'
import SectionWrapper from "../../SectionWrapper";
import argis from "../../../../public/logos/arcgis.png";
import arcgisPro from "../../../../public/logos/arcgis-pro-single.png";
import qgis from "../../../../public/logos/qgis.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Courses = () => {
  const courses = [
    {
      icon: argis,
      title: "ArcGIS",
      desc: "នៅក្នុងវគ្គសិក្សានេះ អ្នកនឹងរៀនពីរបៀបបង្កើតផែនទី វិភាគទិន្នន័យ និងស្វ័យប្រវត្តិកម្មលំហូរការងារដោយប្រើ ArcGIS ។ មិនថាអ្នកជាសិស្សថ្មី ឬធ្លាប់មានបទពិសោធន៍ខ្លះៗ វគ្គសិក្សានេះផ្តល់ឱ្យអ្នកនូវជំនាញដែលអ្នកត្រូវការដើម្បីទទួលបានជោគជ័យក្នុងវិស័យភូមិសាស្រ្តមួយនេះ។",
      alt: "argis",
    },
    {
      icon: qgis,
      title: "QGIS",
      desc: "គឺជាកម្មវិធី GIS ឥតគិតថ្លៃ និងបើកចំហទៅកាន់អ្នកប្រើប្រាស់។ នៅក្នុងវគ្គសិក្សានេះ អ្នកនឹងរៀនពីរបៀបប្រើប្រាស់ QGIS ដើម្បីបង្កើតផែនទី វិភាគទិន្នន័យ និងធ្វើការវិភាគលើលំហ។ វគ្គសិក្សានេះអាចរៀនបានទាំងអ្នកមិនចេះសោះ និងអ្នកដែលមានបទពិសោធន៍ខ្លះៗរួចហើយ។",
      alt: "qgis",
    },
    {
      icon: arcgisPro,
      title: "ArcGIS Pro",
      desc: "ArcGIS Pro គឺជាកម្មវិធី GIS ចុងក្រោយ និងទំនើបបំផុតរបស់ Esri ។ នៅក្នុងវគ្គសិក្សានេះ អ្នកនឹងរៀនពីរបៀបប្រើប្រាស់ ArcGIS Pro ដើម្បីបង្កើត និងវិភាគផែនទី 2D និង 3D ធ្វើការវិភាគលើលំហ និងចែករំលែកការងាររបស់អ្នកជាមួយអ្នកដទៃ។",
      alt: "arcgisPro",
    },
  ];

  return (
    <SectionWrapper>
      <div id="courses" className="flex flex-col justify-center items-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">មុខវិជ្ជាដែលយើងបង្រៀន</h2>
          <div className="w-16 h-1.5 bg-primary mx-auto rounded-full"></div>
        </motion.div>
        <div className="custom-screen">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((item, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-3xl group hover:shadow-primary/5"
              >
                <div className="w-24 h-24 mb-6 rounded-2xl bg-white dark:bg-white/10 p-4 border border-border group-hover:scale-110 transition-transform duration-500 shadow-sm flex items-center justify-center">
                  <Image src={item.icon} alt={item.alt} className="w-full h-full object-contain" />
                </div>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Courses;
