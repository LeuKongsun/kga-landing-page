# DEM, DTM, or DSM? Know the Difference, Use the Right One

*Estimated reading time: ~12 minutes*

## Introduction

Choosing the correct elevation model is one of the most overlooked decisions in GIS, remote sensing, engineering, and environmental analysis. Many GIS beginners—and even experienced practitioners—often use whatever elevation dataset is available without understanding what it actually represents.

This seemingly small mistake can produce completely different analysis results. If your elevation appears too high, your flood model behaves strangely, or your line-of-sight analysis produces unrealistic visibility, the problem may not be your software—it may be the elevation model.

This article explains the three most common elevation models:

- **DEM (Digital Elevation Model)**
- **DTM (Digital Terrain Model)**
- **DSM (Digital Surface Model)**

By the end, you should know exactly when to use each one.

---

# Why elevation models matter

An elevation model is a digital representation of Earth's surface.

However, not every elevation model represents the same surface.

Some represent only the ground.

Others include trees, buildings, bridges, transmission towers, and every object standing above the ground.

Selecting the wrong dataset can significantly affect:

- Flood modelling
- Watershed delineation
- Contour generation
- Engineering design
- Urban planning
- Visibility analysis
- Volume calculation
- Drone mapping

Understanding the differences saves both time and money.

---

# DEM – Digital Elevation Model

## What is a DEM?

A DEM represents the **bare-earth terrain**.

Vegetation, buildings, bridges, vehicles, and other above-ground objects are removed as much as possible.

The resulting surface represents the natural landform.

### Typical contents

- Hills
- Valleys
- Rivers
- Lakes
- Natural slopes

### Best applications

- Terrain analysis
- Hydrology
- Watershed analysis
- Contour generation
- Flood simulation
- Slope and aspect calculation

### Advantages

- Clean representation of terrain
- Suitable for environmental modelling
- Widely available

### Limitations

It does not represent real-world objects that may influence visibility, telecommunications, or urban analysis.

---

# DTM – Digital Terrain Model

## What is a DTM?

A DTM builds upon a DEM by incorporating additional terrain information.

Besides elevation, it may include:

- Breaklines
- Ridge lines
- Stream centerlines
- Cliffs
- Terrain constraints

These features help preserve terrain morphology more accurately.

### Why engineers prefer DTM

Infrastructure projects require terrain features that ordinary DEMs may smooth away.

For roads, canals, dams, pipelines, and grading design, breaklines are extremely valuable because they preserve sharp terrain changes.

### Best applications

- Civil engineering
- Road design
- Land development
- Earthwork calculation
- High-quality terrain visualization

---

# DSM – Digital Surface Model

## What is a DSM?

A DSM represents the **top surface**.

Everything standing above the ground becomes part of the elevation.

Examples include:

- Trees
- Buildings
- Bridges
- Power lines
- Towers
- Other structures

If a tree is 20 m tall, the DSM elevation at that location includes the tree height.

### Best applications

- Line-of-sight analysis
- Telecommunication planning
- Urban planning
- Drone mapping
- Solar potential analysis
- Building height estimation

### Limitations

DSM is generally unsuitable for hydrology because water flows across the ground, not over rooftops or tree canopies.

---

# DEM vs DTM vs DSM

| Feature | DEM | DTM | DSM |
|---|---|---|---|
| Represents | Bare earth | Bare earth + terrain features | Surface including objects |
| Buildings included | No | No | Yes |
| Trees included | No | No | Yes |
| Breaklines | No | Yes | May exist |
| Best for | Environmental analysis | Engineering | Urban & visibility |

---

# Common mistakes

## Flood modelling with DSM

Buildings block water artificially.

Use DEM or DTM instead.

## Contours from DSM

Contours may represent rooftops and tree crowns rather than terrain.

## Engineering using low-quality DEM

Critical terrain breaks may disappear.

DTM is usually preferable.

## Visibility using DEM

Buildings and trees disappear, producing unrealistic visibility.

DSM should be used.

---

# Where do these datasets come from?

Common sources include:

- Airborne LiDAR
- UAV photogrammetry
- Satellite stereo imagery
- National mapping agencies

Modern LiDAR workflows often generate both DEM and DSM from the same point cloud.

---

# Practical workflow

1. Define the analysis objective.
2. Decide whether above-ground objects matter.
3. Select DEM, DTM, or DSM accordingly.
4. Verify resolution, vertical accuracy, and acquisition date.
5. Validate results before final reporting.

---

# Final thoughts

There is no universally "best" elevation model.

The best model is the one that matches your analytical objective.

Remember:

- **DEM** = Bare earth.
- **DTM** = Bare earth plus terrain features.
- **DSM** = Everything visible on the surface.

Choosing correctly leads to more reliable GIS analysis and better professional decisions.
