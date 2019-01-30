---
layout: blog
title: Notes from "Intro to D3"
categories:
  - Blog
tags:
  - javascript
  - learning
---
Having built a few things in D3, I'm going back to the basics to learn it from the ground up. First up is [Intro to D3](http://square.github.io/intro-to-d3/) by Square.

## SVG

I need to learn more about SVG.

> Where HTML has the <div> and <span> tags, SVG has the <g> tag for an arbitrary group. You’ll see <g> a lot in D3 examples. The <path> tag is powerful but complex, it can be used for either lines or arbitrary filled-in shapes depending on the styling.

D3 provides "helpers" for:

* Scales
* Axes
* Data

## Selections

Data binding or "the join" is the heart of D3. Create a selection and use .data() to bind data to the selection.

* Add elements with selection.enter()
* Remove elements selection.exit()
* Transition between things with selection.transition()
