// Mock blog posts. Replace this with CMS fetcher when ready.
// The shape below is what the components expect.

const SHAPEFILE_ARTICLE = {
  "km": {
    "title": "Shapefile មិនមែនជាឯកសារតែមួយទេ",
    "excerpt": "អ្នកប្រើ GIS ជាច្រើនធ្លាប់ជួបបញ្ហា ទទួលបានតែឯកសារ `.shp` មួយ ហើយមិនអាចបើកបាន។ មូលហេតុគឺ Shapefile មិនមែនជាឯកសារតែមួយទេ ប៉ុន្តែជាបណ្ដុំនៃឯកសារជាច្រើនដែលធ្វើការរួមគ្នា។",
    "readTime": "៥ នាទី",
    "content": [
      {
        "type": "paragraph",
        "text": "អ្នកប្រើ GIS ជាច្រើនធ្លាប់ជួបបញ្ហា ទទួលបានតែឯកសារ `.shp` មួយ ហើយមិនអាចបើកបាន។ មូលហេតុគឺ Shapefile មិនមែនជាឯកសារតែមួយទេ ប៉ុន្តែជាបណ្ដុំនៃឯកសារជាច្រើនដែលធ្វើការរួមគ្នា។"
      },
      {
        "type": "heading",
        "text": "Shapefile ជាអ្វី?"
      },
      {
        "type": "paragraph",
        "text": "Shapefile គឺជាទ្រង់ទ្រាយទិន្នន័យ Vector ដែលបង្កើតដោយ Esri។ វាមានឯកសារជាច្រើនដែលមានឈ្មោះដូចគ្នា ប៉ុន្តែមាន Extension ខុសគ្នា។"
      },
      {
        "type": "paragraph",
        "text": "ឧទាហរណ៍៖"
      },
      {
        "type": "code",
        "text": "Roads.shp\nRoads.dbf\nRoads.shx\nRoads.prj"
      },
      {
        "type": "heading",
        "text": "ឯកសារសំខាន់ទាំង ៤"
      },
      {
        "type": "heading3",
        "text": "`.shp` -- Geometry"
      },
      {
        "type": "paragraph",
        "text": "រក្សាទុករាងរបស់ Point, Line និង Polygon។"
      },
      {
        "type": "heading3",
        "text": "`.dbf` -- Attributes"
      },
      {
        "type": "paragraph",
        "text": "រក្សាទុកតារាងព័ត៌មានរបស់ Feature ដូចជា ឈ្មោះ លេខសម្គាល់ និងព័ត៌មានផ្សេងៗ។"
      },
      {
        "type": "heading3",
        "text": "`.shx` -- Shape Index"
      },
      {
        "type": "paragraph",
        "text": "ជួយឱ្យកម្មវិធី GIS ស្វែងរក Geometry បានលឿន។"
      },
      {
        "type": "heading3",
        "text": "`.prj` -- Coordinate System"
      },
      {
        "type": "paragraph",
        "text": "រក្សាទុកព័ត៌មានអំពីប្រព័ន្ធកូអរដោនេ (CRS)។ បើគ្មានវា ទិន្នន័យអាចបង្ហាញនៅទីតាំងខុស។"
      },
      {
        "type": "heading",
        "text": "ហេតុអ្វីមិនគួរផ្ញើតែ `.shp`"
      },
      {
        "type": "paragraph",
        "text": "បើផ្ញើតែ `.shp` អ្នកទទួលនឹងបាត់បង់ព័ត៌មានសំខាន់ៗ ដូចជា Attribute, Index និង Coordinate System ដែលអាចធ្វើឱ្យ Dataset មិនអាចប្រើបានត្រឹមត្រូវ។"
      },
      {
        "type": "heading",
        "text": "អនុវត្តល្អបំផុត"
      },
      {
        "type": "list",
        "items": [
          "រក្សាទុកឯកសារទាំងអស់នៅក្នុងថតតែមួយ។",
          "បង្ហាប់ជា ZIP។",
          "បន្ទាប់មកទើបចែករំលែក។"
        ]
      },
      {
        "type": "heading",
        "text": "ជម្រើសទំនើប"
      },
      {
        "type": "list",
        "items": [
          "File Geodatabase (.gdb)",
          "GeoPackage (.gpkg)",
          "GeoJSON (.geojson)",
          "FlatGeobuf (.fgb)"
        ]
      },
      {
        "type": "heading",
        "text": "សេចក្តីសន្និដ្ឋាន"
      },
      {
        "type": "paragraph",
        "text": "Shapefile មិនមែនជាឯកសារតែមួយទេ ប៉ុន្តែជាបណ្ដុំនៃឯកសារដែលធ្វើការរួមគ្នា។ ការយល់ដឹងពីចំណុចនេះ នឹងជួយឱ្យការចែករំលែក និងគ្រប់គ្រងទិន្នន័យ GIS មានភាពត្រឹមត្រូវ និងជៀសវាងបញ្ហាជាច្រើន។"
      }
    ]
  },
  "en": {
    "title": "A Shapefile Isn't One File!",
    "excerpt": "A shapefile is not a single file. It is a collection of files that work together as one GIS dataset.",
    "readTime": "5 min",
    "content": [
      {
        "type": "paragraph",
        "text": "If you've worked with GIS, you've probably received only a `.shp` file and found that it wouldn't open. That's because a shapefile is not a single file---it's a collection of files that work together as one GIS dataset."
      },
      {
        "type": "heading",
        "text": "What Is a Shapefile?"
      },
      {
        "type": "paragraph",
        "text": "A shapefile is a vector data format introduced by Esri. Although we commonly refer to it as \"a shapefile,\" it actually consists of multiple files with the same filename but different extensions."
      },
      {
        "type": "paragraph",
        "text": "Example:"
      },
      {
        "type": "code",
        "text": "Roads.shp\nRoads.dbf\nRoads.shx\nRoads.prj"
      },
      {
        "type": "paragraph",
        "text": "Each file has a specific role."
      },
      {
        "type": "heading",
        "text": "The Four Essential Files"
      },
      {
        "type": "heading3",
        "text": "`.shp` -- Geometry"
      },
      {
        "type": "paragraph",
        "text": "Stores the actual point, line, or polygon geometry."
      },
      {
        "type": "heading3",
        "text": "`.dbf` -- Attributes"
      },
      {
        "type": "paragraph",
        "text": "Stores the attribute table containing information such as names, IDs, land use, and other descriptive data."
      },
      {
        "type": "heading3",
        "text": "`.shx` -- Shape Index"
      },
      {
        "type": "paragraph",
        "text": "Acts as an index that allows GIS software to locate geometries quickly and improve performance."
      },
      {
        "type": "heading3",
        "text": "`.prj` -- Coordinate System"
      },
      {
        "type": "paragraph",
        "text": "Stores the coordinate reference system (CRS). Without it, GIS software may not know where the data belongs."
      },
      {
        "type": "heading",
        "text": "Why Sending Only the `.shp` File Is a Problem"
      },
      {
        "type": "paragraph",
        "text": "Sending only the `.shp` file means the recipient loses important supporting information such as attributes, indexing, or coordinate system definitions. The dataset may fail to open or appear in the wrong location."
      },
      {
        "type": "heading",
        "text": "Best Practice"
      },
      {
        "type": "paragraph",
        "text": "Instead of sending individual files:"
      },
      {
        "type": "list",
        "items": [
          "Keep all shapefile components together.",
          "Compress them into a ZIP file.",
          "Share the ZIP archive."
        ]
      },
      {
        "type": "heading",
        "text": "Modern Alternatives"
      },
      {
        "type": "paragraph",
        "text": "While shapefiles are still widely used, newer formats offer significant advantages:"
      },
      {
        "type": "list",
        "items": [
          "File Geodatabase (.gdb)",
          "GeoPackage (.gpkg)",
          "GeoJSON (.geojson)",
          "FlatGeobuf (.fgb)"
        ]
      },
      {
        "type": "heading",
        "text": "Conclusion"
      },
      {
        "type": "paragraph",
        "text": "A shapefile is not a single file---it is a collection of files working together as one GIS dataset. Understanding this simple concept helps prevent data corruption and makes GIS data sharing much more reliable."
      }
    ]
  }
};

