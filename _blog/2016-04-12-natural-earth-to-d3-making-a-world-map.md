---
author: roberto
comments: false
date: "2016-04-12"
layout: blog
slug: "natural-earth-to-d3-making-a-world-map"
title: "Natural Earth to D3 — Making a world map"
categories:
  - Blog
tags:
  - javascript
  - learning
  - D3
  - maps
---

Here’s a few notes on making a world map using D3 based on data from Natural Earth. A lot is based on [Let’s Make a Map](https://bost.ocks.org/mike/map/) by Mike Bostock, but I’ve adapted it and filled in the gaps for my situation.

## Get the data from Natural Earth
Here’s the [main download page for Natural Earth](http://www.naturalearthdata.com/downloads/). Depending on the level of detail you can choose from:

* 110m is the least detailed and the smallest file size.
* 50m is in the middle — quite detailed and OK file size.
* 10m is the most detailed and the largest file size. It’s “suitable for making zoomed-in maps of countries and regions.”

I went for 50m scale. Since I needed countries, I chose [“Admin 0 – Countries”](http://www.naturalearthdata.com/http//www.naturalearthdata.com/download/50m/cultural/ne_50m_admin_0_countries.zip). In case you’re wondering how this data has evolved you can go through the [changelog](https://github.com/nvkelso/natural-earth-vector/blob/master/CHANGELOG) and see what’s been added and changed.

## Install the tools you need
Mike Bostock’s tutorial has great instructions on [installing gdal and topojson](https://bost.ocks.org/mike/map/#installing-tools) for use on the command line. After following those instructions you should be able to type:
<pre>
  <code>
    which ogr2ogr
    which topojson
  </code>
</pre>
in your terminal and it will print out the path to those programs. If not, start searching on Stack Overflow for your particular error messages.

## Convert to shapefiles to geojson
Natural Earth data comes as shapefiles, which we can convert to geojson using ogr2ogr. Unzip the Natural Earth files you downloaded and cd into that folder in your terminal window. Then paste this into your window:
<pre>
<code>
ogr2ogr \
  -f GeoJSON \
  world.json \
  ne_50m_admin_0_countries/ne_50m_admin_0_countries.shp
</code>
</pre>
We’re taking the shapefiles from the folder ne_50m_admin_0_countries and converting them to geojson and saving it as world.json. You can also do things like filter by [ISO 3166-1 alpha-3 country codes](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) if you only want certain countries, e.g.

<pre>
<code>
ogr2ogr \
  -f GeoJSON \
 -where “ADM0_A3 IN (‘GBR’, ‘IRL’)” \
  world.json \
  ne_50m_admin_0_countries/ne_50m_admin_0_countries.shp
</code>
</pre>
but we want all the countries in the world.

## Convert to geojson to topojson
geojson is a great format. You can read it and edit it quite easily as well as cut and paste stuff around. You can also use something like [geojson.io](http://geojson.io/) to display it and edit it. But it makes big files. My world.json is 4.6MB. So we’ll convert it to a format called topojson and then you can convert it back to geojson when you load the data in your map. Here's the command:

<pre>
<code>
topojson \
  -o world-topo.json \
  --id-property iso_a3 \
  —-properties name \
  — \
  world.json
</code>

This one-liner seemed to work better the last time I tried.

<code>
  topojson --id-property iso_a3 -p name -o world-topo.json world.json
</code>

</pre>

We’re taking the geojson file we made (world.json) and turning it into topojson. [Topojson removes all properties by default](https://github.com/mbostock/topojson/wiki/Command-Line-Reference#properties), so it will strip out all the stuff from your geojson unless you tell it not to. Here we’re making the id the ISO 3166-1 alpha-3 country code and we’re keeping the name property. After this conversion, my 4.6MB world.json has come down to 604KB in world-topo.json.

When you load the file make sure the name specified in your JavaScript matches the name at the top of the topojson, e.g. countries.

That’s it! You should now be able to use the world-topo.json in your D3 map. As I said, this post is based on [Let’s Make a Map](https://bost.ocks.org/mike/map/) by Mike Bostock, but I made these notes to explain the process I went through to create a world map.
