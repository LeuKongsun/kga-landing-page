"use client";
import SectionWrapper from "../../SectionWrapper";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Image from "next/image";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-brand-orange" />,
      title: "លេខទំនាក់ទំនង",
      value: "012 345 678",
      href: "tel:+85512345678"
    },
    {
      icon: <Mail className="w-5 h-5 text-brand-orange" />,
      title: "អាស័យដ្ឋានអ៉ីម៉ែល",
      value: "chanmolneang@gmail.com",
      href: "mailto:chanmolneang@gmail.com"
    },
    {
      icon: <MapPin className="w-5 h-5 text-brand-orange" />,
      title: "ទីតាំង",
      value: "អាគារលេខ៤៨ ផ្លូវ២៨៩ សង្កាត់បឹងកក់២ ខណ្ឌទួលគោក រាជធានីភ្នំពេញ",
      href: "https://maps.app.goo.gl/..."
    }
  ];

  return (
    <SectionWrapper>
      <div id="contact" className="custom-screen relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-blue blur-[100px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-orange blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-800 leading-[1.4] mb-4 text-brand-text dark:text-white">
            <span className="text-brand-orange italic">ទំនាក់ទំនង</span> មកយើងខ្ញុំ
          </h2>
          <p className="text-brand-text/60 dark:text-gray-400 font-body">
            យើងផ្តល់ឲ្យនូវការបង្រៀនដែលយកចិត្តទុកដាក់ ប្រកបដោយគុណភាព និងទំនួលខុសត្រូវ។
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactInfo.map((item, idx) => (
              <a 
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 tool-card bg-white dark:bg-white/5 rounded-2xl border border-brand-blue/8 dark:border-white/8 relative overflow-hidden group"
              >
                <div className="p-3 rounded-xl bg-brand-orange/10 group-hover:bg-brand-orange/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display font-700 text-lg mb-1 text-brand-text dark:text-white">{item.title}</h3>
                  <p className="text-brand-text/60 dark:text-gray-400 leading-relaxed font-body text-sm mt-1">{item.value}</p>
                </div>
              </a>
            ))}

            <div className="p-6 mt-6 tool-card bg-white dark:bg-[#0F2347]/50 rounded-2xl border border-brand-blue/8 dark:border-brand-orange/20 relative overflow-hidden group">
               <h3 className="font-display font-700 text-xl mb-2 text-brand-text dark:text-white">សាកសួរព័ត៌មានបន្ថែម</h3>
               <p className="text-brand-text/60 dark:text-gray-400 mb-6 font-body text-sm">លោកអ្នកក៏អាចផ្ញើសារមកកាន់យើងខ្ញុំផ្ទាល់តាមរយៈ Telegram ផងដែរ។</p>
               <a 
                 href="https://t.me/khmergrsacademy"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-brand-orange text-white font-display font-700 hover:bg-brand-orange-hover transition-all hover:scale-105 active:scale-95 orange-glow"
               >
                 <Send className="w-5 h-5" />
                 ផ្ញើសារតាម Telegram
               </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full h-full min-h-[400px] lg:min-h-[550px] rounded-2xl overflow-hidden tool-card bg-white dark:bg-white/5 border border-brand-blue/8 dark:border-white/8 p-1"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.672460431584!2d104.89702737511448!3d11.575321943950122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951003092289b%3A0x471125801998e4d7!2sKhmer%20GRS%20Academy!5e0!3m2!1sen!2skh!4v1722774759078!5m2!1sen!2skh"
              className="w-full h-full rounded-2xl map-filter"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
