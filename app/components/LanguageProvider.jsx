"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "kga-language";
const LanguageContext = createContext(null);
const originalText = new WeakMap();

const normalize = (value) => value.replace(/\s+/g, " ").trim();

const TRANSLATION_ENTRIES = [
  // Shared navigation
  ["គម្រោង", "Project"],
  ["វគ្គសិក្សា", "Courses"],
  ["មុខវិជ្ជាដែលយើងបង្រៀន", "Subjects We Teach"],
  ["វគ្គសិក្សារបស់យើង", "Our Courses"],
  ["អំពីយើង", "About Us"],
  ["សិស្សរបស់យើង", "Our Students"],
  ["សមិទ្ធផលរបស់យើង", "Our Products"],
  ["កម្មវិធី", "Program"],
  ["ធនធាន", "Resources"],
  ["ប្លុក", "Blogs"],
  ["ទិន្នន័យចំហ", "OpenKGA"],
  ["ទំនាក់ទំនង", "Contact"],

  // Hero and skills
  ["សិក្សាលម្អិតទៅលើ", "Build In-Depth Expertise in"],
  ["ជំនាញគ្រប់គ្រងទិន្នន័យ", "GIS Data Management"],
  ["ភូមិសាស្រ្ត និងផែនទី", "and Professional Mapping"],
  ["យើងផ្តល់ឲ្យនូវការបង្រៀនដែលយកចិត្តទុកដាក់ ប្រកបដោយគុណភាព និងទំនួលខុសត្រូវ។ ការពេញចិត្តរបស់អ្នក គឺជាតម្លៃរបស់យើងខ្ញុំ។", "We provide attentive, high-quality, and responsible instruction. Your satisfaction is what we value most."],
  ["យើងផ្តល់ឲ្យនូវការបង្រៀនដែលយកចិត្តទុកដាក់ ប្រកបដោយគុណភាព និងទំនួលខុសត្រូវ។", "We provide attentive, high-quality, and responsible instruction."],
  ["ការពេញចិត្តរបស់អ្នក គឺជាតម្លៃរបស់យើងខ្ញុំ។", "Your satisfaction is what we value most."],
  ["ចុះឈ្មោះឥលូវនេះ", "Enroll Now"],
  ["មើលរូបភាពធំ", "View Full Image"],
  ["ជំនាញដែលយើងបាននឹងកំពុងបង្រៀន", "Technologies We Teach"],

  // Courses
  ["នៅក្នុងវគ្គសិក្សានេះ អ្នកនឹងរៀនពីរបៀបបង្កើតផែនទី វិភាគទិន្នន័យ និងស្វ័យប្រវត្តិកម្មលំហូរការងារដោយប្រើ ArcGIS ។ មិនថាអ្នកជាសិស្សថ្មី ឬធ្លាប់មានបទពិសោធន៍ខ្លះៗ វគ្គសិក្សានេះផ្តល់ឱ្យអ្នកនូវជំនាញដែលអ្នកត្រូវការដើម្បីទទួលបានជោគជ័យក្នុងវិស័យភូមិសាស្រ្តមួយនេះ។", "Learn to create maps, analyze data, and automate workflows with ArcGIS. Whether you are a beginner or already have some experience, this course gives you the practical skills needed to succeed in GIS."],
  ["គឺជាកម្មវិធី GIS ឥតគិតថ្លៃ និងបើកចំហទៅកាន់អ្នកប្រើប្រាស់។ នៅក្នុងវគ្គសិក្សានេះ អ្នកនឹងរៀនពីរបៀបប្រើប្រាស់ QGIS ដើម្បីបង្កើតផែនទី វិភាគទិន្នន័យ និងធ្វើការវិភាគលើលំហ។ វគ្គសិក្សានេះអាចរៀនបានទាំងអ្នកមិនចេះសោះ និងអ្នកដែលមានបទពិសោធន៍ខ្លះៗរួចហើយ។", "QGIS is free, open-source GIS software. This course teaches you to create maps, manage data, and perform spatial analysis, whether you are completely new or already have some experience."],
  ["ArcGIS Pro គឺជាកម្មវិធី GIS ចុងក្រោយ និងទំនើបបំផុតរបស់ Esri ។ នៅក្នុងវគ្គសិក្សានេះ អ្នកនឹងរៀនពីរបៀបប្រើប្រាស់ ArcGIS Pro ដើម្បីបង្កើត និងវិភាគផែនទី 2D និង 3D ធ្វើការវិភាគលើលំហ និងចែករំលែកការងាររបស់អ្នកជាមួយអ្នកដទៃ។", "ArcGIS Pro is Esri's modern GIS application. Learn to create and analyze 2D and 3D maps, perform spatial analysis, and share your work with others."],
  ["ចុចមើលវគ្គសិក្សារបស់យើង", "Explore Our Courses"],

  // Learning quality CTA
  ["មេរៀនបច្ចុប្បន្នភាព", "Up-to-Date Lessons"],
  ["ការបង្រៀនមានស្តង់ដារ", "High Teaching Standards"],
  ["ធនធានមនុស្សពិតប្រាកដ", "Real Expert Support"],
  ["មិនគ្រាន់តែបង្រៀន", "We Do More Than Teach"],
  ["យើងតែងតែឈឺឆ្អាល", "We Truly Care"],
  ["និងរិះរកវិធីបង្រៀនដ៏ល្អបំផុត", "and Constantly Improve How You Learn"],
  ["យើងផ្តោតលើគុណភាពមេរៀននីមួយៗ ដោយធ្វើកំណែទម្រង់លើមាតិកា និងតែងតែធ្វើបច្ចុប្បន្នភាពមេរៀន ដើម្បីឲ្យគុណភាពអប់រំកាន់តែមានស្តង់ដារ។", "We focus on the quality of every lesson, continually refining and updating our content to maintain a high standard of education."],
  ["ចូលរៀនឥឡូវនេះ", "Start Learning Now"],

  // About KGA
  ["Khmer GRS Academy គឺជាស្ថាប័នអប់រំផ្តោតទៅលើទីតាំងភូមិសាស្រ្តដែលបានបង្កើតឡើងក្នុងឆ្នាំ២០១៨។", "Khmer GRS Academy is a GIS-focused education institution founded in 2018."],
  ["បច្ចុប្បន្នយើងកំពុងផ្តោតលើមុខវិជ្ជាបីធំៗ ArcGIS, ArcGIS Pro និង QGIS។ ដោយឡែកយើងក៏មានមុខវិជ្ជាផ្សេងៗមួយចំនួនស្ថិតក្នុងការស្រាវជ្រាវផងដែរ។", "We currently focus on three core subjects: ArcGIS, ArcGIS Pro, and QGIS, while continuing to research additional topics."],
  ["រហូតមកដល់ពេលនេះ យើងបានបង្រៀនសិស្សជាច្រើននាក់រួចមកហើយ រួមមាននិស្សិត បុគ្គលិកមកពីស្ថាប័នឯកជន និងរដ្ឋជាដើម។", "We have trained many learners, including university students and professionals from private and public institutions."],
  ["វីដេអូ", "Videos"],
  ["យើងផលិតវីដេអូ ទាំងកំឡុងពេលបង្រៀន និងសម្រាប់អ្នកដែលមិនអាចមករៀននៅក្នុងថ្នាក់ផ្ទាល់បាន អាចជាវបានជាមួយនឹងគុណភាព និងតម្លៃសមរម្យ។", "We produce classroom and on-demand video lessons for learners who cannot attend in person, with reliable quality at an affordable price."],
  ["សេវាកម្ម", "Services"],
  ["ក្រៅអំពីការបង្រៀន យើងក៏មានផ្តល់ជាសេវាកម្មប្រឹក្សា ប្រមូល រៀបចំ សម្អាត និងវិភាគទិន្នន័យទៅលើផ្នែកដែលពាក់ព័ន្ធ។", "Beyond teaching, we provide consulting and services for collecting, organizing, cleaning, and analyzing geospatial data."],
  ["ឱកាស និងអាហារូបករណ៍", "Opportunities & Scholarships"],
  ["យើងតែងតែផ្តល់ជាអាហារូបករណ៍ដល់សិស្សានុសិស្សដែលចង់ចាប់យក និងផ្តោតលើជំនាញផែនទី។ ព័ត៌មានបន្ថែមសូមទំនាក់ទំនងមកកាន់យើងខ្ញុំ។", "We regularly offer scholarships to students committed to developing mapping skills. Contact us for more information."],
  ["ខ្មែរជីអាអេស អាខាដឺមី", "Khmer GRS Academy"],
  ["ស្គាល់ពីស្ថាប័ន ស្គាល់ពីយើង និងចាប់ផ្តើមជាមួយគ្នា", "Get to know our academy and begin your learning journey with us."],

  // Testimonials
  ["និស្សិត | ITC, ហាត់ការ ODC", "Student | ITC, ODC Intern"],
  ["និស្សិត | TSI", "Student | TSI"],
  ["និស្សិត | RUPP", "Student | RUPP"],
  ["មតិសិស្សរបស់យើង", "What Our Students Say"],
  ["យើងតែងតែយកចិត្តទុកដាក់ទៅលើការបញ្ចេញមតិ និងការរិះគន់ស្ថាបនា ដើម្បីស្វែងរកភាពរីកចម្រើនទៅមុខ", "We value feedback and constructive criticism because they help us keep improving."],
  ["ខ្ញុំធ្លាប់ជាសិស្សអាហារូបករណ៏នៅ KGA ជំនាន់ទី១ ខ្ញុំពិតជារំភេីបមែនទែនដែលបានជាប់អាហារូបករណ៏ជំនាន់ទី១នៅ KGA។ ក្រោយមកខ្ញុំក៏ក្លាយជំនួយការគ្រូបង្រៀននៅទីនេះ ដោយខ្ញុំធ្លាប់ជាសិស្សឆ្នើម។ ខ្ញុំក៏បាននឹងកំពុងបង្រៀនថ្នាក់អាហារូបករណ៍ទៅកាន់សិស្សជំនាន់ក្រោយៗផងដែរ។ ខ្ញុំរីករាយជាមួយការសិក្សានៅទីនេះ ហើយខ្ញុំពិតជាត្រេកអរជាមួយនឹងឱកាសដែលខ្ញុំទទួលបាន។ Shout out to all KGA Team.", "I joined KGA's first scholarship class and was thrilled to receive the opportunity. After becoming one of the top students, I later served as a teaching assistant and now help teach newer scholarship students. I truly enjoy learning here and appreciate every opportunity I have received. Shout out to the entire KGA team."],
  ["ក្រោយបញ្ចប់ការសិក្សារបស់ខ្ញុំក្នុងវគ្គសិក្សាការផលិតផែនទី ខ្ញុំបានយល់ដឹងច្រើនអំពីការប្រើប្រាស់ឧបករណ៍(tools)ផ្សេងៗនិង command ជាច្រើនដើម្បីបង្កើតផែនទីដ៏ល្អ និងត្រឹមត្រូវ។ ខ្ញុំទទួលបានជំនាញសំខាន់ៗក្នុងការប្រើប្រាស់ Arcmap និង ArcGIS Pro ដូចជា ចំណេះដឹងទិន្នន័យផែនទី បង្កើតនិងកែសម្រួលផែនទី វិភាគទិន្នន័យភូមិសាស្រ្ត ជាដើម។ ខ្ញុំបានសង្កេតឃើញថាក្រោយពីខ្ញុំបានបញ្ចប់វគ្គសិក្សាពី khmer GRS Academy បានធ្វើអោយខ្ញុំទទួលបានចំណះដឹងច្បាស់ៗ ដើម្បីជាប្រយោជន៍ក្នុងការសិក្សា និងការងារនាពេលអនាគត។", "After completing the map-production course, I gained a strong understanding of the tools and commands needed to create accurate maps. I developed practical ArcMap and ArcGIS Pro skills in map data, editing, cartography, and spatial analysis. The course gave me knowledge that will be valuable in my studies and future career."],
  ["ខ្ញុំពិតមានសំណាងដែលទទួលបានឱកាសចូលរៀននៅសាលា Khmer GIS Academy។ ការបង្រៀនរបស់លោកគ្រូល្អ ច្បាស់ៗ ងាយយល់ ទោះបីជាអ្នកចាប់ផ្តើមថ្មីក៏អាចរៀនបាន និងឆាប់ចាប់បានផងដែរ។ ការបង្រៀនរបស់លោកគ្រូពិតជាល្អ មានកិច្ចការផ្ទះ និងលំហាត់ជាច្រើនដែលដាក់អោយធ្វើ។ មានទិន្នន័យល្អៗ ជាពិសេសចំពោះអ្នកដែលធ្វើការងារខាងវិស័យដីឡូតិ៍ វិស័យយោធា វិស័យរដ្ឋបាល វិស័យអចនទ្រព្យជាដើម។ ក្រោយពេលដែលខ្ញុំបានបញ្ចប់ការសិក្សា ខ្ញុំក៏បានចូលធ្វើការងារស្ម័គ្រចិត្តផ្នែក GIS ហើយក៏ឃើញថាអ្វីដែលខ្ញុំបានរៀននៅ KGA គឺត្រឹមត្រូវច្រើនជាមួយនឹងការងារជាក់ស្តែង។", "I feel fortunate to have studied at Khmer GIS Academy. The teaching is clear and easy to understand, even for beginners, with useful assignments, exercises, and quality datasets. After completing the course and volunteering in GIS work, I found that what I learned at KGA closely matched real-world practice."],
  ["ខ្ញុំបានសិក្សាកម្មវិធីArcGis Pro រយៈពេល៧សប្ដាហ៍ ដែលនេះជាជំនាញថ្មីមួយសម្រាប់រូបខ្ញុំក្នុងការសិក្សាលើផែនទី និងទិន្នន័យភូមិសាស្រ្ត។ ហើយបន្ទាប់ពីបញ្ចប់ការសិក្សាលើកម្មវិធី ArcGis Pro នេះរួច ខ្ញុំបានទទួលនូវចំណេះដឹង និងប្រយោជន៍ជាច្រើន។ ArcGIS Pro បំផុសឱ្យខ្ញុំចង់ចេះ ចង់ដឹងបន្ថែមអំពីការវិភាគទិន្នន័យ និងការបង្កើតផែនទី ឬក៏ការសិក្សាបន្ថែមអំពី GIS ទូទៅ។ វាកម្មវិធីដ៏ខ្លាំងមួយដែលអាចជួយខ្ញុំក្នុងការវិភាគទិន្នន័យភូមិសាស្រ្តល្អ និងមានប្រយោជន៍ដូចជាការតាមដានបរិស្ថាន ឬការរៀបចំផែនទីសង្គម។ កម្មវិធីនេះបានបំផុសស្មារតីរបស់ខ្ញុំក្នុងការអភិវឌ្ឍន៍ជំនាញឱ្យកាន់តែខ្ពស់បន្ថែមទៀត។", "I studied ArcGIS Pro for seven weeks as a completely new skill. The course gave me valuable knowledge and inspired me to learn more about data analysis, map creation, and GIS. ArcGIS Pro is a powerful tool for useful work such as environmental monitoring and social mapping, and the course motivated me to keep developing my skills."],
  ["បន្ទាប់ពីខ្ញុំបានបញ្ចប់ ArcMap និង QGIS ជាមួយនឹងសាលា Khmer GRS Academy ខ្ញុំអាចយកវាមកធ្វើផែនទីផ្សេងៗទៅតាមតម្រូវការបាន។ នេះក៏ដោយសារតែការបង្រៀនរបស់លោកគ្រូនៅ Khmer GRS Academy បានបង្រៀនដោយយកចិត្តទុកដាក់ ពន្យល់ក្បោះក្បាយច្បាស់ល្អទៅលើ Tool និងមុខងារនីមួយៗនៅក្នុងកម្មវីធី ហើយក៏មានមេរៀនគ្រប់គាន់ក្នុងការបង្រៀនផងដែរ។ ក្នុងឱកាសនេះខ្ញុំបាទសូមអរគុណលោកគ្រូដែលបានបង្ហាត់បង្រៀនដល់រូបខ្ញុំ និងនិស្សិតផ្សេងៗទៀត។ សូមជួនពរលោកគ្រូនៅក្នុងសាលា Khmer GRS Academy ទាំងអស់ជួបតែសេចក្តីសុខសេចក្តីចម្រើន។", "After completing ArcMap and QGIS courses at Khmer GRS Academy, I can now create different maps for practical needs. The instructors teach attentively and explain every tool and function clearly, supported by comprehensive lessons. I am grateful to the instructors for teaching me and the other students."],
  ["ក្នុងនាមខ្ញុំជាកូនសិស្សដែលធ្លាប់បានសិក្សារៀនសូត្រនៅក្នុងសាលា Khmer GRS Academy ខ្ញុំពិតជាពេញចិត្តខ្លាំងណាស់សម្រាប់កាផ្ដល់ឱកាសឲ្យសិស្សានុសិស្សបានសិក្សាអំពីជំនាញ GIS ដែលជាជំនាញមួយដែលពេញនិយមនៅក្នុងវិស័យឌីជីថល។ នៅក្នុងកាបង្រៀនរបស់លោកគ្រូគឺពិតជាល្អក្នុងការពន្យល់មេរៀនយ៉ាងក្បោះក្បាយដល់សិស្សានុសិស្ស និងបានយកចិត្តទុកដាក់ដល់សិស្សានុសិស្សគ្រាប់ៗគ្នា មិនតែប៉ុណ្ណោះលោគ្រូក៏បានលើកទឹកចិត្តឲ្យកូនសិស្សប្រឹងសិក្សារៀនសូ្រត។ ជាចុងក្រោយខ្ញុំសូមអរគុណដល់លោកគ្រូ សូមឲ្យលោកគ្រូជួបតែសំណាងល្អនៅក្នុងជីវិត។", "As a former Khmer GRS Academy student, I greatly value the opportunity to learn GIS, an important skill in the digital field. The instructor explains lessons thoroughly, gives every student close attention, and encourages us to work hard. I am sincerely grateful for the teaching and support."],

  ["កម្មវិធីរបស់ KGA សម្រាប់ការងារ GIS ជាក់ស្តែង", "KGA Programs for Real GIS Work"],
  ["កម្មវិធី និងឧបករណ៍ដែលបង្កើតឡើងសម្រាប់អ្នកជំនាញ GIS ដើម្បីបង្កើនល្បឿន ភាពងាយស្រួល និងគុណភាពការងារ។ ជ្រើសកម្មវិធីខាងក្រោម ដើម្បីមើលព័ត៌មានលម្អិតមុនចូលទៅកាន់ទំព័ររបស់កម្មវិធីនីមួយៗ។", "Programs and tools built for GIS professionals to work faster, easier, and with higher quality. Choose a program below to review the details before opening each program page."],
  ["កម្មវិធីសកម្ម", "Active programs"],
  ["ការងារ GIS", "GIS work"],
  ["គោលដៅ", "Purpose"],
  ["ប្រើប្រាស់ជាក់ស្តែង", "Practical use"],
  ["ផលិតកម្ម", "Production"],
  ["កំពុងមើល", "Now viewing"],
  ["ទៅកាន់កម្មវិធី", "Open program"],
  ["KGA Toolbox ជួយកាត់បន្ថយការងារដដែលៗ ពង្រឹងគុណភាពទិន្នន័យ និងបង្កើនល្បឿនការផលិតផែនទីសម្រាប់អ្នកជំនាញ GIS។", "KGA Toolbox reduces repetitive work, improves data quality, and speeds up map production for GIS professionals."],
  ["កម្មវិធីនេះត្រូវបានបង្កើតឡើងសម្រាប់ការងារ GIS ប្រចាំថ្ងៃ និងការងារផលិតកម្មដែលត្រូវការភាពត្រឹមត្រូវ។ វាជួយសម្រួលលំហូរការងារផែនទីកាដាស្ត្រ ការត្រួតពិនិត្យ topology ការរៀបចំទិន្នន័យ និងការធ្វើស្វ័យប្រវត្តិកម្មក្នុង ArcGIS Pro។", "This program is built for daily GIS work and production tasks that require accuracy. It supports cadastral mapping workflows, topology checks, data preparation, and automation inside ArcGIS Pro."],
  ["ផលិតផែនទីលឿនជាងមុន", "Produce maps faster"],
  ["កាត់បន្ថយជំហានធ្វើដដែលៗក្នុងការរៀបចំទិន្នន័យ និង layout។", "Reduce repeated steps in data preparation and layout work."],
  ["គ្រប់គ្រងគុណភាពទិន្នន័យ", "Control data quality"],
  ["ជួយពិនិត្យកំហុស និងរក្សាស្តង់ដារទិន្នន័យ GIS។", "Help check errors and maintain GIS data standards."],
  ["បង្កើត workflow ជាប្រព័ន្ធ", "Build consistent workflows"],
  ["ធ្វើឱ្យក្រុមការងារអាចអនុវត្តលំហូរការងារដូចគ្នា។", "Help teams follow the same workflow."],
  ["សម្រាប់អ្នកជំនាញ GIS", "For GIS professionals"],
  ["រចនាសម្រាប់ការងារផលិតកម្ម ផែនទីដីធ្លី និងការវិភាគទិន្នន័យ។", "Designed for production work, land mapping, and data analysis."],
  ["KGA Geodigitizer ផ្តល់ផ្ទាំង Web-GIS ងាយប្រើ សម្រាប់គូសបង្កើតទិន្នន័យចំណុច ខ្សែ និងពហុកោណ ដោយមិនចាំបាច់រៀបចំកម្មវិធីស្មុគស្មាញ។", "KGA Geodigitizer provides an easy Web-GIS interface for creating point, line, and polygon data without complex software setup."],
  ["កម្មវិធីនេះសមស្របសម្រាប់អ្នកដែលត្រូវការបង្កើតទិន្នន័យ GIS ពី browser ដោយផ្តោតលើភាពងាយស្រួល ល្បឿន និងលទ្ធផលដែលអាចយកទៅប្រើបន្តក្នុងការងារ GIS។", "This program is suited for users who need to create GIS data from a browser, with a focus on ease of use, speed, and outputs that can continue into GIS workflows."],
  ["ចាប់ផ្តើមបានលឿន", "Start quickly"],
  ["បើកតាម browser ហើយចាប់ផ្តើមគូសទិន្នន័យបានភ្លាមៗ។", "Open it in a browser and start digitizing data right away."],
  ["គាំទ្រទម្រង់ GIS សំខាន់ៗ", "Supports key GIS geometry"],
  ["បង្កើតចំណុច ខ្សែ និងពហុកោណសម្រាប់ការងារផែនទី។", "Create points, lines, and polygons for mapping work."],
  ["ងាយស្រួលសម្រាប់ក្រុមការងារ", "Easy for teams"],
  ["ផ្ទាំងប្រើប្រាស់រៀបចំឱ្យងាយយល់សម្រាប់អ្នកប្រើថ្មី។", "The interface is organized to be easy for new users to understand."],
  ["ប្រើបានក្នុងការងារជាក់ស្តែង", "Ready for practical work"],
  ["ជួយប្រមូល និងរៀបចំទិន្នន័យដំបូងសម្រាប់គម្រោង GIS។", "Helps collect and prepare initial data for GIS projects."],
  ["នឹងមាននៅពេលអនាគត", "Available in the future"],
  ["GeoLayout Studio នឹងមាននៅពេលអនាគត។", "GeoLayout Studio will be available in the future."],
  ["GeoLayout Studio នឹងមាននៅពេលអនាគត។ ព័ត៌មានលម្អិតនឹងត្រូវបានបន្ថែមនៅពេលក្រោយ។", "GeoLayout Studio will be available in the future. Details will be added later."],
  ["ព័ត៌មានលម្អិតនឹងត្រូវបានបន្ថែមនៅពេលក្រោយ។", "Details will be added later."],

  // Products and previews
  ["កម្មវិធីរបស់ KGA", "KGA Programs"],
  ["កម្មវិធី និងឧបករណ៍ដែលបង្កើតឡើងសម្រាប់អ្នកជំនាញ GIS ដើម្បីបង្កើនល្បឿន ភាពងាយស្រួល និងគុណភាពការងារ។", "Programs and tools built for GIS professionals to work faster, easier, and with higher quality."],
  ["មើលកម្មវិធីទាំងអស់", "View all programs"],
  ["ឧបករណ៍ ArcGIS Pro", "ArcGIS Pro Tools"],
  ["ឧបករណ៍ GIS កម្រិតវិស្វកម្មសម្រាប់ ArcGIS Pro", "Engineering-grade GIS tools for ArcGIS Pro"],
  ["បណ្តុំឧបករណ៍សម្រាប់កម្មវិធី ArcGIS Pro ពីការគ្រប់គ្រងទិន្នន័យធម្មតា រហូតដល់ការផលិតផែនទីកម្រិតជំនាញ។", "A collection of ArcGIS Pro tools for everything from routine data management to professional map production."],
  ["ការងារផែនទីកាដាស្ត្រ", "Cadastral mapping workflows"],
  ["ពិនិត្យគុណភាពទិន្នន័យ", "Data quality checks"],
  ["ស្វ័យប្រវត្តិកម្មលំហូរការងារ", "Workflow automation"],
  ["ភ្ជាប់ជាមួយ ArcGIS Pro", "ArcGIS Pro integration"],
  ["មើល KGA Toolbox", "View KGA Toolbox"],
  ["គូសបង្កើតទិន្នន័យ GIS បានលឿន និងងាយស្រួល", "Create GIS data quickly and easily"],
  ["Web-GIS សម្រាប់គូសបង្កើតទិន្នន័យ GIS ដូចជា ចំណុច ខ្សែ និងពហុកោណ បានលឿន និងមានភាពងាយស្រួល។", "A Web-GIS application for quickly and easily creating point, line, and polygon data."],
  ["គូសទិន្នន័យបានងាយស្រួល", "Convenient digitizing"],
  ["បង្កើតទិន្នន័យបានលឿន", "Fast data creation"],
  ["លទ្ធផលមានភាពត្រឹមត្រូវ", "Accurate output"],
  ["ផ្ទាំងប្រើប្រាស់ងាយយល់", "Easy-to-use interface"],
  ["មើល KGA Geodigitizer", "View KGA Geodigitizer"],
  ["បណ្តុំឧបករណ៍សម្រាប់កម្មវិធី ArcGIS Pro — ពីការគ្រប់គ្រងទិន្នន័យធម្មតា រហូតដល់ការផលិតផែនទីកម្រិតជំនាញ។", "A collection of ArcGIS Pro tools for everything from routine data management to professional map production."],
  ["Web-GIS សម្រាប់គូសបង្កើតទិន្នន័យ GIS ដូចជា​ ចំនុច ខ្សែ និងពហុកោណ បានលឿន និងមានភាពងាយស្រួល", "A Web-GIS application for quickly and easily creating point, line, and polygon data."],
  ["ផលិតផលរបស់យើង", "Our Products"],
  ["ឧបករណ៍ដែលបង្កើតឡើងសម្រាប់អ្នកជំនាញ GIS ដើម្បីបង្កើនល្បឿន និងគុណភាពនៃការងារ។", "Tools built for GIS professionals to improve the speed and quality of their work."],
  ["មាតិកាថ្មីៗ ពី KGA", "Latest from KGA"],
  ["វីដេអូ tutorials, tips & tricks, និងព័ត៌មានថ្មីៗស្តីពីពិភព GIS។", "Video tutorials, tips and tricks, and the latest news from the world of GIS."],
  ["អានបន្ថែម", "Read More"],
  ["មើលអត្ថបទទាំងអស់", "View All Articles"],
  ["១០ Shortcuts ក្នុង ArcGIS Pro ដែលអ្នកគួរដឹង", "10 ArcGIS Pro Shortcuts You Should Know"],
  ["ប្រើ shortcuts ទាំងនេះ ដើម្បីកាត់បន្ថយពេលវេលាក្នុងការធ្វើផែនទី និងវិភាគទិន្នន័យ។", "Use these shortcuts to save time when creating maps and analyzing data."],
  ["QGIS ឬ ArcGIS ? តើគួររៀនកម្មវិធីណា?", "QGIS or ArcGIS: Which Should You Learn?"],
  ["ការប្រៀបធៀបយ៉ាងពេញលេញរវាងកម្មវិធីពេញនិយមទាំងពីរ ដើម្បីជួយអ្នកសម្រេចចិត្ត។", "A complete comparison of these two popular applications to help you decide."],
  ["ការវិភាគទិន្នន័យលំហ ពីដំបូងរហូតចប់", "Spatial Analysis from Start to Finish"],
  ["Tutorial លម្អិតស្តីពីការអនុវត្ត Spatial Analysis ដោយប្រើករណីសិក្សាជាក់ស្តែង។", "A detailed Spatial Analysis tutorial using a practical case study."],
  ["៥ នាទី", "5 min"], ["១២ នាទី", "12 min"], ["២០ នាទី", "20 min"],
  ["ទិន្នន័យ GIS បើកចំហ", "Open GIS Data"],
  ["ទិន្នន័យ GIS ឥតគិតថ្លៃសម្រាប់ការសិក្សា ស្រាវជ្រាវ និងការអនុវត្តជាក់ស្តែង។", "Free GIS data for education, research, and practical applications."],
  ["មើលទិន្នន័យទាំងអស់", "View All Datasets"],
  ["ព្រំដែនខេត្តកម្ពុជា ឆ្នាំ ២០២៦", "Cambodia Province Boundaries 2026"],
  ["ទិន្នន័យព្រំដែនរដ្ឋបាលនៃខេត្តទាំង ២៥ នៃព្រះរាជាណាចក្រកម្ពុជា ធ្វើបច្ចុប្បន្នភាពឆ្នាំ ២០២៦។", "Updated 2026 administrative boundary data for all 25 provinces of Cambodia."],
  ["បណ្តាញផ្លូវភ្នំពេញ", "Phnom Penh Road Network"],
  ["បណ្តាញផ្លូវពេញលេញនៃក្រុងភ្នំពេញ រួមទាំងផ្លូវធំ ផ្លូវតូច និងព័ត៌មានចរាចរណ៍មូលដ្ឋាន។", "A complete Phnom Penh road network including major roads, local streets, and basic traffic information."],
  ["តំបន់ប្រមូលទឹកទន្លេសាប", "Tonle Sap Watershed"],
  ["ព្រំដែនតំបន់ប្រមូលទឹក (watershed) នៃប្រព័ន្ធទន្លេសាប រួមមានដៃទន្លេសំខាន់ៗ។", "Watershed boundaries for the Tonle Sap system, including its major tributaries."],
  ["ព្រំដែនរដ្ឋបាល", "Administrative Boundaries"],
  ["ផ្លូវ និងដឹកជញ្ជូន", "Roads & Transport"],
  ["ទន្លេ និងបឹង", "Rivers & Lakes"],
  ["ផែនទីសណ្ឋានដី", "Topographic Maps"],
  ["ទាំងអស់", "All"],
  ["ការប្រើប្រាស់ដី", "Land Use"],
  ["ប្រជាសាស្ត្រ", "Demographics"],
  ["ឧបករណ៍ និងដំណោះស្រាយ", "Tools & Solutions"],
  ["ឧបករណ៍", "Tool"],
  ["ព្រំដែនរាជធានី-ខេត្តកម្ពុជា", "Cambodia Capital and Provincial Boundaries"],
  ["ទិន្នន័យព្រំដែនរដ្ឋបាលថ្នាក់រាជធានី-ខេត្តនៃប្រទេសកម្ពុជា មាន ២៦ ប៉ូលីហ្គោន (រាជធានី-ខេត្ត ២៥ និងបឹងទន្លេសាប ១)។", "Administrative boundary data for the capital and provinces of Cambodia, containing 26 polygons (25 capital/provinces and Tonle Sap Lake)."],
  ["ព្រំដែនស្រុក និងឃុំ-សង្កាត់កម្ពុជា", "Cambodia District and Commune Boundaries"],
  ["ទិន្នន័យព្រំដែនរដ្ឋបាលមាន ២១៧ ប៉ូលីហ្គោនថ្នាក់ស្រុក និង ១,៧៥៦ ប៉ូលីហ្គោនថ្នាក់ឃុំ។", "Administrative boundary data containing 217 district polygons and 1,756 commune polygons."],
  ["ទិន្នន័យបណ្តាញផ្លូវក្នុងរាជធានីភ្នំពេញចំនួន ៩,៤៣៧ ខ្សែ ដែលបានទាញយកពី OpenStreetMap (OSM)។", "Phnom Penh road network data containing 9,437 line features, sourced from OpenStreetMap (OSM)."],
  ["ទន្លេសំខាន់ៗនៅកម្ពុជា", "Major Rivers of Cambodia"],
  ["ទិន្នន័យផ្ទៃទឹកនៃទន្លេ និងដងទឹកសំខាន់ៗនៅប្រទេសកម្ពុជា មាន ៨៩ ប៉ូលីហ្គោន។", "Surface-water data for the major rivers and waterways of Cambodia, containing 89 polygons."],
  ["ប្លង់គោលប្រើប្រាស់ដីរាជធានីភ្នំពេញ ឆ្នាំ ២០៣៥", "Phnom Penh Land Use Master Plan 2035"],
  ["ផែនទីប្លង់គោលប្រើប្រាស់ដីរាជធានីភ្នំពេញ ឆ្នាំគោលដៅ ២០៣៥ បង្ហាញតំបន់ប្រើប្រាស់ដី បណ្តាញដឹកជញ្ជូន និងគម្រោងអភិវឌ្ឍន៍សំខាន់ៗ។", "The Phnom Penh Land Use Master Plan 2035 shows land-use zones, transport networks, and major development projects."],
  ["សៀវភៅបញ្ជីរាយនាមភូមិសាស្ត្រកម្ពុជា ឆ្នាំ ២០២៣", "Gazetteer of Cambodia 2023"],
  ["សៀវភៅរាយនាមភូមិសាស្ត្រកម្ពុជា ឆ្នាំ ២០២៣ មានឈ្មោះជាភាសាខ្មែរ ឈ្មោះសរសេរជាអក្សរឡាតាំង លេខសម្គាល់ និងកូអរដោនេភូមិសាស្ត្រ។", "The Gazetteer of Cambodia 2023 contains Khmer and Latin-script place names, identifiers, and geographic coordinates."],
  ["បម្លែង MDB ទៅ GDB ដោយមិនចាំបាច់បើក ArcMap", "MDB to GDB without opening ArcMap"],
  ["ឧបករណ៍ប្រភពបើកចំហសម្រាប់បម្លែង Personal Geodatabase ប្រភេទ MDB ទៅជា File Geodatabase ប្រភេទ GDB ដោយមិនចាំបាច់បើក ArcMap។", "An open-source tool for converting MDB Personal Geodatabases to GDB File Geodatabases without opening ArcMap."],
  ["បង្កើតចំណុចពី CSV ដោយមិនចាំបាច់ប្រើកម្មវិធី", "Create Point from CSV without software"],
  ["ឧបករណ៍ប្រភពបើកចំហសម្រាប់បង្កើតទិន្នន័យចំណុចពីកូអរដោនេក្នុងឯកសារ CSV ដោយមិនចាំបាច់ដំឡើងកម្មវិធី GIS។", "An open-source tool for creating point data from CSV coordinates without installing GIS software."],
  ["កញ្ចប់ឧបករណ៍ប្រភពបើកចំហសម្រាប់បន្ថែមស្រទាប់ផែនទីមូលដ្ឋាន Google Satellite ទៅក្នុងការងារ GIS។", "An open-source tool package for adding a Google Satellite basemap layer to a GIS workflow."],
  ["កញ្ចប់ឧបករណ៍ប្រភពបើកចំហសម្រាប់បន្ថែមស្រទាប់ផែនទីមូលដ្ឋាន OpenStreetMap (OSM) ទៅក្នុងការងារ GIS។", "An open-source tool package for adding an OpenStreetMap (OSM) basemap layer to a GIS workflow."],
  ["គម្របព្រៃឈើ ឆ្នាំ ១៩៩៣ - ២០០៦", "Forest Cover 1993 - 2006"],
  ["ទិន្នន័យគម្របព្រៃឈើចន្លោះឆ្នាំ ១៩៩៣ ដល់ ២០០៦ ដែលផ្តល់ជាទម្រង់ File Geodatabase បានបង្ហាប់។", "Forest-cover data for 1993–2006, provided as a compressed File Geodatabase."],
  ["គម្របដី ESRI ឆ្នាំ ២០១៧ - ២០២៥", "ESRI landcover 2017 - 2025"],
  ["ទិន្នន័យរ៉ាស្ទ័រគម្របដីប្រចាំឆ្នាំរបស់ Esri ចាប់ពីឆ្នាំ ២០១៧ ដល់ ២០២៥ ដែលមានឯកសារ GeoTIFF ចំនួន ៩។", "Annual Esri land-cover raster data for 2017–2025, supplied as nine GeoTIFF files."],

  ["ទិន្នន័យកម្ពស់ដីនៃកម្ពុជា (DEM)", "Cambodia Digital Elevation Model (DEM) 30m"],
  ["ទិន្នន័យរ៉ាស្ទ័រ DEM សម្រាប់ប្រទេសកម្ពុជា ដកស្រង់ពី NASA SRTM កាត់តាមព្រំដែនកម្ពុជា និងមានទំហំក្រឡា 30 ម៉ែត្រ។", "Digital elevation model raster for Cambodia derived from NASA SRTM, clipped to the Cambodia boundary with 30 m cell size."],
  ["រ៉ាស្ទ័រ DEM (30ម)", "Raster DEM (30m)"],
  ["សំណុំទិន្នន័យនេះផ្តល់គំរូកម្ពស់ឌីជីថល (DEM) កម្រិត 30 ម៉ែត្រ សម្រាប់ប្រទេសកម្ពុជា ដែលដកស្រង់ពីទិន្នន័យកម្ពស់ NASA SRTM។", "This dataset provides a 30 m digital elevation model (DEM) raster for Cambodia, derived from NASA SRTM elevation data."],
  ["ទិន្នន័យរ៉ាស្ទ័រនេះត្រូវបានកាត់តាមព្រំដែនប្រទេសកម្ពុជា និងប្រើប្រព័ន្ធកូអរដោនេ WGS 1984 / UTM Zone 48N។", "The raster has been clipped to the Cambodia boundary and uses WGS 1984 / UTM Zone 48N projection."],
  ["ព័ត៌មានសំណុំទិន្នន័យ", "Dataset information"],
  ["ប្រភេទទិន្នន័យ៖ Raster។ ទំហំក្រឡា៖ 30 ម៉ែត្រ។ ប្រភព៖ NASA SRTM។ អាជ្ញាបណ្ណ៖ ប្រភពបើកចំហ។", "Data type: Raster. Cell size: 30 m. Source: NASA SRTM. License: Open Source."],
  ["មិនរកឃើញទិន្នន័យ", "Dataset not found"],
  ["← ត្រលប់ទៅ OpenKGA", "← Back to OpenKGA"],
  ["ព័ត៌មានទិន្នន័យ", "Dataset Information"],
  ["ទិន្នន័យពាក់ព័ន្ធ", "Related Datasets"],
  ["សំណុំទិន្នន័យនេះជាប៉ូលីហ្គោនព្រំដែនរដ្ឋបាលនៃរាជធានី និងខេត្តទាំង ២៥ របស់ប្រទេសកម្ពុជា ព្រមទាំងប៉ូលីហ្គោនបឹងទន្លេសាប។", "This dataset contains administrative-boundary polygons for the capital and 25 provinces of Cambodia, plus a polygon for Tonle Sap Lake."],
  ["ទិន្នន័យត្រូវបានផ្តល់ដោយក្រសួងរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់ (MLMUPC) ហើយប្រើប្រព័ន្ធកូអរដោនេ WGS 84 / UTM Zone 48N។", "The data was provided by the Ministry of Land Management, Urban Planning and Construction (MLMUPC) and uses WGS 84 / UTM Zone 48N."],
  ["តារាងគុណលក្ខណៈរួមមាន៖ លេខកូដរាជធានី-ខេត្ត (Pro_Code), ឈ្មោះជាភាសាខ្មែរ (Name_Kh), ឈ្មោះសរសេរជាអក្សរឡាតាំង (Name_Li), ឈ្មោះជាភាសាអង់គ្លេស (Name_En), ប្រភេទរដ្ឋបាល (Class), ប្រវែងបរិមាត្រ (Shape_Leng) និងផ្ទៃក្រឡា (Shape_Area)។", "The attribute table includes the capital/province code (Pro_Code), Khmer name (Name_Kh), Latin-script name (Name_Li), English name (Name_En), administrative class (Class), perimeter (Shape_Leng), and area (Shape_Area)."],
  ["សំណុំទិន្នន័យនេះមានពីរស្រទាប់៖ District_Boundary ចំនួន ២១៧ ប៉ូលីហ្គោន និង Commune_poly ចំនួន ១,៧៥៦ ប៉ូលីហ្គោន។", "This dataset contains two layers: District_Boundary with 217 polygons and Commune_poly with 1,756 polygons."],
  ["ស្រទាប់ទាំងពីរប្រើប្រព័ន្ធកូអរដោនេ WGS 84 / UTM Zone 48N ហើយប្រភពដើមមិនត្រូវបានបញ្ជាក់។", "Both layers use WGS 84 / UTM Zone 48N. The original source is not specified."],
  ["District_Boundary រួមមាន Pro_Code, Dist_Code, Name_Kh, Name_En, Name_Kh_Lm និង Class។ Commune_poly រួមមាន Class, Pro_Code, Dist_Code, Com_Code, Name_Kh, Name_En និង Name_Kh_Lm។", "District_Boundary includes Pro_Code, Dist_Code, Name_Kh, Name_En, Name_Kh_Lm, and Class. Commune_poly includes Class, Pro_Code, Dist_Code, Com_Code, Name_Kh, Name_En, and Name_Kh_Lm."],
  ["សំណុំទិន្នន័យនេះបង្ហាញបណ្តាញផ្លូវក្នុងរាជធានីភ្នំពេញជាទម្រង់បន្ទាត់ (polyline)។", "This dataset represents the Phnom Penh road network as polylines."],
  ["ទិន្នន័យមានប្រភពពី OpenStreetMap (OSM) និងប្រើប្រព័ន្ធកូអរដោនេ WGS 84 / UTM Zone 48N។", "The data is sourced from OpenStreetMap (OSM) and uses WGS 84 / UTM Zone 48N."],
  ["តារាងគុណលក្ខណៈរួមមាន osm_id, highway, tracktype, ref, name, name_km, name_en, oneway, surface, source និង Shape_Leng។", "The attribute table includes osm_id, highway, tracktype, ref, name, name_km, name_en, oneway, surface, source, and Shape_Leng."],
  ["សំណុំទិន្នន័យនេះបង្ហាញផ្ទៃទឹកនៃទន្លេ និងដងទឹកសំខាន់ៗនៅប្រទេសកម្ពុជា ជាទម្រង់ប៉ូលីហ្គោន។", "This dataset represents the surface water of major rivers and waterways in Cambodia as polygons."],
  ["ទិន្នន័យប្រើប្រព័ន្ធកូអរដោនេ WGS 84 / UTM Zone 48N ហើយប្រភពដើមមិនត្រូវបានបញ្ជាក់។", "The data uses WGS 84 / UTM Zone 48N. The original source is not specified."],
  ["តារាងគុណលក្ខណៈរួមមានប្រវែងបរិមាត្រ (Shape_Leng) និងផ្ទៃក្រឡា (Shape_Area)។", "The attribute table includes perimeter (Shape_Leng) and area (Shape_Area)."],
  ["ផែនទីរ៉ាស្ទ័រនេះបង្ហាញចក្ខុវិស័យប្រើប្រាស់ដីរាជធានីភ្នំពេញរហូតដល់ឆ្នាំ ២០៣៥ រួមមានតំបន់ទីក្រុង តំបន់បៃតង តំបន់ទឹក បណ្តាញដឹកជញ្ជូន និងតំបន់អភិវឌ្ឍន៍។", "This raster map presents the Phnom Penh land-use vision through 2035, including urban, green, water, transport, and development zones."],
  ["ទំហំរូបភាព 4,927 × 3,479 pixels, 300 DPI, មាត្រដ្ឋាន 1:50,000 និងក្រឡាចត្រង្គ 1 សង់ទីម៉ែត្រ ស្មើ 500 ម៉ែត្រ។ ផែនទីបង្ហាញក្រឡាចត្រង្គ UTM Zone 48N ប៉ុន្តែមិនបានបញ្ជាក់ datum នៅលើរូបភាពដែលបានផ្តល់។", "The image is 4,927 × 3,479 pixels at 300 DPI and a scale of 1:50,000, where 1 centimetre on the grid equals 500 metres. It shows a UTM Zone 48N grid, but the datum is not specified."],
  ["សៀវភៅ Gazetteer of Cambodia បោះពុម្ពខែតុលា ឆ្នាំ ២០២៣ មាន ៤៩៩ ទំព័រ និងរៀបចំដោយនាយកដ្ឋានភូមិសាស្ត្រ នៃអគ្គនាយកដ្ឋានសុរិយោដី និងភូមិសាស្ត្រ ក្រសួងរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់។", "The Gazetteer of Cambodia was published in October 2023, contains 499 pages, and was prepared by the Department of Geography under the General Department of Cadastre and Geography, Ministry of Land Management, Urban Planning and Construction."],
  ["ឯកសារនេះផ្តល់ឈ្មោះជាភាសាខ្មែរ និងអក្សរឡាតាំង លេខសម្គាល់ ព្រមទាំងកូអរដោនេភូមិសាស្ត្រនៃទីតាំងរដ្ឋបាល។", "The document provides Khmer and Latin-script names, identifiers, and geographic coordinates for administrative locations."],
  ["គ្របដណ្តប់រាជធានី-ខេត្ត ២៥, ក្រុង-ស្រុក-ខណ្ឌ ២០៨, ឃុំ-សង្កាត់ ១,៦៥២ និងភូមិ ១៤,៥៩៥ សរុប ១៦,៤៨០ ទីតាំង។", "Coverage includes 25 capital/provinces, 208 municipalities/districts/khans, 1,652 communes/sangkats, and 14,595 villages, for a total of 16,480 locations."],
  ["ប្រើឧបករណ៍ប្រភពបើកចំហនេះ ដើម្បីបម្លែងទិន្នន័យ Microsoft Access Personal Geodatabase (.mdb) ទៅជា File Geodatabase (.gdb) ដោយមិនចាំបាច់បើក ArcMap។", "Use this open-source tool to convert Microsoft Access Personal Geodatabase (.mdb) data to File Geodatabase (.gdb) without opening ArcMap."],
  ["ប្រើឧបករណ៍ប្រភពបើកចំហនេះ ដើម្បីបង្កើតទិន្នន័យចំណុចពីវាលកូអរដោនេក្នុងឯកសារ CSV ដោយមិនចាំបាច់ដំឡើង ឬបើកកម្មវិធី GIS។", "Use this open-source tool to create point data from coordinate fields in a CSV file without installing or opening GIS software."],
  ["ប្រើកញ្ចប់ប្រភពបើកចំហនេះ ដើម្បីបន្ថែម និងប្រើប្រាស់ស្រទាប់ផែនទីមូលដ្ឋាន Google Satellite ក្នុងការងារ GIS របស់អ្នក។", "Use this open-source package to add and access a Google Satellite basemap layer in your GIS workflow."],
  ["ប្រើកញ្ចប់ប្រភពបើកចំហនេះ ដើម្បីបន្ថែម និងប្រើប្រាស់ស្រទាប់ផែនទីមូលដ្ឋាន OpenStreetMap (OSM) ក្នុងការងារ GIS របស់អ្នក។", "Use this open-source package to add and access an OpenStreetMap (OSM) basemap layer in your GIS workflow."],
  ["សំណុំទិន្នន័យនេះមានព័ត៌មានគម្របព្រៃឈើសម្រាប់ឆ្នាំ ១៩៩៣–២០០៦ និងចែកចាយជា Esri File Geodatabase ដែលបានបង្ហាប់។", "This dataset contains forest-cover information for 1993–2006 and is distributed as a compressed Esri File Geodatabase."],
  ["សំណុំទិន្នន័យនេះមានរ៉ាស្ទ័រគម្របដីប្រចាំឆ្នាំចំនួន ៩ សម្រាប់ឆ្នាំ ២០១៧–២០២៥ ជាទម្រង់ GeoTIFF និងមានភ្ជាប់ឯកសារកូដចំណាត់ថ្នាក់គម្របដី។", "This collection contains nine annual land-cover rasters for 2017–2025 in GeoTIFF format, accompanied by a land-cover class-code file."],
  ["ផែនទីសណ្ឋានដីកម្ពុជាមាត្រដ្ឋាន ១:១០០,០០០ ដែលផ្តល់ជាទិន្នន័យរ៉ាស្ទ័រ ECW ចំនួន ៣ ឯកសារ។", "A 1:100,000-scale topographic map of Cambodia supplied as three ECW raster files."],
  ["សំណុំទិន្នន័យនេះមានផែនទីសណ្ឋានដីកម្ពុជាមាត្រដ្ឋាន ១:១០០,០០០ ចំនួន ៣ ឯកសារ ជាទម្រង់រ៉ាស្ទ័រ ECW។", "This dataset contains three 1:100,000-scale topographic maps of Cambodia in ECW raster format."],
  ["មុន", "Previous"],
  ["បន្ទាប់", "Next"],
  ["មិនមានទិន្នន័យត្រូវនឹងលក្ខខណ្ឌស្វែងរក", "No datasets match your search criteria"],
  ["សូមព្យាយាមផ្លាស់ប្តូរពាក្យស្វែងរក ឬប្រភេទ។", "Try changing your search terms or filters."],
  ["ផែនទីយោងក្រឡាចត្រង្គជាតិកម្ពុជា កំណែរបស់ Khmer GRS Academy (KGA) ដែលផ្តល់ជាឯកសារ PDF។", "The Cambodia National Grid Reference Map, KGA Edition, provided as a PDF document."],
  ["ផែនទីនេះបង្ហាញក្រឡាចត្រង្គយោងជាតិសម្រាប់ប្រទេសកម្ពុជា និងត្រូវបានរៀបចំជាកំណែ KGA សម្រាប់ប្រើប្រាស់ជាឯកសារយោង។", "This map presents the national reference grid for Cambodia and was prepared as the KGA Edition for reference use."],
  ["ឧបករណ៍ KGA Toolbox សម្រាប់ពិនិត្យរកលក្ខណៈដែលត្រួតស៊ីគ្នា (overlap) នៅក្នុងស្រទាប់ទិន្នន័យភូមិសាស្ត្រ។", "A KGA Toolbox tool for checking overlapping features in geospatial data layers."],
  ["ឧបករណ៍នេះជួយស្វែងរក និងពិនិត្យលក្ខណៈដែលត្រួតស៊ីគ្នា ដើម្បីគាំទ្រការត្រួតពិនិត្យគុណភាព និងកែសម្អាតទិន្នន័យនៅក្នុង ArcGIS Pro។", "This tool finds and checks overlapping features to support data quality control and cleanup in ArcGIS Pro."],
  ["ឧបករណ៍ Batch សម្រាប់បង្កើត និងស្រង់ឯកសារបង្ហាប់ជាច្រើនក្នុងពេលតែមួយ ដោយប្រើការអូសនិងទម្លាក់ និងមិនចាំបាច់បើកកម្មវិធីបង្ហាប់។", "Batch tools for creating and extracting multiple archives with drag and drop, without opening an archive application."],
  ["Archive Tool មានឧបករណ៍ពីរ៖ ZipMultipleFilesAtOnce.bat សម្រាប់បង្កើត ZIP, 7Z ឬ RAR និង ExtractMultipleZipfileAtOnce.bat សម្រាប់ស្រង់ឯកសារបង្ហាប់ជាច្រើនក្នុងពេលតែមួយ។", "Archive Tool contains two utilities: ZipMultipleFilesAtOnce.bat creates ZIP, 7Z, or RAR archives, while ExtractMultipleZipfileAtOnce.bat extracts multiple archives at once."],
  ["របៀបបង្កើតឯកសារបង្ហាប់", "How to create archives"],
  ["ចុចពីរដងលើ ZipMultipleFilesAtOnce.bat អូសឯកសារ ឬថតឯកសារចូលក្នុងផ្ទាំង Console ហើយចុច Enter។ ជ្រើស ZIP, 7Z ឬ RAR ជ្រើសបង្កើតជាឯកសាររួមមួយ ឬបំបែកតាមធាតុនីមួយៗ កំណត់ថតគោលដៅ រួចពិនិត្យសេចក្តីសង្ខេប និងចុច Enter ដើម្បីដំណើរការ។", "Double-click ZipMultipleFilesAtOnce.bat, drag files or folders into the console, and press Enter. Choose ZIP, 7Z, or RAR; choose one combined archive or a separate archive per item; select a destination; review the summary; then press Enter to run."],
  ["របៀបស្រង់ឯកសារចេញ", "How to extract archives"],
  ["ចុចពីរដងលើ ExtractMultipleZipfileAtOnce.bat អូសឯកសារ ZIP, 7Z ឬ RAR ចូល ហើយចុច Enter។ ជ្រើសស្រង់នៅក្បែរឯកសារដើម ឬទៅថតដែលអ្នកកំណត់ បន្ទាប់មកជ្រើសថតរងដាច់ដោយឡែកសម្រាប់ឯកសារនីមួយៗ (បានណែនាំ) ឬស្រង់ផ្ទាល់ ហើយបញ្ជាក់ដើម្បីដំណើរការ។", "Double-click ExtractMultipleZipfileAtOnce.bat, drag in ZIP, 7Z, or RAR files, and press Enter. Extract beside each archive or to a chosen folder, then use a separate subfolder per archive (recommended) or extract directly, and confirm to run."],
  ["តម្រូវការកម្មវិធី", "Software requirements"],
  ["ZIP អាចប្រើបានជានិច្ចតាម Windows PowerShell។ ដំឡើង 7-Zip ដើម្បីបង្កើត និងស្រង់ 7Z និងស្រង់ RAR។ WinRAR ត្រូវការសម្រាប់ការបង្កើត RAR ប៉ុណ្ណោះ។", "ZIP always works through Windows PowerShell. Install 7-Zip to create and extract 7Z and to extract RAR. WinRAR is required only to create RAR archives."],
  ["ពុម្ពអក្សរ", "Font"],
  ["ពុម្ពអក្សរខ្មែរ ESRI North ជាទម្រង់ TrueType សម្រាប់ដំឡើង និងប្រើប្រាស់ក្នុងកម្មវិធីដែលគាំទ្រឯកសារ TTF។", "ESRI North Khmer is a TrueType font for installation and use in applications that support TTF files."],
  ["កញ្ចប់នេះផ្តល់ពុម្ពអក្សរខ្មែរ ESRI North ជាឯកសារ TrueType (.ttf) សម្រាប់ដំឡើង និងប្រើប្រាស់ក្នុងកម្មវិធីដែលគាំទ្រពុម្ពអក្សរ TTF។", "This package provides the ESRI North Khmer font as a TrueType (.ttf) file for installation and use in applications that support TTF fonts."],
  ["ផែនទីកម្ពុជារចនាប័ទ្មបុរាណ ដែលរៀបចំជាធនធានផែនទីសម្រាប់មើល ប្រើប្រាស់ និងចែករំលែក។", "A vintage-style map of Cambodia prepared as a map resource for viewing, use, and sharing."],
  ["ធនធាននេះផ្តល់ផែនទីប្រទេសកម្ពុជារចនាប័ទ្មបុរាណ ដែលរៀបចំដោយ Khmer GRS Academy (KGA) សម្រាប់ការមើល ឯកសារយោង និងការប្រើប្រាស់ទូទៅ។", "This resource provides a vintage-style map of Cambodia prepared by Khmer GRS Academy (KGA) for viewing, reference, and general use."],
  ["ឧបករណ៍ KML Handler", "KML Handler tools"],
  ["ឧបករណ៍ ArcGIS Toolbox ប្រភពបើកចំហពី Khmer GRS Academy (KGA) សម្រាប់គ្រប់គ្រងលំហូរការងារ KML និង KMZ ក្នុង ArcGIS Pro។", "Open-source ArcGIS toolbox tools from Khmer GRS Academy (KGA) for handling KML and KMZ workflows in ArcGIS Pro."],
  ["ឧបករណ៍ KML Handler គឺជាកញ្ចប់ ArcGIS Toolbox (.atbx) ប្រភពបើកចំហពី Khmer GRS Academy (KGA) សម្រាប់ធ្វើការជាមួយទិន្នន័យ KML និង KMZ ក្នុង ArcGIS Pro។", "KML Handler tools is an open-source ArcGIS Toolbox (.atbx) package from Khmer GRS Academy (KGA) for working with KML and KMZ data in ArcGIS Pro."],
  ["មើលវីដេអូបង្ហាញ", "Watch demo"],
  // Contact and footer
  ["លេខទំនាក់ទំនង", "Phone Number"],
  ["អាស័យដ្ឋានអ៉ីម៉ែល", "Email Address"],
  ["ទីតាំង", "Location"],
  ["អាគារលេខ៤៨ ផ្លូវ២៨៩ សង្កាត់បឹងកក់២ ខណ្ឌទួលគោក រាជធានីភ្នំពេញ", "Building 48, Street 289, Boeung Kak 2, Tuol Kork, Phnom Penh"],
  ["មកយើងខ្ញុំ", "Us"],
  ["សាកសួរព័ត៌មានបន្ថែម", "Request More Information"],
  ["លោកអ្នកក៏អាចផ្ញើសារមកកាន់យើងខ្ញុំផ្ទាល់តាមរយៈ Telegram ផងដែរ។", "You can also send us a direct message through Telegram."],
  ["ផ្ញើសារតាម Telegram", "Message Us on Telegram"],
  ["វេទិកាសិក្សា GIS លំដាប់វិជ្ជាជីវៈជាភាសាខ្មែរ — ពីមូលដ្ឋានគ្រឹះរហូតដល់កម្រិតជឿនលឿន ដើម្បីផ្តល់សមត្ថភាពដល់អ្នកវិភាគទិន្នន័យលំហ។", "A professional GIS learning platform—from fundamentals to advanced skills—built to empower spatial data analysts."],
  // Course announcement page
  ["វគ្គសិក្សាជំនាញគ្រប់គ្រងទិន្នន័យភូមិសាស្ត្រ និងការផលិតផែនទី", "GIS Data Management and Map Production Course"],
  ["ជំនាន់ថ្មី ឆ្នាំ២០២៦", "New Cohort 2026"],
  ["កំពុងបើកចុះឈ្មោះ", "Registration Open"],
  ["នឹងបើកចុះឈ្មោះ", "Registration Opening Soon"],
  ["៩ ឧសភា ២០២៦", "9 May 2026"],
  ["១១ ឧសភា ២០២៦", "11 May 2026"],
  ["១៥ មិថុនា ២០២៦", "15 June 2026"],
  ["១ កក្កដា ២០២៦", "1 July 2026"],
  ["៨ សប្តាហ៍", "8 weeks"],
  ["៦ សប្តាហ៍", "6 weeks"],
  ["ច័ន្ទ - អង្គារ - ពុធ / សៅរ៍ - អាទិត្យ", "Monday–Wednesday / Saturday–Sunday"],
  ["ច័ន្ទ - ពុធ - សុក្រ", "Monday–Wednesday–Friday"],
  ["អង្គារ - ព្រហស្បតិ៍", "Tuesday–Thursday"],
  ["ច័ន្ទ • អង្គារ • ពុធ", "Monday • Tuesday • Wednesday"],
  ["សៅរ៍ • អាទិត្យ", "Saturday • Sunday"],
  ["ថ្នាក់ផ្ទាល់ + Online", "In Person + Online"],
  ["១៨:៣០ - ២០:៣០ / ០៨:០០ - ១១:០០", "6:30 PM–8:30 PM / 8:00 AM–11:00 AM"],
  ["១៨:០០ - ២០:០០", "6:00 PM–8:00 PM"],
  ["១៨:៣០ - ២០:៣០", "6:30 PM–8:30 PM"],
  ["កន្លែងមានកំណត់", "Limited Seats"],
  ["១៥ កន្លែង", "15 seats"],
  ["១៣៩ $", "$139"],
  ["១២៩ $", "$129"],
  ["ទទួលបាន KGA Toolbox License រយៈពេល ១ឆ្នាំ ឥតគិតថ្លៃ", "Receive a free 1-year KGA Toolbox License"],
  ["សិក្សាលើមូលដ្ឋានគ្រឹះ GIS ពីដំបូង", "Learn GIS fundamentals from the beginning"],
  ["ផលិតផែនទីតាមស្តង់ដារ និងទាក់ទាញ", "Create professional, visually engaging maps"],
  ["អនុវត្តលើ Tools សំខាន់ៗរបស់ ArcGIS Pro", "Practice with essential ArcGIS Pro Tools"],
  ["វិញ្ញាបនបត្របញ្ចប់វគ្គសិក្សា", "Course Completion Certificate"],
  ["ការផ្តល់ជូនពិសេស", "Special Offer"],
  ["ចុះឈ្មោះថ្ងៃនេះ ទទួលបានកញ្ចប់ KGA Toolbox License រយៈពេល ១ឆ្នាំពេញ ដោយឥតគិតថ្លៃ!", "Enroll today and receive a full 1-year KGA Toolbox License for free!"],
  ["វគ្គសិក្សាអនឡាញ", "Online Course"],
  ["វគ្គសិក្សាផ្ទាល់", "In-Person Course"],
  ["១៨:៣០ - ២០:៣០ យប់", "6:30 PM–8:30 PM"],
  ["០៨:០០ - ១១:០០ ព្រឹក", "8:00 AM–11:00 AM"],
  ["សិក្សាលើមូលដ្ឋានគ្រឹះ GIS", "Learn GIS Fundamentals"],
  ["សិក្សាពីការបង្កើត និងការប្រើប្រាស់ទិន្នន័យ Vector", "Create and Work with Vector Data"],
  ["សិក្សាពីការគ្រប់គ្រង និងការវិភាគទិន្នន័យ Raster", "Manage and Analyze Raster Data"],
  ["អនុវត្តប្រើប្រាស់ Tools សំខាន់ៗ ក្នុងកម្មវិធី ArcGIS Pro", "Practice Essential Tools in ArcGIS Pro"],
  ["សិក្សា និងអនុវត្តការគ្រប់គ្រងទិន្នន័យ", "Learn and Practice Data Management"],
  ["សិក្សា និងអនុវត្តការផលិតផែនទីតាមស្តង់ដារ និងទាក់ទាញ", "Create Professional, Visually Engaging Maps"],
  ["រៀនប្រើប្រាស់លទ្ធផល សម្រាប់ការងារជាក់ស្តែង", "Apply Your Results to Real-World Work"],
  ["កញ្ចប់ License KGA Toolbox រយៈពេល ១ឆ្នាំពេញ ឥតគិតថ្លៃ", "Free Full 1-Year KGA Toolbox License"],
  ["ឯកសារបង្រៀន និងទិន្នន័យអនុវត្ត", "Learning Materials and Practice Data"],
  ["ការគាំទ្រពីគ្រូបង្រៀនពេញមួយវគ្គសិក្សា", "Instructor Support Throughout the Course"],
  ["*ការផ្តល់ជូនពិសេសនេះ សម្រាប់តែអ្នកចុះឈ្មោះក្នុងកាលវិភាគខាងលើប៉ុណ្ណោះ", "*This special offer is available only to students enrolled in one of the schedules above."],
  ["ទស្សនាមាតិកា KGA Toolbox", "Explore KGA Toolbox Content"],
  ["ទូរស័ព្ទ", "Phone"],
  ["ពង្រឹងសមត្ថភាពផ្នែកភូមិសាស្ត្រឌីជីថលជាមួយយើង ដើម្បីអនាគតការងារកាន់តែប្រសើរ!", "Build your digital geospatial skills with us for a stronger career future!"],
  ["បង្កើតផែនទីពីកម្រិតដំបូង", "Create Maps from the Beginner Level"],
  ["វិភាគទិន្នន័យភូមិសាស្ត្រ (Spatial Analysis)", "Analyze Geospatial Data (Spatial Analysis)"],
  ["កិច្ចការផ្ទះ និងគម្រោងជាក់ស្តែង", "Assignments and Practical Projects"],
  ["ប្រើប្រាស់ QGIS ដោយឥតគិតថ្លៃ", "Use QGIS Free of Charge"],
  ["រៀនពីការគ្រប់គ្រងទិន្នន័យ", "Learn Data Management"],
  ["ផែនទីសម្រាប់ការងារជាក់ស្តែង", "Maps for Real-World Work"],
  ["ឯកសារបង្រៀនជា PDF", "PDF Learning Materials"],
  ["ការប្រកាសវគ្គសិក្សា", "Course Announcements"],
  ["វគ្គសិក្សាដែលកំពុង និងនឹងបើក", "Current and Upcoming Courses"],
  ["ស្វែងរកវគ្គសិក្សាដែលត្រូវនឹងតម្រូវការរបស់អ្នក។ យើងបើកវគ្គសិក្សាថ្មីៗជាប្រចាំ ដើម្បីបម្រើដល់សិស្សគ្រប់កម្រិត។", "Find a course that fits your needs. We regularly open new courses for learners at every level."],
  ["ស្វែងរកវគ្គសិក្សាដែលត្រូវនឹងតម្រូវការរបស់អ្នក។", "Find a course that fits your needs."],
  ["យើងបើកវគ្គសិក្សាថ្មីៗជាប្រចាំ ដើម្បីបម្រើដល់សិស្សគ្រប់កម្រិត។", "We regularly open new courses for learners at every level."],
  ["ថ្ងៃចាប់ផ្តើម", "Start Date"],
  ["រយៈពេល", "Duration"],
  ["ថ្ងៃរៀន", "Class Days"],
  ["ម៉ោងរៀន", "Class Time"],
  ["ទម្រង់រៀន", "Learning Format"],
  ["ចំនួនកន្លែង", "Available Seats"],
  ["អ្វីដែលអ្នកនឹងទទួលបាន", "What You Will Receive"],
  ["តម្លៃ", "Price"],
  ["មើលព័ត៌មានលម្អិត", "View Details"],
  ["ចុះឈ្មោះ", "Register"],
  ["កក់ទុក", "Reserve"],
  ["មិនទាន់ប្រាកដថាគួរជ្រើសរើសវគ្គសិក្សាមួយណា?", "Not Sure Which Course to Choose?"],
  ["ទាក់ទងមកយើងតាមរយៈ Telegram យើងនឹងជួយណែនាំវគ្គសិក្សាដែលត្រូវនឹងគោលដៅ និងកម្រិតរបស់អ្នក។", "Contact us on Telegram and we will recommend a course that matches your goals and experience level."],
  ["ទំនាក់ទំនងតាម Telegram", "Contact Us on Telegram"],
  ["ចុះឈ្មោះឥឡូវនេះ", "Register Now"],
  ["កាលវិភាគចូលរៀន", "Class Schedule"],
  ["ចាប់ផ្តើម", "Starts"],
  ["ម៉ោង", "Time"],
  ["មាតិកាសង្ខេប", "Course Overview"],
  ["ខ្លឹមសារលម្អិតរបស់វគ្គសិក្សា", "Detailed content for the"],
  ["នឹងត្រូវបន្ថែមឆាប់ៗនេះ។", "course will be added soon."],
  ["ព័ត៌មានវគ្គសិក្សា", "Course Information"],
  ["វគ្គសិក្សា ArcGIS Pro កម្រិតខ្ពស់", "Advanced ArcGIS Pro Course"],
  ["វគ្គសិក្សាកម្រិតខ្ពស់", "Advanced Course"],
  ["សូមទាក់ទង", "Contact Us"],
  ["ទាក់ទងសម្រាប់ព័ត៌មាន", "Contact for Details"],
  ["ការរៀបចំ និងគ្រប់គ្រងទិន្នន័យកម្រិតខ្ពស់", "Advanced Data Organization and Management"],
  ["ការវិភាគទិន្នន័យលំហកម្រិតខ្ពស់", "Advanced Spatial Data Analysis"],
  ["ការបង្កើត Model និង workflow ជាមួយ ModelBuilder", "Build Models and Workflows with ModelBuilder"],
  ["ការប្រើប្រាស់ Arcade និង Script Tool", "Use Arcade and Script Tools"],
  ["ការបង្កើតកម្មវិធីដោយភាសា Python", "Develop Applications with Python"],
  ["ការធ្វើស្វ័យប្រវត្តិកម្មលំហូរការងារ", "Automate Workflows"],
  ["ព័ត៌មានសំខាន់ៗរបស់វគ្គសិក្សាមាននៅលើ Poster ខាងលើ។ សូមទាក់ទងមកយើងសម្រាប់កាលវិភាគ តម្លៃ និងការចុះឈ្មោះ។", "Key course information is shown on the poster above. Contact us for schedule, pricing, and registration details."],
];

