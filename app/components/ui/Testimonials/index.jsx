'use client'
import Image from "next/image";
import SectionWrapper from "../../SectionWrapper";
import sowathWilly from '../../../../public/students/sowath_willy.jpg'
import sabOur from '../../../../public/students/sab_our.jpg'
import yunSaknika from '../../../../public/students/yun_saknika.jpg'
import sreyJokjey from '../../../../public/students/srey_jokjey.jpg'
import chhay from '../../../../public/students/chhay.jpeg'
import veayo from '../../../../public/students/veayo.jpeg'
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const Testimonials = () => {
  const testimonials = [
    {
      avatar: chhay,
      name: "ឆេង ហុងឆាយ",
      title: "និស្សិត | ITC, ហាត់ការ ODC",
      quote: "ខ្ញុំធ្លាប់ជាសិស្សអាហារូបករណ៏នៅ KGA ជំនាន់ទី១ ខ្ញុំពិតជារំភេីបមែនទែនដែលបានជាប់អាហារូបករណ៏ជំនាន់ទី១នៅ KGA។ ក្រោយមកខ្ញុំក៏ក្លាយជំនួយការគ្រូបង្រៀននៅទីនេះ ដោយខ្ញុំធ្លាប់ជាសិស្សឆ្នើម។ ខ្ញុំក៏បាននឹងកំពុងបង្រៀនថ្នាក់អាហារូបករណ៍ទៅកាន់សិស្សជំនាន់ក្រោយៗផងដែរ។ ខ្ញុំរីករាយជាមួយការសិក្សានៅទីនេះ ហើយខ្ញុំពិតជាត្រេកអរជាមួយនឹងឱកាសដែលខ្ញុំទទួលបាន។ Shout out to all KGA Team.",
    },
    {
      avatar: sowathWilly,
      name: "សុវត្ថិ វាលី",
      title: "និស្សិត | TSI",
      quote: "ក្រោយបញ្ចប់ការសិក្សារបស់ខ្ញុំក្នុងវគ្គសិក្សាការផលិតផែនទី ខ្ញុំបានយល់ដឹងច្រើនអំពីការប្រើប្រាស់ឧបករណ៍(tools)ផ្សេងៗនិង command ជាច្រើនដើម្បីបង្កើតផែនទីដ៏ល្អ និងត្រឹមត្រូវ។ ខ្ញុំទទួលបានជំនាញសំខាន់ៗក្នុងការប្រើប្រាស់ Arcmap និង ArcGIS Pro ដូចជា ចំណេះដឹងទិន្នន័យផែនទី បង្កើតនិងកែសម្រួលផែនទី វិភាគទិន្នន័យភូមិសាស្រ្ត ជាដើម។ ខ្ញុំបានសង្កេតឃើញថាក្រោយពីខ្ញុំបានបញ្ចប់វគ្គសិក្សាពី khmer GRS Academy បានធ្វើអោយខ្ញុំទទួលបានចំណះដឹងច្បាស់ៗ ដើម្បីជាប្រយោជន៍ក្នុងការសិក្សា និងការងារនាពេលអនាគត។",
    },
    {
      avatar: sabOur,
      name: "សាប អួ",
      title: "និស្សិត | RUPP",
      quote: "ខ្ញុំពិតមានសំណាងដែលទទួលបានឱកាសចូលរៀននៅសាលា Khmer GIS Academy។ ការបង្រៀនរបស់លោកគ្រូល្អ ច្បាស់ៗ ងាយយល់ ទោះបីជាអ្នកចាប់ផ្តើមថ្មីក៏អាចរៀនបាន និងឆាប់ចាប់បានផងដែរ។ ការបង្រៀនរបស់លោកគ្រូពិតជាល្អ មានកិច្ចការផ្ទះ និងលំហាត់ជាច្រើនដែលដាក់អោយធ្វើ។ មានទិន្នន័យល្អៗ ជាពិសេសចំពោះអ្នកដែលធ្វើការងារខាងវិស័យដីឡូតិ៍ វិស័យយោធា វិស័យរដ្ឋបាល វិស័យអចនទ្រព្យជាដើម។ ក្រោយពេលដែលខ្ញុំបានបញ្ចប់ការសិក្សា ខ្ញុំក៏បានចូលធ្វើការងារស្ម័គ្រចិត្តផ្នែក GIS ហើយក៏ឃើញថាអ្វីដែលខ្ញុំបានរៀននៅ KGA គឺត្រឹមត្រូវច្រើនជាមួយនឹងការងារជាក់ស្តែង។",
    },
    {
      avatar: yunSaknika,
      name: "យន់ សក្តិនិកា",
      title: "និស្សិត | TSI",
      quote: "ខ្ញុំបានសិក្សាកម្មវិធីArcGis Pro រយៈពេល៧សប្ដាហ៍ ដែលនេះជាជំនាញថ្មីមួយសម្រាប់រូបខ្ញុំក្នុងការសិក្សាលើផែនទី និងទិន្នន័យភូមិសាស្រ្ត។ ហើយបន្ទាប់ពីបញ្ចប់ការសិក្សាលើកម្មវិធី ArcGis Pro នេះរួច ខ្ញុំបានទទួលនូវចំណេះដឹង និងប្រយោជន៍ជាច្រើន។ ArcGIS Pro បំផុសឱ្យខ្ញុំចង់ចេះ ចង់ដឹងបន្ថែមអំពីការវិភាគទិន្នន័យ និងការបង្កើតផែនទី ឬក៏ការសិក្សាបន្ថែមអំពី GIS ទូទៅ។ វាកម្មវិធីដ៏ខ្លាំងមួយដែលអាចជួយខ្ញុំក្នុងការវិភាគទិន្នន័យភូមិសាស្រ្តល្អ និងមានប្រយោជន៍ដូចជាការតាមដានបរិស្ថាន ឬការរៀបចំផែនទីសង្គម។ កម្មវិធីនេះបានបំផុសស្មារតីរបស់ខ្ញុំក្នុងការអភិវឌ្ឍន៍ជំនាញឱ្យកាន់តែខ្ពស់បន្ថែមទៀត។",
    },
    {
      avatar: sreyJokjey,
      name: "ស្រី ជោគជ័យ",
      title: "និស្សិត | RUPP",
      quote: "បន្ទាប់ពីខ្ញុំបានបញ្ចប់ ArcMap និង QGIS ជាមួយនឹងសាលា Khmer GRS  Academy ខ្ញុំអាចយកវាមកធ្វើផែនទីផ្សេងៗទៅតាមតម្រូវការបាន។ នេះក៏ដោយសារតែការបង្រៀនរបស់លោកគ្រូនៅ Khmer GRS  Academy បានបង្រៀនដោយយកចិត្តទុកដាក់ ពន្យល់ក្បោះក្បាយច្បាស់ល្អទៅលើ Tool និងមុខងារនីមួយៗនៅក្នុងកម្មវីធី ហើយក៏មានមេរៀនគ្រប់គាន់ក្នុងការបង្រៀនផងដែរ។ ក្នុងឱកាសនេះខ្ញុំបាទសូមអរគុណលោកគ្រូដែលបានបង្ហាត់បង្រៀនដល់រូបខ្ញុំ និងនិស្សិតផ្សេងៗទៀត។ សូមជួនពរលោកគ្រូនៅក្នុងសាលា Khmer GRS  Academy ទាំងអស់ជួបតែសេចក្តីសុខសេចក្តីចម្រើន។",
    },
    {
      avatar: veayo,
      name: "សោន វាយោ",
      title: "និស្សិត | RUPP",
      quote: "ក្នុងនាមខ្ញុំជាកូនសិស្សដែលធ្លាប់បានសិក្សារៀនសូត្រនៅក្នុងសាលា Khmer GRS Academy ខ្ញុំពិតជាពេញចិត្តខ្លាំងណាស់សម្រាប់កាផ្ដល់ឱកាសឲ្យសិស្សានុសិស្សបានសិក្សាអំពីជំនាញ GIS ដែលជាជំនាញមួយដែលពេញនិយមនៅក្នុងវិស័យឌីជីថល។ នៅក្នុងកាបង្រៀនរបស់លោកគ្រូគឺពិតជាល្អក្នុងការពន្យល់មេរៀនយ៉ាងក្បោះក្បាយដល់សិស្សានុសិស្ស និងបានយកចិត្តទុកដាក់ដល់សិស្សានុសិស្សគ្រាប់ៗគ្នា មិនតែប៉ុណ្ណោះលោគ្រូក៏បានលើកទឹកចិត្តឲ្យកូនសិស្សប្រឹងសិក្សារៀនសូ្រត។ ជាចុងក្រោយខ្ញុំសូមអរគុណដល់លោកគ្រូ  សូមឲ្យលោកគ្រូជួបតែសំណាងល្អនៅក្នុងជីវិត។",
    },
  ];

  return (
    <SectionWrapper id="testimonials">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 relative pb-4">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 blur-[100px] -z-10 rounded-full"></div>
        <div className="max-w-2xl sm:text-center md:mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-800 leading-[1.4] mb-6 text-brand-text dark:text-white">
              មតិសិស្សរបស់យើង
            </h2>
            <p className="text-lg text-brand-text/60 dark:text-gray-400 font-body max-w-xl mx-auto leading-relaxed">
              យើងតែងតែយកចិត្តទុកដាក់ទៅលើការបញ្ចេញមតិ និងការរិះគន់ស្ថាបនា ដើម្បីស្វែងរកភាពរីកចម្រើនទៅមុខ
            </p>
          </motion.div>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="tool-card bg-white dark:bg-white/5 rounded-2xl border border-brand-blue/8 dark:border-white/8 p-6 relative overflow-hidden group"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-blue/10 dark:text-white/5" />
                <figure className="relative z-10">
                  <div className="flex items-center gap-x-4 mb-6">
                    <div className="relative">
                        <Image
                            src={item.avatar}
                            className="w-14 h-14 object-cover rounded-full relative z-10 border border-brand-blue/10 dark:border-white/10"
                            alt={item.name}
                        />
                    </div>
                    <div>
                      <span className="block text-lg font-display font-700 text-brand-text dark:text-white">
                        {item.name}
                      </span>
                      <span className="block text-xs font-mono text-brand-orange mt-0.5">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <blockquote>
                    <p className="text-sm text-brand-text/60 dark:text-gray-400 leading-relaxed italic font-body">&quot;{item.quote}&quot;</p>
                  </blockquote>
                </figure>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