const ZOOMING_IN_ARTICLE = {
  "km": {
    "title": "ការពង្រីក (Zoom In) មិនធ្វើឱ្យទិន្នន័យមានភាពត្រឹមត្រូវជាងមុនទេ",
    "excerpt": "អ្នកប្រើ GIS ជាច្រើនយល់ច្រឡំថា ការពង្រីកផែនទីច្រើនជាងមុន មានន័យថាទិន្នន័យកាន់តែត្រឹមត្រូវ។ ជាក់ស្តែង វាគ្រាន់តែពង្រីកការបង្ហាញលើអេក្រង់ប៉ុណ្ណោះ មិនបានបង្កើនគុណភាពទិន្នន័យឡើយ។",
    "readTime": "៥ នាទី",
    "content": [
      {
        "type": "heading",
        "text": "សេចក្តីផ្តើម"
      },
      {
        "type": "paragraph",
        "text": "អ្នកប្រើ GIS ជាច្រើនយល់ច្រឡំថា ការពង្រីកផែនទីច្រើនជាងមុន មានន័យថាទិន្នន័យកាន់តែត្រឹមត្រូវ។ ជាក់ស្តែង វាគ្រាន់តែពង្រីកការបង្ហាញលើអេក្រង់ប៉ុណ្ណោះ មិនបានបង្កើនគុណភាពទិន្នន័យឡើយ។"
      },
      {
        "type": "heading",
        "text": "Scale និង Zoom ខុសគ្នាដូចម្តេច?"
      },
      {
        "type": "paragraph",
        "text": "ទិន្នន័យដែលផលិតសម្រាប់ Scale 1:50,000 ត្រូវបានរៀបចំឱ្យសមស្របសម្រាប់ការប្រើប្រាស់នៅកម្រិតនោះ។ នៅពេលអ្នក Zoom ទៅ 1:100 កម្មវិធី GIS គ្រាន់តែបង្ហាញវាឱ្យធំប៉ុណ្ណោះ មិនបានបន្ថែមព័ត៌មានថ្មី ឬបង្កើនភាពត្រឹមត្រូវឡើយ។"
      },
      {
        "type": "paragraph",
        "text": "វាដូចជាការពង្រីករូបថតតូចមួយ។ រូបភាពធំឡើង ប៉ុន្តែមិនច្បាស់ជាងមុនទេ។"
      },
      {
        "type": "heading",
        "text": "តើអ្វីកំណត់ភាពត្រឹមត្រូវ?"
      },
      {
        "type": "paragraph",
        "text": "ភាពត្រឹមត្រូវអាស្រ័យលើវិធីប្រមូលទិន្នន័យ ដូចជា៖"
      },
      {
        "type": "list",
        "items": [
          "GNSS ឬ Total Station",
          "Drone និង LiDAR",
          "Satellite imagery",
          "Image resolution",
          "ស្តង់ដារការធ្វើផែនទី",
          "Quality Control"
        ]
      },
      {
        "type": "paragraph",
        "text": "ប្រសិនបើទិន្នន័យមានកំហុសប្រហែល ±10 ម៉ែត្រ ការពង្រីកមិនអាចធ្វើឱ្យវាក្លាយជា ±10 សង់ទីម៉ែត្របានទេ។"
      },
      {
        "type": "heading",
        "text": "ឧទាហរណ៍ជាក់ស្តែង"
      },
      {
        "type": "paragraph",
        "text": "ស្រមៃថាអ្នកមានផ្លូវដែលបាន Digitize ពីផែនទី 1:50,000។ នៅកម្រិតទូទៅ វាមើលទៅត្រឹមត្រូវ។ ប៉ុន្តែនៅពេល Zoom ខ្លាំង អ្នកអាចឃើញថាវាមិនត្រូវនឹងរូបភាពអាកាសថ្មីទៀត។"
      },
      {
        "type": "paragraph",
        "text": "នេះមិនមែនមានន័យថាទិន្នន័យខូចទេ ប៉ុន្តែអ្នកកំពុងប្រើវាលើសពី Scale ដែលវាត្រូវបានបង្កើត។"
      },
      {
        "type": "heading",
        "text": "ហេតុអ្វីវាសំខាន់?"
      },
      {
        "type": "paragraph",
        "text": "ការប្រើទិន្នន័យលើសពី Scale អាចបណ្តាលឱ្យ៖"
      },
      {
        "type": "list",
        "items": [
          "វាស់ចម្ងាយខុស",
          "Overlay Analysis មិនត្រឹមត្រូវ",
          "Layer មិនត្រូវគ្នា",
          "សម្រេចចិត្តខុស",
          "បាត់បង់ទំនុកចិត្តលើលទ្ធផល GIS"
        ]
      },
      {
        "type": "heading",
        "text": "អនុវត្តល្អ"
      },
      {
        "type": "list",
        "items": [
          "ពិនិត្យ Scale និង Metadata ជានិច្ច។",
          "ជ្រើសរើសទិន្នន័យសមស្របតាមគោលបំណង។",
          "កុំយល់ថា Zoom កាន់តែច្រើន មានន័យថាត្រឹមត្រូវជាងមុន។"
        ]
      },
      {
        "type": "heading",
        "text": "សេចក្តីសន្និដ្ឋាន"
      },
      {
        "type": "paragraph",
        "text": "Zoom គ្រាន់តែធ្វើឱ្យទិន្នន័យមើលទៅធំប៉ុណ្ណោះ។ ភាពត្រឹមត្រូវកើតចេញពីការប្រមូលទិន្នន័យ មិនមែនពីកម្រិត Zoom ទេ។"
      },
      {
        "type": "paragraph",
        "text": "ការយល់ដឹងពីគោលការណ៍នេះនឹងជួយអ្នកជ្រើសរើសទិន្នន័យបានត្រឹមត្រូវ និងបង្កើតការវិភាគ GIS ដែលអាចទុកចិត្តបាន។"
      }
    ]
  },
  "en": {
    "title": "Zooming In Doesn't Increase Accuracy",
    "excerpt": "One of the most common misconceptions among new GIS users is the belief that zooming in makes spatial data more accurate. It is easy to understand why. Modern GIS software allows us to zoom from a country view down to individual buildings with a smooth mouse wheel. However, the visual scale on your screen does not change the quality of the underlying data.",
    "readTime": "5 min",
    "content": [
      {
        "type": "heading",
        "text": "Introduction"
      },
      {
        "type": "paragraph",
        "text": "One of the most common misconceptions among new GIS users is the belief that zooming in makes spatial data more accurate. It is easy to understand why. Modern GIS software allows us to zoom from a country view down to individual buildings with a smooth mouse wheel. However, the visual scale on your screen does not change the quality of the underlying data."
      },
      {
        "type": "paragraph",
        "text": "This distinction is fundamental in GIS. Understanding it helps prevent mapping errors, poor analysis, and incorrect decision-making."
      },
      {
        "type": "heading",
        "text": "Scale vs. Zoom"
      },
      {
        "type": "paragraph",
        "text": "A dataset created at 1:50,000 was designed to represent features accurately at that scale. Roads, rivers, buildings, and boundaries are generalized according to the intended map scale."
      },
      {
        "type": "paragraph",
        "text": "When you zoom to a display scale such as 1:100, the software simply enlarges the existing geometry. No new survey measurements are added, and no hidden details suddenly appear."
      },
      {
        "type": "paragraph",
        "text": "Think of enlarging a small photograph. The image becomes larger, but it does not become sharper."
      },
      {
        "type": "heading",
        "text": "What Determines Accuracy?"
      },
      {
        "type": "paragraph",
        "text": "Spatial accuracy depends on how the data was originally collected, including:"
      },
      {
        "type": "list",
        "items": [
          "Survey equipment (GNSS, Total Station, LiDAR, drones, satellite imagery)",
          "Image resolution",
          "Mapping standards",
          "Processing methods",
          "Quality control procedures"
        ]
      },
      {
        "type": "paragraph",
        "text": "If the original positional accuracy is ±10 meters, zooming in cannot magically reduce it to centimeters."
      },
      {
        "type": "heading",
        "text": "A Practical Example"
      },
      {
        "type": "paragraph",
        "text": "Imagine a road centerline digitized from a 1:50,000 topographic map. At city level it appears acceptable. When zoomed to 1:100, you may notice that it no longer aligns perfectly with recent aerial imagery."
      },
      {
        "type": "paragraph",
        "text": "The data has not become worse. You are simply viewing it beyond the scale for which it was intended."
      },
      {
        "type": "paragraph",
        "text": "Using that dataset for parcel boundary mapping or engineering design could introduce significant errors."
      },
      {
        "type": "heading",
        "text": "Why This Matters"
      },
      {
        "type": "paragraph",
        "text": "Using data beyond its intended scale may lead to:"
      },
      {
        "type": "list",
        "items": [
          "Incorrect measurements",
          "Poor overlay analysis",
          "Misaligned datasets",
          "Wrong planning decisions",
          "Loss of confidence in GIS outputs"
        ]
      },
      {
        "type": "paragraph",
        "text": "Professional GIS work always considers whether the dataset is fit for the intended purpose."
      },
      {
        "type": "heading",
        "text": "Best Practices"
      },
      {
        "type": "list",
        "items": [
          "Always check the source and map scale.",
          "Read metadata before analysis.",
          "Use high-resolution datasets for detailed work.",
          "Match dataset scale to project requirements.",
          "Never assume that a larger display means better accuracy."
        ]
      },
      {
        "type": "heading",
        "text": "Key Takeaway"
      },
      {
        "type": "paragraph",
        "text": "Zoom changes only how large the data appears on your screen. Accuracy comes from data collection, not from display scale."
      },
      {
        "type": "paragraph",
        "text": "The next time you zoom in, remember that GIS software can enlarge information—but it cannot invent precision that never existed."
      }
    ]
  }
};