const TRANSLATIONS = new Map(TRANSLATION_ENTRIES.map(([km, en]) => [normalize(km), en]));

function collectTextNodes(root) {
  if (!root) return [];
  if (root.nodeType === Node.TEXT_NODE) return [root];
  if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) return [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  let node;
  while ((node = walker.nextNode())) nodes.push(node);
  return nodes;
}

function translateTree(root, language) {
  collectTextNodes(root).forEach((node) => {
    const parent = node.parentElement;
    if (!parent || parent.closest("script, style, svg, [data-language-switch]")) return;
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const source = originalText.get(node);
    const key = normalize(source);
    const translated = language === "en" ? TRANSLATIONS.get(key) : null;
    const leading = source.match(/^\s*/)?.[0] || "";
    const trailing = source.match(/\s*$/)?.[0] || "";
    const nextValue = translated ? `${leading}${translated}${trailing}` : source;
    if (node.nodeValue !== nextValue) node.nodeValue = nextValue;
  });
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("km");

  const setLanguage = useCallback((nextLanguage) => {
    const next = nextLanguage === "en" ? "en" : "km";
    setLanguageState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "en") setLanguageState("en");
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    if (window.location.pathname === "/") {
      document.title = language === "en"
        ? "Khmer GRS Academy | GIS Data Management and Mapping Skills"
        : "Khmer GRS Academy | ជំនាញគ្រប់គ្រងទិន្នន័យភូមិសាស្រ្ត និងផែនទី";
    } else if (window.location.pathname === "/program") {
      document.title = language === "en"
        ? "Program | Khmer GRS Academy"
        : "កម្មវិធី | Khmer GRS Academy";
    } else if (window.location.pathname === "/course-announcement") {
      document.title = language === "en"
        ? "Course Announcements | Khmer GRS Academy"
        : "ការប្រកាសវគ្គសិក្សា | Khmer GRS Academy";
    }
    translateTree(document.body, language);
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "characterData") translateTree(mutation.target, language);
        mutation.addedNodes.forEach((node) => translateTree(node, language));
      });
    });
    observer.observe(document.body, { subtree: true, childList: true, characterData: true });
    return () => observer.disconnect();
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language, setLanguage]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
