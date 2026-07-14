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

const MDB_GDB_ARTICLE = {
  "km": {
    "title": "បម្លែង MDB ទៅ GDB ដោយមិនចាំបាច់បើក ArcMap",
    "excerpt": "អង្គភាព GIS ជាច្រើននៅតែរក្សាទុកទិន្នន័យជា Personal Geodatabase (.mdb) ដែលបង្កើតពី ArcMap។ កន្លងមក ការបម្លែងទៅជា File Geodatabase (.gdb) តម្រូវឱ្យបើក ArcMap សិន បន្ទាប់មកទើប Export និង Import ទិន្នន័យ។",
    "readTime": "ប្រហែល ៥ នាទី",
    "content": [
      {
        "type": "heading",
        "text": "វិធីថ្មីសម្រាប់បម្លែងទិន្នន័យចាស់ទៅ File Geodatabase"
      },
      {
        "type": "paragraph",
        "text": "អង្គភាព GIS ជាច្រើននៅតែរក្សាទុកទិន្នន័យជា Personal Geodatabase (.mdb) ដែលបង្កើតពី ArcMap។ កន្លងមក ការបម្លែងទៅជា File Geodatabase (.gdb) តម្រូវឱ្យបើក ArcMap សិន បន្ទាប់មកទើប Export និង Import ទិន្នន័យ។"
      },
      {
        "type": "paragraph",
        "text": "ដំណើរការនេះចំណាយពេល និងពឹងផ្អែកលើកម្មវិធីដែល Esri បានបញ្ឈប់ការអភិវឌ្ឍរួចហើយ។"
      },
      {
        "type": "paragraph",
        "text": "ថ្ងៃនេះ KGA Toolbox នាំមកនូវដំណោះស្រាយថ្មី។"
      },
      {
        "type": "heading",
        "text": "មុខងារថ្មី"
      },
      {
        "type": "paragraph",
        "text": "ឧបករណ៍ MDB to GDB អាចបម្លែង Personal Geodatabase ទៅជា File Geodatabase ដោយផ្ទាល់ ដោយមិនចាំបាច់បើក ArcMap។"
      },
      {
        "type": "paragraph",
        "text": "អ្នកគ្រាន់តែ៖"
      },
      {
        "type": "list",
        "items": [
          "ជ្រើសរើសឯកសារ .mdb",
          "កំណត់ទីតាំងរក្សាទុក",
          "ចុច Convert"
        ]
      },
      {
        "type": "paragraph",
        "text": "ឧបករណ៍នឹងបង្កើត File Geodatabase និងផ្ទេរទិន្នន័យដែលគាំទ្រដោយស្វ័យប្រវត្តិ។"
      },
      {
        "type": "heading",
        "text": "ហេតុអ្វីវាសំខាន់?"
      },
      {
        "type": "list",
        "items": [
          "ArcMap ត្រូវបានបញ្ឈប់ការអភិវឌ្ឍ។",
          "ArcGIS Pro មិនបង្កើត Personal Geodatabase ទៀតទេ។",
          "គម្រោងចាស់ៗជាច្រើននៅតែប្រើ MDB។"
        ]
      },
      {
        "type": "paragraph",
        "text": "ឧបករណ៍នេះជួយកាត់បន្ថយការងារដោយដៃ និងធ្វើឱ្យការផ្លាស់ប្តូរទៅ ArcGIS Pro កាន់តែងាយស្រួល។"
      },
      {
        "type": "heading",
        "text": "អត្ថប្រយោជន៍"
      },
      {
        "type": "list",
        "items": [
          "✅ មិនចាំបាច់បើក ArcMap",
          "✅ បម្លែងបានលឿន",
          "✅ សាកសមសម្រាប់គម្រោងច្រើន",
          "✅ ជួយផ្លាស់ប្តូរទៅ File Geodatabase បានងាយ",
          "✅ សមស្របសម្រាប់ Workflow របស់ ArcGIS Pro"
        ]
      },
      {
        "type": "heading",
        "text": "អាចប្រើសម្រាប់"
      },
      {
        "type": "list",
        "items": [
          "បម្លែងទិន្នន័យ GIS ចាស់",
          "រៀបចំទិន្នន័យសម្រាប់ ArcGIS Pro",
          "ធ្វើស្តង់ដារមូលដ្ឋានទិន្នន័យរបស់អង្គភាព",
          "រក្សាទុកទិន្នន័យក្នុងទម្រង់ទំនើប"
        ]
      },
      {
        "type": "heading",
        "text": "Workflow ថ្មី"
      },
      {
        "type": "paragraph",
        "text": "ជំនួសឱ្យ"
      },
      {
        "type": "paragraph",
        "text": "Open ArcMap → Export → Create GDB → Import"
      },
      {
        "type": "paragraph",
        "text": "ឥឡូវនេះ អ្នកគ្រាន់តែ"
      },
      {
        "type": "paragraph",
        "text": "Select MDB → Convert → Done"
      },
      {
        "type": "paragraph",
        "text": "ងាយ សាមញ្ញ និងចំណេញពេលវេលាជាងមុន។"
      },
      {
        "type": "heading",
        "text": "សេចក្តីសន្និដ្ឋាន"
      },
      {
        "type": "paragraph",
        "text": "ការផ្លាស់ប្តូរទិន្នន័យចាស់ទៅកាន់ File Geodatabase គឺជាជំហានសំខាន់សម្រាប់អង្គភាពដែលកំពុងប្រើ ArcGIS Pro។ ឧបករណ៍ MDB to GDB របស់ KGA Toolbox ត្រូវបានបង្កើតឡើងដើម្បីធ្វើឱ្យការងារនេះកាន់តែលឿន ងាយស្រួល និងអាចទុកចិត្តបាន។"
      },
      {
        "type": "paragraph",
        "text": "ប្រសិនបើអ្នកនៅតែមានទិន្នន័យ MDB ចាស់ៗ នេះគឺជាពេលល្អបំផុតក្នុងការបម្លែងវាទៅកាន់ File Geodatabase។"
      }
    ]
  },
  "en": {
    "title": "Convert MDB to GDB Without Opening ArcMap",
    "excerpt": "If you still receive Microsoft Access Geodatabases (.mdb) from clients or legacy projects, you already know the usual workflow: install ArcMap, open the database, export the data, and finally migrate it into a File Geodatabase (.gdb).",
    "readTime": "5 minutes",
    "content": [
      {
        "type": "heading",
        "text": "A Faster Way to Modernize Legacy Geodatabases"
      },
      {
        "type": "paragraph",
        "text": "If you still receive Microsoft Access Geodatabases (.mdb) from clients or legacy projects, you already know the usual workflow: install ArcMap, open the database, export the data, and finally migrate it into a File Geodatabase (.gdb)."
      },
      {
        "type": "paragraph",
        "text": "That process is slow, requires legacy software, and becomes increasingly difficult as ArcMap reaches the end of its lifecycle."
      },
      {
        "type": "paragraph",
        "text": "Today we're introducing a much simpler solution."
      },
      {
        "type": "heading",
        "text": "What's New?"
      },
      {
        "type": "paragraph",
        "text": "The new MDB to GDB tool in the KGA Toolbox converts an entire Personal Geodatabase directly into a File Geodatabase without opening ArcMap."
      },
      {
        "type": "paragraph",
        "text": "Simply:"
      },
      {
        "type": "list",
        "items": [
          "Select the .mdb file.",
          "Choose an output location.",
          "Click Convert."
        ]
      },
      {
        "type": "paragraph",
        "text": "The tool automatically creates a File Geodatabase and transfers the supported datasets."
      },
      {
        "type": "heading",
        "text": "Why This Matters"
      },
      {
        "type": "paragraph",
        "text": "Many organizations still maintain archives in MDB format. However:"
      },
      {
        "type": "list",
        "items": [
          "ArcMap is retired and difficult to maintain.",
          "ArcGIS Pro no longer creates Personal Geodatabases.",
          "Migrating old projects is becoming an increasingly common task."
        ]
      },
      {
        "type": "paragraph",
        "text": "This tool removes unnecessary manual steps and lets GIS professionals focus on their actual work."
      },
      {
        "type": "heading",
        "text": "Key Benefits"
      },
      {
        "type": "list",
        "items": [
          "✅ No need to launch ArcMap",
          "✅ Fast conversion workflow",
          "✅ Batch-friendly for multiple projects",
          "✅ Easy migration to modern GIS environments",
          "✅ Works naturally within an ArcGIS Pro workflow"
        ]
      },
      {
        "type": "heading",
        "text": "Typical Use Cases"
      },
      {
        "type": "list",
        "items": [
          "Upgrading legacy GIS archives",
          "Migrating historical land administration projects",
          "Preparing old datasets for ArcGIS Pro",
          "Standardizing organizational geodatabases"
        ]
      },
      {
        "type": "heading",
        "text": "A Better Migration Workflow"
      },
      {
        "type": "paragraph",
        "text": "Instead of:"
      },
      {
        "type": "paragraph",
        "text": "Open ArcMap → Export → Create GDB → Import"
      },
      {
        "type": "paragraph",
        "text": "You can now use:"
      },
      {
        "type": "paragraph",
        "text": "Select MDB → Convert → Done"
      },
      {
        "type": "paragraph",
        "text": "That's fewer steps, less waiting, and a cleaner workflow."
      },
      {
        "type": "heading",
        "text": "Final Thoughts"
      },
      {
        "type": "paragraph",
        "text": "As the GIS industry moves fully toward ArcGIS Pro, modernizing old data formats becomes essential. The new MDB to GDB tool helps bridge that gap by making legacy data migration simple, fast, and reliable."
      },
      {
        "type": "paragraph",
        "text": "If your organization still stores valuable GIS data in MDB format, now is the perfect time to move forward."
      }
    ]
  }
};

const LIFE_EXPECTANCY_ARTICLE = {
  "km": {
    "title": "ទស្សន៍ទាយអាយុសង្ឃឹមរស់ឆ្នាំ 2030៖ តើទិន្នន័យអាចមើលឃើញអនាគតបានទេ?",
    "excerpt": "តើអាចទស្សន៍ទាយថា មនុស្សម្នាក់ ឬប្រជាជនក្នុងប្រទេសមួយ នឹងមានអាយុសង្ឃឹមរស់ប៉ុន្មានឆ្នាំនៅពេលអនាគតដែរឬទេ? ជាមួយបច្ចេកវិទ្យា Data Science និង Machine Learning ចម្លើយគឺ អាចប៉ាន់ស្មានបាន។",
    "readTime": "ប្រហែល ៥ នាទី",
    "content": [
      {
        "type": "heading",
        "text": "មូលដ្ឋាន"
      },
      {
        "type": "paragraph",
        "text": "តើអាចទស្សន៍ទាយថា មនុស្សម្នាក់ ឬប្រជាជនក្នុងប្រទេសមួយ នឹងមានអាយុសង្ឃឹមរស់ប៉ុន្មានឆ្នាំនៅពេលអនាគតដែរឬទេ? ជាមួយបច្ចេកវិទ្យា Data Science និង Machine Learning ចម្លើយគឺ អាចប៉ាន់ស្មានបាន។"
      },
      {
        "type": "paragraph",
        "text": "ការទស្សន៍ទាយអាយុសង្ឃឹមរស់ ប្រើទិន្នន័យប្រវត្តិសាស្ត្រដូចជា សុខភាព សេដ្ឋកិច្ច ការអប់រំ និងកត្តាសង្គមផ្សេងៗ ដើម្បីបង្កើតគំរូសម្រាប់ព្យាករណ៍អនាគត។"
      },
      {
        "type": "heading",
        "text": "អាយុសង្ឃឹមរស់ជាអ្វី?"
      },
      {
        "type": "paragraph",
        "text": "អាយុសង្ឃឹមរស់ (Life Expectancy) គឺជាចំនួនឆ្នាំមធ្យមដែលទារកកើតថ្មី ត្រូវបានរំពឹងថានឹងរស់នៅ ប្រសិនបើលក្ខខណ្ឌអត្រាមរណភាពបច្ចុប្បន្ននៅដដែល។"
      },
      {
        "type": "paragraph",
        "text": "កត្តាសំខាន់ៗរួមមាន៖"
      },
      {
        "type": "list",
        "items": [
          "គុណភាពសេវាសុខាភិបាល",
          "សេដ្ឋកិច្ច និងប្រាក់ចំណូល",
          "ការអប់រំ",
          "អាហារូបត្ថម្ភ",
          "អនាម័យ",
          "ការចាក់វ៉ាក់សាំង",
          "របៀបរស់នៅ",
          "បរិស្ថាន"
        ]
      },
      {
        "type": "heading",
        "text": "ហេតុអ្វីព្យាករណ៍ដល់ឆ្នាំ 2030?"
      },
      {
        "type": "paragraph",
        "text": "ការព្យាករណ៍ជួយឱ្យ៖"
      },
      {
        "type": "list",
        "items": [
          "រៀបចំផែនការសុខាភិបាល។",
          "វាយតម្លៃគោលនយោបាយរយៈពេលវែង។",
          "កំណត់តំបន់ដែលមានហានិភ័យ។",
          "ព្យាករណ៍និន្នាការប្រជាជន។",
          "គាំទ្រគោលដៅអភិវឌ្ឍន៍ប្រកបដោយចីរភាព។"
        ]
      },
      {
        "type": "heading",
        "text": "Machine Learning ដំណើរការយ៉ាងដូចម្តេច?"
      },
      {
        "type": "paragraph",
        "text": "លំហូរការងារទូទៅ៖"
      },
      {
        "type": "list",
        "items": [
          "ប្រមូលទិន្នន័យប្រវត្តិសាស្ត្រ។",
          "សម្អាត និងរៀបចំទិន្នន័យ។",
          "វិភាគទិន្នន័យ (EDA)។",
          "បណ្ដុះបណ្ដាលម៉ូដែល។",
          "វាយតម្លៃលទ្ធផល។",
          "ព្យាករណ៍សម្រាប់ឆ្នាំ 2030។"
        ]
      },
      {
        "type": "paragraph",
        "text": "ម៉ូដែលពេញនិយមមាន Linear Regression, Random Forest, XGBoost និង Lasso Regression។"
      },
      {
        "type": "heading",
        "text": "ការព្យាករណ៍មិនមែនជាការទស្សន៍ទាយអនាគតពិតប្រាកដ"
      },
      {
        "type": "paragraph",
        "text": "Machine Learning រៀនពីនិន្នាការកន្លងមក។ ប្រសិនបើមានព្រឹត្តិការណ៍ធំៗដូចជា ជំងឺរាតត្បាត សង្គ្រាម ឬបច្ចេកវិទ្យាវេជ្ជសាស្ត្រថ្មី លទ្ធផលអាចខុសពីការពិត។"
      },
      {
        "type": "paragraph",
        "text": "ដូច្នេះ វាគួរត្រូវបានប្រើជាឧបករណ៍ជួយសម្រេចចិត្ត មិនមែនជាការទស្សន៍ទាយដាច់ខាតទេ។"
      },
      {
        "type": "heading",
        "text": "ការប្រើប្រាស់ជាក់ស្តែង"
      },
      {
        "type": "list",
        "items": [
          "ការធ្វើផែនការសុខាភិបាល",
          "វិស័យធានារ៉ាប់រង",
          "ការព្យាករណ៍សេដ្ឋកិច្ច",
          "គោលនយោបាយសង្គម",
          "ការស្រាវជ្រាវ"
        ]
      },
      {
        "type": "heading",
        "text": "សេចក្តីសន្និដ្ឋាន"
      },
      {
        "type": "paragraph",
        "text": "Data Science មិនត្រឹមតែជួយយល់ពីអតីតកាលប៉ុណ្ណោះទេ ប៉ុន្តែជួយរៀបចំសម្រាប់អនាគតផងដែរ។ ការទស្សន៍ទាយអាយុសង្ឃឹមរស់ជាឧទាហរណ៍ល្អមួយនៃការប្រើ Machine Learning ដើម្បីបម្លែងទិន្នន័យទៅជាចំណេះដឹងដែលអាចជួយការសម្រេចចិត្ត។"
      }
    ]
  },
  "en": {
    "title": "Predicting Life Expectancy in 2030: Can Data See the Future?",
    "excerpt": "Can we estimate how long people will live in the future? With modern data science, the answer is yes—to a certain extent.",
    "readTime": "5 minutes",
    "content": [
      {
        "type": "heading",
        "text": "Introduction"
      },
      {
        "type": "paragraph",
        "text": "Can we estimate how long people will live in the future? With modern data science, the answer is yes—to a certain extent."
      },
      {
        "type": "paragraph",
        "text": "Life expectancy prediction combines historical health, economic, and social indicators with machine learning models to estimate the average lifespan of a country's population. While no model can predict the future perfectly, predictive analytics helps governments and organizations make informed decisions."
      },
      {
        "type": "heading",
        "text": "What Is Life Expectancy?"
      },
      {
        "type": "paragraph",
        "text": "Life expectancy is the average number of years a newborn is expected to live under current mortality conditions. It is widely used as an indicator of a country's health and development."
      },
      {
        "type": "paragraph",
        "text": "Factors affecting life expectancy include:"
      },
      {
        "type": "list",
        "items": [
          "Healthcare quality",
          "Income and economic growth",
          "Education",
          "Nutrition",
          "Sanitation",
          "Vaccination",
          "Lifestyle",
          "Environmental conditions"
        ]
      },
      {
        "type": "heading",
        "text": "Why Predict 2030?"
      },
      {
        "type": "paragraph",
        "text": "Forecasting life expectancy allows decision makers to:"
      },
      {
        "type": "list",
        "items": [
          "Plan healthcare resources.",
          "Evaluate long-term policies.",
          "Detect countries at risk.",
          "Estimate future population trends.",
          "Support sustainable development goals."
        ]
      },
      {
        "type": "heading",
        "text": "How Machine Learning Helps"
      },
      {
        "type": "paragraph",
        "text": "A typical workflow includes:"
      },
      {
        "type": "list",
        "items": [
          "Collect historical datasets.",
          "Clean and preprocess data.",
          "Explore relationships using data analysis.",
          "Train predictive models.",
          "Evaluate prediction accuracy.",
          "Generate forecasts for future years such as 2030."
        ]
      },
      {
        "type": "paragraph",
        "text": "Common algorithms include Linear Regression, Random Forest, XGBoost, and Lasso Regression."
      },
      {
        "type": "heading",
        "text": "Prediction Is Not Magic"
      },
      {
        "type": "paragraph",
        "text": "Machine learning identifies patterns from historical observations. If future conditions change dramatically—such as pandemics, wars, or major medical breakthroughs—the prediction may differ from reality."
      },
      {
        "type": "paragraph",
        "text": "Therefore, predictions should be viewed as decision-support tools, not absolute truth."
      },
      {
        "type": "heading",
        "text": "Real-World Applications"
      },
      {
        "type": "paragraph",
        "text": "Life expectancy prediction is valuable for:"
      },
      {
        "type": "list",
        "items": [
          "Public health planning",
          "Insurance analysis",
          "Economic forecasting",
          "Social policy",
          "Academic research"
        ]
      },
      {
        "type": "heading",
        "text": "Final Thoughts"
      },
      {
        "type": "paragraph",
        "text": "Data science is not only about explaining the past—it also helps us prepare for the future. Predicting life expectancy demonstrates how statistical analysis and machine learning can transform historical data into meaningful insights for better planning."
      }
    ]
  }
};

const KML_GIS_ARTICLE = {
  "km": {
    "title": "សន្សំពេលវេលាបានរហូតដល់ 80% ក្នុងការធ្វើការជាមួយ KML ដោយប្រើ KGA Toolbox",
    "excerpt": "KML (Keyhole Markup Language) គឺជាទម្រង់ទិន្នន័យភូមិសាស្ត្រដែលត្រូវបានប្រើយ៉ាងទូលំទូលាយនៅក្នុង Google Earth។ អ្នកជំនាញ GIS ជាច្រើនទទួលទិន្នន័យដីធ្លី ព្រំប្រទល់គម្រោង ឬទិន្នន័យស្ទង់មតិជាទម្រង់ KML/KMZ ហើយត្រូវយកមកប្រើក្នុង ArcGIS Pro។",
    "readTime": "ប្រហែល ៥ នាទី",
    "content": [
      {
        "type": "heading",
        "text": "សេចក្តីផ្តើម"
      },
      {
        "type": "paragraph",
        "text": "KML (Keyhole Markup Language) គឺជាទម្រង់ទិន្នន័យភូមិសាស្ត្រដែលត្រូវបានប្រើយ៉ាងទូលំទូលាយនៅក្នុង Google Earth។ អ្នកជំនាញ GIS ជាច្រើនទទួលទិន្នន័យដីធ្លី ព្រំប្រទល់គម្រោង ឬទិន្នន័យស្ទង់មតិជាទម្រង់ KML/KMZ ហើយត្រូវយកមកប្រើក្នុង ArcGIS Pro។"
      },
      {
        "type": "paragraph",
        "text": "ការបម្លែង និងរៀបចំទិន្នន័យទាំងនេះដោយដៃអាចចំណាយពេលច្រើន។ ដើម្បីដោះស្រាយបញ្ហានេះ KGA Toolbox បានបន្ថែម KML Handler Tool ដែលអាចជួយកាត់បន្ថយការងារដដែលៗ និងធ្វើឱ្យដំណើរការលឿនជាងមុន។"
      },
      {
        "type": "heading",
        "text": "បញ្ហាដែលជួបប្រទះ"
      },
      {
        "type": "paragraph",
        "text": "វិធីធម្មតាត្រូវ៖"
      },
      {
        "type": "list",
        "items": [
          "Import KML/KMZ ម្តងមួយៗ",
          "រៀបចំ Feature Class ឡើងវិញ",
          "បង្កើត Folder ដោយដៃ",
          "ធ្វើដំណើរការដដែលៗសម្រាប់ឯកសារជាច្រើន"
        ]
      },
      {
        "type": "paragraph",
        "text": "ការងារទាំងនេះចំណាយពេល និងងាយមានកំហុស។"
      },
      {
        "type": "heading",
        "text": "KGA Toolbox ជួយដូចម្តេច?"
      },
      {
        "type": "paragraph",
        "text": "KML Handler Tool ផ្តល់សមត្ថភាពដូចជា៖"
      },
      {
        "type": "list",
        "items": [
          "គាំទ្រ KML និង KMZ",
          "បម្លែងដោយផ្ទាល់ទៅ File Geodatabase",
          "រក្សាទុក Folder Structure តាមដែលអាចធ្វើបាន",
          "រៀបចំ Output ដោយស្វ័យប្រវត្តិ",
          "កាត់បន្ថយការងារក្រោយការបម្លែង",
          "អាចប្រើភ្លាមក្នុង ArcGIS Pro"
        ]
      },
      {
        "type": "heading",
        "text": "សាកសមសម្រាប់ការងារអ្វីខ្លះ?"
      },
      {
        "type": "list",
        "items": [
          "ការគ្រប់គ្រងដីធ្លី",
          "ការរៀបចំផែនការទីក្រុង",
          "ការតាមដានបរិស្ថាន",
          "ការស្ទង់មតិវិស្វកម្ម",
          "Utility Mapping",
          "អង្គភាពរដ្ឋ និងឯកជនដែលប្រើ Google Earth"
        ]
      },
      {
        "type": "heading",
        "text": "ហេតុអ្វីគួរប្រើ?"
      },
      {
        "type": "paragraph",
        "text": "ការកាត់បន្ថយការងារដដែលៗ អនុញ្ញាតឱ្យអ្នកផ្តោតលើការវិភាគទិន្នន័យជំនួសការរៀបចំទិន្នន័យ។ វាក៏ជួយធ្វើឱ្យ Workflow មានស្តង់ដារ និងកាត់បន្ថយកំហុសក្នុងការងារផងដែរ។"
      },
      {
        "type": "heading",
        "text": "មើលវីដេអូសាកល្បង"
      },
      {
        "type": "paragraph",
        "text": "វីដេអូរយៈពេល 5:02 បង្ហាញពីការប្រើប្រាស់ KGA Toolbox – KML Handler Tool ចាប់ពីការនាំចូល KML រហូតដល់ទទួលបានទិន្នន័យដែលអាចប្រើបានក្នុង ArcGIS Pro។"
      },
      {
        "type": "paragraph",
        "text": "អ្នកនឹងឃើញ៖"
      },
      {
        "type": "list",
        "items": [
          "របៀប Import KML",
          "ការរៀបចំទិន្នន័យដោយស្វ័យប្រវត្តិ",
          "លទ្ធផលចុងក្រោយក្នុង ArcGIS Pro"
        ]
      },
      {
        "type": "heading",
        "text": "សេចក្តីសន្និដ្ឋាន"
      },
      {
        "type": "paragraph",
        "text": "ប្រសិនបើអ្នកធ្វើការជាមួយទិន្នន័យ Google Earth ជាប្រចាំ KML Handler Tool ក្នុង KGA Toolbox អាចជួយសន្សំពេលវេលា បង្កើនប្រសិទ្ធភាពការងារ និងធ្វើឱ្យការគ្រប់គ្រងទិន្នន័យកាន់តែងាយស្រួល។"
      }
    ]
  },
  "en": {
    "title": "Save 80% of Your Time Working with KML Files in ArcGIS Pro using KGA Toolbox",
    "excerpt": "KML (Keyhole Markup Language) is one of the most common formats used for sharing geographic data through Google Earth. Many GIS professionals receive land parcels, project boundaries, survey areas, or planning data as KML/KMZ files. Converting and organizing these datasets inside ArcGIS Pro can become repetitive and time-consuming.",
    "readTime": "5 minutes",
    "content": [
      {
        "type": "heading",
        "text": "Introduction"
      },
      {
        "type": "paragraph",
        "text": "KML (Keyhole Markup Language) is one of the most common formats used for sharing geographic data through Google Earth. Many GIS professionals receive land parcels, project boundaries, survey areas, or planning data as KML/KMZ files. Converting and organizing these datasets inside ArcGIS Pro can become repetitive and time-consuming."
      },
      {
        "type": "paragraph",
        "text": "The KGA Toolbox includes a dedicated KML Handler Tool that simplifies this workflow and significantly reduces manual effort. In the demonstration video (5:02), the tool shows how to import KML data into ArcGIS Pro quickly while preserving a clean project structure."
      },
      {
        "type": "heading",
        "text": "The Challenge"
      },
      {
        "type": "paragraph",
        "text": "Traditional KML workflows often require users to:"
      },
      {
        "type": "list",
        "items": [
          "Import each KML/KMZ file individually.",
          "Reorganize feature classes after conversion.",
          "Manage folders manually.",
          "Repeat the same process for multiple datasets."
        ]
      },
      {
        "type": "paragraph",
        "text": "These repetitive tasks consume valuable production time."
      },
      {
        "type": "heading",
        "text": "How the KGA Toolbox Helps"
      },
      {
        "type": "paragraph",
        "text": "The KML Handler Tool automates much of the conversion process."
      },
      {
        "type": "paragraph",
        "text": "Key capabilities include:"
      },
      {
        "type": "list",
        "items": [
          "Import both KML and KMZ files.",
          "Convert directly into a File Geodatabase.",
          "Preserve folder hierarchy where possible.",
          "Organize outputs automatically.",
          "Reduce manual post-processing.",
          "Produce ArcGIS Pro-ready datasets."
        ]
      },
      {
        "type": "paragraph",
        "text": "The result is a cleaner, more efficient GIS workflow."
      },
      {
        "type": "heading",
        "text": "Practical Applications"
      },
      {
        "type": "paragraph",
        "text": "This tool is especially useful for:"
      },
      {
        "type": "list",
        "items": [
          "Land administration projects",
          "Urban planning",
          "Environmental monitoring",
          "Engineering surveys",
          "Utility mapping",
          "Government GIS departments"
        ]
      },
      {
        "type": "paragraph",
        "text": "If your organization regularly exchanges Google Earth data, this tool can save considerable processing time."
      },
      {
        "type": "heading",
        "text": "Why It Matters"
      },
      {
        "type": "paragraph",
        "text": "Reducing repetitive GIS tasks allows professionals to focus on analysis instead of data preparation. Standardized import workflows also reduce human error and improve project consistency across teams."
      },
      {
        "type": "paragraph",
        "text": "For organizations processing dozens or hundreds of KML files, even saving a few minutes per dataset can translate into significant productivity gains."
      },
      {
        "type": "heading",
        "text": "Watch the Demo"
      },
      {
        "type": "paragraph",
        "text": "The accompanying 5:02 video demonstrates the complete workflow using the KGA Toolbox."
      },
      {
        "type": "paragraph",
        "text": "You will learn:"
      },
      {
        "type": "list",
        "items": [
          "How to import a KML file.",
          "How the tool organizes the converted data.",
          "The final output inside ArcGIS Pro."
        ]
      },
      {
        "type": "heading",
        "text": "Conclusion"
      },
      {
        "type": "paragraph",
        "text": "The KGA Toolbox KML Handler Tool is designed to make KML data management faster, cleaner, and more reliable. If you frequently work with Google Earth datasets, this tool can dramatically simplify your daily workflow and help you spend more time on GIS analysis instead of repetitive conversion tasks."
      }
    ]
  }
};

const WHY_GIS_INDUSTRY_ARTICLE = {
  "km": {
    "title": "ហេតុអ្វីបានជាគ្រប់វិស័យត្រូវការ GIS",
    "excerpt": "Geographic Information System (GIS) គឺជាបច្ចេកវិទ្យាដែលភ្ជាប់ ទីតាំងភូមិសាស្ត្រ ជាមួយ ទិន្នន័យ ដើម្បីជួយអង្គភាពនានាធ្វើការវិភាគ មើលឃើញលំនាំ និងសម្រេចចិត្តបានកាន់តែប្រសើរ។",
    "readTime": "១៥ នាទី",
    "content": [
      {
        "type": "quote",
        "text": "«បើអ្វីមួយមានទីតាំង GIS អាចជួយធ្វើឱ្យវាប្រសើរឡើងបាន»"
      },
      {
        "type": "heading",
        "text": "សេចក្ដីផ្តើម"
      },
      {
        "type": "paragraph",
        "text": "Geographic Information System (GIS) គឺជាបច្ចេកវិទ្យាដែលភ្ជាប់ ទីតាំងភូមិសាស្ត្រ ជាមួយ ទិន្នន័យ ដើម្បីជួយអង្គភាពនានាធ្វើការវិភាគ មើលឃើញលំនាំ និងសម្រេចចិត្តបានកាន់តែប្រសើរ។"
      },
      {
        "type": "paragraph",
        "text": "មនុស្សជាច្រើនគិតថា GIS គ្រាន់តែជាកម្មវិធីគូរផែនទី ប៉ុន្តែការពិត GIS គឺជាវេទិកាវិភាគទិន្នន័យភូមិសាស្ត្រដ៏មានអានុភាព ដែលអាចឆ្លើយសំណួរដូចជា៖"
      },
      {
        "type": "list",
        "items": [
          "តើអ្វីកំពុងកើតឡើង?",
          "កើតឡើងនៅទីណា?",
          "ហេតុអ្វីកើតឡើងនៅទីនោះ?",
          "តំបន់ណាសមស្របបំផុតសម្រាប់ការអភិវឌ្ឍ?",
          "តើអ្វីនឹងកើតឡើងនាពេលអនាគត?"
        ]
      },
      {
        "type": "heading",
        "text": "មូលដ្ឋានសំខាន់របស់ GIS"
      },
      {
        "type": "paragraph",
        "text": "GIS រួមបញ្ចូលធាតុសំខាន់ ៣៖"
      },
      {
        "type": "list",
        "items": [
          "ទីតាំង (Location)",
          "ទិន្នន័យ (Data)",
          "ការយល់ដឹង (Insight)"
        ]
      },
      {
        "type": "paragraph",
        "text": "ការរួមបញ្ចូលធាតុទាំងនេះធ្វើឱ្យ GIS អាចបង្ហាញទំនាក់ទំនង លំនាំ និងនិន្នាការដែលតារាងទិន្នន័យធម្មតាមិនអាចបង្ហាញបាន។"
      },
      {
        "type": "heading",
        "text": "ការប្រើប្រាស់ GIS ក្នុងវិស័យផ្សេងៗ"
      },
      {
        "type": "heading3",
        "text": "១. ការរៀបចំទីក្រុង និង Smart City"
      },
      {
        "type": "list",
        "items": [
          "ផែនការប្រើប្រាស់ដី",
          "កំណត់តំបន់ប្រើប្រាស់",
          "អភិវឌ្ឍហេដ្ឋារចនាសម្ព័ន្ធ",
          "គ្រប់គ្រងទីក្រុងឆ្លាតវៃ"
        ]
      },
      {
        "type": "heading3",
        "text": "២. ធនធានធម្មជាតិ និងបរិស្ថាន"
      },
      {
        "type": "list",
        "items": [
          "តាមដានព្រៃឈើ",
          "គ្រប់គ្រងអាងទឹក",
          "អភិរក្សជីវចម្រុះ",
          "វាយតម្លៃការប្រែប្រួលអាកាសធាតុ"
        ]
      },
      {
        "type": "heading3",
        "text": "៣. កសិកម្មទំនើប"
      },
      {
        "type": "paragraph",
        "text": "GIS ជួយតាមដានសុខភាពដំណាំ វិភាគដី រៀបចំប្រព័ន្ធស្រោចស្រព និងបង្កើនប្រសិទ្ធភាពនៃការផលិត ខណៈកាត់បន្ថយការប្រើប្រាស់ធនធាន។"
      },
      {
        "type": "heading3",
        "text": "៤. ដឹកជញ្ជូន និងឡូជីស្ទិក"
      },
      {
        "type": "list",
        "items": [
          "កំណត់ផ្លូវល្អបំផុត",
          "គ្រប់គ្រងយានយន្ត",
          "វិភាគចរាចរណ៍",
          "បន្ថយថ្លៃដើមដឹកជញ្ជូន"
        ]
      },
      {
        "type": "heading3",
        "text": "៥. សេវាសាធារណៈ និងហេដ្ឋារចនាសម្ព័ន្ធ"
      },
      {
        "type": "paragraph",
        "text": "GIS ជួយគ្រប់គ្រងបណ្តាញអគ្គិសនី ទឹក ទូរគមនាគមន៍ និងទ្រព្យសម្បត្តិសាធារណៈ ដោយធ្វើឱ្យការថែទាំងាយស្រួល និងមានប្រសិទ្ធភាព។"
      },
      {
        "type": "heading3",
        "text": "៦. ការគ្រប់គ្រងគ្រោះមហន្តរាយ"
      },
      {
        "type": "list",
        "items": [
          "ផែនទីហានិភ័យ",
          "ប្រព័ន្ធព្រមានមុន",
          "ផែនការជម្លៀសប្រជាជន",
          "វាយតម្លៃការខូចខាត"
        ]
      },
      {
        "type": "heading3",
        "text": "៧. សុខាភិបាល"
      },
      {
        "type": "paragraph",
        "text": "GIS អាចកំណត់តំបន់ជំងឺ រៀបចំទីតាំងមន្ទីរពេទ្យ វិភាគការចូលដំណើរការសេវាសុខាភិបាល និងគាំទ្រការឆ្លើយតបពេលមានការផ្ទុះជំងឺ។"
      },
      {
        "type": "heading3",
        "text": "៨. ពាណិជ្ជកម្ម និងអាជីវកម្ម"
      },
      {
        "type": "list",
        "items": [
          "ជ្រើសរើសទីតាំងសាខា",
          "វិភាគទីផ្សារ",
          "បែងចែកអតិថិជន",
          "គ្រប់គ្រងតំបន់លក់"
        ]
      },
      {
        "type": "heading3",
        "text": "៩. ទេសចរណ៍"
      },
      {
        "type": "paragraph",
        "text": "GIS ជួយរៀបចំផ្លូវទេសចរណ៍ គ្រប់គ្រងតំបន់ទាក់ទាញ ការពារធនធានធម្មជាតិ និងបង្កើនបទពិសោធន៍ភ្ញៀវទេសចរ។"
      },
      {
        "type": "heading3",
        "text": "១០. ការអប់រំ និងស្រាវជ្រាវ"
      },
      {
        "type": "paragraph",
        "text": "GIS ត្រូវបានប្រើយ៉ាងទូលំទូលាយក្នុងការស្រាវជ្រាវវិទ្យាសាស្ត្រ សុខាភិបាល បរិស្ថាន វិស្វកម្ម និងវិទ្យាសាស្ត្រសង្គម។"
      },
      {
        "type": "heading",
        "text": "ហេតុអ្វី GIS មានសារៈសំខាន់?"
      },
      {
        "type": "list",
        "items": [
          "សម្រេចចិត្តបានល្អជាងមុន",
          "កាត់បន្ថយពេលវេលា និងចំណាយ",
          "គ្រប់គ្រងធនធានប្រកបដោយចីរភាព",
          "បង្កើតនវានុវត្តន៍",
          "បង្កើនគុណភាពជីវិតសហគមន៍"
        ]
      },
      {
        "type": "heading",
        "text": "អនាគតរបស់ GIS"
      },
      {
        "type": "paragraph",
        "text": "GIS កំពុងរួមបញ្ចូលជាមួយ AI, Machine Learning, IoT, Drone, Cloud Computing, Digital Twin និងទិន្នន័យផ្កាយរណបកម្រិតខ្ពស់ ដែលនឹងធ្វើឱ្យការវិភាគទីតាំងកាន់តែមានភាពឆ្លាតវៃ។"
      },
      {
        "type": "heading",
        "text": "សេចក្ដីសន្និដ្ឋាន"
      },
      {
        "type": "paragraph",
        "text": "សំណួរមិនមែនថា «អ្នកណាប្រើ GIS?» ទៀតទេ ប៉ុន្តែគឺ «តើវិស័យណាអាចមិនប្រើ GIS បាន?»"
      },
      {
        "type": "paragraph",
        "text": "រាល់បញ្ហាដែលមានទីតាំង អាចទទួលបានអត្ថប្រយោជន៍ពី GIS។ ពីការរៀបចំទីក្រុង ការគ្រប់គ្រងធនធានធម្មជាតិ ការដឹកជញ្ជូន កសិកម្ម សុខាភិបាល រហូតដល់អាជីវកម្ម GIS បានក្លាយជាបច្ចេកវិទ្យាស្នូលសម្រាប់ការសម្រេចចិត្តដោយផ្អែកលើទិន្នន័យ។"
      },
      {
        "type": "paragraph",
        "text": "ទីតាំង + ទិន្នន័យ = ការសម្រេចចិត្តកាន់តែប្រសើរ"
      }
    ]
  },
  "en": {
    "title": "Why Every Industry Needs GIS",
    "excerpt": "Geographic Information Systems (GIS) have evolved from specialized mapping software into one of the most important decision-support technologies used across governments, businesses, researchers, and non-profit organizations. While many people associate GIS with creating maps, its real strength lies in integrating location with data to reveal patterns, relationships, and trends that are difficult to detect using spreadsheets or traditional databases alone.",
    "readTime": "15 minutes",
    "content": [
      {
        "type": "quote",
        "text": "If it has a location, GIS can improve it."
      },
      {
        "type": "heading",
        "text": "Introduction"
      },
      {
        "type": "paragraph",
        "text": "Geographic Information Systems (GIS) have evolved from specialized mapping software into one of the most important decision-support technologies used across governments, businesses, researchers, and non-profit organizations. While many people associate GIS with creating maps, its real strength lies in integrating location with data to reveal patterns, relationships, and trends that are difficult to detect using spreadsheets or traditional databases alone."
      },
      {
        "type": "paragraph",
        "text": "Every object, event, customer, asset, or environmental phenomenon exists somewhere. Once location is added to information, organizations gain a powerful analytical capability. GIS answers questions such as:"
      },
      {
        "type": "list",
        "items": [
          "Where is it happening?",
          "Why is it happening there?",
          "What is nearby?",
          "What has changed?",
          "What is likely to happen next?",
          "What is the best location for future investment?"
        ]
      },
      {
        "type": "paragraph",
        "text": "The infographic highlights ten major industries transformed by GIS. This article expands on each sector and explains why spatial thinking has become an essential skill in the modern world."
      },
      {
        "type": "heading",
        "text": "What Makes GIS Different?"
      },
      {
        "type": "paragraph",
        "text": "GIS combines three core components:"
      },
      {
        "type": "list",
        "items": [
          "Location (Where) – coordinates, addresses, parcels, roads, administrative boundaries.",
          "Data (What) – demographic information, environmental measurements, infrastructure, business records, sensor data, satellite imagery, and more.",
          "Insight (Why it matters) – spatial analysis that supports better decisions."
        ]
      },
      {
        "type": "paragraph",
        "text": "Unlike ordinary databases, GIS understands spatial relationships such as distance, overlap, adjacency, connectivity, visibility, accessibility, and movement."
      },
      {
        "type": "heading",
        "text": "GIS Across Industries"
      },
      {
        "type": "heading3",
        "text": "1. Urban Planning and Smart Cities"
      },
      {
        "type": "paragraph",
        "text": "City planners use GIS to understand how cities grow and how infrastructure should evolve."
      },
      {
        "type": "paragraph",
        "text": "Applications include:"
      },
      {
        "type": "list",
        "items": [
          "Land-use planning",
          "Zoning management",
          "Transportation planning",
          "Infrastructure investment",
          "Utility coordination",
          "Smart city dashboards"
        ]
      },
      {
        "type": "paragraph",
        "text": "Benefits:"
      },
      {
        "type": "list",
        "items": [
          "Better public services",
          "Reduced congestion",
          "Sustainable urban growth",
          "Evidence-based planning"
        ]
      },
      {
        "type": "heading3",
        "text": "2. Natural Resources and Environment"
      },
      {
        "type": "paragraph",
        "text": "Environmental professionals rely heavily on GIS because ecosystems are inherently spatial."
      },
      {
        "type": "paragraph",
        "text": "Common applications:"
      },
      {
        "type": "list",
        "items": [
          "Forest monitoring",
          "Watershed management",
          "Biodiversity conservation",
          "Habitat analysis",
          "Climate change assessment",
          "Land degradation monitoring"
        ]
      },
      {
        "type": "paragraph",
        "text": "GIS integrates satellite imagery, drones, GPS surveys, and field observations into one analytical platform."
      },
      {
        "type": "heading3",
        "text": "3. Agriculture and Precision Farming"
      },
      {
        "type": "paragraph",
        "text": "Modern agriculture increasingly depends on precision management."
      },
      {
        "type": "paragraph",
        "text": "Farmers can use GIS to:"
      },
      {
        "type": "list",
        "items": [
          "Monitor crop health",
          "Analyze soil conditions",
          "Plan irrigation",
          "Optimize fertilizer application",
          "Estimate yield",
          "Detect disease early"
        ]
      },
      {
        "type": "paragraph",
        "text": "The result is higher productivity with lower resource consumption."
      },
      {
        "type": "heading3",
        "text": "4. Transportation and Logistics"
      },
      {
        "type": "paragraph",
        "text": "Every delivery route has both time and space."
      },
      {
        "type": "paragraph",
        "text": "GIS supports:"
      },
      {
        "type": "list",
        "items": [
          "Route optimization",
          "Fleet management",
          "Traffic analysis",
          "Delivery planning",
          "Warehouse location analysis",
          "Emergency rerouting"
        ]
      },
      {
        "type": "paragraph",
        "text": "Companies save fuel, reduce travel time, and improve customer satisfaction."
      },
      {
        "type": "heading3",
        "text": "5. Utilities and Infrastructure"
      },
      {
        "type": "paragraph",
        "text": "Electricity, water, gas, telecommunications, and sewer networks all depend on accurate spatial data."
      },
      {
        "type": "paragraph",
        "text": "GIS helps utilities:"
      },
      {
        "type": "list",
        "items": [
          "Manage assets",
          "Detect outages",
          "Plan maintenance",
          "Track inspections",
          "Prioritize replacement projects"
        ]
      },
      {
        "type": "paragraph",
        "text": "Digital asset management reduces downtime and improves reliability."
      },
      {
        "type": "heading3",
        "text": "6. Disaster Management and Public Safety"
      },
      {
        "type": "paragraph",
        "text": "Emergency response depends on knowing where people, hazards, and resources are located."
      },
      {
        "type": "paragraph",
        "text": "GIS enables:"
      },
      {
        "type": "list",
        "items": [
          "Hazard mapping",
          "Flood modeling",
          "Wildfire monitoring",
          "Evacuation planning",
          "Emergency dispatch",
          "Damage assessment"
        ]
      },
      {
        "type": "paragraph",
        "text": "Real-time mapping allows faster and more effective response during disasters."
      },
      {
        "type": "heading3",
        "text": "7. Healthcare and Public Health"
      },
      {
        "type": "paragraph",
        "text": "Healthcare decisions are strongly influenced by geography."
      },
      {
        "type": "paragraph",
        "text": "GIS supports:"
      },
      {
        "type": "list",
        "items": [
          "Disease surveillance",
          "Hospital accessibility studies",
          "Vaccination planning",
          "Ambulance optimization",
          "Health equity analysis"
        ]
      },
      {
        "type": "paragraph",
        "text": "During outbreaks, GIS helps identify hotspots and allocate medical resources efficiently."
      },
      {
        "type": "heading3",
        "text": "8. Retail and Business Intelligence"
      },
      {
        "type": "paragraph",
        "text": "Businesses increasingly compete using location intelligence."
      },
      {
        "type": "paragraph",
        "text": "Typical uses include:"
      },
      {
        "type": "list",
        "items": [
          "Site selection",
          "Customer segmentation",
          "Sales territory design",
          "Market gap analysis",
          "Competitor analysis"
        ]
      },
      {
        "type": "paragraph",
        "text": "GIS reduces business risk before investing in new stores."
      },
      {
        "type": "heading3",
        "text": "9. Tourism and Hospitality"
      },
      {
        "type": "paragraph",
        "text": "Tourism organizations use GIS to:"
      },
      {
        "type": "list",
        "items": [
          "Design travel routes",
          "Manage attractions",
          "Protect natural resources",
          "Analyze visitor behavior",
          "Promote destinations"
        ]
      },
      {
        "type": "paragraph",
        "text": "Spatial analysis improves both visitor experience and conservation."
      },
      {
        "type": "heading3",
        "text": "10. Education and Research"
      },
      {
        "type": "paragraph",
        "text": "GIS is no longer limited to geography departments."
      },
      {
        "type": "paragraph",
        "text": "Researchers use GIS for:"
      },
      {
        "type": "list",
        "items": [
          "Environmental science",
          "Public health",
          "Archaeology",
          "Social science",
          "Engineering",
          "Climate studies"
        ]
      },
      {
        "type": "paragraph",
        "text": "Students also gain valuable analytical and technical skills applicable across industries."
      },
      {
        "type": "heading",
        "text": "Why GIS Matters"
      },
      {
        "type": "paragraph",
        "text": "Organizations adopt GIS because it improves:"
      },
      {
        "type": "heading3",
        "text": "Better Decisions"
      },
      {
        "type": "paragraph",
        "text": "Maps reveal patterns that tables cannot."
      },
      {
        "type": "heading3",
        "text": "Greater Efficiency"
      },
      {
        "type": "paragraph",
        "text": "Optimized workflows reduce cost and save time."
      },
      {
        "type": "heading3",
        "text": "Sustainability"
      },
      {
        "type": "paragraph",
        "text": "Resources can be managed more responsibly."
      },
      {
        "type": "heading3",
        "text": "Innovation"
      },
      {
        "type": "paragraph",
        "text": "Spatial analysis uncovers opportunities hidden in large datasets."
      },
      {
        "type": "heading3",
        "text": "Stronger Communities"
      },
      {
        "type": "paragraph",
        "text": "Governments provide better services using evidence-based planning."
      },
      {
        "type": "heading",
        "text": "The Future of GIS"
      },
      {
        "type": "paragraph",
        "text": "GIS is rapidly integrating with:"
      },
      {
        "type": "list",
        "items": [
          "Artificial Intelligence (AI)",
          "Machine Learning",
          "Internet of Things (IoT)",
          "Real-time sensors",
          "Digital twins",
          "Cloud computing",
          "Drone mapping",
          "High-resolution satellite imagery"
        ]
      },
      {
        "type": "paragraph",
        "text": "Location intelligence will become even more important as cities, businesses, and governments continue their digital transformation."
      },
      {
        "type": "heading",
        "text": "Conclusion"
      },
      {
        "type": "paragraph",
        "text": "The question is no longer \"Who uses GIS?\""
      },
      {
        "type": "paragraph",
        "text": "Instead, it is \"Which industries can afford not to use GIS?\""
      },
      {
        "type": "paragraph",
        "text": "If a problem has a location, GIS can help visualize it, analyze it, and solve it more effectively. Whether improving agriculture, protecting forests, optimizing logistics, managing disasters, or growing businesses, GIS transforms raw geographic data into actionable knowledge."
      },
      {
        "type": "paragraph",
        "text": "Location + Data = Better Decisions"
      }
    ]
  }
};

const IRRIGATION_GIS_ARTICLE = {
  "km": {
    "title": "ទិន្នន័យដែលប្រើក្នុង Irrigation GIS",
    "excerpt": "ការគ្រប់គ្រងប្រព័ន្ធស្រោចស្រពសម័យទំនើប មិនអាចពឹងផ្អែកតែបទពិសោធន៍ប៉ុណ្ណោះទេ។ GIS ជួយបញ្ចូលទិន្នន័យជាច្រើនប្រភេទ ដើម្បីវិភាគ ការធ្វើផែនការ និងការគ្រប់គ្រងធនធានទឹកឱ្យមានប្រសិទ្ធភាព។",
    "readTime": "១៥ នាទី",
    "content": [
      {
        "type": "heading",
        "text": "សេចក្តីផ្តើម"
      },
      {
        "type": "paragraph",
        "text": "ការគ្រប់គ្រងប្រព័ន្ធស្រោចស្រពសម័យទំនើប មិនអាចពឹងផ្អែកតែបទពិសោធន៍ប៉ុណ្ណោះទេ។ GIS ជួយបញ្ចូលទិន្នន័យជាច្រើនប្រភេទ ដើម្បីវិភាគ ការធ្វើផែនការ និងការគ្រប់គ្រងធនធានទឹកឱ្យមានប្រសិទ្ធភាព។"
      },
      {
        "type": "paragraph",
        "text": "រូបភាពខាងលើបង្ហាញទិន្នន័យសំខាន់ៗចំនួន ១០ ប្រភេទ ដែលត្រូវបានប្រើក្នុងគម្រោងស្រោចស្រព។ ទិន្នន័យទាំងនេះធ្វើការរួមគ្នា ដើម្បីជួយសម្រេចចិត្តបានត្រឹមត្រូវ និងប្រើប្រាស់ទឹកប្រកបដោយចីរភាព។"
      },
      {
        "type": "heading",
        "text": "ហេតុអ្វី GIS មានសារៈសំខាន់?"
      },
      {
        "type": "paragraph",
        "text": "GIS អាចរួមបញ្ចូលព័ត៌មានពីដី ទឹក អាកាសធាតុ ដំណាំ និងហេដ្ឋារចនាសម្ព័ន្ធ ទៅក្នុងផែនទីតែមួយ។ វាជួយ៖"
      },
      {
        "type": "list",
        "items": [
          "រៀបចំផែនការស្រោចស្រព",
          "បែងចែកទឹក",
          "វាយតម្លៃតម្រូវការទឹករបស់ដំណាំ",
          "គ្រប់គ្រងប្រឡាយ និងអាងស្តុកទឹក",
          "តាមដានគ្រោះរាំងស្ងួត",
          "គាំទ្រកសិកម្មឆ្លាតវៃ"
        ]
      },
      {
        "type": "heading",
        "text": "១. DEM"
      },
      {
        "type": "paragraph",
        "text": "DEM បង្ហាញកម្ពស់ផ្ទៃដី។"
      },
      {
        "type": "paragraph",
        "text": "វាត្រូវបានប្រើសម្រាប់៖"
      },
      {
        "type": "list",
        "items": [
          "វិភាគជម្រាល",
          "ទិសដៅលំហូរទឹក",
          "កំណត់អាងទឹក",
          "រចនាប្រព័ន្ធស្រោចស្រពដោយប្រើកម្លាំងទំនាញ"
        ]
      },
      {
        "type": "heading",
        "text": "២. Soil Map"
      },
      {
        "type": "paragraph",
        "text": "ផែនទីដីបង្ហាញប្រភេទដី សមត្ថភាពរក្សាទឹក និងការជ្រាបទឹក។"
      },
      {
        "type": "paragraph",
        "text": "ដីខ្សាច់ និងដីឥដ្ឋ មានតម្រូវការស្រោចស្រពខុសគ្នា ដូច្នេះព័ត៌មាននេះសំខាន់សម្រាប់កំណត់កាលវិភាគស្រោចស្រព។"
      },
      {
        "type": "heading",
        "text": "៣. Land Use"
      },
      {
        "type": "paragraph",
        "text": "បង្ហាញប្រភេទការប្រើប្រាស់ដី និងប្រភេទដំណាំ។"
      },
      {
        "type": "paragraph",
        "text": "GIS អាចគណនាតម្រូវការទឹកសរុប តាមប្រភេទដំណាំ និងផ្ទៃដីដាំដុះ។"
      },
      {
        "type": "heading",
        "text": "៤. Canal Network"
      },
      {
        "type": "paragraph",
        "text": "ជាបណ្តាញប្រឡាយ មេ ប្រឡាយរង និងសំណង់ស្រោចស្រព។"
      },
      {
        "type": "paragraph",
        "text": "វាជួយគ្រប់គ្រងការចែកចាយទឹក និងការថែទាំហេដ្ឋារចនាសម្ព័ន្ធ។"
      },
      {
        "type": "heading",
        "text": "៥. Rivers"
      },
      {
        "type": "paragraph",
        "text": "ទន្លេ និងអូរ ជាប្រភពទឹកធម្មជាតិសំខាន់។"
      },
      {
        "type": "paragraph",
        "text": "GIS ជួយវិភាគប្រភពទឹក កន្លែងទាញទឹក និងផលប៉ះពាល់ពីទឹកជំនន់។"
      },
      {
        "type": "heading",
        "text": "៦. Reservoirs"
      },
      {
        "type": "paragraph",
        "text": "អាងស្តុកទឹក ជួយរក្សាទុក និងគ្រប់គ្រងទឹកតាមរដូវ។"
      },
      {
        "type": "heading",
        "text": "៧. Rainfall"
      },
      {
        "type": "paragraph",
        "text": "ទិន្នន័យភ្លៀងជួយវាយតម្លៃភាពគ្រប់គ្រាន់នៃទឹក និងកំណត់តំបន់ដែលត្រូវការស្រោចស្រពបន្ថែម។"
      },
      {
        "type": "heading",
        "text": "៨. Temperature"
      },
      {
        "type": "paragraph",
        "text": "សីតុណ្ហភាពប៉ះពាល់ដល់ Evapotranspiration (ET) និងតម្រូវការទឹករបស់ដំណាំ។"
      },
      {
        "type": "heading",
        "text": "៩. Satellite Images"
      },
      {
        "type": "paragraph",
        "text": "រូបភាពផ្កាយរណបអាចតាមដាន៖"
      },
      {
        "type": "list",
        "items": [
          "សុខភាពដំណាំ",
          "NDVI",
          "ភាពស្ងួត",
          "ទឹកជំនន់",
          "ការផ្លាស់ប្តូរការប្រើប្រាស់ដី"
        ]
      },
      {
        "type": "heading",
        "text": "១០. GPS Survey"
      },
      {
        "type": "paragraph",
        "text": "GPS ផ្តល់ទីតាំងមានភាពត្រឹមត្រូវខ្ពស់សម្រាប់ប្រឡាយ សំណង់ និងព្រំដី។"
      },
      {
        "type": "heading",
        "text": "ការរួមបញ្ចូលទិន្នន័យ"
      },
      {
        "type": "paragraph",
        "text": "អត្ថប្រយោជន៍ពិតរបស់ GIS គឺការរួមបញ្ចូលទិន្នន័យទាំងអស់។"
      },
      {
        "type": "paragraph",
        "text": "ឧទាហរណ៍៖"
      },
      {
        "type": "list",
        "items": [
          "DEM បង្ហាញទិសទឹក។",
          "Soil Map បង្ហាញការជ្រាបទឹក។",
          "Land Use បង្ហាញតម្រូវការទឹក។",
          "Canal Network ចែកចាយទឹក។",
          "Reservoirs ផ្គត់ផ្គង់ទឹក។",
          "Rainfall បង្ហាញការផ្គត់ផ្គង់ធម្មជាតិ។",
          "Temperature គណនា ET។",
          "Satellite តាមដានសុខភាពដំណាំ។",
          "GPS ផ្ទៀងផ្ទាត់ទិន្នន័យទីតាំង។"
        ]
      },
      {
        "type": "heading",
        "text": "អត្ថប្រយោជន៍"
      },
      {
        "type": "list",
        "items": [
          "ប្រើប្រាស់ទឹកមានប្រសិទ្ធភាព",
          "បង្កើនទិន្នផលកសិកម្ម",
          "កាត់បន្ថយការចំណាយ",
          "គាំទ្រការសម្រេចចិត្ត",
          "គ្រប់គ្រងធនធានប្រកបដោយចីរភាព"
        ]
      },
      {
        "type": "heading",
        "text": "អនាគតនៃ Irrigation GIS"
      },
      {
        "type": "paragraph",
        "text": "បច្ចេកវិទ្យាថ្មីៗដូចជា Drone, IoT, AI, Cloud GIS និង Dashboard ពេលវេលាពិត កំពុងធ្វើឱ្យប្រព័ន្ធស្រោចស្រពកាន់តែឆ្លាតវៃ និងមានប្រសិទ្ធភាព។"
      },
      {
        "type": "heading",
        "text": "សេចក្តីសន្និដ្ឋាន"
      },
      {
        "type": "paragraph",
        "text": "GIS សម្រាប់ការគ្រប់គ្រងស្រោចស្រព មិនមែនគ្រាន់តែជាការធ្វើផែនទីទេ ប៉ុន្តែជាប្រព័ន្ធសម្រេចចិត្តដែលរួមបញ្ចូលទិន្នន័យដី ទឹក អាកាសធាតុ ដំណាំ ហេដ្ឋារចនាសម្ព័ន្ធ និងព័ត៌មានពីផ្កាយរណប។ ទិន្នន័យដែលមានគុណភាព នាំទៅរកការសម្រេចចិត្តល្អ ការប្រើប្រាស់ទឹកមានប្រសិទ្ធភាព និងកសិកម្មប្រកបដោយចីរភាព។"
      }
    ]
  },
  "en": {
    "title": "Data Used in Irrigation GIS",
    "excerpt": "Water is one of the world's most valuable resources, and agriculture consumes around 70% of global freshwater withdrawals. Efficient irrigation is therefore essential for improving crop productivity while conserving water. Modern irrigation management is no longer based solely on field experience—it increasingly relies on Geographic Information Systems (GIS).",
    "readTime": "15 minutes",
    "content": [
      {
        "type": "heading",
        "text": "Introduction"
      },
      {
        "type": "paragraph",
        "text": "Water is one of the world's most valuable resources, and agriculture consumes around 70% of global freshwater withdrawals. Efficient irrigation is therefore essential for improving crop productivity while conserving water. Modern irrigation management is no longer based solely on field experience—it increasingly relies on Geographic Information Systems (GIS)."
      },
      {
        "type": "paragraph",
        "text": "GIS integrates multiple datasets into a single environment, allowing irrigation engineers, planners, farmers, and government agencies to understand where water comes from, how it moves, where it is needed, and how efficiently it is being used. The infographic highlights ten of the most important GIS datasets used in irrigation planning. This article explains each dataset, its purpose, and how they work together."
      },
      {
        "type": "heading",
        "text": "Why GIS Matters in Irrigation"
      },
      {
        "type": "paragraph",
        "text": "Irrigation systems involve terrain, soil, climate, crops, infrastructure, and water resources. No single dataset can answer every question. GIS combines these layers to support:"
      },
      {
        "type": "list",
        "items": [
          "Irrigation system design",
          "Water allocation",
          "Crop suitability analysis",
          "Infrastructure planning",
          "Drought monitoring",
          "Climate adaptation",
          "Asset management",
          "Decision support"
        ]
      },
      {
        "type": "heading",
        "text": "1. Digital Elevation Model (DEM)"
      },
      {
        "type": "paragraph",
        "text": "A DEM represents the Earth's surface elevation."
      },
      {
        "type": "heading3",
        "text": "Why it is important"
      },
      {
        "type": "paragraph",
        "text": "Water naturally flows downhill. DEMs allow engineers to identify slopes, watersheds, drainage paths, and suitable canal alignments."
      },
      {
        "type": "heading3",
        "text": "Typical applications"
      },
      {
        "type": "list",
        "items": [
          "Slope analysis",
          "Flow direction",
          "Watershed delineation",
          "Gravity-fed irrigation planning",
          "Reservoir site selection"
        ]
      },
      {
        "type": "paragraph",
        "text": "Without elevation information, irrigation design becomes inefficient and expensive."
      },
      {
        "type": "heading",
        "text": "2. Soil Map"
      },
      {
        "type": "paragraph",
        "text": "Different soils retain water differently."
      },
      {
        "type": "paragraph",
        "text": "A soil map provides information about:"
      },
      {
        "type": "list",
        "items": [
          "Texture",
          "Drainage",
          "Water holding capacity",
          "Permeability",
          "Fertility"
        ]
      },
      {
        "type": "paragraph",
        "text": "For example, clay soils retain water longer than sandy soils. This directly influences irrigation frequency and scheduling."
      },
      {
        "type": "heading",
        "text": "3. Land Use and Crop Distribution"
      },
      {
        "type": "paragraph",
        "text": "Land-use data identifies how land is being utilized."
      },
      {
        "type": "paragraph",
        "text": "Examples include:"
      },
      {
        "type": "list",
        "items": [
          "Rice fields",
          "Vegetable farms",
          "Orchards",
          "Urban areas",
          "Forests"
        ]
      },
      {
        "type": "paragraph",
        "text": "Each crop requires different amounts of water. GIS helps estimate total irrigation demand by combining crop type with cultivated area."
      },
      {
        "type": "heading",
        "text": "4. Canal Network"
      },
      {
        "type": "paragraph",
        "text": "The canal network represents irrigation infrastructure including:"
      },
      {
        "type": "list",
        "items": [
          "Main canals",
          "Secondary canals",
          "Distributaries",
          "Control structures"
        ]
      },
      {
        "type": "paragraph",
        "text": "GIS allows managers to locate damaged canals, estimate service areas, optimize maintenance, and evaluate expansion projects."
      },
      {
        "type": "heading",
        "text": "5. Rivers"
      },
      {
        "type": "paragraph",
        "text": "Rivers are the primary natural water source for many irrigation systems."
      },
      {
        "type": "paragraph",
        "text": "GIS helps determine:"
      },
      {
        "type": "list",
        "items": [
          "Water availability",
          "Catchment relationships",
          "River connectivity",
          "Intake locations",
          "Flood impacts"
        ]
      },
      {
        "type": "paragraph",
        "text": "River monitoring supports sustainable water extraction."
      },
      {
        "type": "heading",
        "text": "6. Reservoirs"
      },
      {
        "type": "paragraph",
        "text": "Reservoirs regulate seasonal water supply."
      },
      {
        "type": "paragraph",
        "text": "GIS stores information about:"
      },
      {
        "type": "list",
        "items": [
          "Capacity",
          "Water level",
          "Storage volume",
          "Distribution zones"
        ]
      },
      {
        "type": "paragraph",
        "text": "Combining reservoirs with rainfall forecasts improves drought preparedness."
      },
      {
        "type": "heading",
        "text": "7. Rainfall"
      },
      {
        "type": "paragraph",
        "text": "Rainfall is one of the most dynamic datasets."
      },
      {
        "type": "paragraph",
        "text": "Rainfall maps help answer:"
      },
      {
        "type": "list",
        "items": [
          "Where is rainfall sufficient?",
          "Which areas require supplemental irrigation?",
          "Which regions are vulnerable to drought?"
        ]
      },
      {
        "type": "paragraph",
        "text": "Satellite rainfall products provide near real-time monitoring over large areas."
      },
      {
        "type": "heading",
        "text": "8. Temperature"
      },
      {
        "type": "paragraph",
        "text": "Temperature affects evapotranspiration (ET), which represents water lost through evaporation and plant transpiration."
      },
      {
        "type": "paragraph",
        "text": "Higher temperatures generally increase crop water demand."
      },
      {
        "type": "paragraph",
        "text": "Temperature maps are therefore essential for:"
      },
      {
        "type": "list",
        "items": [
          "Irrigation scheduling",
          "Crop water requirement estimation",
          "Climate impact assessment"
        ]
      },
      {
        "type": "heading",
        "text": "9. Satellite Imagery"
      },
      {
        "type": "paragraph",
        "text": "Satellite imagery provides continuous monitoring of agricultural land."
      },
      {
        "type": "paragraph",
        "text": "Common applications include:"
      },
      {
        "type": "list",
        "items": [
          "NDVI vegetation monitoring",
          "Crop stress detection",
          "Crop growth assessment",
          "Flood mapping",
          "Land-use change detection"
        ]
      },
      {
        "type": "paragraph",
        "text": "Modern irrigation projects increasingly rely on free satellite missions such as Landsat and Sentinel."
      },
      {
        "type": "heading",
        "text": "10. GPS Survey"
      },
      {
        "type": "paragraph",
        "text": "GPS surveys provide accurate field observations."
      },
      {
        "type": "paragraph",
        "text": "Typical GPS datasets include:"
      },
      {
        "type": "list",
        "items": [
          "Canal centerlines",
          "Water structures",
          "Farm boundaries",
          "Survey control points"
        ]
      },
      {
        "type": "paragraph",
        "text": "These datasets ensure GIS analyses match real-world conditions."
      },
      {
        "type": "heading",
        "text": "Integrating All Layers"
      },
      {
        "type": "paragraph",
        "text": "The real power of GIS comes from combining datasets rather than analyzing them individually."
      },
      {
        "type": "paragraph",
        "text": "Example workflow:"
      },
      {
        "type": "list",
        "items": [
          "DEM determines water flow.",
          "Soil map estimates infiltration.",
          "Land use estimates demand.",
          "Canal network distributes water.",
          "Reservoirs provide storage.",
          "Rainfall updates supply.",
          "Temperature estimates ET.",
          "Satellite imagery monitors crop health.",
          "GPS validates field conditions."
        ]
      },
      {
        "type": "paragraph",
        "text": "Together these datasets provide a complete decision-support system."
      },
      {
        "type": "heading",
        "text": "Benefits"
      },
      {
        "type": "paragraph",
        "text": "Organizations using GIS for irrigation can:"
      },
      {
        "type": "list",
        "items": [
          "Improve water-use efficiency",
          "Reduce operational costs",
          "Increase crop productivity",
          "Detect problems earlier",
          "Support precision agriculture",
          "Improve drought resilience",
          "Plan infrastructure investments",
          "Support sustainable resource management"
        ]
      },
      {
        "type": "heading",
        "text": "Future Trends"
      },
      {
        "type": "paragraph",
        "text": "Emerging technologies are transforming irrigation GIS:"
      },
      {
        "type": "list",
        "items": [
          "IoT water sensors",
          "Drone imagery",
          "AI-based irrigation prediction",
          "Digital twins",
          "Cloud GIS",
          "Real-time dashboards"
        ]
      },
      {
        "type": "paragraph",
        "text": "These technologies enable smarter and more automated irrigation systems."
      },
      {
        "type": "heading",
        "text": "Conclusion"
      },
      {
        "type": "paragraph",
        "text": "Irrigation GIS is much more than mapping canals. It integrates terrain, soils, climate, crops, infrastructure, satellite observations, and field surveys into a unified decision-support platform. Better data leads to better decisions, more efficient water use, higher agricultural productivity, and more sustainable irrigation management."
      },
      {
        "type": "paragraph",
        "text": "As agriculture faces climate change and increasing water scarcity, GIS will continue to play a central role in ensuring every drop of water is used wisely."
      }
    ]
  }
};

const DEV_ELEVATION_ARTICLE = {
  "km": {
    "title": "DEV (Deviation from Mean Elevation)៖ ការវិភាគភូមិសាស្ត្រកម្ពស់សម្រាប់កសិកម្មឆ្លាតវៃ",
    "excerpt": "DEM (Digital Elevation Model) គឺជាទិន្នន័យមូលដ្ឋានសំខាន់សម្រាប់ការវិភាគផ្ទៃដី។ ក្រៅពី Slope, Aspect និង Flow Accumulation នៅមានសូចនាករមួយទៀតដែលមានប្រយោជន៍ខ្លាំងគឺ Deviation from Mean Elevation (DEV)។",
    "readTime": "១៥ នាទី",
    "content": [
      {
        "type": "heading",
        "text": "សេចក្តីផ្តើម"
      },
      {
        "type": "paragraph",
        "text": "DEM (Digital Elevation Model) គឺជាទិន្នន័យមូលដ្ឋានសំខាន់សម្រាប់ការវិភាគផ្ទៃដី។ ក្រៅពី Slope, Aspect និង Flow Accumulation នៅមានសូចនាករមួយទៀតដែលមានប្រយោជន៍ខ្លាំងគឺ Deviation from Mean Elevation (DEV)។"
      },
      {
        "type": "paragraph",
        "text": "DEV មិនវាស់កម្ពស់ដាច់ខាតទេ ប៉ុន្តែវាវាស់ថា តើទីតាំងនីមួយៗខ្ពស់ ឬទាបជាងតំបន់ជុំវិញខ្លួនប៉ុន្មាន។ ដូច្នេះវាអាចបង្ហាញលម្អិតអំពី Ridge, Valley និង Micro-topography ដែលមើលមិនសូវឃើញពី DEM ដើម។"
      },
      {
        "type": "heading",
        "text": "DEV ជាអ្វី?"
      },
      {
        "type": "paragraph",
        "text": "DEV គឺជា z-score នៃកម្ពស់ធៀបនឹងមធ្យមភាគកម្ពស់ក្នុង Neighborhood។"
      },
      {
        "type": "paragraph",
        "text": "រូបមន្ត៖"
      },
      {
        "type": "paragraph",
        "text": "DEV = (កម្ពស់ក្រឡា − មធ្យមកម្ពស់ជុំវិញ) / គម្លាតស្តង់ដារកម្ពស់"
      },
      {
        "type": "paragraph",
        "text": "ការបកស្រាយ៖"
      },
      {
        "type": "list",
        "items": [
          "DEV > +2 = ខ្ពស់ជាងតំបន់ជុំវិញខ្លាំង",
          "DEV ≈ 0 = ស្រដៀងតំបន់ជុំវិញ",
          "DEV < -2 = ទាបជាងតំបន់ជុំវិញខ្លាំង"
        ]
      },
      {
        "type": "heading",
        "text": "ហេតុអ្វីមិនប្រើ Elevation តែមួយ?"
      },
      {
        "type": "paragraph",
        "text": "Elevation ប្រាប់ថា \"កម្ពស់ពីនីវ៉ូសមុទ្រ\"។"
      },
      {
        "type": "paragraph",
        "text": "DEV ប្រាប់ថា \"ខ្ពស់ ឬទាបជាងតំបន់ជុំវិញ\"។"
      },
      {
        "type": "paragraph",
        "text": "នេះជាភាពខុសគ្នាសំខាន់សម្រាប់ការយល់ដឹងពីរចនាសម្ព័ន្ធផ្ទៃដី។"
      },
      {
        "type": "heading",
        "text": "របៀបដំណើរការ"
      },
      {
        "type": "list",
        "items": [
          "បញ្ចូល DEM",
          "កំណត់ Search Radius",
          "គណនាមធ្យមកម្ពស់",
          "គណនា Standard Deviation",
          "គណនា DEV"
        ]
      },
      {
        "type": "paragraph",
        "text": "លទ្ធផលគឺ Raster បង្ហាញតំបន់ខ្ពស់ និងទាបក្នុងលក្ខណៈប្រៀបធៀប។"
      },
      {
        "type": "heading",
        "text": "ការបកស្រាយលទ្ធផល"
      },
      {
        "type": "heading",
        "text": "DEV វិជ្ជមាន"
      },
      {
        "type": "paragraph",
        "text": "បង្ហាញ៖"
      },
      {
        "type": "list",
        "items": [
          "Ridge",
          "Knoll",
          "តំបន់ខ្ពស់"
        ]
      },
      {
        "type": "paragraph",
        "text": "ជាទូទៅមានការបង្ហូរទឹកល្អ ប៉ុន្តែងាយរងការកាត់សំណឹក។"
      },
      {
        "type": "heading",
        "text": "DEV ស្មើសូន្យ"
      },
      {
        "type": "paragraph",
        "text": "បង្ហាញផ្ទៃដីដែលស្រដៀងនឹងតំបន់ជុំវិញ។"
      },
      {
        "type": "heading",
        "text": "DEV អវិជ្ជមាន"
      },
      {
        "type": "paragraph",
        "text": "បង្ហាញ៖"
      },
      {
        "type": "list",
        "items": [
          "Valley",
          "Depression",
          "តំបន់ប្រមូលទឹក"
        ]
      },
      {
        "type": "paragraph",
        "text": "សមស្របសម្រាប់ការវិភាគការលិចទឹក និងការរៀបចំប្រព័ន្ធបង្ហូរទឹក។"
      },
      {
        "type": "heading",
        "text": "Search Radius"
      },
      {
        "type": "paragraph",
        "text": "Radius តូច៖"
      },
      {
        "type": "list",
        "items": [
          "លម្អិតខ្ពស់",
          "មើលឃើញ Micro-topography",
          "Noise ច្រើន"
        ]
      },
      {
        "type": "paragraph",
        "text": "Radius ធំ៖"
      },
      {
        "type": "list",
        "items": [
          "លទ្ធផលរលូន",
          "មើលទិដ្ឋភាពទូលំទូលាយ",
          "លម្អិតតិចជាង"
        ]
      },
      {
        "type": "heading",
        "text": "អត្ថប្រយោជន៍សម្រាប់ Precision Agriculture"
      },
      {
        "type": "list",
        "items": [
          "កំណត់តំបន់ប្រមូលទឹក",
          "រចនាប្រព័ន្ធបង្ហូរទឹក",
          "Variable Rate Application",
          "វាយតម្លៃហានិភ័យកាត់សំណឹក",
          "ជ្រើសរើសទីតាំងផ្លូវ ស្រះ និងហេដ្ឋារចនាសម្ព័ន្ធ"
        ]
      },
      {
        "type": "heading",
        "text": "ប្រើរួមជាមួយទិន្នន័យផ្សេងៗ"
      },
      {
        "type": "paragraph",
        "text": "DEV គួរប្រើរួមជាមួយ៖"
      },
      {
        "type": "list",
        "items": [
          "Slope",
          "Curvature",
          "Flow Accumulation",
          "TWI",
          "Soil Map",
          "Land Cover",
          "Satellite Imagery"
        ]
      },
      {
        "type": "heading",
        "text": "ការប្រើក្នុង WhiteboxTools"
      },
      {
        "type": "paragraph",
        "text": "ឧបករណ៍ DevFromMeanElev អនុញ្ញាតឱ្យគណនា DEV ដោយងាយ។"
      },
      {
        "type": "paragraph",
        "text": "Workflow៖"
      },
      {
        "type": "list",
        "items": [
          "រៀបចំ DEM",
          "ជ្រើស DevFromMeanElev",
          "កំណត់ Radius",
          "Run",
          "វិភាគ Raster លទ្ធផល"
        ]
      },
      {
        "type": "heading",
        "text": "Best Practices"
      },
      {
        "type": "list",
        "items": [
          "ប្រើ DEM ដែលមានគុណភាពល្អ",
          "ជ្រើស Radius សមស្រប",
          "សម្អាត DEM មុនវិភាគ",
          "ផ្ទៀងផ្ទាត់ជាមួយទិន្នន័យវាល",
          "ប្រើរួមជាមួយ Terrain Indices ផ្សេងៗ"
        ]
      },
      {
        "type": "heading",
        "text": "កំហុសដែលជួបញឹកញាប់"
      },
      {
        "type": "list",
        "items": [
          "Radius មិនសមស្រប",
          "យល់ថា DEV ជាកម្ពស់ពិត",
          "មិនគិតពីគុណភាព DEM",
          "បកស្រាយ DEV ដោយមិនគិតពី Neighborhood"
        ]
      },
      {
        "type": "heading",
        "text": "ឧទាហរណ៍អនុវត្ត"
      },
      {
        "type": "paragraph",
        "text": "កសិកម្ម៖ កំណត់តំបន់សើម កែលម្អប្រព័ន្ធស្រោចស្រព និងកាត់បន្ថយការប្រើជី។"
      },
      {
        "type": "paragraph",
        "text": "ធនធានទឹក៖ កំណត់ផ្លូវទឹក និងតំបន់ប្រមូលទឹក។"
      },
      {
        "type": "paragraph",
        "text": "វិស្វកម្ម៖ ជ្រើសរើសទីតាំងសាងសង់ និងគណនាការកែសម្រួលដី។"
      },
      {
        "type": "paragraph",
        "text": "បរិស្ថាន៖ សិក្សាការកាត់សំណឹក និងជម្រកធម្មជាតិ។"
      },
      {
        "type": "heading",
        "text": "សេចក្តីសន្និដ្ឋាន"
      },
      {
        "type": "paragraph",
        "text": "DEV គឺជាសូចនាករដ៏មានអត្ថប្រយោជន៍សម្រាប់ការវិភាគភូមិសាស្ត្រផ្ទៃដី។ វាជួយបង្ហាញភាពខុសគ្នានៃកម្ពស់ក្នុងតំបន់ជុំវិញ ដែលមានសារៈសំខាន់សម្រាប់ការគ្រប់គ្រងទឹក ការកាត់សំណឹក ការរៀបចំដី និង Precision Agriculture។"
      },
      {
        "type": "paragraph",
        "text": "នៅពេលប្រើរួមជាមួយ DEM, Slope និង Terrain Indices ផ្សេងៗ DEV អាចផ្តល់ព័ត៌មានដ៏មានតម្លៃសម្រាប់ការសម្រេចចិត្តដែលផ្អែកលើទិន្នន័យ។"
      }
    ]
  },
  "en": {
    "title": "Deviation from Mean Elevation (DEV): Unlocking Micro‑Topography for Precision Agriculture",
    "excerpt": "Digital Elevation Models (DEMs) have become one of the most valuable datasets in modern GIS, remote sensing, environmental management, and precision agriculture. While slope, aspect, hillshade, and flow accumulation are commonly used terrain derivatives, another powerful yet often overlooked geomorphometric metric is Deviation from Mean Elevation (DEV).",
    "readTime": "15 minutes",
    "content": [
      {
        "type": "heading",
        "text": "Introduction"
      },
      {
        "type": "paragraph",
        "text": "Digital Elevation Models (DEMs) have become one of the most valuable datasets in modern GIS, remote sensing, environmental management, and precision agriculture. While slope, aspect, hillshade, and flow accumulation are commonly used terrain derivatives, another powerful yet often overlooked geomorphometric metric is Deviation from Mean Elevation (DEV)."
      },
      {
        "type": "paragraph",
        "text": "DEV highlights whether each location is relatively higher or lower than its surrounding neighborhood rather than its absolute elevation. This local perspective makes it exceptionally useful for identifying ridges, depressions, subtle drainage pathways, and micro-topographic variations that may not be visible in the DEM itself."
      },
      {
        "type": "paragraph",
        "text": "For farmers, engineers, hydrologists, and GIS professionals, DEV provides actionable insight into how water, sediment, and nutrients behave across a landscape."
      },
      {
        "type": "heading",
        "text": "What is DEV?"
      },
      {
        "type": "paragraph",
        "text": "Deviation from Mean Elevation measures how different the elevation of one DEM cell is compared with the average elevation of nearby cells."
      },
      {
        "type": "paragraph",
        "text": "Mathematically:"
      },
      {
        "type": "paragraph",
        "text": "DEV = (Cell Elevation − Neighborhood Mean Elevation) / Neighborhood Standard Deviation"
      },
      {
        "type": "paragraph",
        "text": "This standardized z-score means that DEV is independent of the absolute elevation."
      },
      {
        "type": "paragraph",
        "text": "Examples:"
      },
      {
        "type": "list",
        "items": [
          "DEV > +2 → Much higher than surroundings",
          "DEV around 0 → Similar to surrounding terrain",
          "DEV < -2 → Much lower than surroundings"
        ]
      },
      {
        "type": "paragraph",
        "text": "Because the values are normalized, DEV works equally well in lowlands and mountains."
      },
      {
        "type": "heading",
        "text": "Why Not Just Use Elevation?"
      },
      {
        "type": "paragraph",
        "text": "Absolute elevation answers:"
      },
      {
        "type": "quote",
        "text": "\"How high is this location above sea level?\""
      },
      {
        "type": "paragraph",
        "text": "DEV answers:"
      },
      {
        "type": "quote",
        "text": "\"How different is this location compared with nearby terrain?\""
      },
      {
        "type": "paragraph",
        "text": "Two hills may both be 500 m above sea level. One could be a ridge while the other lies inside a broad plateau. DEV distinguishes these situations because it measures relative position rather than absolute height."
      },
      {
        "type": "heading",
        "text": "How DEV Works"
      },
      {
        "type": "list",
        "items": [
          "Start with a DEM.",
          "Define a moving neighborhood (search radius).",
          "Calculate the local mean elevation.",
          "Calculate the local standard deviation.",
          "Compute the standardized difference."
        ]
      },
      {
        "type": "paragraph",
        "text": "The result is a raster highlighting local highs and lows."
      },
      {
        "type": "heading",
        "text": "Interpreting DEV"
      },
      {
        "type": "heading",
        "text": "Positive DEV"
      },
      {
        "type": "paragraph",
        "text": "Positive values represent local highs:"
      },
      {
        "type": "list",
        "items": [
          "Ridges",
          "Knolls",
          "Small hills",
          "Elevated field boundaries"
        ]
      },
      {
        "type": "paragraph",
        "text": "These areas often have:"
      },
      {
        "type": "list",
        "items": [
          "Better drainage",
          "Higher erosion risk",
          "Shallower soil moisture"
        ]
      },
      {
        "type": "heading",
        "text": "Near Zero"
      },
      {
        "type": "paragraph",
        "text": "Areas close to zero have terrain similar to their neighbors."
      },
      {
        "type": "paragraph",
        "text": "These often represent:"
      },
      {
        "type": "list",
        "items": [
          "Flat farmland",
          "Gentle slopes",
          "Stable surfaces"
        ]
      },
      {
        "type": "heading",
        "text": "Negative DEV"
      },
      {
        "type": "paragraph",
        "text": "Negative values represent local depressions:"
      },
      {
        "type": "list",
        "items": [
          "Valleys",
          "Small basins",
          "Water accumulation zones",
          "Local drainage channels"
        ]
      },
      {
        "type": "paragraph",
        "text": "These locations usually retain moisture longer."
      },
      {
        "type": "heading",
        "text": "Choosing the Right Search Radius"
      },
      {
        "type": "paragraph",
        "text": "Search radius strongly influences the output."
      },
      {
        "type": "paragraph",
        "text": "Small radius:"
      },
      {
        "type": "list",
        "items": [
          "Captures tiny landforms",
          "More detail",
          "More noise"
        ]
      },
      {
        "type": "paragraph",
        "text": "Large radius:"
      },
      {
        "type": "list",
        "items": [
          "Captures broad terrain patterns",
          "Smoother result",
          "Less local detail"
        ]
      },
      {
        "type": "paragraph",
        "text": "Choose the radius according to DEM resolution and project objectives."
      },
      {
        "type": "heading",
        "text": "Applications in Precision Agriculture"
      },
      {
        "type": "heading",
        "text": "Water Management"
      },
      {
        "type": "paragraph",
        "text": "Locate water accumulation areas before irrigation planning."
      },
      {
        "type": "heading",
        "text": "Drainage Design"
      },
      {
        "type": "paragraph",
        "text": "Identify depressions where artificial drainage may be required."
      },
      {
        "type": "heading",
        "text": "Variable Rate Farming"
      },
      {
        "type": "paragraph",
        "text": "Combine DEV with soil maps to optimize fertilizer application."
      },
      {
        "type": "heading",
        "text": "Erosion Assessment"
      },
      {
        "type": "paragraph",
        "text": "Positive DEV often corresponds to erosion-prone ridges."
      },
      {
        "type": "heading",
        "text": "Field Planning"
      },
      {
        "type": "paragraph",
        "text": "Support road alignment, terraces, ponds, and infrastructure placement."
      },
      {
        "type": "heading",
        "text": "Combining DEV with Other Terrain Products"
      },
      {
        "type": "paragraph",
        "text": "DEV becomes even more valuable when integrated with:"
      },
      {
        "type": "list",
        "items": [
          "Slope",
          "Curvature",
          "Flow Accumulation",
          "Topographic Wetness Index (TWI)",
          "Land Cover",
          "Soil Maps",
          "Satellite Imagery"
        ]
      },
      {
        "type": "paragraph",
        "text": "This multi-layer approach produces more reliable decisions than relying on a single terrain derivative."
      },
      {
        "type": "heading",
        "text": "WhiteboxTools Implementation"
      },
      {
        "type": "paragraph",
        "text": "WhiteboxTools includes the DevFromMeanElev tool."
      },
      {
        "type": "paragraph",
        "text": "Typical workflow:"
      },
      {
        "type": "list",
        "items": [
          "Prepare a hydrologically sound DEM.",
          "Select DevFromMeanElev.",
          "Specify search radius.",
          "Run the analysis.",
          "Visualize the resulting z-score raster."
        ]
      },
      {
        "type": "paragraph",
        "text": "Experiment with different neighborhood sizes to determine which best represents your landscape."
      },
      {
        "type": "heading",
        "text": "Best Practices"
      },
      {
        "type": "list",
        "items": [
          "Use the highest-quality DEM available.",
          "Match neighborhood size to mapping scale.",
          "Remove DEM artifacts before analysis.",
          "Validate with field observations.",
          "Combine DEV with additional terrain indices."
        ]
      },
      {
        "type": "heading",
        "text": "Common Mistakes"
      },
      {
        "type": "list",
        "items": [
          "Using an unsuitable search radius.",
          "Treating DEV as elevation.",
          "Comparing DEV values from different neighborhood sizes without context.",
          "Ignoring DEM quality."
        ]
      },
      {
        "type": "heading",
        "text": "Real-World Examples"
      },
      {
        "type": "paragraph",
        "text": "Agriculture:"
      },
      {
        "type": "list",
        "items": [
          "Detect wet spots before planting.",
          "Optimize irrigation.",
          "Reduce fertilizer waste."
        ]
      },
      {
        "type": "paragraph",
        "text": "Hydrology:"
      },
      {
        "type": "list",
        "items": [
          "Identify headwater channels.",
          "Improve watershed mapping."
        ]
      },
      {
        "type": "paragraph",
        "text": "Engineering:"
      },
      {
        "type": "list",
        "items": [
          "Select infrastructure locations.",
          "Assess earthwork requirements."
        ]
      },
      {
        "type": "paragraph",
        "text": "Environmental Management:"
      },
      {
        "type": "list",
        "items": [
          "Map microhabitats.",
          "Study erosion and sediment transport."
        ]
      },
      {
        "type": "heading",
        "text": "Conclusion"
      },
      {
        "type": "paragraph",
        "text": "Deviation from Mean Elevation is a simple yet powerful terrain analysis method. Rather than describing absolute height, it reveals the landscape's relative highs and lows, making subtle landforms immediately visible."
      },
      {
        "type": "paragraph",
        "text": "For precision agriculture, DEV supports better drainage planning, irrigation design, erosion management, and variable-rate farming. Combined with other terrain products, it becomes an indispensable component of modern GIS analysis."
      },
      {
        "type": "paragraph",
        "text": "Small variations in terrain often produce major differences in water movement and crop performance. DEV helps reveal those variations, enabling smarter and more data-driven decisions."
      }
    ]
  }
};

const CONTOUR_LABEL_ARTICLE = {
  "km": {
    "title": "របៀបបង្ហាញ Contour Index និង Label ដោយប្រើ Python ក្នុង Calculate Field",
    "excerpt": "វីដេអូ Tutorial នេះបង្ហាញរបៀបប្រើ Python ក្នុង Calculate Field សម្រាប់ Contour Index និង Label ក្នុង ArcGIS Pro។",
    "readTime": "វីដេអូ Tutorial",
    "content": [
      {
        "type": "paragraph",
        "text": "វីដេអូ Tutorial នេះណែនាំពីរបៀបប្រើ Python expression ក្នុង Calculate Field ដើម្បីរៀបចំ contour line និង label ឱ្យងាយអានក្នុង ArcGIS Pro។"
      },
      {
        "type": "heading",
        "text": "អ្វីដែលអ្នកនឹងរៀន"
      },
      {
        "type": "list",
        "items": [
          "របៀបកំណត់ contour index សម្រាប់ខ្សែ contour សំខាន់ៗ",
          "របៀបប្រើ Python ក្នុង Calculate Field",
          "របៀបរៀបចំ label សម្រាប់ contour map",
          "ធ្វើឱ្យផែនទី elevation ងាយអានជាងមុន"
        ]
      },
      {
        "type": "heading",
        "text": "សាកសមសម្រាប់"
      },
      {
        "type": "list",
        "items": [
          "អ្នកប្រើ ArcGIS Pro",
          "ការងារ Topographic និង Elevation map",
          "អ្នក GIS ដែលចង់សន្សំពេលជាមួយ Python expression"
        ]
      }
    ]
  },
  "en": {
    "title": "How to Display Contour Index and Label Using Python in Calculate Field",
    "excerpt": "This video tutorial shows how to use Python in Calculate Field to display contour index values and labels clearly in ArcGIS Pro.",
    "readTime": "Video tutorial",
    "content": [
      {
        "type": "paragraph",
        "text": "This video tutorial walks through using a Python expression in Calculate Field to manage contour index values and create clearer contour labeling in ArcGIS Pro."
      },
      {
        "type": "heading",
        "text": "What you will learn"
      },
      {
        "type": "list",
        "items": [
          "How to identify important contour index lines",
          "How to use Python in Calculate Field",
          "How to prepare labels for contour maps",
          "How to make elevation maps cleaner and easier to read"
        ]
      },
      {
        "type": "heading",
        "text": "Best for"
      },
      {
        "type": "list",
        "items": [
          "ArcGIS Pro users",
          "Topographic and elevation map workflows",
          "GIS users who want to save time with Python expressions"
        ]
      }
    ]
  }
};

const LANDSAT_GEE_ARTICLE = {
  "km": {
    "title": "របៀបទាញយករូបភាពផ្កាយរណប Landsat 9 ដោយប្រើ Google Earth Engine",
    "excerpt": "វីដេអូនេះបង្ហាញរបៀបទាញយក Landsat 9 satellite image ដោយប្រើ Google Earth Engine សម្រាប់ការងារ remote sensing និង GIS។",
    "readTime": "វីដេអូ Tutorial",
    "content": [
      {
        "type": "paragraph",
        "text": "វីដេអូ Tutorial នេះណែនាំពីរបៀបប្រើ Google Earth Engine (GEE) ដើម្បីស្វែងរក និងទាញយករូបភាពផ្កាយរណប Landsat 9 សម្រាប់ការវិភាគ remote sensing និង GIS។"
      },
      {
        "type": "heading",
        "text": "អ្វីដែលអ្នកនឹងរៀន"
      },
      {
        "type": "list",
        "items": [
          "របៀបប្រើ Google Earth Engine សម្រាប់ Landsat 9",
          "របៀបជ្រើសរើសតំបន់ និងពេលវេលាសម្រាប់រូបភាពផ្កាយរណប",
          "គន្លឹះក្នុងការទាញយក satellite image សម្រាប់គម្រោង GIS",
          "មូលដ្ឋានសម្រាប់ remote sensing workflow"
        ]
      },
      {
        "type": "heading",
        "text": "សាកសមសម្រាប់"
      },
      {
        "type": "list",
        "items": [
          "អ្នករៀន remote sensing",
          "អ្នកប្រើ Google Earth Engine",
          "អ្នក GIS ដែលចង់ប្រើ Landsat image ក្នុងការវិភាគ"
        ]
      }
    ]
  },
  "en": {
    "title": "How to Download Landsat 9 Satellite Image Using Google Earth Engine",
    "excerpt": "This video tutorial shows how to download Landsat 9 satellite imagery using Google Earth Engine for remote sensing and GIS workflows.",
    "readTime": "Video tutorial",
    "content": [
      {
        "type": "paragraph",
        "text": "This video tutorial introduces how to use Google Earth Engine (GEE) to find and download Landsat 9 satellite imagery for remote sensing and GIS analysis."
      },
      {
        "type": "heading",
        "text": "What you will learn"
      },
      {
        "type": "list",
        "items": [
          "How to use Google Earth Engine for Landsat 9 imagery",
          "How to choose an area and time range for satellite data",
          "Key steps for downloading satellite images for GIS projects",
          "Basic remote sensing workflow concepts"
        ]
      },
      {
        "type": "heading",
        "text": "Best for"
      },
      {
        "type": "list",
        "items": [
          "Remote sensing learners",
          "Google Earth Engine users",
          "GIS users who want to use Landsat imagery in analysis"
        ]
      }
    ]
  }
};

const SENTINEL_GEE_ARTICLE = {
  "km": {
    "title": "របៀបទាញយករូបភាពផ្កាយរណប Sentinel-2 ដោយប្រើ Google Earth Engine",
    "excerpt": "វីដេអូនេះបង្ហាញរបៀបទាញយក Sentinel-2 satellite image ដោយប្រើ Google Earth Engine សម្រាប់ការងារ remote sensing និង GIS។",
    "readTime": "វីដេអូ Tutorial",
    "content": [
      {
        "type": "paragraph",
        "text": "វីដេអូ Tutorial នេះណែនាំពីរបៀបប្រើ Google Earth Engine (GEE) ដើម្បីស្វែងរក និងទាញយករូបភាពផ្កាយរណប Sentinel-2 សម្រាប់ការវិភាគ remote sensing និង GIS។"
      },
      {
        "type": "heading",
        "text": "អ្វីដែលអ្នកនឹងរៀន"
      },
      {
        "type": "list",
        "items": [
          "របៀបប្រើ Google Earth Engine សម្រាប់ Sentinel-2",
          "របៀបជ្រើសរើសតំបន់ និងពេលវេលាសម្រាប់រូបភាពផ្កាយរណប",
          "គន្លឹះក្នុងការទាញយក Sentinel-2 image សម្រាប់គម្រោង GIS",
          "មូលដ្ឋានសម្រាប់ remote sensing workflow"
        ]
      },
      {
        "type": "heading",
        "text": "សាកសមសម្រាប់"
      },
      {
        "type": "list",
        "items": [
          "អ្នករៀន remote sensing",
          "អ្នកប្រើ Google Earth Engine",
          "អ្នក GIS ដែលចង់ប្រើ Sentinel-2 image ក្នុងការវិភាគ"
        ]
      }
    ]
  },
  "en": {
    "title": "How to Download Sentinel-2 Satellite Image Using Google Earth Engine",
    "excerpt": "This video tutorial shows how to download Sentinel-2 satellite imagery using Google Earth Engine for remote sensing and GIS workflows.",
    "readTime": "Video tutorial",
    "content": [
      {
        "type": "paragraph",
        "text": "This video tutorial introduces how to use Google Earth Engine (GEE) to find and download Sentinel-2 satellite imagery for remote sensing and GIS analysis."
      },
      {
        "type": "heading",
        "text": "What you will learn"
      },
      {
        "type": "list",
        "items": [
          "How to use Google Earth Engine for Sentinel-2 imagery",
          "How to choose an area and time range for satellite data",
          "Key steps for downloading Sentinel-2 images for GIS projects",
          "Basic remote sensing workflow concepts"
        ]
      },
      {
        "type": "heading",
        "text": "Best for"
      },
      {
        "type": "list",
        "items": [
          "Remote sensing learners",
          "Google Earth Engine users",
          "GIS users who want to use Sentinel-2 imagery in analysis"
        ]
      }
    ]
  }
};

const GIS_URBAN_PLANNING_ARTICLE = {
  "km": {
    "title": "GIS ក្នុងការរៀបចំផែនការទីក្រុង",
    "excerpt": "ទីក្រុងសម័យទំនើបបង្កើតទិន្នន័យភូមិសាស្ត្រជាច្រើនជារៀងរាល់ថ្ងៃ។ ផ្លូវ អគ្គិសនី ប្រព័ន្ធលូ អគារ សួនច្បារ ប្រជាជន និងហានិភ័យទឹកជំនន់ សុទ្ធតែពាក់ព័ន្ធនឹងទីតាំង។ GIS ជួយបម្លែងទិន្នន័យទាំងនេះទៅជាព័ត៌មានសម្រាប់ការសម្រេចចិត្ត។",
    "readTime": "១០ នាទី",
    "content": [
      {
        "type": "heading",
        "text": "សេចក្តីផ្តើម"
      },
      {
        "type": "paragraph",
        "text": "ទីក្រុងសម័យទំនើបបង្កើតទិន្នន័យភូមិសាស្ត្រជាច្រើនជារៀងរាល់ថ្ងៃ។ ផ្លូវ អគ្គិសនី ប្រព័ន្ធលូ អគារ សួនច្បារ ប្រជាជន និងហានិភ័យទឹកជំនន់ សុទ្ធតែពាក់ព័ន្ធនឹងទីតាំង។ GIS ជួយបម្លែងទិន្នន័យទាំងនេះទៅជាព័ត៌មានសម្រាប់ការសម្រេចចិត្ត។"
      },
      {
        "type": "heading",
        "text": "GIS គឺជាអ្វី?"
      },
      {
        "type": "paragraph",
        "text": "GIS (Geographic Information System) គឺជាប្រព័ន្ធសម្រាប់ប្រមូល រក្សាទុក គ្រប់គ្រង វិភាគ និងបង្ហាញទិន្នន័យដែលមានទីតាំងភូមិសាស្ត្រ។ វាអាចឆ្លើយសំណួរដូចជា៖ - វាស្ថិតនៅទីណា? - ហេតុអ្វីកើតឡើងនៅទីនោះ? - តំបន់ណាសមស្របបំផុតសម្រាប់គម្រោងថ្មី?"
      },
      {
        "type": "paragraph",
        "text": "GIS មានសមាសធាតុសំខាន់ ៥ គឺ Hardware, Software, Data, People និង Methods។"
      },
      {
        "type": "heading",
        "text": "ហេតុអ្វី GIS សំខាន់សម្រាប់ការរៀបចំផែនការទីក្រុង"
      },
      {
        "type": "paragraph",
        "text": "ការពង្រីកទីក្រុង ការកកស្ទះចរាចរណ៍ ការគ្រប់គ្រងដីធ្លី ការពង្រីកហេដ្ឋារចនាសម្ព័ន្ធ និងបញ្ហាបរិស្ថាន សុទ្ធតែជាបញ្ហាដែលពាក់ព័ន្ធនឹងទីតាំង។ GIS អនុញ្ញាតឱ្យអ្នករៀបចំផែនការយល់ដឹងពីទំនាក់ទំនងរវាងមនុស្ស បរិស្ថាន និងហេដ្ឋារចនាសម្ព័ន្ធ។"
      },
      {
        "type": "heading",
        "text": "ការប្រើប្រាស់សំខាន់ៗ"
      },
      {
        "type": "heading3",
        "text": "ការរៀបចំការប្រើប្រាស់ដី"
      },
      {
        "type": "paragraph",
        "text": "វិភាគការប្រើប្រាស់ដី ប៉ាន់ប្រមាណការលូតលាស់ និងគាំទ្រការអភិវឌ្ឍប្រកបដោយតុល្យភាព។"
      },
      {
        "type": "heading3",
        "text": "ការកំណត់តំបន់ (Zoning)"
      },
      {
        "type": "paragraph",
        "text": "បង្កើតផែនទីតំបន់ ត្រួតពិនិត្យការអនុវត្តច្បាប់ និងកាត់បន្ថយការប៉ះទង្គិចក្នុងការអភិវឌ្ឍ។"
      },
      {
        "type": "heading3",
        "text": "ហេដ្ឋារចនាសម្ព័ន្ធ"
      },
      {
        "type": "paragraph",
        "text": "រៀបចំផ្លូវ ប្រព័ន្ធទឹក ភ្លើង លូ និងបណ្តាញដឹកជញ្ជូនដោយប្រើ Spatial Analysis។"
      },
      {
        "type": "heading3",
        "text": "Smart City"
      },
      {
        "type": "paragraph",
        "text": "ភ្ជាប់ទិន្នន័យ Sensor និង IoT ដើម្បីគ្រប់គ្រងចរាចរណ៍ សេវាសាធារណៈ និងការឆ្លើយតបគ្រោះអាសន្ន។"
      },
      {
        "type": "heading",
        "text": "អត្ថប្រយោជន៍"
      },
      {
        "type": "list",
        "items": [
          "សម្រេចចិត្តផ្អែកលើទិន្នន័យ",
          "ប្រើប្រាស់ធនធានមានប្រសិទ្ធភាព",
          "គាំទ្រការអភិវឌ្ឍប្រកបដោយចីរភាព",
          "បង្កើនការចូលរួមរបស់សាធារណជន",
          "សន្សំពេលវេលា និងថវិកា"
        ]
      },
      {
        "type": "heading",
        "text": "លំហូរការងារ GIS"
      },
      {
        "type": "list",
        "items": [
          "ប្រមូលទិន្នន័យ",
          "គ្រប់គ្រងទិន្នន័យ",
          "វិភាគភូមិសាស្ត្រ",
          "បង្ហាញលទ្ធផល",
          "សម្រេចចិត្ត",
          "តាមដាន និងធ្វើបច្ចុប្បន្នភាព"
        ]
      },
      {
        "type": "heading",
        "text": "ឧទាហរណ៍ជាក់ស្តែង"
      },
      {
        "type": "list",
        "items": [
          "ជ្រើសរើសទីតាំងមន្ទីរពេទ្យថ្មី",
          "រៀបចំបណ្តាញដឹកជញ្ជូន",
          "វាយតម្លៃហានិភ័យទឹកជំនន់",
          "ពង្រីកបណ្តាញទឹក និងអគ្គិសនី",
          "តាមដានការរីកចម្រើនរបស់ទីក្រុង"
        ]
      },
      {
        "type": "heading",
        "text": "បញ្ហាប្រឈម"
      },
      {
        "type": "paragraph",
        "text": "ការអនុវត្ត GIS ទាមទារទិន្នន័យមានគុណភាព អ្នកជំនាញ ស្តង់ដារទិន្នន័យ និងកិច្ចសហការរវាងស្ថាប័ន។"
      },
      {
        "type": "heading",
        "text": "អនាគត"
      },
      {
        "type": "paragraph",
        "text": "AI, IoT, Drone, Cloud GIS និង Digital Twin នឹងធ្វើឱ្យការរៀបចំផែនការទីក្រុងកាន់តែឆ្លាតវៃ និងមានប្រសិទ្ធភាព។"
      },
      {
        "type": "heading",
        "text": "សេចក្តីសន្និដ្ឋាន"
      },
      {
        "type": "paragraph",
        "text": "GIS មិនមែនគ្រាន់តែជាឧបករណ៍បង្កើតផែនទីទេ ប៉ុន្តែជាប្រព័ន្ធគាំទ្រការសម្រេចចិត្តដែលជួយកសាងទីក្រុងឱ្យកាន់តែឆ្លាតវៃ មានភាពធន់ និងមានចីរភាព។"
      },
      {
        "type": "paragraph",
        "text": "បើវាមានទីតាំង GIS អាចជួយរៀបចំផែនការបាន។"
      }
    ]
  },
  "en": {
    "title": "GIS in Urban Planning",
    "excerpt": "Modern cities generate enormous amounts of spatial information every day. Roads, utilities, buildings, green spaces, transportation systems, population distribution, flood-prone areas, and land ownership all have one thing in common---they are tied to location. Geographic Information Systems (GIS) transform these locations into actionable intelligence that helps governments, planners, engineers, and communities make better decisions.",
    "readTime": "10 minutes",
    "content": [
      {
        "type": "heading",
        "text": "Introduction"
      },
      {
        "type": "paragraph",
        "text": "Modern cities generate enormous amounts of spatial information every day. Roads, utilities, buildings, green spaces, transportation systems, population distribution, flood-prone areas, and land ownership all have one thing in common---they are tied to location. Geographic Information Systems (GIS) transform these locations into actionable intelligence that helps governments, planners, engineers, and communities make better decisions."
      },
      {
        "type": "paragraph",
        "text": "Urban planning is no longer limited to paper maps and manual surveys. GIS provides a digital platform for collecting, managing, analyzing, and visualizing geographic data, enabling cities to become smarter, more resilient, and more sustainable."
      },
      {
        "type": "heading",
        "text": "What is GIS?"
      },
      {
        "type": "paragraph",
        "text": "GIS is a computer-based system that captures, stores, manages, analyzes, and visualizes data with a geographic reference. Unlike ordinary databases, GIS answers questions such as:"
      },
      {
        "type": "list",
        "items": [
          "Where is it?",
          "Why is it happening there?",
          "What will happen if conditions change?",
          "Which location is most suitable?"
        ]
      },
      {
        "type": "paragraph",
        "text": "A complete GIS combines five major components:"
      },
      {
        "type": "list",
        "items": [
          "Hardware",
          "Software"
        ]
      },
      {
        "type": "list",
        "items": [
          "Data",
          "People",
          "Methods"
        ]
      },
      {
        "type": "paragraph",
        "text": "These components work together to support reliable spatial decision-making."
      },
      {
        "type": "heading",
        "text": "Why GIS Matters in Urban Planning"
      },
      {
        "type": "paragraph",
        "text": "Cities constantly face challenges:"
      },
      {
        "type": "list",
        "items": [
          "Rapid population growth",
          "Traffic congestion",
          "Housing demand",
          "Flooding",
          "Environmental degradation",
          "Infrastructure expansion"
        ]
      },
      {
        "type": "paragraph",
        "text": "Because these challenges are spatial in nature, GIS allows planners to understand relationships between people, infrastructure, and the environment instead of relying on assumptions."
      },
      {
        "type": "heading",
        "text": "Major Applications"
      },
      {
        "type": "heading3",
        "text": "1. Land Use Planning"
      },
      {
        "type": "paragraph",
        "text": "GIS helps planners evaluate existing land use, identify development opportunities, preserve agricultural land, and balance residential, commercial, industrial, and recreational areas."
      },
      {
        "type": "heading3",
        "text": "2. Zoning and Regulations"
      },
      {
        "type": "paragraph",
        "text": "Digital zoning maps improve transparency and simplify permit reviews. GIS makes it easy to detect conflicts between proposed developments and zoning regulations."
      },
      {
        "type": "heading3",
        "text": "3. Infrastructure Planning"
      },
      {
        "type": "paragraph",
        "text": "Water supply, sewer systems, electricity, telecommunications, and transportation networks can all be designed and managed using GIS. Network analysis identifies efficient routes and future expansion needs."
      },
      {
        "type": "heading3",
        "text": "4. Smart Cities"
      },
      {
        "type": "paragraph",
        "text": "Real-time sensor data integrated with GIS supports traffic monitoring, emergency response, public transportation optimization, waste collection, and energy management."
      },
      {
        "type": "heading",
        "text": "Benefits of GIS"
      },
      {
        "type": "heading3",
        "text": "Better Decisions"
      },
      {
        "type": "paragraph",
        "text": "Evidence-based planning reduces uncertainty by using accurate spatial information."
      },
      {
        "type": "heading3",
        "text": "Efficient Resource Management"
      },
      {
        "type": "paragraph",
        "text": "Governments can prioritize investments where they produce the greatest public benefit."
      },
      {
        "type": "heading3",
        "text": "Sustainable Development"
      },
      {
        "type": "paragraph",
        "text": "Environmental constraints, flood risk, biodiversity, and green infrastructure can all be incorporated into planning decisions."
      },
      {
        "type": "heading3",
        "text": "Public Participation"
      },
      {
        "type": "paragraph",
        "text": "Interactive web maps improve communication with citizens and increase transparency."
      },
      {
        "type": "heading3",
        "text": "Cost and Time Savings"
      },
      {
        "type": "paragraph",
        "text": "Early detection of spatial conflicts reduces redesign, delays, and construction costs."
      },
      {
        "type": "heading",
        "text": "GIS Workflow"
      },
      {
        "type": "paragraph",
        "text": "A typical urban planning workflow includes:"
      },
      {
        "type": "list",
        "items": [
          "Data collection",
          "Data management",
          "Spatial analysis",
          "Visualization",
          "Decision making",
          "Monitoring and updating"
        ]
      },
      {
        "type": "paragraph",
        "text": "This continuous cycle supports adaptive planning as cities evolve."
      },
      {
        "type": "heading",
        "text": "Real-World Examples"
      },
      {
        "type": "list",
        "items": [
          "Selecting the best location for a new hospital.",
          "Designing optimal public transport routes.",
          "Identifying flood-risk neighborhoods.",
          "Planning utility expansions.",
          "Monitoring urban growth using satellite imagery.",
          "Evaluating accessibility to schools and healthcare."
        ]
      },
      {
        "type": "heading",
        "text": "Challenges"
      },
      {
        "type": "paragraph",
        "text": "Successful GIS implementation requires:"
      },
      {
        "type": "list",
        "items": [
          "High-quality and up-to-date data",
          "Skilled professionals",
          "Data standards",
          "Inter-agency collaboration",
          "Sustainable investment"
        ]
      },
      {
        "type": "paragraph",
        "text": "Poor data quality often leads to poor planning outcomes."
      },
      {
        "type": "heading",
        "text": "The Future of Urban GIS"
      },
      {
        "type": "paragraph",
        "text": "Emerging technologies such as AI, IoT, UAVs, cloud GIS, and digital twins are transforming urban planning. Future cities will rely increasingly on real-time spatial intelligence to support sustainable growth."
      },
      {
        "type": "heading",
        "text": "Conclusion"
      },
      {
        "type": "paragraph",
        "text": "GIS is far more than digital mapping. It is a decision-support platform that connects location, data, and analysis. Whether planning roads, managing utilities, protecting the environment, or improving public services, GIS enables smarter, more resilient, and more livable cities."
      },
      {
        "type": "paragraph",
        "text": "If it has a location, GIS can help plan it."
      }
    ]
  }
};

const GIS_DISASTER_MANAGEMENT_ARTICLE = {
  "km": {
    "title": "GIS ក្នុងការគ្រប់គ្រងគ្រោះមហន្តរាយ",
    "excerpt": "គ្រោះមហន្តរាយធម្មជាតិកំពុងកើតមានញឹកញាប់ និងមានភាពធ្ងន់ធ្ងរឡើង។ ដើម្បីកាត់បន្ថយហានិភ័យ និងការបាត់បង់ជីវិត ការប្រើប្រាស់ Geographic Information Systems (GIS) បានក្លាយជាបច្ចេកវិទ្យាសំខាន់សម្រាប់ការគ្រប់គ្រងគ្រោះមហន្តរាយ។",
    "readTime": "១២ នាទី",
    "content": [
      {
        "type": "heading",
        "text": "សេចក្តីផ្តើម"
      },
      {
        "type": "paragraph",
        "text": "គ្រោះមហន្តរាយធម្មជាតិកំពុងកើតមានញឹកញាប់ និងមានភាពធ្ងន់ធ្ងរឡើង។ ដើម្បីកាត់បន្ថយហានិភ័យ និងការបាត់បង់ជីវិត ការប្រើប្រាស់ Geographic Information Systems (GIS) បានក្លាយជាបច្ចេកវិទ្យាសំខាន់សម្រាប់ការគ្រប់គ្រងគ្រោះមហន្តរាយ។"
      },
      {
        "type": "paragraph",
        "text": "GIS មិនមែនគ្រាន់តែជាការធ្វើផែនទីប៉ុណ្ណោះទេ។ វាប្រមូល បញ្ចូល វិភាគ និងបង្ហាញទិន្នន័យភូមិសាស្ត្រដើម្បីជួយអ្នកសម្រេចចិត្តយល់ថា «តើអ្វីកំពុងកើតឡើង? កើតនៅទីណា? ហើយត្រូវឆ្លើយតបដូចម្តេច?»"
      },
      {
        "type": "heading",
        "text": "វដ្តនៃការគ្រប់គ្រងគ្រោះមហន្តរាយ"
      },
      {
        "type": "heading",
        "text": "១. ការកាត់បន្ថយហានិភ័យ"
      },
      {
        "type": "paragraph",
        "text": "GIS ជួយបង្កើតផែនទីហានិភ័យ វាយតម្លៃភាពងាយរងគ្រោះ វិភាគប្រជាជន និងហេដ្ឋារចនាសម្ព័ន្ធដែលអាចរងផលប៉ះពាល់។"
      },
      {
        "type": "heading",
        "text": "២. ការត្រៀមខ្លួន"
      },
      {
        "type": "paragraph",
        "text": "GIS គាំទ្រការរៀបចំផែនការជម្លៀស ប្រព័ន្ធស្នាក់នៅបណ្តោះអាសន្ន ផែនទីធនធាន និងការធ្វើសមុលកម្មសេណារីយ៉ូផ្សេងៗ។"
      },
      {
        "type": "heading",
        "text": "៣. ការឆ្លើយតប"
      },
      {
        "type": "paragraph",
        "text": "ពេលមានគ្រោះមហន្តរាយ GIS ប្រើទិន្នន័យពេលវេលាពិតពីផ្កាយរណប ដ្រូន GPS អាកាសធាតុ និងក្រុមការងារទីលាន ដើម្បីជួយចាត់ចែងធនធាន និងសង្គ្រោះបានលឿន។"
      },
      {
        "type": "heading",
        "text": "៤. ការស្តារឡើងវិញ"
      },
      {
        "type": "paragraph",
        "text": "GIS ជួយវាយតម្លៃការខូចខាត តាមដានការស្តារហេដ្ឋារចនាសម្ព័ន្ធ និងកំណត់អាទិភាពក្នុងការចែកចាយថវិកា និងធនធាន។"
      },
      {
        "type": "heading",
        "text": "៥. ការរៀនសូត្រ និងកែលម្អ"
      },
      {
        "type": "paragraph",
        "text": "ទិន្នន័យពីគ្រោះមហន្តរាយមុនៗត្រូវបានប្រើដើម្បីវិភាគ និងកែលម្អផែនការសម្រាប់អនាគត។"
      },
      {
        "type": "heading",
        "text": "ការអនុវត្ត GIS សម្រាប់គ្រោះមហន្តរាយ"
      },
      {
        "type": "heading",
        "text": "ទឹកជំនន់"
      },
      {
        "type": "list",
        "items": [
          "ផែនទីហានិភ័យទឹកជំនន់",
          "ការព្យាករណ៍តំបន់លិចទឹក",
          "ប្រព័ន្ធជូនដំណឹងមុន",
          "ផែនការជម្លៀស"
        ]
      },
      {
        "type": "heading",
        "text": "ភ្លើងឆេះព្រៃ"
      },
      {
        "type": "list",
        "items": [
          "វាយតម្លៃហានិភ័យ",
          "តាមដានការរាលដាល",
          "ប្រើរូបភាពផ្កាយរណប និងដ្រូន",
          "គ្រប់គ្រងធនធានពន្លត់អគ្គីភ័យ"
        ]
      },
      {
        "type": "heading",
        "text": "បាក់ដី"
      },
      {
        "type": "paragraph",
        "text": "GIS រួមបញ្ចូលទិន្នន័យជម្រាលដី ភ្លៀង ភូគព្ភសាស្ត្រ ការប្រើប្រាស់ដី និងប្រភេទដី ដើម្បីបង្កើតផែនទីហានិភ័យ។"
      },
      {
        "type": "heading",
        "text": "ការជម្លៀសប្រជាពលរដ្ឋ"
      },
      {
        "type": "paragraph",
        "text": "Network Analysis ជួយរកផ្លូវលឿនបំផុត កំណត់ទីតាំងជម្រក និងបែងចែកធនធានសង្គ្រោះ។"
      },
      {
        "type": "heading",
        "text": "សមត្ថភាពសំខាន់ៗរបស់ GIS"
      },
      {
        "type": "list",
        "items": [
          "បញ្ចូលទិន្នន័យពីប្រភពជាច្រើន",
          "វិភាគលំហ (Spatial Analysis)",
          "ផ្ទាំងតាមដានពេលវេលាពិត",
          "សាកល្បងសេណារីយ៉ូ",
          "សហការរវាងស្ថាប័ន"
        ]
      },
      {
        "type": "heading",
        "text": "ប្រភពទិន្នន័យ"
      },
      {
        "type": "list",
        "items": [
          "រូបភាពផ្កាយរណប",
          "ដ្រូន",
          "ទិន្នន័យអាកាសធាតុ",
          "DEM និង Terrain",
          "ការស្ទង់មតិទីលាន",
          "GPS",
          "មូលដ្ឋានទិន្នន័យរដ្ឋាភិបាល",
          "ទិន្នន័យពីសាធារណជន"
        ]
      },
      {
        "type": "heading",
        "text": "អត្ថប្រយោជន៍"
      },
      {
        "type": "paragraph",
        "text": "GIS ជួយ៖"
      },
      {
        "type": "list",
        "items": [
          "កាត់បន្ថយការបាត់បង់ជីវិត",
          "ការពារហេដ្ឋារចនាសម្ព័ន្ធ",
          "សម្រេចចិត្តល្អប្រសើរ",
          "ប្រើធនធានមានប្រសិទ្ធភាព",
          "បង្កើនការសហការរវាងស្ថាប័ន",
          "បង្កើតសហគមន៍ដែលមានភាពធន់"
        ]
      },
      {
        "type": "heading",
        "text": "បញ្ហាប្រឈម"
      },
      {
        "type": "paragraph",
        "text": "ការគ្រប់គ្រងគុណភាពទិន្នន័យ ការខ្វះទិន្នន័យពេលវេលាពិត ការចែករំលែកទិន្នន័យ និងការខ្វះអ្នកជំនាញ នៅតែជាបញ្ហាសំខាន់ ប៉ុន្តែ Cloud GIS, AI និង Remote Sensing កំពុងជួយដោះស្រាយបញ្ហាទាំងនេះ។"
      },
      {
        "type": "heading",
        "text": "អនាគត"
      },
      {
        "type": "paragraph",
        "text": "AI, Machine Learning, Digital Twin, IoT, ដ្រូន និង Cloud GIS នឹងធ្វើឱ្យការគ្រប់គ្រងគ្រោះមហន្តរាយកាន់តែមានប្រសិទ្ធភាព និងអាចព្យាករណ៍បានមុន។"
      },
      {
        "type": "heading",
        "text": "សេចក្តីសន្និដ្ឋាន"
      },
      {
        "type": "paragraph",
        "text": "GIS គឺជាបច្ចេកវិទ្យាស្នូលសម្រាប់ការគ្រប់គ្រងគ្រោះមហន្តរាយសម័យទំនើប។ វាជួយចាប់ពីការកាត់បន្ថយហានិភ័យ ការត្រៀមខ្លួន ការឆ្លើយតប ការស្តារឡើងវិញ រហូតដល់ការកែលម្អជាបន្តបន្ទាប់។ ការវិនិយោគលើ GIS និងទិន្នន័យភូមិសាស្ត្រដែលមានគុណភាព គឺជាការវិនិយោគលើសុវត្ថិភាព និងភាពធន់របស់សហគមន៍។"
      }
    ]
  },
  "en": {
    "title": "GIS in Disaster Management",
    "excerpt": "Natural disasters are becoming more frequent and severe due to climate change, rapid urbanization, environmental degradation, and population growth. Floods, wildfires, landslides, droughts, storms, earthquakes, and coastal erosion threaten millions of people every year. Governments and organizations increasingly rely on Geographic Information Systems (GIS) to better understand risks, prepare for emergencies, coordinate response operations, and support long-term recovery.",
    "readTime": "12 minutes",
    "content": [
      {
        "type": "heading",
        "text": "Introduction"
      },
      {
        "type": "paragraph",
        "text": "Natural disasters are becoming more frequent and severe due to climate change, rapid urbanization, environmental degradation, and population growth. Floods, wildfires, landslides, droughts, storms, earthquakes, and coastal erosion threaten millions of people every year. Governments and organizations increasingly rely on Geographic Information Systems (GIS) to better understand risks, prepare for emergencies, coordinate response operations, and support long-term recovery."
      },
      {
        "type": "paragraph",
        "text": "GIS is much more than digital mapping. It integrates geographic data from multiple sources, performs spatial analysis, visualizes complex situations, and helps decision-makers answer one critical question: Where?"
      },
      {
        "type": "paragraph",
        "text": "Whether identifying flood-prone communities, predicting wildfire spread, planning evacuation routes, or assessing disaster damage, GIS provides location intelligence that saves lives."
      },
      {
        "type": "heading",
        "text": "Understanding the Disaster Management Cycle"
      },
      {
        "type": "paragraph",
        "text": "Disaster management is typically divided into five continuous phases."
      },
      {
        "type": "heading",
        "text": "1. Mitigation and Risk Assessment"
      },
      {
        "type": "paragraph",
        "text": "Mitigation focuses on reducing disaster impacts before they occur."
      },
      {
        "type": "paragraph",
        "text": "GIS supports this stage by:"
      },
      {
        "type": "list",
        "items": [
          "Hazard mapping",
          "Vulnerability assessment",
          "Population exposure analysis",
          "Critical infrastructure mapping",
          "Climate risk analysis"
        ]
      },
      {
        "type": "paragraph",
        "text": "Organizations combine DEMs, historical disaster records, rainfall, land cover, geology, and census data to identify high-risk areas."
      },
      {
        "type": "heading",
        "text": "2. Preparedness and Planning"
      },
      {
        "type": "paragraph",
        "text": "Preparation ensures communities know what to do before disasters happen."
      },
      {
        "type": "paragraph",
        "text": "GIS helps create:"
      },
      {
        "type": "list",
        "items": [
          "Evacuation plans",
          "Emergency shelter locations",
          "Resource inventories",
          "Emergency service coverage maps",
          "Public awareness maps"
        ]
      },
      {
        "type": "paragraph",
        "text": "Scenario simulations allow planners to evaluate different emergency situations before they happen."
      },
      {
        "type": "heading",
        "text": "3. Response"
      },
      {
        "type": "paragraph",
        "text": "During an emergency, speed is critical."
      },
      {
        "type": "paragraph",
        "text": "Real-time GIS combines:"
      },
      {
        "type": "list",
        "items": [
          "Satellite imagery",
          "Drone observations",
          "GPS tracking",
          "Weather information",
          "Field reports",
          "IoT sensors"
        ]
      },
      {
        "type": "paragraph",
        "text": "Emergency operation centers monitor live dashboards to deploy rescue teams, optimize routes, and prioritize resources."
      },
      {
        "type": "heading",
        "text": "4. Recovery"
      },
      {
        "type": "paragraph",
        "text": "After the disaster, GIS supports rebuilding efforts through:"
      },
      {
        "type": "list",
        "items": [
          "Damage assessment",
          "Infrastructure inspection",
          "Recovery progress monitoring",
          "Reconstruction planning",
          "Financial assistance prioritization"
        ]
      },
      {
        "type": "paragraph",
        "text": "Recovery maps help governments distribute limited resources more efficiently."
      },
      {
        "type": "heading",
        "text": "5. Learning and Improvement"
      },
      {
        "type": "paragraph",
        "text": "Every disaster provides lessons."
      },
      {
        "type": "paragraph",
        "text": "GIS stores historical events and supports after-action analysis to improve future emergency plans, policies, and response strategies."
      },
      {
        "type": "heading",
        "text": "GIS Applications for Common Disasters"
      },
      {
        "type": "heading",
        "text": "Flood Management"
      },
      {
        "type": "paragraph",
        "text": "GIS supports:"
      },
      {
        "type": "list",
        "items": [
          "Flood hazard mapping",
          "Flood extent modeling",
          "Early warning systems",
          "River monitoring",
          "Evacuation planning"
        ]
      },
      {
        "type": "paragraph",
        "text": "Hydrological models combined with DEMs predict inundation under different rainfall scenarios."
      },
      {
        "type": "heading",
        "text": "Wildfire Management"
      },
      {
        "type": "paragraph",
        "text": "GIS helps:"
      },
      {
        "type": "list",
        "items": [
          "Identify fire risk zones",
          "Monitor vegetation",
          "Track fire perimeters",
          "Predict spread",
          "Allocate firefighting resources"
        ]
      },
      {
        "type": "paragraph",
        "text": "Satellite imagery provides near real-time fire detection."
      },
      {
        "type": "heading",
        "text": "Landslide Monitoring"
      },
      {
        "type": "paragraph",
        "text": "Important spatial factors include:"
      },
      {
        "type": "list",
        "items": [
          "Slope",
          "Elevation",
          "Geology",
          "Rainfall",
          "Land use",
          "Soil type"
        ]
      },
      {
        "type": "paragraph",
        "text": "GIS combines these datasets into susceptibility maps for early warning."
      },
      {
        "type": "heading",
        "text": "Evacuation and Emergency Response"
      },
      {
        "type": "paragraph",
        "text": "Network analysis enables planners to:"
      },
      {
        "type": "list",
        "items": [
          "Find fastest evacuation routes",
          "Locate nearest shelters",
          "Optimize ambulance dispatch",
          "Avoid blocked roads",
          "Estimate travel time"
        ]
      },
      {
        "type": "heading",
        "text": "Key GIS Capabilities"
      },
      {
        "type": "heading",
        "text": "Data Integration"
      },
      {
        "type": "paragraph",
        "text": "GIS combines:"
      },
      {
        "type": "list",
        "items": [
          "Satellite imagery",
          "Drone data",
          "GPS observations",
          "Survey data",
          "Weather stations",
          "Social media",
          "Government databases"
        ]
      },
      {
        "type": "heading",
        "text": "Spatial Analysis"
      },
      {
        "type": "paragraph",
        "text": "Common analyses include:"
      },
      {
        "type": "list",
        "items": [
          "Overlay analysis",
          "Buffer analysis",
          "Network analysis",
          "Suitability modeling",
          "Hotspot analysis",
          "Terrain analysis"
        ]
      },
      {
        "type": "heading",
        "text": "Real-Time Visualization"
      },
      {
        "type": "paragraph",
        "text": "Interactive dashboards provide situational awareness using live maps, charts, alerts, and key performance indicators."
      },
      {
        "type": "heading",
        "text": "Scenario Modeling"
      },
      {
        "type": "paragraph",
        "text": "\"What-if\" simulations allow agencies to test evacuation plans, flood scenarios, and resource allocation before disasters occur."
      },
      {
        "type": "heading",
        "text": "Collaboration"
      },
      {
        "type": "paragraph",
        "text": "Cloud GIS platforms enable multiple agencies to share the same data and coordinate operations simultaneously."
      },
      {
        "type": "heading",
        "text": "Important GIS Data Sources"
      },
      {
        "type": "paragraph",
        "text": "Successful disaster management depends on high-quality data."
      },
      {
        "type": "paragraph",
        "text": "Common sources include:"
      },
      {
        "type": "list",
        "items": [
          "Satellite imagery",
          "Drone imagery",
          "Weather services",
          "DEM and terrain models",
          "Field surveys",
          "GPS",
          "Government spatial databases",
          "Crowdsourced information"
        ]
      },
      {
        "type": "heading",
        "text": "Benefits of GIS in Disaster Management"
      },
      {
        "type": "paragraph",
        "text": "Organizations using GIS can:"
      },
      {
        "type": "list",
        "items": [
          "Reduce loss of life",
          "Protect infrastructure",
          "Improve decision-making",
          "Allocate resources efficiently",
          "Increase coordination",
          "Improve communication",
          "Support evidence-based recovery",
          "Build resilient communities"
        ]
      },
      {
        "type": "heading",
        "text": "Challenges"
      },
      {
        "type": "paragraph",
        "text": "Despite its benefits, GIS faces challenges:"
      },
      {
        "type": "list",
        "items": [
          "Data quality issues",
          "Limited real-time data",
          "Incomplete field information",
          "High hardware costs",
          "Skilled workforce shortages",
          "Data sharing restrictions"
        ]
      },
      {
        "type": "paragraph",
        "text": "Modern cloud GIS, AI, remote sensing, and drones continue to reduce these limitations."
      },
      {
        "type": "heading",
        "text": "Future Trends"
      },
      {
        "type": "paragraph",
        "text": "Emerging technologies include:"
      },
      {
        "type": "list",
        "items": [
          "Artificial Intelligence",
          "Machine Learning",
          "Digital Twins",
          "IoT sensors",
          "UAV automation",
          "High-resolution satellite constellations",
          "Cloud-native GIS",
          "Predictive analytics"
        ]
      },
      {
        "type": "paragraph",
        "text": "These technologies make disaster management increasingly proactive instead of reactive."
      },
      {
        "type": "heading",
        "text": "Conclusion"
      },
      {
        "type": "paragraph",
        "text": "GIS has become one of the most important technologies for disaster management. It transforms large volumes of geographic information into actionable intelligence that supports mitigation, preparedness, emergency response, recovery, and continuous improvement."
      },
      {
        "type": "paragraph",
        "text": "As disasters become more complex, organizations that invest in GIS, accurate spatial data, and skilled professionals will be better prepared to protect lives, infrastructure, and communities. In disaster management, location truly matters—and GIS saves lives."
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

const CATEGORY_EN_LABELS = {
  all: "All",
  video: "Videos",
  tips: "Tips & Tricks",
  tutorial: "Tutorial",
  news: "News",
};

export const getLocalizedCategoryLabel = (slug, language = "km") => {
  const category = CATEGORIES.find((item) => item.slug === slug);
  if (language === "en") return CATEGORY_EN_LABELS[slug] || category?.label || slug;
  return category?.label || slug;
};

export const posts = [
  {
    slug: "gis-in-disaster-management",
    category: "tips",
    title: GIS_DISASTER_MANAGEMENT_ARTICLE.km.title,
    excerpt: GIS_DISASTER_MANAGEMENT_ARTICLE.km.excerpt,
    coverImage: "/blog/gis_in_disaster_management.jpg",
    coverDisplay: "cover",
    publishedAt: "2026-07-14",
    readTime: GIS_DISASTER_MANAGEMENT_ARTICLE.km.readTime,
    author: { name: "KGA Team", avatar: null },
    tags: ["GIS", "Disaster Management", "Risk Mapping", "Emergency Response"],
    locales: GIS_DISASTER_MANAGEMENT_ARTICLE,
    content: GIS_DISASTER_MANAGEMENT_ARTICLE.km.content,
  },
  {
    slug: "gis-in-urban-planning",
    category: "tips",
    title: GIS_URBAN_PLANNING_ARTICLE.km.title,
    excerpt: GIS_URBAN_PLANNING_ARTICLE.km.excerpt,
    coverImage: "/blog/gis_in_urban.jpg",
    coverDisplay: "cover",
    publishedAt: "2026-07-14",
    readTime: GIS_URBAN_PLANNING_ARTICLE.km.readTime,
    author: { name: "KGA Team", avatar: null },
    tags: ["GIS", "Urban Planning", "Smart City", "Spatial Analysis"],
    locales: GIS_URBAN_PLANNING_ARTICLE,
    content: GIS_URBAN_PLANNING_ARTICLE.km.content,
  },
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
  {
    slug: "convert-mdb-to-gdb-without-opening-arcmap",
    category: "video",
    title: MDB_GDB_ARTICLE.km.title,
    excerpt: MDB_GDB_ARTICLE.km.excerpt,
    coverImage: "/blog/mdb_gdb_without_arcmap.png",
    coverDisplay: "cover",
    youtubeId: "jU_uIzR-jV0",
    publishedAt: "2026-03-20",
    readTime: MDB_GDB_ARTICLE.km.readTime,
    author: { name: "KGA Team", avatar: null },
    tags: ["KGA Toolbox", "MDB", "GDB", "ArcMap", "ArcGIS Pro"],
    locales: MDB_GDB_ARTICLE,
    content: MDB_GDB_ARTICLE.km.content,
  },
  {
    slug: "predicting-life-expectancy-in-2030",
    category: "video",
    title: LIFE_EXPECTANCY_ARTICLE.km.title,
    excerpt: LIFE_EXPECTANCY_ARTICLE.km.excerpt,
    coverImage: "/blog/life_expectancy_prediction.png",
    coverDisplay: "cover",
    youtubeId: "LdRSmPb7jho",
    publishedAt: "2026-03-15",
    readTime: LIFE_EXPECTANCY_ARTICLE.km.readTime,
    author: { name: "KGA Team", avatar: null },
    tags: ["Data Science", "Predictive Analytics", "Machine Learning", "Life Expectancy"],
    locales: LIFE_EXPECTANCY_ARTICLE,
    content: LIFE_EXPECTANCY_ARTICLE.km.content,
  },
  {
    slug: "save-time-working-with-kml-files-in-arcgis-pro",
    category: "video",
    title: KML_GIS_ARTICLE.km.title,
    excerpt: KML_GIS_ARTICLE.km.excerpt,
    coverImage: "/blog/kml_to_gis.png",
    coverDisplay: "cover",
    youtubeId: "XhWyI9C-ykY",
    publishedAt: "2026-03-10",
    readTime: KML_GIS_ARTICLE.km.readTime,
    author: { name: "KGA Team", avatar: null },
    tags: ["KGA Toolbox", "KML", "KMZ", "ArcGIS Pro", "Google Earth"],
    locales: KML_GIS_ARTICLE,
    content: KML_GIS_ARTICLE.km.content,
  },
  {
    slug: "why-every-industry-needs-gis",
    category: "tips",
    title: WHY_GIS_INDUSTRY_ARTICLE.km.title,
    excerpt: WHY_GIS_INDUSTRY_ARTICLE.km.excerpt,
    coverImage: "/blog/why_every_industry_needs_gis.jpg",
    coverDisplay: "contain",
    publishedAt: "2026-03-05",
    readTime: WHY_GIS_INDUSTRY_ARTICLE.km.readTime,
    author: { name: "KGA Team", avatar: null },
    tags: ["GIS", "Location Intelligence", "Industry", "GIS Fundamentals"],
    locales: WHY_GIS_INDUSTRY_ARTICLE,
    content: WHY_GIS_INDUSTRY_ARTICLE.km.content,
  },
  {
    slug: "data-used-in-irrigation-gis",
    category: "tips",
    title: IRRIGATION_GIS_ARTICLE.km.title,
    excerpt: IRRIGATION_GIS_ARTICLE.km.excerpt,
    coverImage: "/blog/irrigation_gis_data.jpg",
    coverDisplay: "contain",
    publishedAt: "2026-03-01",
    readTime: IRRIGATION_GIS_ARTICLE.km.readTime,
    author: { name: "KGA Team", avatar: null },
    tags: ["GIS", "Irrigation", "Water Management", "Agriculture"],
    locales: IRRIGATION_GIS_ARTICLE,
    content: IRRIGATION_GIS_ARTICLE.km.content,
  },
  {
    slug: "deviation-from-mean-elevation-dev",
    category: "tips",
    title: DEV_ELEVATION_ARTICLE.km.title,
    excerpt: DEV_ELEVATION_ARTICLE.km.excerpt,
    coverImage: "/blog/dev_deviation_from_mean_elevation.jpg",
    coverDisplay: "contain",
    publishedAt: "2026-02-25",
    readTime: DEV_ELEVATION_ARTICLE.km.readTime,
    author: { name: "KGA Team", avatar: null },
    tags: ["GIS", "DEM", "DEV", "Precision Agriculture"],
    locales: DEV_ELEVATION_ARTICLE,
    content: DEV_ELEVATION_ARTICLE.km.content,
  },
  {
    slug: "display-contour-index-and-label-using-python",
    category: "video",
    title: CONTOUR_LABEL_ARTICLE.km.title,
    excerpt: CONTOUR_LABEL_ARTICLE.km.excerpt,
    coverImage: "https://img.youtube.com/vi/NE9gajFAa4U/hqdefault.jpg",
    coverDisplay: "cover",
    youtubeId: "NE9gajFAa4U",
    publishedAt: "2026-02-20",
    readTime: CONTOUR_LABEL_ARTICLE.km.readTime,
    author: { name: "KGA Team", avatar: null },
    tags: ["ArcGIS Pro", "Python", "Calculate Field", "Contour", "Tutorial"],
    locales: CONTOUR_LABEL_ARTICLE,
    content: CONTOUR_LABEL_ARTICLE.km.content,
  },
  {
    slug: "download-landsat-9-image-using-google-earth-engine",
    category: "video",
    title: LANDSAT_GEE_ARTICLE.km.title,
    excerpt: LANDSAT_GEE_ARTICLE.km.excerpt,
    coverImage: "https://img.youtube.com/vi/YOlu044H-yg/hqdefault.jpg",
    coverDisplay: "cover",
    youtubeId: "YOlu044H-yg",
    publishedAt: "2026-02-15",
    readTime: LANDSAT_GEE_ARTICLE.km.readTime,
    author: { name: "KGA Team", avatar: null },
    tags: ["Google Earth Engine", "Landsat 9", "Remote Sensing", "Satellite Imagery", "Tutorial"],
    locales: LANDSAT_GEE_ARTICLE,
    content: LANDSAT_GEE_ARTICLE.km.content,
  },
  {
    slug: "download-sentinel-2-image-using-google-earth-engine",
    category: "video",
    title: SENTINEL_GEE_ARTICLE.km.title,
    excerpt: SENTINEL_GEE_ARTICLE.km.excerpt,
    coverImage: "https://img.youtube.com/vi/o-Xk4j69SIk/hqdefault.jpg",
    coverDisplay: "cover",
    youtubeId: "o-Xk4j69SIk",
    publishedAt: "2026-02-10",
    readTime: SENTINEL_GEE_ARTICLE.km.readTime,
    author: { name: "KGA Team", avatar: null },
    tags: ["Google Earth Engine", "Sentinel-2", "Remote Sensing", "Satellite Imagery", "Tutorial"],
    locales: SENTINEL_GEE_ARTICLE,
    content: SENTINEL_GEE_ARTICLE.km.content,
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