const SNAPPING_ARTICLE = {
  "km": {
    "title": "Snapping អាចជួយសន្សំពេលកែសម្រួលបានរាប់ម៉ោង",
    "excerpt": "អ្នកចាប់ផ្តើមប្រើ GIS ជាច្រើនផ្តោតលើការរៀនគូរទិន្នន័យ (Digitizing) និងការប្រើឧបករណ៍ផ្សេងៗ ប៉ុន្តែមានមុខងារតូចមួយដែលមានសារៈសំខាន់ខ្លាំង គឺ Snapping។",
    "readTime": "៥ នាទី",
    "content": [
      {
        "type": "heading",
        "text": "សេចក្តីផ្តើម"
      },
      {
        "type": "paragraph",
        "text": "អ្នកចាប់ផ្តើមប្រើ GIS ជាច្រើនផ្តោតលើការរៀនគូរទិន្នន័យ (Digitizing) និងការប្រើឧបករណ៍ផ្សេងៗ ប៉ុន្តែមានមុខងារតូចមួយដែលមានសារៈសំខាន់ខ្លាំង គឺ Snapping។"
      },
      {
        "type": "paragraph",
        "text": "បើអ្នកធ្លាប់ជួបបញ្ហា Polygon មានចន្លោះ (Gap) ខ្សែផ្លូវមិនតភ្ជាប់គ្នា ឬ Topology Error ច្រើន នោះមូលហេតុមួយអាចមកពីមិនបានបើក Snapping។"
      },
      {
        "type": "paragraph",
        "text": "ការបើក Snapping មុនពេលកែសម្រួលទិន្នន័យ អាចជួយសន្សំពេលកែបញ្ហាបានយ៉ាងច្រើន។"
      },
      {
        "type": "heading",
        "text": "Snapping គឺជាអ្វី?"
      },
      {
        "type": "paragraph",
        "text": "Snapping គឺជាមុខងារជួយឱ្យ Cursor ចាប់ជាប់ទៅនឹង Feature ដែលមានស្រាប់ដោយស្វ័យប្រវត្តិ។"
      },
      {
        "type": "paragraph",
        "text": "វាអាចចាប់ទៅលើ៖"
      },
      {
        "type": "list",
        "items": [
          "Vertex",
          "ចុងបន្ទាត់ (Endpoint)",
          "គែមបន្ទាត់ (Edge)",
          "ចំណុចប្រសព្វ",
          "Midpoint (អាស្រ័យលើការកំណត់)"
        ]
      },
      {
        "type": "paragraph",
        "text": "លទ្ធផលគឺទិន្នន័យមានភាពត្រឹមត្រូវ និងស្អាតជាងមុន។"
      },
      {
        "type": "heading",
        "text": "ហេតុអ្វីវាសំខាន់?"
      },
      {
        "type": "paragraph",
        "text": "គុណភាពទិន្នន័យជាមូលដ្ឋានសម្រាប់ការវិភាគ GIS។"
      },
      {
        "type": "paragraph",
        "text": "កំហុសតូចៗក្នុងពេល Digitizing អាចបង្កបញ្ហាធំនៅពេលប្រើ៖"
      },
      {
        "type": "list",
        "items": [
          "Overlay Analysis",
          "Spatial Join",
          "Network Analysis",
          "Topology Validation",
          "Buffer",
          "Dissolve"
        ]
      },
      {
        "type": "paragraph",
        "text": "សូម្បីតែ Gap តូចៗ ក៏អាចធ្វើឱ្យលទ្ធផលវិភាគខុសបាន។"
      },
      {
        "type": "heading",
        "text": "បញ្ហាពេលមិនប្រើ Snapping"
      },
      {
        "type": "paragraph",
        "text": "ការមិនបើក Snapping អាចបង្កើត៖"
      },
      {
        "type": "list",
        "items": [
          "Gap រវាង Polygon",
          "Overlap",
          "Dangling Line",
          "ផ្លូវមិនតភ្ជាប់គ្នា",
          "Vertex មិនស្របទីតាំង"
        ]
      },
      {
        "type": "paragraph",
        "text": "ជាញឹកញាប់ បញ្ហាទាំងនេះទើបតែត្រូវរកឃើញនៅដំណាក់កាល Quality Control។"
      },
      {
        "type": "heading",
        "text": "អត្ថប្រយោជន៍នៃការបើក Snapping"
      },
      {
        "type": "paragraph",
        "text": "ពេលបើក Snapping៖"
      },
      {
        "type": "list",
        "items": [
          "Boundary ត្រូវគ្នា",
          "ផ្លូវតភ្ជាប់បានត្រឹមត្រូវ",
          "Polygon ជាប់គ្នាពិតប្រាកដ",
          "កាត់បន្ថយ Topology Error",
          "កែសម្រួលបានលឿន និងមានស្តង់ដារ"
        ]
      },
      {
        "type": "paragraph",
        "text": "នេះជាមូលហេតុដែលអ្នកជំនាញ GIS ស្ទើរតែទាំងអស់តែងបើក Snapping មុនចាប់ផ្តើម Digitizing។"
      },
      {
        "type": "heading",
        "text": "គន្លឹះល្អៗ"
      },
      {
        "type": "list",
        "items": [
          "បើក Snapping មុនពេលកែទិន្នន័យ។",
          "បើកតែប្រភេទ Snapping ដែលចាំបាច់។",
          "Zoom ចូលនៅពេលគូរព្រំដែនសំខាន់ៗ។",
          "ប្រើរួមជាមួយ Topology Validation។",
          "ពិនិត្យទិន្នន័យមុន Save។"
        ]
      },
      {
        "type": "heading",
        "text": "ឧទាហរណ៍ជាក់ស្តែង"
      },
      {
        "type": "paragraph",
        "text": "ស្រមៃថាអ្នកកំពុងគូរដីរាប់រយក្បាលដី។"
      },
      {
        "type": "paragraph",
        "text": "បើមិនប្រើ Snapping ក្បាលដីនីមួយៗអាចមានកំហុសតូចៗ ដែលបូកសរុបក្លាយជាបញ្ហា Topology រាប់រយ។"
      },
      {
        "type": "paragraph",
        "text": "បើប្រើ Snapping ព្រំដែនរួមនឹងត្រូវគ្នា ហើយទិន្នន័យអាចប្រើសម្រាប់ការវិភាគ និងផលិតផែនទីបានភ្លាមៗ។"
      },
      {
        "type": "heading",
        "text": "ការយល់ច្រឡំដែលជួបញឹកញាប់"
      },
      {
        "type": "paragraph",
        "text": "«Zoom ចូលគ្រប់គ្រាន់ហើយ»"
      },
      {
        "type": "paragraph",
        "text": "មិនត្រឹមត្រូវទេ។ Zoom គ្រាន់តែជួយឱ្យមើលច្បាស់ ប៉ុន្តែមិនធានាថា Vertex ស្ថិតនៅកូអរដោនេដូចគ្នានោះទេ។"
      },
      {
        "type": "paragraph",
        "text": "«ចាំកែពេលក្រោយ»"
      },
      {
        "type": "paragraph",
        "text": "ការកែ Topology លើទិន្នន័យរាប់ពាន់ Feature ចំណាយពេលច្រើនជាងការការពារកំហុសតាំងពីដំបូង។"
      },
      {
        "type": "heading",
        "text": "សេចក្តីសន្និដ្ឋាន"
      },
      {
        "type": "paragraph",
        "text": "Snapping គឺជាមុខងារតូច ប៉ុន្តែមានឥទ្ធិពលធំ។"
      },
      {
        "type": "paragraph",
        "text": "មិនថាអ្នកធ្វើទិន្នន័យក្បាលដី ផ្លូវ បណ្តាញសេវា ឬធនធានធម្មជាតិទេ ការបើក Snapping នឹងជួយឱ្យទិន្នន័យមានភាពត្រឹមត្រូវ ស្អាត និងត្រៀមរួចសម្រាប់ Topology និងការវិភាគ។"
      },
      {
        "type": "quote",
        "text": "ភាពត្រឹមត្រូវ ចាប់ផ្តើមពី Snapping មួយដង។"
      }
    ]
  },
  "en": {
    "title": "Snapping Can Save Hours of Editing",
    "excerpt": "Many GIS beginners focus on learning digitizing tools, editing shortcuts, or geoprocessing workflows. However, one of the simplest settings in ArcGIS Pro or other GIS software is also one of the most valuable: Snapping.",
    "readTime": "5 min",
    "content": [
      {
        "type": "heading",
        "text": "Introduction"
      },
      {
        "type": "paragraph",
        "text": "Many GIS beginners focus on learning digitizing tools, editing shortcuts, or geoprocessing workflows. However, one of the simplest settings in ArcGIS Pro or other GIS software is also one of the most valuable: Snapping."
      },
      {
        "type": "paragraph",
        "text": "If you've ever encountered tiny gaps between polygons, roads that almost touch but don't connect, or topology errors that take hours to fix, there's a good chance snapping was disabled."
      },
      {
        "type": "paragraph",
        "text": "Turning on snapping before you begin editing can save hours of cleanup later."
      },
      {
        "type": "heading",
        "text": "What Is Snapping?"
      },
      {
        "type": "paragraph",
        "text": "Snapping is an editing aid that automatically aligns your cursor with existing GIS features."
      },
      {
        "type": "paragraph",
        "text": "Instead of placing a vertex \"close enough,\" snapping locks your cursor precisely onto:"
      },
      {
        "type": "list",
        "items": [
          "Existing vertices",
          "Line endpoints",
          "Edge segments",
          "Intersections",
          "Midpoints (depending on the enabled snapping types)"
        ]
      },
      {
        "type": "paragraph",
        "text": "The result is cleaner and more accurate spatial data."
      },
      {
        "type": "heading",
        "text": "Why Does It Matter?"
      },
      {
        "type": "paragraph",
        "text": "Every GIS project depends on data quality."
      },
      {
        "type": "paragraph",
        "text": "Small editing mistakes may seem harmless during digitizing, but they become major problems when performing:"
      },
      {
        "type": "list",
        "items": [
          "Overlay analysis",
          "Network analysis",
          "Topology validation",
          "Parcel management",
          "Spatial joins",
          "Buffer and dissolve operations"
        ]
      },
      {
        "type": "paragraph",
        "text": "Even a gap of a few centimeters can produce unexpected analytical results."
      },
      {
        "type": "heading",
        "text": "Without Snapping"
      },
      {
        "type": "paragraph",
        "text": "When snapping is disabled, editors often create:"
      },
      {
        "type": "list",
        "items": [
          "Gaps between adjacent polygons",
          "Overlapping boundaries",
          "Dangling road or river lines",
          "Misaligned intersections",
          "Duplicate vertices"
        ]
      },
      {
        "type": "paragraph",
        "text": "These errors usually remain hidden until quality control begins."
      },
      {
        "type": "paragraph",
        "text": "Fixing them later often requires far more time than preventing them."
      },
      {
        "type": "heading",
        "text": "With Snapping Enabled"
      },
      {
        "type": "paragraph",
        "text": "When snapping is turned on:"
      },
      {
        "type": "list",
        "items": [
          "Shared boundaries align perfectly.",
          "Roads connect correctly.",
          "Polygon edges match neighboring parcels.",
          "Topology errors are dramatically reduced.",
          "Editing becomes faster and more consistent."
        ]
      },
      {
        "type": "paragraph",
        "text": "This is why experienced GIS professionals almost always enable snapping before digitizing."
      },
      {
        "type": "heading",
        "text": "Best Practices"
      },
      {
        "type": "paragraph",
        "text": "To get the most from snapping:"
      },
      {
        "type": "list",
        "items": [
          "Enable snapping before starting any editing session.",
          "Turn on only the snapping types you actually need.",
          "Zoom in when creating important boundaries.",
          "Combine snapping with topology validation.",
          "Review your edits before saving."
        ]
      },
      {
        "type": "heading",
        "text": "A Real-World Example"
      },
      {
        "type": "paragraph",
        "text": "Imagine digitizing hundreds of land parcels."
      },
      {
        "type": "paragraph",
        "text": "Without snapping, each parcel may contain tiny positional errors. Individually they seem insignificant, but together they create hundreds of topology violations."
      },
      {
        "type": "paragraph",
        "text": "With snapping enabled, neighboring parcels share exactly the same boundaries, making the dataset ready for analysis and production mapping."
      },
      {
        "type": "heading",
        "text": "Common Misconceptions"
      },
      {
        "type": "paragraph",
        "text": "\"Zooming in is enough.\""
      },
      {
        "type": "paragraph",
        "text": "No. Zooming only helps you see better—it does not guarantee vertices occupy the exact same coordinates."
      },
      {
        "type": "paragraph",
        "text": "\"I'll fix it later.\""
      },
      {
        "type": "paragraph",
        "text": "Correcting topology across thousands of features is much slower than preventing errors during editing."
      },
      {
        "type": "heading",
        "text": "Conclusion"
      },
      {
        "type": "paragraph",
        "text": "Snapping is a small setting with a huge impact."
      },
      {
        "type": "paragraph",
        "text": "Whether you're creating cadastral data, transportation networks, utility systems, or environmental datasets, enabling snapping helps produce accurate, clean, and topology-ready GIS data from the very beginning."
      },
      {
        "type": "paragraph",
        "text": "Remember:"
      },
      {
        "type": "quote",
        "text": "Accuracy starts with a snap."
      }
    ]
  }
};

