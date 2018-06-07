---
id: 646
title: 'Maps &#8211; Lightening talk at Hacks/Hackers MCR'
date: 2014-12-09T10:25:00+00:00
author: Rob
layout: blog
guid: http://wearethoughtfox.com/?p=646
permalink: /blog/maps-lightening-talk-hackshackers-mcr/
categories:
  - Blog
tags:
  - hackshackers
  - maps
---
I did a quick introduction to digital maps at Hacks/Hackers Manchester in November. Here’s the instructions and links for reference.

## Geocoding

A quick and simple process for getting the latitude and longitude for a column of addresses.

  1. New Google spreadsheet &#8211; Columns: Location, lat, lon
  2. Tools->Script Editor
  3. “Create new project”
  4. “Blank Project”
  5. Paste in this script &#8211; https://gist.github.com/robertocarroll/a819e8b625d73068bc15
  6. Publish->Deploy as Web App
  7. Spreadsheet -> select rows -> Macros-> Geocode Selected Cells Worldwide
  8. Each address should now have co-ordinates

## Export

Geojson is a good format for the data. It is flexible and allows you to add your own data to the structure. It’s quite easy to read, but it can be inefficient with large data sets and polygons (consider Topojson if project can work with modern browsers <IE8)

To export:

1. Tools -> Script Editor
2. “Create new project”
3. “Blank Project”
4. Paste in this script -https://raw.githubusercontent.com/mapbox/geo-googledocs/master/MapBox.js
5. Publish->Deploy as Web App
6. Spreadsheet -> select rows -> Geo -> Export

## Display

  1. Try using http://geojson.io
  2. Cut and paste the geojson data exported above into the text window.
  3. Your points will appear on the map
  4. Table view is good to see and scan your data
  5. Use Github pages &#8211; free hosting and version control. Update the data using http://geojson.io
  6. Lots of ways to customise how the map looks and behaves, eg [Tilemill](http://mapbox.com/tilemill/) (no programming skill required) or [Mapbox JavaScript API](https://www.mapbox.com/mapbox.js/api/v2.1.4/) (you need to know some JavaScript)

## Tutorials

  * [Mapschool, by Tom MacWright](http://mapschool.io/)
  * [Learning Lunch on maps, by Noah Veltman](https://github.com/veltman/learninglunches/tree/master/maps)
  * [Let&#8217;s Make a Map, by Mike Bostock](http://bost.ocks.org/mike/map/)
  * [Tom MacWright&#8217;s Mapmaker&#8217;s Cheatsheet](https://github.com/tmcw/mapmakers-cheatsheet)
  * [When maps shouldn&#8217;t be maps, by Matthew Ericson](http://www.ericson.net/content/2011/10/when-maps-shouldnt-be-maps/)

## Data sources

  * [ONS](http://www.ons.gov.uk/ons/guide-method/geography/products/index.html)
  * [Ordinance Survey](https://www.ordnancesurvey.co.uk/opendatadownload/products.html) or [here](http://parlvid.mysociety.org/os/)
  * [US Census Bureau, for detailed data about the US (mostly shapefiles)](http://www.census.gov/geo/maps-data/data/tiger.html)
  * [Natural Earth, for downloads of basic natural/political boundaries for the entire world](http://www.naturalearthdata.com/)
  * [OpenStreetMap, for detailed, mappable data about almost every place in the world](http://www.openstreetmap.org/)

## Interesting examples

Digital maps tend to follow certain formats, but these examples show different and interesting approaches:

  * [How Big Really](http://berglondon.com/blog/2010/08/17/introducing-bbc-dimensions/)
  * [Prettymaps](http://prettymaps.stamen.com/201008/about/)
  * [Google Faces](http://www.onformative.com/lab/googlefaces/)
  * [Rorschmap](http://rorschmap.com/) [Geoguessr](https://geoguessr.com)
  * [Stonehenge in your city](http://sztanko.github.io/solsticestreets/)
