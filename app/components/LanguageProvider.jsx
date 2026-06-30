"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "kga-language";
const LanguageContext = createContext(null);
const originalText = new WeakMap();

const normalize = (value) => value.replace(/\s+/g, " ").trim();

const TRANSLATION_ENTRIES = [
  // Shared navigation
  ["មុខវិជ្ជា", "Courses"],
  ["មុខវិជ្ជាដែលយើងបង្រៀន", "Subjects We Teach"],
  ["វគ្គសិក្សារបស់យើង", "Our Courses"],
  ["អំពីយើង", "About Us"],
  ["សិស្សរបស់យើង", "Our Students"],
  ["សមិទ្ធផលរបស់យើង", "Our Products"],
  ["ធនធាន", "Resources"],
  ["មាតិកា និងព័ត៌មាន", "Content & News"],
  ["ទិន្នន័យចំហ", "Open Data"],
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

  // Products and previews
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