const GIS_ISNT_JUST_MAP_ARTICLE = {
  "km": {
    "title": "GIS មិនមែនគ្រាន់តែសម្រាប់ធ្វើផែនទីប៉ុណ្ណោះទេ",
    "excerpt": "មនុស្សជាច្រើននៅតែគិតថា GIS គឺជាកម្មវិធីសម្រាប់គូរផែនទី។ ជាក់ស្តែង ផែនទីគ្រាន់តែជាលទ្ធផលមួយប៉ុណ្ណោះ ខណៈដែល GIS សម័យទំនើបបានក្លាយជាវេទិកាដ៏មានអានុភាពសម្រាប់ប្រមូល គ្រប់គ្រង វិភាគ ព្យាករណ៍ និងគាំទ្រការសម្រេចចិត្តដោយផ្អែកលើទិន្នន័យភូមិសាស្ត្រ។",
    "readTime": "៧ នាទី",
    "content": [
      {
        "type": "paragraph",
        "text": "មនុស្សជាច្រើននៅតែគិតថា GIS គឺជាកម្មវិធីសម្រាប់គូរផែនទី។ ជាក់ស្តែង ផែនទីគ្រាន់តែជាលទ្ធផលមួយប៉ុណ្ណោះ ខណៈដែល GIS សម័យទំនើបបានក្លាយជាវេទិកាដ៏មានអានុភាពសម្រាប់ប្រមូល គ្រប់គ្រង វិភាគ ព្យាករណ៍ និងគាំទ្រការសម្រេចចិត្តដោយផ្អែកលើទិន្នន័យភូមិសាស្ត្រ។"
      },
      {
        "type": "heading",
        "text": "GIS ជាវេទិកាបញ្ញាភូមិសាស្ត្រ"
      },
      {
        "type": "paragraph",
        "text": "GIS មិនត្រឹមតែឆ្លើយថា «អ្វីនៅទីណា» ប៉ុណ្ណោះទេ ប៉ុន្តែអាចឆ្លើយសំណួរដូចជា៖"
      },
      {
        "type": "list",
        "items": [
          "ហេតុអ្វីកើតឡើងនៅទីនោះ?",
          "តើមានលំនាំអ្វីខ្លះ?",
          "អនាគតនឹងប្រែប្រួលដូចម្តេច?",
          "តើជម្រើសណាល្អបំផុត?"
        ]
      },
      {
        "type": "paragraph",
        "text": "ការបញ្ចូលទិន្នន័យទីតាំង ទិន្នន័យលក្ខណៈ រូបភាពផ្កាយរណប សិនស័រ និងការវិភាគស្ថិតិ ធ្វើឱ្យ GIS ក្លាយជាប្រព័ន្ធវិភាគដ៏មានប្រសិទ្ធភាព។"
      },
      {
        "type": "heading",
        "text": "AI និង Machine Learning"
      },
      {
        "type": "paragraph",
        "text": "AI ជួយឱ្យ GIS អាចស្វ័យប្រវត្តិកម្មក្នុងការបកស្រាយរូបភាពផ្កាយរណប កំណត់អត្តសញ្ញាណវត្ថុ ព្យាករណ៍ហានិភ័យ និងស្វែងរកលំនាំលាក់កំបាំង។"
      },
      {
        "type": "paragraph",
        "text": "ឧទាហរណ៍៖"
      },
      {
        "type": "list",
        "items": [
          "កំណត់អគារដោយស្វ័យប្រវត្តិ",
          "ចាត់ថ្នាក់ដីប្រើប្រាស់",
          "ព្យាករណ៍ទឹកជំនន់",
          "តាមដានដំណាំ",
          "រកឃើញផ្លូវ"
        ]
      },
      {
        "type": "heading",
        "text": "Remote Sensing"
      },
      {
        "type": "paragraph",
        "text": "GIS ប្រើទិន្នន័យពីផ្កាយរណប ដ្រូន យន្តហោះ និង LiDAR ដើម្បីសិក្សាពិភពលោក។"
      },
      {
        "type": "paragraph",
        "text": "អាចប្រើសម្រាប់៖"
      },
      {
        "type": "list",
        "items": [
          "តាមដានព្រៃឈើ",
          "ការពង្រីកទីក្រុង",
          "សុខភាពដំណាំ",
          "គ្រោះមហន្តរាយ",
          "បរិស្ថាន"
        ]
      },
      {
        "type": "heading",
        "text": "Data Science"
      },
      {
        "type": "paragraph",
        "text": "ទីតាំងជាកត្តាសំខាន់មួយក្នុងការវិភាគទិន្នន័យ។"
      },
      {
        "type": "paragraph",
        "text": "GIS អាចបញ្ចូលស្ថិតិ និង Spatial Analysis ដើម្បីរកឃើញទំនាក់ទំនងដែល Spreadsheet មិនអាចបង្ហាញបាន។"
      },
      {
        "type": "heading",
        "text": "Spatial Statistics"
      },
      {
        "type": "paragraph",
        "text": "បច្ចេកទេសដូចជា Hotspot Analysis, Spatial Autocorrelation, Kernel Density និង Interpolation ជួយរកឃើញលំនាំភូមិសាស្ត្រដែលគាំទ្រការសម្រេចចិត្ត។"
      },
      {
        "type": "heading",
        "text": "Digital Twin"
      },
      {
        "type": "paragraph",
        "text": "Digital Twin គឺជាគំរូឌីជីថលនៃទីក្រុង អគារ ឬហេដ្ឋារចនាសម្ព័ន្ធ ដែលភ្ជាប់ជាមួយ GIS, BIM និង IoT ដើម្បីសាកល្បងសេណារីយ៉ូមុនអនុវត្តពិត។"
      },
      {
        "type": "heading",
        "text": "3D GIS"
      },
      {
        "type": "paragraph",
        "text": "GIS សម័យថ្មីអាចបង្ហាញ និងវិភាគទិន្នន័យជា 3D ដែលមានអត្ថប្រយោជន៍សម្រាប់ការរៀបចំផែនការទីក្រុង វិភាគអគារ និងដីភ្នំ។"
      },
      {
        "type": "heading",
        "text": "Big Data"
      },
      {
        "type": "paragraph",
        "text": "ទិន្នន័យភូមិសាស្ត្រកំពុងកើនឡើងយ៉ាងលឿនពី GPS ផ្កាយរណប ទូរស័ព្ទ និងសិនស័រ។ GIS អាចគ្រប់គ្រង និងវិភាគទិន្នន័យទំហំធំទាំងនេះបានយ៉ាងមានប្រសិទ្ធភាព។"
      },
      {
        "type": "heading",
        "text": "IoT និង Real-Time Data"
      },
      {
        "type": "paragraph",
        "text": "សិនស័រភ្ជាប់អ៊ីនធឺណិតអាចផ្ញើទិន្នន័យចូល GIS ជាបន្តបន្ទាប់ ដូចជា ចរាចរណ៍ អាកាសធាតុ កម្ពស់ទឹក និងការតាមដានយានយន្ត ដើម្បីបង្កើត Dashboard ពេលវេលាពិត។"
      },
      {
        "type": "heading",
        "text": "ហេតុអ្វីវាសំខាន់?"
      },
      {
        "type": "paragraph",
        "text": "អ្នកជំនាញ GIS សព្វថ្ងៃមិនមែនគ្រាន់តែជាអ្នកធ្វើផែនទីទៀតទេ ប៉ុន្តែជាអ្នកវិភាគទិន្នន័យ អ្នកជំនាញ Remote Sensing អ្នកអភិវឌ្ឍ Automation និងអ្នកគាំទ្រការសម្រេចចិត្ត។"
      },
      {
        "type": "heading",
        "text": "សេចក្តីសន្និដ្ឋាន"
      },
      {
        "type": "paragraph",
        "text": "ផែនទីនៅតែជាឧបករណ៍សំខាន់សម្រាប់ការបង្ហាញព័ត៌មាន ប៉ុន្តែវាគ្រាន់តែជាចំណុចចាប់ផ្តើមប៉ុណ្ណោះ។ GIS សម័យទំនើបបានរួមបញ្ចូលភូមិសាស្ត្រ វិទ្យាសាស្ត្រទិន្នន័យ AI ស្ថិតិ និងបច្ចេកវិទ្យាផ្សេងៗ ដើម្បីដោះស្រាយបញ្ហាពិភពលោក។"
      },
      {
        "type": "paragraph",
        "text": "បើអ្នកកំពុងរៀន GIS សូមកុំផ្តោតតែការធ្វើផែនទី។ សិក្សាបន្ថែមអំពី Spatial Analysis, Remote Sensing, Python, AI និង Data Science ដើម្បីត្រៀមខ្លួនសម្រាប់អនាគតនៃវិស័យ GIS។"
      }
    ]
  },
  "en": {
    "title": "GIS Is Not Just Making Maps",
    "excerpt": "For many people, the first thing that comes to mind when they hear Geographic Information Systems (GIS) is a colorful map. While maps are one of the most visible outputs of GIS, they represent only a small portion of what modern GIS can do.",
    "readTime": "7 min",
    "content": [
      {
        "type": "paragraph",
        "text": "For many people, the first thing that comes to mind when they hear Geographic Information Systems (GIS) is a colorful map. While maps are one of the most visible outputs of GIS, they represent only a small portion of what modern GIS can do."
      },
      {
        "type": "paragraph",
        "text": "Today, GIS has evolved into a comprehensive platform for collecting, managing, analyzing, modeling, and communicating spatial information. Governments, businesses, researchers, and engineers increasingly use GIS to answer complex questions rather than simply display locations."
      },
      {
        "type": "paragraph",
        "text": "This article explores why GIS has become one of the world's most valuable data science technologies and how it connects with many modern disciplines."
      },
      {
        "type": "heading",
        "text": "GIS: A Spatial Intelligence Platform"
      },
      {
        "type": "paragraph",
        "text": "Traditional mapping answers \"Where is something?\""
      },
      {
        "type": "paragraph",
        "text": "Modern GIS answers:"
      },
      {
        "type": "list",
        "items": [
          "Why is it happening there?",
          "What patterns exist?",
          "What will happen next?",
          "What is the best decision?",
          "What changes over time?"
        ]
      },
      {
        "type": "paragraph",
        "text": "By combining location with attribute data, satellite imagery, sensors, statistics, and machine learning, GIS transforms raw geographic information into actionable intelligence."
      },
      {
        "type": "heading",
        "text": "AI and Machine Learning"
      },
      {
        "type": "paragraph",
        "text": "Artificial Intelligence helps GIS automate feature extraction, classify satellite imagery, detect objects, forecast change, and identify hidden spatial relationships."
      },
      {
        "type": "paragraph",
        "text": "Examples include:"
      },
      {
        "type": "list",
        "items": [
          "Automatic building extraction",
          "Flood susceptibility prediction",
          "Land-use classification",
          "Road detection",
          "Crop monitoring"
        ]
      },
      {
        "type": "paragraph",
        "text": "Instead of manually analyzing millions of pixels, AI enables GIS professionals to focus on decision making."
      },
      {
        "type": "heading",
        "text": "Remote Sensing"
      },
      {
        "type": "paragraph",
        "text": "Modern GIS relies heavily on Earth observation data collected from satellites, drones, aircraft, and LiDAR."
      },
      {
        "type": "paragraph",
        "text": "Remote sensing allows professionals to:"
      },
      {
        "type": "list",
        "items": [
          "Monitor forests",
          "Detect urban expansion",
          "Measure crop health",
          "Assess disasters",
          "Observe environmental change"
        ]
      },
      {
        "type": "paragraph",
        "text": "GIS provides the analytical environment where these datasets become useful information."
      },
      {
        "type": "heading",
        "text": "Data Science"
      },
      {
        "type": "paragraph",
        "text": "Location is one of the strongest predictors in many datasets."
      },
      {
        "type": "paragraph",
        "text": "GIS integrates spatial analysis with statistical methods to discover relationships that traditional spreadsheets cannot reveal."
      },
      {
        "type": "paragraph",
        "text": "Examples:"
      },
      {
        "type": "list",
        "items": [
          "Disease hotspots",
          "Customer accessibility",
          "Crime patterns",
          "Traffic analysis",
          "Service coverage"
        ]
      },
      {
        "type": "heading",
        "text": "Spatial Statistics"
      },
      {
        "type": "paragraph",
        "text": "Spatial data rarely behaves randomly."
      },
      {
        "type": "paragraph",
        "text": "Methods such as hotspot analysis, spatial autocorrelation, interpolation, density estimation, and geographically weighted regression reveal meaningful geographic patterns that support scientific decision making."
      },
      {
        "type": "heading",
        "text": "Digital Twins"
      },
      {
        "type": "paragraph",
        "text": "Digital Twins combine GIS with BIM, IoT, simulation, and real-time monitoring to create virtual representations of real cities and infrastructure."
      },
      {
        "type": "paragraph",
        "text": "Applications include:"
      },
      {
        "type": "list",
        "items": [
          "Smart cities",
          "Utility management",
          "Airport operations",
          "Campus management",
          "Industrial facilities"
        ]
      },
      {
        "type": "paragraph",
        "text": "Decision makers can test scenarios before implementing them in the real world."
      },
      {
        "type": "heading",
        "text": "3D GIS"
      },
      {
        "type": "paragraph",
        "text": "Modern GIS is no longer limited to flat maps."
      },
      {
        "type": "paragraph",
        "text": "Three-dimensional GIS supports:"
      },
      {
        "type": "list",
        "items": [
          "Urban planning",
          "Underground utilities",
          "Terrain visualization",
          "Building information",
          "Line-of-sight analysis"
        ]
      },
      {
        "type": "paragraph",
        "text": "This greatly improves communication with stakeholders."
      },
      {
        "type": "heading",
        "text": "Big Data"
      },
      {
        "type": "paragraph",
        "text": "Modern organizations generate enormous amounts of spatial data every day."
      },
      {
        "type": "paragraph",
        "text": "GIS platforms can manage data from:"
      },
      {
        "type": "list",
        "items": [
          "GPS devices",
          "Mobile phones",
          "Satellites",
          "Social media",
          "Utility sensors"
        ]
      },
      {
        "type": "paragraph",
        "text": "Cloud computing enables analysis across billions of records."
      },
      {
        "type": "heading",
        "text": "IoT and Real-Time Data"
      },
      {
        "type": "paragraph",
        "text": "Internet-connected sensors continuously stream information into GIS."
      },
      {
        "type": "paragraph",
        "text": "Examples:"
      },
      {
        "type": "list",
        "items": [
          "Traffic sensors",
          "Weather stations",
          "River gauges",
          "Vehicle tracking",
          "Smart utility meters"
        ]
      },
      {
        "type": "paragraph",
        "text": "Decision makers receive live dashboards instead of waiting for reports."
      },
      {
        "type": "heading",
        "text": "Why This Matters"
      },
      {
        "type": "paragraph",
        "text": "Organizations increasingly make decisions based on location intelligence."
      },
      {
        "type": "paragraph",
        "text": "GIS professionals are no longer only map creators—they are spatial analysts, data scientists, automation specialists, remote sensing experts, and decision-support professionals."
      },
      {
        "type": "paragraph",
        "text": "As AI, cloud computing, and sensor technologies continue to evolve, GIS becomes even more valuable."
      },
      {
        "type": "heading",
        "text": "Final Thoughts"
      },
      {
        "type": "paragraph",
        "text": "Maps remain an essential communication tool, but they are only the beginning."
      },
      {
        "type": "paragraph",
        "text": "Modern GIS combines geography, statistics, computer science, artificial intelligence, engineering, and environmental science into a single analytical platform."
      },
      {
        "type": "paragraph",
        "text": "If you are learning GIS today, invest not only in cartography but also in spatial analysis, programming, remote sensing, data science, and AI. Those complementary skills will define the next generation of GIS professionals."
      }
    ]
  }
};

