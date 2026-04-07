import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";
import { m } from "framer-motion";
import { Send } from "lucide-react";

const FooterCTA = () => (
  <SectionWrapper>
    <div className="custom-screen">
      <m.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto rounded-3xl p-8 md:p-14 text-center relative overflow-hidden tool-card bg-white dark:bg-white/5 border border-brand-blue/8 dark:border-white/8 group"
      >
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none"></div>
        
        <h2 className="text-3xl md:text-5xl font-display font-800 mb-6 leading-tight text-brand-text dark:text-white">
          រួចរាល់សម្រាប់ <span className="text-brand-orange italic">ជោគជ័យ</span> ហើយឬនៅ?
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-brand-text/60 dark:text-gray-400 font-body mb-10 leading-relaxed">
          រៀននៅថ្ងៃនេះ ជាស្ពានចម្លងទៅអនាគត និងអ្នកជំនាន់ក្រោយ។
          រៀនជាមួយ​ KGA រៀនដោយទំនុកចិត្ត និងរៀនដោយភាពច្បាស់លាស់។
        </p>
        <NavLink
          href="https://t.me/khmergrsacademy"
          className="inline-flex items-center gap-3 rounded-xl px-12 py-4 bg-brand-orange text-white hover:bg-brand-orange-hover transition-all hover:scale-105 active:scale-95 font-display font-700 orange-glow"
        >
          <Send className="w-5 h-5" />
          ឆាតតេលេក្រាម
        </NavLink>
      </m.div>
    </div>
  </SectionWrapper>
);

export default FooterCTA;
