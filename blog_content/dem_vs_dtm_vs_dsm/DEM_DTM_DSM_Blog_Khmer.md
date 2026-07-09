# DEM, DTM ឬ DSM? ស្គាល់ភាពខុសគ្នា ដើម្បីជ្រើសរើសឱ្យត្រឹមត្រូវ

*រយៈពេលអានប្រហែល ១២ នាទី*

## សេចក្តីផ្តើម

ក្នុងការងារ GIS ការជ្រើសរើសទិន្នន័យកម្ពស់ (Elevation Model) ត្រឹមត្រូវ មានសារៈសំខាន់ខ្លាំង។ មនុស្សជាច្រើនប្រើ DEM, DTM ឬ DSM ដោយគិតថាវាដូចគ្នា ប៉ុន្តែការពិត វាតំណាងឱ្យផ្ទៃខុសៗគ្នា។

ការជ្រើសខុសអាចបណ្តាលឱ្យលទ្ធផល Flood Model, Contour, Line of Sight ឬការវិភាគផ្សេងៗ មិនត្រឹមត្រូវ។

---

# DEM (Digital Elevation Model)

DEM តំណាងឱ្យផ្ទៃដីពិត (Bare Earth) ដោយព្យាយាមដកដើមឈើ អគារ ស្ពាន និងវត្ថុលើផ្ទៃចេញ។

**សាកសមសម្រាប់**

- វិភាគផ្ទៃដី
- Hydrology
- Watershed
- Contour
- Flood Modeling
- Slope និង Aspect

---

# DTM (Digital Terrain Model)

DTM គឺជាការពង្រីកពី DEM ដោយបន្ថែមព័ត៌មាន Terrain ដូចជា៖

- Breaklines
- Ridge lines
- Streams
- Cliffs

ព័ត៌មានទាំងនេះធ្វើឱ្យការតំណាង Terrain មានភាពជាក់លាក់ជាង។

**សាកសមសម្រាប់**

- វិស្វកម្ម
- ផ្លូវ
- Earthwork
- Terrain Visualization

---

# DSM (Digital Surface Model)

DSM តំណាងឱ្យផ្ទៃខាងលើបំផុត ដែលរួមមាន៖

- ដើមឈើ
- អគារ
- ស្ពាន
- បង្គោលភ្លើង
- វត្ថុផ្សេងៗ

**សាកសមសម្រាប់**

- Line of Sight
- Urban Planning
- Drone Mapping
- Solar Analysis
- Building Height

---

# ប្រៀបធៀប

| លក្ខណៈ | DEM | DTM | DSM |
|---|---|---|---|
| តំណាងឱ្យ | ផ្ទៃដី | ផ្ទៃដី + Terrain | ផ្ទៃលើទាំងអស់ |
| មានអគារ | ❌ | ❌ | ✅ |
| មានដើមឈើ | ❌ | ❌ | ✅ |
| មាន Breaklines | ❌ | ✅ | អាចមាន |

---

# កំហុសដែលជួបញឹកញាប់

- ប្រើ DSM សម្រាប់ Flood Model
- បង្កើត Contour ពី DSM
- ប្រើ DEM សម្រាប់ Line of Sight
- ប្រើ DEM ដែល Resolution ទាបសម្រាប់ការរចនាវិស្វកម្ម

---

# ប្រភពទិន្នន័យ

ទិន្នន័យទាំងនេះអាចបង្កើតពី៖

- LiDAR
- Drone Photogrammetry
- Stereo Satellite
- National Mapping Agencies

---

# គន្លឹះក្នុងការជ្រើសរើស

- ប្រសិនបើចង់បានផ្ទៃដីពិត → **DEM**
- ប្រសិនបើត្រូវការព័ត៌មាន Terrain បន្ថែម → **DTM**
- ប្រសិនបើវត្ថុលើផ្ទៃសំខាន់ → **DSM**

---

# សេចក្តីសន្និដ្ឋាន

មិនមាន Elevation Model មួយណាដែលល្អបំផុតសម្រាប់គ្រប់ការងារទាំងអស់ទេ។

ជ្រើសរើសឱ្យសមនឹងគោលបំណងវិភាគរបស់អ្នក៖

- **DEM = Bare Earth**
- **DTM = Bare Earth + Terrain Features**
- **DSM = Surface with Objects**

ការយល់ដឹងពីភាពខុសគ្នានេះ នឹងជួយឱ្យអ្នកធ្វើការវិភាគ GIS បានត្រឹមត្រូវ និងមានវិជ្ជាជីវៈជាងមុន។