const WGS84_ARTICLE = {
  "km": {
    "title": "WGS84 មិនមែនជាជម្រើសល្អបំផុតសម្រាប់គ្រប់ការងារទេ",
    "excerpt": "អ្នកចាប់ផ្តើម GIS ជាច្រើនយល់ថា WGS84 គឺជាប្រព័ន្ធកូអរដោនេល្អបំផុតសម្រាប់គ្រប់ការងារ ព្រោះ GPS និង Google Maps ប្រើវា។ ប៉ុន្តែការពិត វាល្អសម្រាប់ការបង្ហាញទីតាំង និងការចែករំលែកទិន្នន័យ ប៉ុណ្ណោះ មិនមែនសម្រាប់ការវាស់វែង និងវិភាគទាំងអស់ឡើយ។",
    "readTime": "៦ នាទី",
    "content": [
      {
        "type": "heading",
        "text": "សេចក្តីផ្តើម"
      },
      {
        "type": "paragraph",
        "text": "អ្នកចាប់ផ្តើម GIS ជាច្រើនយល់ថា WGS84 គឺជាប្រព័ន្ធកូអរដោនេល្អបំផុតសម្រាប់គ្រប់ការងារ ព្រោះ GPS និង Google Maps ប្រើវា។ ប៉ុន្តែការពិត វាល្អសម្រាប់ការបង្ហាញទីតាំង និងការចែករំលែកទិន្នន័យ ប៉ុណ្ណោះ មិនមែនសម្រាប់ការវាស់វែង និងវិភាគទាំងអស់ឡើយ។"
      },
      {
        "type": "heading",
        "text": "WGS84 ជាអ្វី?"
      },
      {
        "type": "paragraph",
        "text": "WGS84 គឺជា Geographic Coordinate System (GCS) ដែលប្រើ Latitude និង Longitude ហើយឯកតាជា ដឺក្រេ (°)។"
      },
      {
        "type": "paragraph",
        "text": "វាត្រូវបានប្រើយ៉ាងទូលំទូលាយក្នុង៖"
      },
      {
        "type": "list",
        "items": [
          "GPS",
          "Google Maps",
          "ArcGIS Online",
          "OpenStreetMap",
          "ការចែករំលែកទិន្នន័យ"
        ]
      },
      {
        "type": "heading",
        "text": "ហេតុអ្វី WGS84 មិនសមស្របសម្រាប់ការវាស់វែង?"
      },
      {
        "type": "paragraph",
        "text": "ដឺក្រេមិនមែនជាឯកតាចម្ងាយទេ។"
      },
      {
        "type": "paragraph",
        "text": "តម្លៃ ១ ដឺក្រេ មិនស្មើគ្នាទូទាំងពិភពលោក ដូច្នេះការគណនាចម្ងាយ ផ្ទៃក្រឡា Buffer និង Spatial Analysis អាចមានកំហុស។"
      },
      {
        "type": "paragraph",
        "text": "សម្រាប់ការបង្ហាញផែនទី វាមិនមែនជាបញ្ហាធំទេ ប៉ុន្តែសម្រាប់ការងារវិស្វកម្ម និងវិភាគ វាអាចប៉ះពាល់ដល់លទ្ធផល។"
      },
      {
        "type": "heading",
        "text": "Projected Coordinate System"
      },
      {
        "type": "paragraph",
        "text": "Projected Coordinate System បម្លែងផ្ទៃកោងរបស់ផែនដីទៅលើផ្ទៃរាប ហើយប្រើឯកតា ម៉ែត្រ (m) ឬ ហ្វីត។"
      },
      {
        "type": "paragraph",
        "text": "ឧទាហរណ៍៖"
      },
      {
        "type": "list",
        "items": [
          "UTM",
          "National Grid",
          "State Plane"
        ]
      },
      {
        "type": "paragraph",
        "text": "ប្រព័ន្ធទាំងនេះផ្តល់លទ្ធផលត្រឹមត្រូវជាងសម្រាប់ការគណនា។"
      },
      {
        "type": "heading",
        "text": "ពេលណាគួរប្រើ WGS84?"
      },
      {
        "type": "paragraph",
        "text": "ប្រើ WGS84 សម្រាប់៖"
      },
      {
        "type": "list",
        "items": [
          "បង្ហាញផែនទី",
          "Web Map",
          "GPS",
          "Mobile App",
          "ចែករំលែកទិន្នន័យ"
        ]
      },
      {
        "type": "heading",
        "text": "ពេលណាគួរប្រើ Projected Coordinate System?"
      },
      {
        "type": "paragraph",
        "text": "ប្រើ Projected Coordinate System សម្រាប់៖"
      },
      {
        "type": "list",
        "items": [
          "វាស់ចម្ងាយ",
          "គណនាផ្ទៃក្រឡា",
          "Buffer",
          "Overlay Analysis",
          "Spatial Analysis",
          "ការងារវិស្វកម្ម និងសុរិយោដី"
        ]
      },
      {
        "type": "heading",
        "text": "ឧទាហរណ៍ជាក់ស្តែង"
      },
      {
        "type": "paragraph",
        "text": "បើអ្នកវាស់ប្រវែងផ្លូវដោយប្រើ WGS84 ការគណនានឹងផ្អែកលើដឺក្រេ។"
      },
      {
        "type": "paragraph",
        "text": "បើ Project ទៅជា UTM សិន ការគណនានឹងប្រើម៉ែត្រ ដែលមានភាពត្រឹមត្រូវជាង និងសមស្របសម្រាប់ការវិភាគ។"
      },
      {
        "type": "heading",
        "text": "កំហុសដែលអ្នកចាប់ផ្តើមជួបញឹកញាប់"
      },
      {
        "type": "list",
        "items": [
          "Buffer ក្នុង WGS84",
          "គណនាផ្ទៃក្រឡាជា Square Degree",
          "វាស់ចម្ងាយដោយ Latitude/Longitude",
          "គិតថា Coordinate ពី Google Maps អាចប្រើសម្រាប់គ្រប់ការងារ"
        ]
      },
      {
        "type": "heading",
        "text": "ច្បាប់ងាយចាំ"
      },
      {
        "type": "quote",
        "text": "បង្ហាញ (Display) ក្នុង WGS84 ប៉ុន្តែ វិភាគ (Analyze) ក្នុង Projected Coordinate System។"
      },
      {
        "type": "paragraph",
        "text": "វាជាវិធីសាស្ត្រដែលអ្នកជំនាញ GIS ប្រើជាញឹកញាប់។"
      },
      {
        "type": "heading",
        "text": "សេចក្តីសន្និដ្ឋាន"
      },
      {
        "type": "paragraph",
        "text": "មិនមាន Coordinate System ណាមួយល្អបំផុតសម្រាប់គ្រប់ការងារទេ។"
      },
      {
        "type": "list",
        "items": [
          "ចង់បង្ហាញ និងចែករំលែកទិន្នន័យ → WGS84",
          "ចង់វាស់វែង និងវិភាគឲ្យបានត្រឹមត្រូវ → Projected Coordinate System"
        ]
      },
      {
        "type": "paragraph",
        "text": "ការជ្រើសរើស Coordinate System ឲ្យត្រឹមត្រូវ គឺជាជំហានសំខាន់មួយក្នុងការក្លាយជាអ្នកជំនាញ GIS។"
      }
    ]
  },
  "en": {
    "title": "WGS84 Is Not Always the Best Choice",
    "excerpt": "One of the most common misconceptions in GIS is that WGS84 should be used for every project. Because GPS devices, Google Maps, and many web mapping platforms use WGS84, many GIS beginners assume it is also the best coordinate system for measurements, analysis, and mapping.",
    "readTime": "6 min",
    "content": [
      {
        "type": "heading",
        "text": "Introduction"
      },
      {
        "type": "paragraph",
        "text": "One of the most common misconceptions in GIS is that WGS84 should be used for every project. Because GPS devices, Google Maps, and many web mapping platforms use WGS84, many GIS beginners assume it is also the best coordinate system for measurements, analysis, and mapping."
      },
      {
        "type": "paragraph",
        "text": "The truth is different."
      },
      {
        "type": "paragraph",
        "text": "WGS84 is an excellent geographic coordinate system, but it is not designed for every GIS task. Choosing the correct coordinate system can significantly improve the accuracy of your analysis."
      },
      {
        "type": "heading",
        "text": "What is WGS84?"
      },
      {
        "type": "paragraph",
        "text": "WGS84 (World Geodetic System 1984) is the global geographic coordinate system used by GPS satellites and most online mapping platforms."
      },
      {
        "type": "paragraph",
        "text": "Locations are stored using:"
      },
      {
        "type": "list",
        "items": [
          "Latitude",
          "Longitude"
        ]
      },
      {
        "type": "paragraph",
        "text": "The unit is degrees (°) rather than meters."
      },
      {
        "type": "paragraph",
        "text": "Because it is worldwide, WGS84 makes sharing geographic data simple and consistent."
      },
      {
        "type": "paragraph",
        "text": "Typical uses include:"
      },
      {
        "type": "list",
        "items": [
          "GPS navigation",
          "Google Maps",
          "ArcGIS Online",
          "OpenStreetMap",
          "Data exchange between organizations"
        ]
      },
      {
        "type": "heading",
        "text": "Why Isn't WGS84 Always the Best?"
      },
      {
        "type": "paragraph",
        "text": "Degrees are angular units—not distance units."
      },
      {
        "type": "paragraph",
        "text": "The distance represented by one degree changes depending on where you are on Earth. As a result:"
      },
      {
        "type": "list",
        "items": [
          "Distance measurements become less reliable.",
          "Area calculations can contain noticeable errors.",
          "Buffer sizes may not represent the intended real-world distance.",
          "Spatial analysis becomes less accurate."
        ]
      },
      {
        "type": "paragraph",
        "text": "For visualization, these limitations are usually acceptable. For engineering or scientific work, they are not."
      },
      {
        "type": "heading",
        "text": "Understanding Projected Coordinate Systems"
      },
      {
        "type": "paragraph",
        "text": "A projected coordinate system transforms the curved Earth onto a flat surface."
      },
      {
        "type": "paragraph",
        "text": "Instead of degrees, coordinates are stored in meters (or feet)."
      },
      {
        "type": "paragraph",
        "text": "Examples include:"
      },
      {
        "type": "list",
        "items": [
          "UTM",
          "State Plane",
          "National Grid systems"
        ]
      },
      {
        "type": "paragraph",
        "text": "These systems are designed for local or regional areas and preserve distance, area, or shape much better than geographic coordinates."
      },
      {
        "type": "heading",
        "text": "When Should You Use WGS84?"
      },
      {
        "type": "paragraph",
        "text": "WGS84 is an excellent choice when your goal is:"
      },
      {
        "type": "list",
        "items": [
          "Displaying maps",
          "Publishing web maps",
          "GPS data collection",
          "Sharing datasets",
          "Mobile applications"
        ]
      },
      {
        "type": "paragraph",
        "text": "In these situations, global compatibility is more important than measurement precision."
      },
      {
        "type": "heading",
        "text": "When Should You Use a Projected Coordinate System?"
      },
      {
        "type": "paragraph",
        "text": "Use a projected system whenever you need to:"
      },
      {
        "type": "list",
        "items": [
          "Measure distance",
          "Calculate area",
          "Perform buffering",
          "Conduct overlay analysis",
          "Model spatial relationships",
          "Produce engineering-quality outputs"
        ]
      },
      {
        "type": "paragraph",
        "text": "Since projected systems use meters, the calculations are much closer to real-world values."
      },
      {
        "type": "heading",
        "text": "A Practical Example"
      },
      {
        "type": "paragraph",
        "text": "Imagine measuring a road that is approximately 5 km long."
      },
      {
        "type": "paragraph",
        "text": "If the layer remains in WGS84, the software performs calculations using degrees, which can introduce inaccuracies."
      },
      {
        "type": "paragraph",
        "text": "After projecting the same dataset into an appropriate UTM zone, the road length is measured directly in meters, producing more reliable results."
      },
      {
        "type": "paragraph",
        "text": "The same principle applies to parcel areas, forest statistics, flood modelling, and infrastructure planning."
      },
      {
        "type": "heading",
        "text": "Common Beginner Mistakes"
      },
      {
        "type": "paragraph",
        "text": "Many GIS users unknowingly:"
      },
      {
        "type": "list",
        "items": [
          "Buffer data while still in WGS84.",
          "Calculate parcel area in square degrees.",
          "Measure road lengths using latitude and longitude.",
          "Assume Google Maps coordinates are suitable for every GIS workflow."
        ]
      },
      {
        "type": "paragraph",
        "text": "These mistakes often produce technically incorrect results."
      },
      {
        "type": "heading",
        "text": "A Simple Rule to Remember"
      },
      {
        "type": "paragraph",
        "text": "A useful workflow is:"
      },
      {
        "type": "quote",
        "text": "Display in WGS84. Analyze in a projected coordinate system."
      },
      {
        "type": "paragraph",
        "text": "Collect GPS data in WGS84 if necessary, then project the data into the appropriate local coordinate system before performing measurements or spatial analysis."
      },
      {
        "type": "heading",
        "text": "Conclusion"
      },
      {
        "type": "paragraph",
        "text": "There is no universally \"best\" coordinate system."
      },
      {
        "type": "paragraph",
        "text": "The best coordinate system depends entirely on your objective."
      },
      {
        "type": "paragraph",
        "text": "If your work focuses on visualization and sharing, WGS84 is an excellent choice."
      },
      {
        "type": "paragraph",
        "text": "If your work requires accurate measurements, engineering, environmental modelling, cadastral mapping, or spatial analysis, a projected coordinate system is almost always the better option."
      },
      {
        "type": "paragraph",
        "text": "Understanding this distinction is one of the first steps toward becoming a professional GIS practitioner."
      }
    ]
  }
};

