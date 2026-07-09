# GIS Tip #5: WGS84 Is Not Always the Best Choice

**Estimated reading time: ~6 minutes**

![GIS Tip](#5.png)

## Introduction

One of the most common misconceptions in GIS is that **WGS84 should be used for every project**. Because GPS devices, Google Maps, and many web mapping platforms use WGS84, many GIS beginners assume it is also the best coordinate system for measurements, analysis, and mapping.

The truth is different.

WGS84 is an excellent **geographic coordinate system**, but it is not designed for every GIS task. Choosing the correct coordinate system can significantly improve the accuracy of your analysis.

---

## What is WGS84?

WGS84 (World Geodetic System 1984) is the global geographic coordinate system used by GPS satellites and most online mapping platforms.

Locations are stored using:

- Latitude
- Longitude

The unit is **degrees (°)** rather than meters.

Because it is worldwide, WGS84 makes sharing geographic data simple and consistent.

Typical uses include:

- GPS navigation
- Google Maps
- ArcGIS Online
- OpenStreetMap
- Data exchange between organizations

---

## Why Isn't WGS84 Always the Best?

Degrees are angular units—not distance units.

The distance represented by one degree changes depending on where you are on Earth. As a result:

- Distance measurements become less reliable.
- Area calculations can contain noticeable errors.
- Buffer sizes may not represent the intended real-world distance.
- Spatial analysis becomes less accurate.

For visualization, these limitations are usually acceptable. For engineering or scientific work, they are not.

---

## Understanding Projected Coordinate Systems

A projected coordinate system transforms the curved Earth onto a flat surface.

Instead of degrees, coordinates are stored in **meters (or feet)**.

Examples include:

- UTM
- State Plane
- National Grid systems

These systems are designed for local or regional areas and preserve distance, area, or shape much better than geographic coordinates.

---

## When Should You Use WGS84?

WGS84 is an excellent choice when your goal is:

- Displaying maps
- Publishing web maps
- GPS data collection
- Sharing datasets
- Mobile applications

In these situations, global compatibility is more important than measurement precision.

---

## When Should You Use a Projected Coordinate System?

Use a projected system whenever you need to:

- Measure distance
- Calculate area
- Perform buffering
- Conduct overlay analysis
- Model spatial relationships
- Produce engineering-quality outputs

Since projected systems use meters, the calculations are much closer to real-world values.

---

## A Practical Example

Imagine measuring a road that is approximately 5 km long.

If the layer remains in WGS84, the software performs calculations using degrees, which can introduce inaccuracies.

After projecting the same dataset into an appropriate UTM zone, the road length is measured directly in meters, producing more reliable results.

The same principle applies to parcel areas, forest statistics, flood modelling, and infrastructure planning.

---

## Common Beginner Mistakes

Many GIS users unknowingly:

- Buffer data while still in WGS84.
- Calculate parcel area in square degrees.
- Measure road lengths using latitude and longitude.
- Assume Google Maps coordinates are suitable for every GIS workflow.

These mistakes often produce technically incorrect results.

---

## A Simple Rule to Remember

A useful workflow is:

> **Display in WGS84. Analyze in a projected coordinate system.**

Collect GPS data in WGS84 if necessary, then project the data into the appropriate local coordinate system before performing measurements or spatial analysis.

---

## Conclusion

There is no universally "best" coordinate system.

The best coordinate system depends entirely on your objective.

If your work focuses on visualization and sharing, WGS84 is an excellent choice.

If your work requires accurate measurements, engineering, environmental modelling, cadastral mapping, or spatial analysis, a projected coordinate system is almost always the better option.

Understanding this distinction is one of the first steps toward becoming a professional GIS practitioner.
