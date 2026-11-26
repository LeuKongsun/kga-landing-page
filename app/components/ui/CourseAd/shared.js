// Content shared by every course ad page.

export const TELEGRAM_URL = "https://t.me/khmergrsacademy";

export const contacts = [
  { label: "Telegram", value: "t.me/khmergrsacademy", href: TELEGRAM_URL },
  { label: "ទូរស័ព្ទ", value: "081 373 833", href: "tel:+85581373833" },
  { label: "Website", value: "khmergrs.com", href: "https://www.khmergrs.com" },
];

// Real student quotes, shortened from app/components/ui/Testimonials.
export const testimonials = [
  {
    name: "យន់ សក្តិនិកា",
    role: "និស្សិត | TSI",
    avatar: "/students/yun_saknika.jpg",
    quote: "ArcGIS Pro បំផុសឱ្យខ្ញុំចង់ចេះ ចង់ដឹងបន្ថែមអំពីការវិភាគទិន្នន័យ និងការបង្កើតផែនទី។ ក្រោយបញ្ចប់ ខ្ញុំទទួលបានចំណេះដឹង និងប្រយោជន៍ជាច្រើន។",
  },
  {
    name: "សាប អួ",
    role: "និស្សិត | RUPP",
    avatar: "/students/sab_our.jpg",
    quote: "ការបង្រៀនរបស់លោកគ្រូល្អ ច្បាស់ៗ ងាយយល់ ទោះបីជាអ្នកចាប់ផ្តើមថ្មីក៏អាចរៀនបាន។ អ្វីដែលខ្ញុំរៀននៅ KGA ត្រឹមត្រូវច្រើនជាមួយការងារជាក់ស្តែង។",
  },
  {
    name: "សុវត្ថិ វាលី",
    role: "និស្សិត | TSI",
    avatar: "/students/sowath_willy.jpg",
    quote: "ខ្ញុំទទួលបានជំនាញសំខាន់ៗក្នុងការប្រើប្រាស់ ArcGIS Pro ដូចជា បង្កើតនិងកែសម្រួលផែនទី វិភាគទិន្នន័យភូមិសាស្ត្រ ដើម្បីប្រយោជន៍ការសិក្សា និងការងារនាពេលអនាគត។",
  },
];

export const gallery = ["/gallery/7.jpg", "/gallery/10.jpg", "/gallery/11.jpg"];

// "How it works" tabs (pattern borrowed from highengage.com).
export const steps = [
  { title: "ផ្ញើសារមកយើង", text: "ចុចប៊ូតុងចុះឈ្មោះ ហើយផ្ញើសារតាម Telegram។ ក្រុមការងារនឹងឆ្លើយសំណួររបស់អ្នក។" },
  { title: "ជ្រើសរើសទម្រង់រៀន", text: "ជ្រើសរើសទម្រង់ និងម៉ោងរៀនដែលស័ក្តិសមនឹងកាលវិភាគការងារ ឬការសិក្សារបស់អ្នក។" },
  { title: "បញ្ជាក់ការចុះឈ្មោះ", text: "ក្រុមការងារជួយបញ្ជាក់កន្លែងរៀន និងព័ត៌មានចាំបាច់សម្រាប់ចូលរៀន។" },
  { title: "រៀន និងអនុវត្តជាក់ស្តែង", text: "រៀនជាភាសាខ្មែរ ជាមួយលំហាត់ និងទិន្នន័យអនុវត្ត ដោយមានគ្រូណែនាំ។" },
  { title: "ទទួលជំនាញ និងវិញ្ញាបនបត្រ", text: "បញ្ចប់វគ្គសិក្សា ហើយយកជំនាញទៅអនុវត្តក្នុងការងារពិត។" },
];

// "Learning alone vs with KGA" comparison (pattern borrowed from highengage.com).
export const compareBase = [
  ["ការពន្យល់", "ស្វែងរកវីដេអូ និងមេរៀនបែកខ្ញែកគ្នា", "មេរៀនជាភាសាខ្មែរ ជាជំហានៗ ងាយយល់"],
  ["ពេលជាប់បញ្ហា", "ត្រូវស្វែងរកចម្លើយដោយខ្លួនឯង", "មានគ្រូណែនាំ និងឆ្លើយសំណួរ"],
  ["ការអនុវត្ត", "ខ្វះទិន្នន័យ និងលំហាត់ជាក់ស្តែង", "មានលំហាត់ និងទិន្នន័យអនុវត្ត"],
];
export const compareCert = ["លទ្ធផល", "គ្មានវិញ្ញាបនបត្របញ្ជាក់ជំនាញ", "ទទួលបានវិញ្ញាបនបត្របញ្ចប់វគ្គសិក្សា"];

// School location. Address, phone, email and map embed come from the site's Contact section.
export const location = {
  name: "Khmer GRS Academy",
  address: "អាគារលេខ៤៨ ផ្លូវ២៨៩ សង្កាត់បឹងកក់២ ខណ្ឌទួលគោក រាជធានីភ្នំពេញ",
  phone: { value: "081 373 833", href: "tel:+85581373833" },
  email: { value: "academy@khmergrs.com", href: "mailto:academy@khmergrs.com" },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=11.575321943950122,104.89702737511448",
  embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.672460431584!2d104.89702737511448!3d11.575321943950122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951003092289b%3A0x471125801998e4d7!2sKhmer%20GRS%20Academy!5e0!3m2!1sen!2skh!4v1722774759078!5m2!1sen!2skh",
};