const DEM_DTM_DSM_ARTICLE = {
  "km": {
    "title": "DEM, DTM ឬ DSM? ស្គាល់ភាពខុសគ្នា ដើម្បីជ្រើសរើសឱ្យត្រឹមត្រូវ",
    "excerpt": "ក្នុងការងារ GIS ការជ្រើសរើសទិន្នន័យកម្ពស់ (Elevation Model) ត្រឹមត្រូវ មានសារៈសំខាន់ខ្លាំង។ មនុស្សជាច្រើនប្រើ DEM, DTM ឬ DSM ដោយគិតថាវាដូចគ្នា ប៉ុន្តែការពិត វាតំណាងឱ្យផ្ទៃខុសៗគ្នា។",
    "readTime": "១២ នាទី",
    "content": [
      {
        "type": "heading",
        "text": "សេចក្តីផ្តើម"
      },
      {
        "type": "paragraph",
        "text": "ក្នុងការងារ GIS ការជ្រើសរើសទិន្នន័យកម្ពស់ (Elevation Model) ត្រឹមត្រូវ មានសារៈសំខាន់ខ្លាំង។ មនុស្សជាច្រើនប្រើ DEM, DTM ឬ DSM ដោយគិតថាវាដូចគ្នា ប៉ុន្តែការពិត វាតំណាងឱ្យផ្ទៃខុសៗគ្នា។"
      },
      {
        "type": "paragraph",
        "text": "ការជ្រើសខុសអាចបណ្តាលឱ្យលទ្ធផល Flood Model, Contour, Line of Sight ឬការវិភាគផ្សេងៗ មិនត្រឹមត្រូវ។"
      },
      {
        "type": "heading",
        "text": "DEM (Digital Elevation Model)"
      },
      {
        "type": "paragraph",
        "text": "DEM តំណាងឱ្យផ្ទៃដីពិត (Bare Earth) ដោយព្យាយាមដកដើមឈើ អគារ ស្ពាន និងវត្ថុលើផ្ទៃចេញ។"
      },
      {
        "type": "list",
        "items": [
          "វិភាគផ្ទៃដី",
          "Hydrology",
          "Watershed",
          "Contour",
          "Flood Modeling",
          "Slope និង Aspect"
        ]
      },
      {
        "type": "heading",
        "text": "DTM (Digital Terrain Model)"
      },
      {
        "type": "paragraph",
        "text": "DTM គឺជាការពង្រីកពី DEM ដោយបន្ថែមព័ត៌មាន Terrain ដូចជា៖"
      },
      {
        "type": "list",
        "items": [
          "Breaklines",
          "Ridge lines",
          "Streams",
          "Cliffs"
        ]
      },
      {
        "type": "paragraph",
        "text": "ព័ត៌មានទាំងនេះធ្វើឱ្យការតំណាង Terrain មានភាពជាក់លាក់ជាង។"
      },
      {
        "type": "list",
        "items": [
          "វិស្វកម្ម",
          "ផ្លូវ",
          "Earthwork",
          "Terrain Visualization"
        ]
      },
      {
        "type": "heading",
        "text": "DSM (Digital Surface Model)"
      },
      {
        "type": "paragraph",
        "text": "DSM តំណាងឱ្យផ្ទៃខាងលើបំផុត ដែលរួមមាន៖"
      },
      {
        "type": "list",
        "items": [
          "ដើមឈើ",
          "អគារ",
          "ស្ពាន",
          "បង្គោលភ្លើង",
          "វត្ថុផ្សេងៗ",
          "Line of Sight",
          "Urban Planning",
          "Drone Mapping",
          "Solar Analysis",
          "Building Height"
        ]
      },
      {
        "type": "heading",
        "text": "ប្រៀបធៀប"
      },
      {
        "type": "table",
        "headers": [
          "លក្ខណៈ",
          "DEM",
          "DTM",
          "DSM"
        ],
        "rows": [
          [
            "តំណាងឱ្យ",
            "ផ្ទៃដី",
            "ផ្ទៃដី + Terrain",
            "ផ្ទៃលើទាំងអស់"
          ],
          [
            "មានអគារ",
            "❌",
            "❌",
            "✅"
          ],
          [
            "មានដើមឈើ",
            "❌",
            "❌",
            "✅"
          ],
          [
            "មាន Breaklines",
            "❌",
            "✅",
            "អាចមាន"
          ]
        ]
      },
      {
        "type": "heading",
        "text": "កំហុសដែលជួបញឹកញាប់"
      },
      {
        "type": "list",
        "items": [
          "ប្រើ DSM សម្រាប់ Flood Model",
          "បង្កើត Contour ពី DSM",
          "ប្រើ DEM សម្រាប់ Line of Sight",
          "ប្រើ DEM ដែល Resolution ទាបសម្រាប់ការរចនាវិស្វកម្ម"
        ]
      },
      {
        "type": "heading",
        "text": "ប្រភពទិន្នន័យ"
      },
      {
        "type": "paragraph",
        "text": "ទិន្នន័យទាំងនេះអាចបង្កើតពី៖"
      },
      {
        "type": "list",
        "items": [
          "LiDAR",
          "Drone Photogrammetry",
          "Stereo Satellite",
          "National Mapping Agencies"
        ]
      },
      {
        "type": "heading",
        "text": "គន្លឹះក្នុងការជ្រើសរើស"
      },
      {
        "type": "list",
        "items": [
          "ប្រសិនបើចង់បានផ្ទៃដីពិត → DEM",
          "ប្រសិនបើត្រូវការព័ត៌មាន Terrain បន្ថែម → DTM",
          "ប្រសិនបើវត្ថុលើផ្ទៃសំខាន់ → DSM"
        ]
      },
      {
        "type": "heading",
        "text": "សេចក្តីសន្និដ្ឋាន"
      },
      {
        "type": "paragraph",
        "text": "មិនមាន Elevation Model មួយណាដែលល្អបំផុតសម្រាប់គ្រប់ការងារទាំងអស់ទេ។"
      },
      {
        "type": "paragraph",
        "text": "ជ្រើសរើសឱ្យសមនឹងគោលបំណងវិភាគរបស់អ្នក៖"
      },
      {
        "type": "list",
        "items": [
          "DEM = Bare Earth",
          "DTM = Bare Earth + Terrain Features",
          "DSM = Surface with Objects"
        ]
      },
      {
        "type": "paragraph",
        "text": "ការយល់ដឹងពីភាពខុសគ្នានេះ នឹងជួយឱ្យអ្នកធ្វើការវិភាគ GIS បានត្រឹមត្រូវ និងមានវិជ្ជាជីវៈជាងមុន។"
      }
    ]
  },
  "en": {
    "title": "DEM, DTM, or DSM? Know the Difference, Use the Right One",
    "excerpt": "Choosing the correct elevation model is one of the most overlooked decisions in GIS, remote sensing, engineering, and environmental analysis. Many GIS beginners—and even experienced practitioners—often use whatever elevation dataset is available without understanding what it actually represents.",
    "readTime": "12 min",
    "content": [
      {
        "type": "heading",
        "text": "Introduction"
      },
      {
        "type": "paragraph",
        "text": "Choosing the correct elevation model is one of the most overlooked decisions in GIS, remote sensing, engineering, and environmental analysis. Many GIS beginners—and even experienced practitioners—often use whatever elevation dataset is available without understanding what it actually represents."
      },
      {
        "type": "paragraph",
        "text": "This seemingly small mistake can produce completely different analysis results. If your elevation appears too high, your flood model behaves strangely, or your line-of-sight analysis produces unrealistic visibility, the problem may not be your software—it may be the elevation model."
      },
      {
        "type": "paragraph",
        "text": "This article explains the three most common elevation models:"
      },
      {
        "type": "list",
        "items": [
          "DEM (Digital Elevation Model)",
          "DTM (Digital Terrain Model)",
          "DSM (Digital Surface Model)"
        ]
      },
      {
        "type": "paragraph",
        "text": "By the end, you should know exactly when to use each one."
      },
      {
        "type": "heading",
        "text": "Why elevation models matter"
      },
      {
        "type": "paragraph",
        "text": "An elevation model is a digital representation of Earth's surface."
      },
      {
        "type": "paragraph",
        "text": "However, not every elevation model represents the same surface."
      },
      {
        "type": "paragraph",
        "text": "Some represent only the ground."
      },
      {
        "type": "paragraph",
        "text": "Others include trees, buildings, bridges, transmission towers, and every object standing above the ground."
      },
      {
        "type": "paragraph",
        "text": "Selecting the wrong dataset can significantly affect:"
      },
      {
        "type": "list",
        "items": [
          "Flood modelling",
          "Watershed delineation",
          "Contour generation",
          "Engineering design",
          "Urban planning",
          "Visibility analysis",
          "Volume calculation",
          "Drone mapping"
        ]
      },
      {
        "type": "paragraph",
        "text": "Understanding the differences saves both time and money."
      },
      {
        "type": "heading",
        "text": "DEM – Digital Elevation Model"
      },
      {
        "type": "heading",
        "text": "What is a DEM?"
      },
      {
        "type": "paragraph",
        "text": "A DEM represents the bare-earth terrain."
      },
      {
        "type": "paragraph",
        "text": "Vegetation, buildings, bridges, vehicles, and other above-ground objects are removed as much as possible."
      },
      {
        "type": "paragraph",
        "text": "The resulting surface represents the natural landform."
      },
      {
        "type": "heading3",
        "text": "Typical contents"
      },
      {
        "type": "list",
        "items": [
          "Hills",
          "Valleys",
          "Rivers",
          "Lakes",
          "Natural slopes"
        ]
      },
      {
        "type": "heading3",
        "text": "Best applications"
      },
      {
        "type": "list",
        "items": [
          "Terrain analysis",
          "Hydrology",
          "Watershed analysis",
          "Contour generation",
          "Flood simulation",
          "Slope and aspect calculation"
        ]
      },
      {
        "type": "heading3",
        "text": "Advantages"
      },
      {
        "type": "list",
        "items": [
          "Clean representation of terrain",
          "Suitable for environmental modelling",
          "Widely available"
        ]
      },
      {
        "type": "heading3",
        "text": "Limitations"
      },
      {
        "type": "paragraph",
        "text": "It does not represent real-world objects that may influence visibility, telecommunications, or urban analysis."
      },
      {
        "type": "heading",
        "text": "DTM – Digital Terrain Model"
      },
      {
        "type": "heading",
        "text": "What is a DTM?"
      },
      {
        "type": "paragraph",
        "text": "A DTM builds upon a DEM by incorporating additional terrain information."
      },
      {
        "type": "paragraph",
        "text": "Besides elevation, it may include:"
      },
      {
        "type": "list",
        "items": [
          "Breaklines",
          "Ridge lines",
          "Stream centerlines",
          "Cliffs",
          "Terrain constraints"
        ]
      },
      {
        "type": "paragraph",
        "text": "These features help preserve terrain morphology more accurately."
      },
      {
        "type": "heading3",
        "text": "Why engineers prefer DTM"
      },
      {
        "type": "paragraph",
        "text": "Infrastructure projects require terrain features that ordinary DEMs may smooth away."
      },
      {
        "type": "paragraph",
        "text": "For roads, canals, dams, pipelines, and grading design, breaklines are extremely valuable because they preserve sharp terrain changes."
      },
      {
        "type": "heading3",
        "text": "Best applications"
      },
      {
        "type": "list",
        "items": [
          "Civil engineering",
          "Road design",
          "Land development",
          "Earthwork calculation",
          "High-quality terrain visualization"
        ]
      },
      {
        "type": "heading",
        "text": "DSM – Digital Surface Model"
      },
      {
        "type": "heading",
        "text": "What is a DSM?"
      },
      {
        "type": "paragraph",
        "text": "A DSM represents the top surface."
      },
      {
        "type": "paragraph",
        "text": "Everything standing above the ground becomes part of the elevation."
      },
      {
        "type": "paragraph",
        "text": "Examples include:"
      },
      {
        "type": "list",
        "items": [
          "Trees",
          "Buildings",
          "Bridges",
          "Power lines",
          "Towers",
          "Other structures"
        ]
      },
      {
        "type": "paragraph",
        "text": "If a tree is 20 m tall, the DSM elevation at that location includes the tree height."
      },
      {
        "type": "heading3",
        "text": "Best applications"
      },
      {
        "type": "list",
        "items": [
          "Line-of-sight analysis",
          "Telecommunication planning",
          "Urban planning",
          "Drone mapping",
          "Solar potential analysis",
          "Building height estimation"
        ]
      },
      {
        "type": "heading3",
        "text": "Limitations"
      },
      {
        "type": "paragraph",
        "text": "DSM is generally unsuitable for hydrology because water flows across the ground, not over rooftops or tree canopies."
      },
      {
        "type": "heading",
        "text": "DEM vs DTM vs DSM"
      },
      {
        "type": "table",
        "headers": [
          "Feature",
          "DEM",
          "DTM",
          "DSM"
        ],
        "rows": [
          [
            "Represents",
            "Bare earth",
            "Bare earth + terrain features",
            "Surface including objects"
          ],
          [
            "Buildings included",
            "No",
            "No",
            "Yes"
          ],
          [
            "Trees included",
            "No",
            "No",
            "Yes"
          ],
          [
            "Breaklines",
            "No",
            "Yes",
            "May exist"
          ],
          [
            "Best for",
            "Environmental analysis",
            "Engineering",
            "Urban & visibility"
          ]
        ]
      },
      {
        "type": "heading",
        "text": "Common mistakes"
      },
      {
        "type": "heading",
        "text": "Flood modelling with DSM"
      },
      {
        "type": "paragraph",
        "text": "Buildings block water artificially."
      },
      {
        "type": "paragraph",
        "text": "Use DEM or DTM instead."
      },
      {
        "type": "heading",
        "text": "Contours from DSM"
      },
      {
        "type": "paragraph",
        "text": "Contours may represent rooftops and tree crowns rather than terrain."
      },
      {
        "type": "heading",
        "text": "Engineering using low-quality DEM"
      },
      {
        "type": "paragraph",
        "text": "Critical terrain breaks may disappear."
      },
      {
        "type": "paragraph",
        "text": "DTM is usually preferable."
      },
      {
        "type": "heading",
        "text": "Visibility using DEM"
      },
      {
        "type": "paragraph",
        "text": "Buildings and trees disappear, producing unrealistic visibility."
      },
      {
        "type": "paragraph",
        "text": "DSM should be used."
      },
      {
        "type": "heading",
        "text": "Where do these datasets come from?"
      },
      {
        "type": "paragraph",
        "text": "Common sources include:"
      },
      {
        "type": "list",
        "items": [
          "Airborne LiDAR",
          "UAV photogrammetry",
          "Satellite stereo imagery",
          "National mapping agencies"
        ]
      },
      {
        "type": "paragraph",
        "text": "Modern LiDAR workflows often generate both DEM and DSM from the same point cloud."
      },
      {
        "type": "heading",
        "text": "Practical workflow"
      },
      {
        "type": "list",
        "items": [
          "Define the analysis objective.",
          "Decide whether above-ground objects matter.",
          "Select DEM, DTM, or DSM accordingly.",
          "Verify resolution, vertical accuracy, and acquisition date.",
          "Validate results before final reporting."
        ]
      },
      {
        "type": "heading",
        "text": "Final thoughts"
      },
      {
        "type": "paragraph",
        "text": "There is no universally \"best\" elevation model."
      },
      {
        "type": "paragraph",
        "text": "The best model is the one that matches your analytical objective."
      },
      {
        "type": "paragraph",
        "text": "Remember:"
      },
      {
        "type": "list",
        "items": [
          "DEM = Bare earth.",
          "DTM = Bare earth plus terrain features.",
          "DSM = Everything visible on the surface."
        ]
      },
      {
        "type": "paragraph",
        "text": "Choosing correctly leads to more reliable GIS analysis and better professional decisions."
      }
    ]
  }
};

