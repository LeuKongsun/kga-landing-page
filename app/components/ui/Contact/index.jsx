"use client";
import SectionWrapper from "../../SectionWrapper";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Image from "next/image";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "លេខទំនាក់ទំនង",
      value: "012 345 678",
      href: "tel:+85512345678"
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "អាស័យដ្ឋានអ៉ីម៉ែល",
      value: "chanmolneang@gmail.com",
      href: "mailto:chanmolneang@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "ទីតាំង",
      value: "អាគារលេខ៤៨ ផ្លូវ២៨៩ សង្កាត់បឹងកក់២ ខណ្ឌទួលគោក រាជធានីភ្នំពេញ",
      href: "https://maps.app.goo.gl/..."
    }
  ];

  return (
    <SectionWrapper>
      <div id="contact" className="custom-screen relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary blur-[100px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            <span className="gradient-text">ទំនាក់ទំនង</span> មកយើងខ្ញុំ
          </h2>
          <p className="text-muted-foreground">
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
                className="flex items-start gap-5 p-6 glass-card rounded-2xl hover:scale-[1.02] transition-transform group"
              >
                <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.value}</p>
                </div>
              </a>
            ))}

            <div className="p-8 glass-card rounded-2xl bg-gradient-to-br from-primary/5 to-transparent">
               <h3 className="font-bold text-xl mb-4">សាកសួរព័ត៌មានបន្ថែម</h3>
               <p className="text-muted-foreground mb-6">លោកអ្នកក៏អាចផ្ញើសារមកកាន់យើងខ្ញុំផ្ទាល់តាមរយៈ Telegram ផងដែរ។</p>
               <a 
                 href="https://t.me/khmergrsacademy"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20"
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
            className="w-full h-full min-h-[400px] lg:min-h-[550px] rounded-3xl overflow-hidden glass-card p-2"
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
