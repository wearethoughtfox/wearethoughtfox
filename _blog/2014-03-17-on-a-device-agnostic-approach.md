---
id: 776
title: On a device-agnostic approach
date: 2014-03-17T19:46:47+00:00
author: Rob
layout: blog
guid: http://wearethoughtfox.com/?p=776
permalink: /blog/on-a-device-agnostic-approach/
categories:
  - Blog
tags:
  - icc-alpha
  - mobile
  - web
---
## 2010
Only a few years ago, most people went online using a desktop or a laptop.

![A desktop computer](/images/blog-device-agnostic-1.jpg)

[CC Image courtesy of Rakesh Ashok on Flickr](https://flic.kr/p/7B2pRA)

## Today and beyond
Now people use a myriad of devices over a varying connections summed up as “[hostile browsers, tiny screens, slow connection speeds, touch inputs](http://trentwalton.com/2014/03/10/device-agnostic/)”

![Many mobile devices](/images/blog-device-agnostic-2.jpg)

[CC Image courtesy of Jeremy Keith on Flickr](https://flic.kr/p/kiYKaK)

## 2017
Tablets and smartphones will make up most of the sales of connected devices

![Graph of mobile device growth](/images/blog-device-agnostic-3.jpg)

Image from [IDC](http://www.idc.com/getdoc.jsp?containerId=prUS24314413)

## A mobile world
Mobile is often the only point of internet access in some parts of the world

![Map of mobile share of web views](/images/blog-device-agnostic-4.jpg)

Image from [We Are Social](http://wearesocial.net/blog/2014/01/social-digital-mobile-worldwide-2014/)

## Are we building a digital product for yesterday or tomorrow?

![Projected mobile device growth](/images/blog-device-agnostic-5.jpg)

See [this post](http://www.lukew.com/ff/entry.asp?1841) for lots more stats

## Traditional approach

Design and build desktop site first &#8211; consider this the “complete version”. Then consider a mobile site &#8211; slimmed down version of desktop version &#8211; either as separate site or using media queries &#8211; “responsive design”

  * Bad for users &#8211; Penalise them for visiting site on a smaller device when most people want full access.
  * Painful to maintain &#8211; No easy or coherent evolution of design

## What if we turn it around?

Make the product:

  * Work well at many different screen sizes
  * Built for speed and performance on many devices / connection speeds
  * Work for touch screen and even “no-screen” (accessibility/APIs etc)
  * Promote content over navigation

## Mobile first is a bit misleading

It&#8217;s really about starting to design from the content outwards.

## Device agnostic

Content, presentation, interface &#8211; Reduce to the minimum amount necessary

  * Forces you to focus and prioritize by embracing constraints
  * Ensures you don’t have to maintain separate sites
  * Serves your users in countries with poor connections by default

Different devices and poor connections are not after-thoughts: they are at the heart of the product.

Progressively enhance for particular devices only when evidence of demand exists.

Data structures and editorial / content decisions are the biggest issues. Technical and design issues are secondary.

If we think about the content first, working on any device, all other considerations slot into place.

## Hierarchy of content needs

Some ways of prioritising and thinking about content in a device-agnostic project:

  1. Access
  2. Legibility
  3. Ease of comprehension
  4. Relevance &#8211; to the need, moment, interests, behaviour, and personal history
  5. Everything else: Later access, ease of reference, etc</ul>

See [this post on responsive web publishing](http://www.aqworks.com/en/blog/2011/09/05/how-responsive-web-design-becomes-responsive-web-publishing/) for more details.
