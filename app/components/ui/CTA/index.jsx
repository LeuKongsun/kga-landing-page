'use client'
import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import ctaImage from "../../../../public/cta-image.jpg"
import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const CTA = () => {
    const features = [
        "មេរៀនបច្ចុប្បន្នភាព",
        "ការបង្រៀនមានស្តង់ដារ",
        "ធនធានមនុស្សពិតប្រាកដ"
    ]

    return (
        <SectionWrapper id="cta" className="pb-0 overflow-hidden">
            <div className="custom-screen relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/5 blur-[100px] -z-10"></div>
                <div className="items-center gap-x-16 lg:flex">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex-1 sm:hidden lg:block relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/30 to-brand-orange/30 rounded-3xl blur-2xl opacity-50"></div>
                        <Image 
                            src={ctaImage} 
                            className="rounded-2xl shadow-2xl relative z-10 border border-white/20" 
                            alt="Khmer GRS Academy Training" 
                        />
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-xl mt-12 md:mt-0 lg:max-w-2xl px-4 py-8 rounded-3xl"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-800 leading-[1.4] mb-6 text-brand-text dark:text-white">
                            មិនគ្រាន់តែបង្រៀន <span className="text-brand-orange italic">យើងតែងតែឈឺឆ្អាល</span> និងរិះរកវិធីបង្រៀនដ៏ល្អបំផុត
                        </h2>
                        <p className="text-lg text-brand-text/60 dark:text-gray-400 font-body mb-8 leading-relaxed">
                            យើងផ្តោតលើគុណភាពមេរៀននីមួយៗ ដោយធ្វើកំណែទម្រង់លើមាតិកា និងតែងតែធ្វើបច្ចុប្បន្នភាពមេរៀន ដើម្បីឲ្យគុណភាពអប់រំកាន់តែមានស្តង់ដារ។
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-brand-text/80 dark:text-gray-300 font-body transition-colors group">
                                    <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <NavLink
                            href="https://t.me/khmergrsacademy"
                            className="inline-flex items-center gap-2 rounded-xl px-10 py-3.5 bg-brand-orange text-white hover:bg-brand-orange-hover transition-all hover:scale-105 active:scale-95 font-display font-700 orange-glow"
                        >
                            ចូលរៀនឥឡូវនេះ
                        </NavLink>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTA