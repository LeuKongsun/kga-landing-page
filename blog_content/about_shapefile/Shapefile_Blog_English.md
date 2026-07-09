# A Shapefile Isn't One File

**Estimated reading time:** 5 minutes

If you've worked with GIS, you've probably received only a `.shp` file
and found that it wouldn't open. That's because a shapefile is **not** a
single file---it's a collection of files that work together as one GIS
dataset.

## What Is a Shapefile?

A shapefile is a vector data format introduced by Esri. Although we
commonly refer to it as "a shapefile," it actually consists of multiple
files with the same filename but different extensions.

Example:

``` text
Roads.shp
Roads.dbf
Roads.shx
Roads.prj
```

Each file has a specific role.

## The Four Essential Files

### `.shp` -- Geometry

Stores the actual point, line, or polygon geometry.

### `.dbf` -- Attributes

Stores the attribute table containing information such as names, IDs,
land use, and other descriptive data.

### `.shx` -- Shape Index

Acts as an index that allows GIS software to locate geometries quickly
and improve performance.

### `.prj` -- Coordinate System

Stores the coordinate reference system (CRS). Without it, GIS software
may not know where the data belongs.

## Why Sending Only the `.shp` File Is a Problem

Sending only the `.shp` file means the recipient loses important
supporting information such as attributes, indexing, or coordinate
system definitions. The dataset may fail to open or appear in the wrong
location.

## Best Practice

Instead of sending individual files:

1.  Keep all shapefile components together.
2.  Compress them into a ZIP file.
3.  Share the ZIP archive.

## Modern Alternatives

While shapefiles are still widely used, newer formats offer significant
advantages:

-   File Geodatabase (.gdb)
-   GeoPackage (.gpkg)
-   GeoJSON (.geojson)
-   FlatGeobuf (.fgb)

## Conclusion

A shapefile is not a single file---it is a collection of files working
together as one GIS dataset. Understanding this simple concept helps
prevent data corruption and makes GIS data sharing much more reliable.
