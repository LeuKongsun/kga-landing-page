// Mock blog posts. Replace this with CMS fetcher when ready.
// The shape below is what the components expect.

export const CATEGORIES = [
  { slug: "all", label: "ទាំងអស់", color: "orange" },
  { slug: "video", label: "វីដេអូ", color: "red" },
  { slug: "tips", label: "Tips & Tricks", color: "blue" },
  { slug: "tutorial", label: "Tutorial", color: "purple" },
  { slug: "news", label: "ព័ត៌មាន", color: "green" },
];

export const posts = [
  {
    slug: "arcgis-pro-shortcuts-2026",
    category: "tips",
    title: "១០ Shortcuts ក្នុង ArcGIS Pro ដែលអ្នកគួរដឹង",
    excerpt:
      "ប្រើ shortcuts ទាំងនេះ ដើម្បីកាត់បន្ថយពេលវេលាក្នុងការធ្វើផែនទី និងវិភាគទិន្នន័យ។",
    coverImage: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=800&fit=crop",
    publishedAt: "2026-04-28",
    readTime: "៥ នាទី",
    author: { name: "KGA Team", avatar: null },
    tags: ["ArcGIS Pro", "Productivity", "Shortcuts"],
    content: [
      { type: "paragraph", text: "ការប្រើប្រាស់ keyboard shortcuts គឺជាមធ្យោបាយដ៏ល្អមួយក្នុងការបង្កើនប្រសិទ្ធភាពការងាររបស់អ្នក។" },
      { type: "heading", text: "១. Pan Tool (C)" },
      { type: "paragraph", text: "ចុចហើយសង្កត់ C ដើម្បីប្តូរទៅ Pan tool ភ្លាមៗ។" },
      { type: "heading", text: "២. Zoom In/Out" },
      { type: "paragraph", text: "ប្រើ Z សម្រាប់ zoom in និង X សម្រាប់ zoom out។" },
    ],
  },
  {
    slug: "qgis-vs-arcgis-which-to-learn",
    category: "video",
    title: "QGIS ឬ ArcGIS ? តើគួររៀនកម្មវិធីណា?",
    excerpt: "ការប្រៀបធៀបយ៉ាងពេញលេញរវាងកម្មវិធីពេញនិយមទាំងពីរ ដើម្បីជួយអ្នកសម្រេចចិត្ត។",
    coverImage: "https://images.unsplash.com/photo-1569748130764-3fed0c102c59?w=1200&h=800&fit=crop",
    youtubeId: "dQw4w9WgXcQ", // ← real YouTube video ID
    publishedAt: "2026-04-22",
    readTime: "១២ នាទី",
    author: { name: "KGA Team", avatar: null },
    tags: ["QGIS", "ArcGIS", "Comparison"],
    content: [
      { type: "paragraph", text: "នៅក្នុងវីដេអូនេះ យើងនឹងប្រៀបធៀបកម្មវិធី QGIS និង ArcGIS ដើម្បីជួយអ្នករកមើលអ្វីដែលត្រូវនឹងតម្រូវការរបស់អ្នកបំផុត។" },
    ],
  },
  {
    slug: "spatial-analysis-tutorial",
    category: "tutorial",
    title: "ការវិភាគទិន្នន័យលំហ ពីដំបូងរហូតចប់",
    excerpt: "Tutorial លម្អិតស្តីពីការអនុវត្ត Spatial Analysis ដោយប្រើករណីសិក្សាជាក់ស្តែង។",
    coverImage: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1200&h=800&fit=crop",
    publishedAt: "2026-04-15",
    readTime: "២០ នាទី",
    author: { name: "KGA Team", avatar: null },
    tags: ["Spatial Analysis", "Tutorial", "GIS"],
    content: [
      { type: "paragraph", text: "Spatial analysis គឺជាដំណើរការនៃការវិភាគទិន្នន័យដែលមានទីតាំង។" },
      { type: "heading", text: "ការរៀបចំទិន្នន័យ" },
      { type: "paragraph", text: "មុនពេលចាប់ផ្តើមការវិភាគ យើងត្រូវរៀបចំទិន្នន័យឲ្យបានត្រឹមត្រូវ។" },
      { type: "image", src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop", caption: "ឧទាហរណ៍នៃផែនទីវិភាគ" },
    ],
  },
  {
    slug: "kga-new-batch-2026",
    category: "news",
    title: "KGA បើកវគ្គសិក្សាជំនាន់ថ្មី ឆ្នាំ ២០២៦",
    excerpt: "ខ្មែរ GRS Academy សូមប្រកាសពីការបើកវគ្គសិក្សាថ្មី ជាមួយនឹងការផ្តល់ជូនពិសេស។",
    coverImage: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&h=800&fit=crop",
    publishedAt: "2026-04-10",
    readTime: "៣ នាទី",
    author: { name: "KGA Team", avatar: null },
    tags: ["Announcement", "Course"],
    content: [
      { type: "paragraph", text: "យើងពិតជារំភើបក្នុងការប្រកាសពីការបើកវគ្គសិក្សាជំនាន់ថ្មីសម្រាប់ឆ្នាំ ២០២៦។" },
    ],
  },
  {
    slug: "5-must-know-qgis-plugins",
    category: "tips",
    title: "៥ Plugins ដែលអ្នកប្រើ QGIS គួរដឹង",
    excerpt: "បង្កើនប្រសិទ្ធភាពការងាររបស់អ្នកជាមួយ plugins ដ៏សំខាន់ទាំងនេះ។",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop",
    publishedAt: "2026-04-05",
    readTime: "៧ នាទី",
    author: { name: "KGA Team", avatar: null },
    tags: ["QGIS", "Plugins"],
    content: [
      { type: "paragraph", text: "Plugins ជួយឲ្យ QGIS កាន់តែមានសមត្ថភាពច្រើនជាងមុន។" },
    ],
  },
  {
    slug: "remote-sensing-basics-video",
    category: "video",
    title: "ស្វែងយល់ពី Remote Sensing ក្នុង ១៥ នាទី",
    excerpt: "មូលដ្ឋានគ្រឹះនៃ Remote Sensing ដែលអ្នកគួរយល់ដឹងមុនចាប់ផ្តើម។",
    coverImage: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1200&h=800&fit=crop",
    youtubeId: "dQw4w9WgXcQ",
    publishedAt: "2026-03-30",
    readTime: "១៥ នាទី",
    author: { name: "KGA Team", avatar: null },
    tags: ["Remote Sensing", "Beginner"],
    content: [{ type: "paragraph", text: "សូមស្វាគមន៍មកកាន់វីដេអូស្តីពី Remote Sensing។" }],
  },
];

export const getPostBySlug = (slug) => posts.find((p) => p.slug === slug);
export const getPostsByCategory = (cat) =>
  cat === "all" ? posts : posts.filter((p) => p.category === cat);
export const getRelatedPosts = (slug, cat, limit = 3) =>
  posts.filter((p) => p.slug !== slug && p.category === cat).slice(0, limit);