const DATA_INFO_ARTICLE = {
  "km": {
    "title": "ទិន្នន័យ (Data) មិនស្មើនឹង ព័ត៌មាន (Information)",
    "excerpt": "អ្នកចាប់ផ្តើមរៀន GIS ជាច្រើនយល់ថា ការប្រមូលទិន្នន័យបានច្រើន គឺមានន័យថាទទួលបានព័ត៌មានរួចហើយ។ តាមពិតទៅ Data និង Information គឺជារឿងពីរផ្សេងគ្នា។",
    "readTime": "៦ នាទី",
    "content": [
      {
        "type": "heading",
        "text": "សេចក្តីផ្តើម"
      },
      {
        "type": "paragraph",
        "text": "អ្នកចាប់ផ្តើមរៀន GIS ជាច្រើនយល់ថា ការប្រមូលទិន្នន័យបានច្រើន គឺមានន័យថាទទួលបានព័ត៌មានរួចហើយ។ តាមពិតទៅ Data និង Information គឺជារឿងពីរផ្សេងគ្នា។"
      },
      {
        "type": "paragraph",
        "text": "GIS មានតួនាទីបម្លែងទិន្នន័យដើម (Raw Data) ឱ្យក្លាយជាព័ត៌មានដែលមានន័យ ដើម្បីជួយធ្វើសេចក្តីសម្រេចចិត្តបានត្រឹមត្រូវ។"
      },
      {
        "type": "heading",
        "text": "តើ Data ជាអ្វី?"
      },
      {
        "type": "paragraph",
        "text": "Data គឺជាអង្គហេតុ ឬតម្លៃដែលប្រមូលបានពីការវាស់វែង ការស្ទង់មតិ ឬ GPS។"
      },
      {
        "type": "paragraph",
        "text": "ឧទាហរណ៍៖"
      },
      {
        "type": "list",
        "items": [
          "កូអរដោនេ Latitude/Longitude",
          "ចំនួនប្រជាជន",
          "កម្ពស់ដី",
          "លេខកូដដី",
          "តម្លៃ Pixel ពីរូបភាពផ្កាយរណប"
        ]
      },
      {
        "type": "paragraph",
        "text": "ទិន្នន័យទាំងនេះ មិនអាចប្រាប់រឿងរ៉ាវ ឬជួយសម្រេចចិត្តបានដោយខ្លួនឯងទេ។"
      },
      {
        "type": "heading",
        "text": "តើ Information ជាអ្វី?"
      },
      {
        "type": "paragraph",
        "text": "Information កើតឡើងនៅពេលទិន្នន័យត្រូវបាន៖"
      },
      {
        "type": "list",
        "items": [
          "រៀបចំ",
          "សម្អាត",
          "វិភាគ",
          "បង្ហាញជាផែនទី ឬក្រាហ្វ",
          "ដាក់ក្នុងបរិបទត្រឹមត្រូវ"
        ]
      },
      {
        "type": "paragraph",
        "text": "GIS អនុញ្ញាតឱ្យយើងមើលឃើញលំនាំ (Patterns) និន្នាការ (Trends) និងទំនាក់ទំនងរវាងទីតាំងផ្សេងៗ ដែលតារាងទិន្នន័យធម្មតាមិនអាចបង្ហាញបាន។"
      },
      {
        "type": "heading",
        "text": "ឧទាហរណ៍ជាក់ស្តែង"
      },
      {
        "type": "paragraph",
        "text": "ប្រសិនបើអ្នកមានតារាងប្រជាជនតែប៉ុណ្ណោះ អ្នកពិបាកឆ្លើយថា៖"
      },
      {
        "type": "list",
        "items": [
          "តំបន់ណាមានប្រជាជនច្រើនជាងគេ?",
          "តំបន់ណាខ្វះសេវាសាធារណៈ?",
          "គួរសាងសង់សាលារៀន ឬមណ្ឌលសុខភាពនៅទីណា?"
        ]
      },
      {
        "type": "paragraph",
        "text": "ប៉ុន្តែពេលបញ្ចូលទិន្នន័យទាំងនេះទៅក្នុង GIS រួមជាមួយព្រំប្រទល់ ភូមិ ផ្លូវ និងទន្លេ វានឹងបង្ហាញតំបន់អាទិភាពយ៉ាងច្បាស់។"
      },
      {
        "type": "heading",
        "text": "ហេតុអ្វី GIS មានសារៈសំខាន់?"
      },
      {
        "type": "paragraph",
        "text": "GIS មិនមែនសម្រាប់គូរផែនទីតែប៉ុណ្ណោះទេ។"
      },
      {
        "type": "paragraph",
        "text": "វាជួយឆ្លើយសំណួរ៖"
      },
      {
        "type": "list",
        "items": [
          "អ្វីកំពុងកើតឡើង?",
          "កើតឡើងនៅទីណា?",
          "ហេតុអ្វីកើតឡើង?",
          "តើគួរធ្វើអ្វីបន្ទាប់?"
        ]
      },
      {
        "type": "paragraph",
        "text": "នេះហើយជាការបម្លែងពី Data ទៅជា Information។"
      },
      {
        "type": "heading",
        "text": "លំហូរការងារ"
      },
      {
        "type": "list",
        "items": [
          "ប្រមូលទិន្នន័យ",
          "ពិនិត្យគុណភាព",
          "រៀបចំក្នុង Database",
          "វិភាគ Spatial Analysis",
          "បង្កើតផែនទី និង Visualization",
          "បកស្រាយលទ្ធផល",
          "គាំទ្រការសម្រេចចិត្ត"
        ]
      },
      {
        "type": "heading",
        "text": "កំហុសដែលជួបញឹកញាប់"
      },
      {
        "type": "paragraph",
        "text": "អ្នកចាប់ផ្តើមជាច្រើន៖"
      },
      {
        "type": "list",
        "items": [
          "ផ្តោតលើការប្រមូលទិន្នន័យ ប៉ុន្តែមិនពិនិត្យគុណភាព។",
          "បង្កើតផែនទីស្អាត ប៉ុន្តែមិនធ្វើការវិភាគ។",
          "គិតថាទិន្នន័យច្រើនជាងគេ គឺល្អជាងគេ។"
        ]
      },
      {
        "type": "paragraph",
        "text": "ជាក់ស្តែង ទិន្នន័យដែលគ្មានគុណភាព នឹងបង្កើតព័ត៌មានដែលគ្មានគុណភាពដែរ (Garbage In, Garbage Out)។"
      },
      {
        "type": "heading",
        "text": "គន្លឹះសំខាន់"
      },
      {
        "type": "quote",
        "text": "ប្រមូលទិន្នន័យឱ្យបានត្រឹមត្រូវ វិភាគវាឱ្យបានឆ្លាតវៃ ហើយបម្លែងវាទៅជាព័ត៌មានដែលអាចបង្កើតផលប៉ះពាល់។"
      },
      {
        "type": "heading",
        "text": "សេចក្តីសន្និដ្ឋាន"
      },
      {
        "type": "paragraph",
        "text": "Data គឺជាគ្រឹះនៃគម្រោង GIS ទាំងអស់ ប៉ុន្តែ Information គឺជាគោលដៅចុងក្រោយ។ អ្នកជំនាញ GIS មិនត្រឹមតែប្រមូលទិន្នន័យប៉ុណ្ណោះទេ ប៉ុន្តែបម្លែងវាទៅជាចំណេះដឹងដែលជួយដល់ការសម្រេចចិត្ត និងការអភិវឌ្ឍប្រកបដោយប្រសិទ្ធភាព។"
      }
    ]
  },
  "en": {
    "title": "Data Is Not the Same as Information",
    "excerpt": "One of the biggest misconceptions among new GIS users is believing that collecting data automatically produces useful knowledge. In reality, data and information are not the same thing. Geographic Information Systems (GIS) exist to bridge that gap by transforming raw geographic data into meaningful information that supports better decisions.",
    "readTime": "6 minutes",
    "content": [
      {
        "type": "heading",
        "text": "Introduction"
      },
      {
        "type": "paragraph",
        "text": "One of the biggest misconceptions among new GIS users is believing that collecting data automatically produces useful knowledge. In reality, data and information are not the same thing. Geographic Information Systems (GIS) exist to bridge that gap by transforming raw geographic data into meaningful information that supports better decisions."
      },
      {
        "type": "paragraph",
        "text": "The illustration compares two different stages of the same dataset. On the left is a simple table containing coordinates and population values. On the right is a thematic map that immediately reveals patterns, trends, and priorities. The numbers did not change—only the way they were analyzed and presented changed."
      },
      {
        "type": "heading",
        "text": "What Is Data?"
      },
      {
        "type": "paragraph",
        "text": "Data consists of raw facts and measurements collected from observations or surveys."
      },
      {
        "type": "paragraph",
        "text": "Examples include:"
      },
      {
        "type": "list",
        "items": [
          "GPS coordinates",
          "Population counts",
          "Elevation values",
          "Land parcel IDs",
          "Satellite pixel values",
          "Road lengths"
        ]
      },
      {
        "type": "paragraph",
        "text": "By themselves, these values provide very little meaning. Looking at a spreadsheet containing thousands of latitude, longitude, and population values makes it difficult to answer practical questions."
      },
      {
        "type": "paragraph",
        "text": "For example:"
      },
      {
        "type": "list",
        "items": [
          "Which district has the highest population?",
          "Which communities are underserved?",
          "Where should a new school be built?",
          "Which villages require emergency response first?"
        ]
      },
      {
        "type": "paragraph",
        "text": "Raw data rarely answers these questions directly."
      },
      {
        "type": "heading",
        "text": "What Is Information?"
      },
      {
        "type": "paragraph",
        "text": "Information is produced when data is processed, organized, analyzed, and visualized within its context."
      },
      {
        "type": "paragraph",
        "text": "GIS converts geographic data into information by:"
      },
      {
        "type": "list",
        "items": [
          "Mapping spatial locations",
          "Combining multiple datasets",
          "Performing spatial analysis",
          "Calculating statistics",
          "Visualizing patterns with symbols and colors"
        ]
      },
      {
        "type": "paragraph",
        "text": "A population map instantly shows where people are concentrated and where resources may be lacking. Decision-makers no longer need to inspect every individual record."
      },
      {
        "type": "heading",
        "text": "Why GIS Is Powerful"
      },
      {
        "type": "paragraph",
        "text": "GIS is much more than digital mapping software."
      },
      {
        "type": "paragraph",
        "text": "It answers questions such as:"
      },
      {
        "type": "list",
        "items": [
          "Where is something happening?",
          "Why is it happening there?",
          "What areas are most affected?",
          "What will happen if conditions change?"
        ]
      },
      {
        "type": "paragraph",
        "text": "This transformation from data to information enables governments, businesses, NGOs, engineers, and researchers to make evidence-based decisions."
      },
      {
        "type": "heading",
        "text": "Real-World Example"
      },
      {
        "type": "paragraph",
        "text": "Imagine a municipality receives the following dataset:"
      },
      {
        "type": "table",
        "headers": [
          "Village",
          "Population"
        ],
        "rows": [
          [
            "A",
            "1,250"
          ],
          [
            "B",
            "980"
          ],
          [
            "C",
            "2,100"
          ],
          [
            "D",
            "760"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "The table alone says little."
      },
      {
        "type": "paragraph",
        "text": "When combined with village boundaries, roads, rivers, hospitals, and schools inside GIS, planners can discover:"
      },
      {
        "type": "list",
        "items": [
          "High-density neighborhoods",
          "Areas lacking public services",
          "Communities far from healthcare",
          "Locations suitable for future development"
        ]
      },
      {
        "type": "paragraph",
        "text": "The dataset becomes actionable information."
      },
      {
        "type": "heading",
        "text": "From Data to Decisions"
      },
      {
        "type": "paragraph",
        "text": "A typical GIS workflow is:"
      },
      {
        "type": "list",
        "items": [
          "Collect reliable data.",
          "Clean and validate it.",
          "Store it in a structured database.",
          "Analyze spatial relationships.",
          "Visualize the results.",
          "Interpret findings.",
          "Make informed decisions."
        ]
      },
      {
        "type": "paragraph",
        "text": "Each step increases the value of the original data."
      },
      {
        "type": "heading",
        "text": "Common Beginner Mistakes"
      },
      {
        "type": "paragraph",
        "text": "Many beginners:"
      },
      {
        "type": "list",
        "items": [
          "Spend most of their time collecting data but little time validating it.",
          "Produce attractive maps without performing meaningful analysis.",
          "Assume more data automatically means better decisions.",
          "Ignore data quality and metadata."
        ]
      },
      {
        "type": "paragraph",
        "text": "Remember:"
      },
      {
        "type": "paragraph",
        "text": "Poor-quality data produces poor-quality information."
      },
      {
        "type": "heading",
        "text": "The Golden Rule"
      },
      {
        "type": "paragraph",
        "text": "The image summarizes an important GIS principle:"
      },
      {
        "type": "quote",
        "text": "Collect data carefully. Analyze it wisely. Turn it into information that matters."
      },
      {
        "type": "paragraph",
        "text": "GIS professionals create value not by collecting the most data, but by extracting meaningful insights from it."
      },
      {
        "type": "heading",
        "text": "Conclusion"
      },
      {
        "type": "paragraph",
        "text": "Data is the foundation of every GIS project, but information is the true objective. Raw coordinates, tables, and measurements become valuable only after analysis provides context and reveals spatial patterns."
      },
      {
        "type": "paragraph",
        "text": "The next time you open a spreadsheet full of geographic records, remember that your real task is not simply to store data—it is to transform that data into knowledge that supports smarter decisions."
      }
    ]
  }
};

export const CATEGORIES = [
  { slug: "all", label: "ទាំងអស់", color: "orange" },
  { slug: "video", label: "វីដេអូ", color: "red" },
  { slug: "tips", label: "Tips & Tricks", color: "blue" },
  { slug: "tutorial", label: "Tutorial", color: "purple" },
  { slug: "news", label: "ព័ត៌មាន", color: "green" },
];

export const posts = [
  {
    slug: "a-shapefile-isnt-one-file",
    category: "tips",
    title: "១០ Shortcuts ក្នុង ArcGIS Pro ដែលអ្នកគួរដឹង",
    excerpt:
      "ប្រើ shortcuts ទាំងនេះ ដើម្បីកាត់បន្ថយពេលវេលាក្នុងការធ្វើផែនទី និងវិភាគទិន្នន័យ។",
    coverImage: "/blog/Shapefile.png",
    coverDisplay: "contain",
    publishedAt: "2026-04-28",
    readTime: "៥ នាទី",
    author: { name: "KGA Team", avatar: null },
    tags: ["Shapefile", "GIS", "Data Sharing"],
    locales: SHAPEFILE_ARTICLE,
    content: [
      { type: "paragraph", text: "ការប្រើប្រាស់ keyboard shortcuts គឺជាមធ្យោបាយដ៏ល្អមួយក្នុងការបង្កើនប្រសិទ្ធភាពការងាររបស់អ្នក។" },
      { type: "heading", text: "១. Pan Tool (C)" },
      { type: "paragraph", text: "ចុចហើយសង្កត់ C ដើម្បីប្តូរទៅ Pan tool ភ្លាមៗ។" },
      { type: "heading", text: "២. Zoom In/Out" },
      { type: "paragraph", text: "ប្រើ Z សម្រាប់ zoom in និង X សម្រាប់ zoom out។" },
    ],
  },
  {
    slug: "zooming-in-doesnt-increase-accuracy",
    category: "tips",
    title: ZOOMING_IN_ARTICLE.km.title,
    excerpt: ZOOMING_IN_ARTICLE.km.excerpt,
    coverImage: "/blog/zooming_in.png",
    coverDisplay: "contain",
    publishedAt: "2026-04-22",
    readTime: ZOOMING_IN_ARTICLE.km.readTime,
    author: { name: "KGA Team", avatar: null },
    tags: ["GIS Tip", "Scale", "Accuracy"],
    locales: ZOOMING_IN_ARTICLE,
    content: ZOOMING_IN_ARTICLE.km.content,
  },
  {
    slug: "snapping-can-save-hours-of-editing",
    category: "tips",
    title: SNAPPING_ARTICLE.km.title,
    excerpt: SNAPPING_ARTICLE.km.excerpt,
    coverImage: "/blog/snapping.png",
    coverDisplay: "contain",
    publishedAt: "2026-04-15",
    readTime: SNAPPING_ARTICLE.km.readTime,
    author: { name: "KGA Team", avatar: null },
    tags: ["Snapping", "Editing", "Topology", "GIS Tip"],
    locales: SNAPPING_ARTICLE,
    content: SNAPPING_ARTICLE.km.content,
  },
  {
    slug: "gis-is-not-just-making-maps",
    category: "tips",
    title: GIS_ISNT_JUST_MAP_ARTICLE.km.title,
    excerpt: GIS_ISNT_JUST_MAP_ARTICLE.km.excerpt,
    coverImage: "/blog/gis_isnt_just_map.png",
    coverDisplay: "contain",
    publishedAt: "2026-04-10",
    readTime: GIS_ISNT_JUST_MAP_ARTICLE.km.readTime,
    author: { name: "KGA Team", avatar: null },
    tags: ["GIS Tip", "Spatial Analysis", "AI", "Data Science"],
    locales: GIS_ISNT_JUST_MAP_ARTICLE,
    content: GIS_ISNT_JUST_MAP_ARTICLE.km.content,
  },
  {
    slug: "wgs84-is-not-always-the-best-choice",
    category: "tips",
    title: WGS84_ARTICLE.km.title,
    excerpt: WGS84_ARTICLE.km.excerpt,
    coverImage: "/blog/wgs84_isnt_best_choice.png",
    coverDisplay: "contain",
    publishedAt: "2026-04-05",
    readTime: WGS84_ARTICLE.km.readTime,
    author: { name: "KGA Team", avatar: null },
    tags: ["GIS Tip", "WGS84", "Coordinate Systems", "Projection"],
    locales: WGS84_ARTICLE,
    content: WGS84_ARTICLE.km.content,
  },
  {
    slug: "dem-dtm-or-dsm-know-the-difference",
    category: "tips",
    title: DEM_DTM_DSM_ARTICLE.km.title,
    excerpt: DEM_DTM_DSM_ARTICLE.km.excerpt,
    coverImage: "/blog/dem_dtm_dsm.png",
    coverDisplay: "contain",
    publishedAt: "2026-03-30",
    readTime: DEM_DTM_DSM_ARTICLE.km.readTime,
    author: { name: "KGA Team", avatar: null },
    tags: ["DEM", "DTM", "DSM", "Remote Sensing"],
    locales: DEM_DTM_DSM_ARTICLE,
    content: DEM_DTM_DSM_ARTICLE.km.content,
  },
  {
    slug: "data-is-not-the-same-as-information",
    category: "tips",
    title: DATA_INFO_ARTICLE.km.title,
    excerpt: DATA_INFO_ARTICLE.km.excerpt,
    coverImage: "/blog/data_isnt_sameas_info.png",
    coverDisplay: "contain",
    publishedAt: "2026-03-25",
    readTime: DATA_INFO_ARTICLE.km.readTime,
    author: { name: "KGA Team", avatar: null },
    tags: ["GIS Tip", "Data", "Information", "Decision Making"],
    locales: DATA_INFO_ARTICLE,
    content: DATA_INFO_ARTICLE.km.content,
  },
];

export const getPostBySlug = (slug) => posts.find((p) => p.slug === slug);

export const getLocalizedPost = (post, language = "km") => {
  const locale = post?.locales?.[language] || post?.locales?.km;
  return locale ? { ...post, ...locale } : post;
};

export const getLocalizedPosts = (language = "km") =>
  posts.map((post) => getLocalizedPost(post, language));

export const getPostsByCategory = (cat) =>
  cat === "all" ? posts : posts.filter((p) => p.category === cat);
export const getRelatedPosts = (slug, cat, limit = 3) =>
  posts.filter((p) => p.slug !== slug && p.category === cat).slice(0, limit);
