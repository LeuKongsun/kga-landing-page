'use client'
import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const FooterCTA = () => (
  <SectionWrapper>
    <div className="custom-screen">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto rounded-3xl p-8 md:p-16 text-center relative overflow-hidden glass-card group"
      >
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          រួចរាល់សម្រាប់ <span className="gradient-text">ជោគជ័យ</span> ហើយឬនៅ?
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10 leading-relaxed">
          រៀននៅថ្ងៃនេះ ជាស្ពានចម្លងទៅអនាគត និងអ្នកជំនាន់ក្រោយ។
          រៀនជាមួយ​ KGA រៀនដោយទំនុកចិត្ត និងរៀនដោយភាពច្បាស់លាស់។
        </p>
        <NavLink
          href="https://t.me/khmergrsacademy"
          className="inline-flex items-center gap-3 rounded-full px-12 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20 font-bold"
        >
          <Send className="w-5 h-5" />
          ឆាតតេលេក្រាម
        </NavLink>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default FooterCTA;
