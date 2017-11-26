---
id: 776
title: On a device-agnostic approach
date: 2014-03-17T19:46:47+00:00
author: Rob
layout: post
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

<img src="http://wearethoughtfox.com/site/wp-content/uploads/2015/12/device-agnostic-1.jpg" alt="Desktop computer" class="alignleft size-full wp-image-786" srcset="http://wearethoughtfox.com/site/wp-content/uploads/2015/12/device-agnostic-1.jpg 640w, http://wearethoughtfox.com/site/wp-content/uploads/2015/12/device-agnostic-1-580x435.jpg 580w, http://wearethoughtfox.com/site/wp-content/uploads/2015/12/device-agnostic-1-160x120.jpg 160w, http://wearethoughtfox.com/site/wp-content/uploads/2015/12/device-agnostic-1-600x450.jpg 600w, http://wearethoughtfox.com/site/wp-content/uploads/2015/12/device-agnostic-1-400x300.jpg 400w" sizes="(max-width: 640px) 100vw, 640px" />
  
[CC Image courtesy of Rakesh Ashok on Flickr](https://flic.kr/p/7B2pRA)

## Today and beyond

Now people use a myriad of devices over a varying connections summed up as “[hostile browsers, tiny screens, slow connection speeds, touch inputs](http://trentwalton.com/2014/03/10/device-agnostic/)”

<img src="http://wearethoughtfox.com/site/wp-content/uploads/2015/12/device-agnostic-2.jpg" alt="Device lab" class="alignleft size-full wp-image-780 padding-top" srcset="http://wearethoughtfox.com/site/wp-content/uploads/2015/12/device-agnostic-2.jpg 640w, http://wearethoughtfox.com/site/wp-content/uploads/2015/12/device-agnostic-2-580x435.jpg 580w, http://wearethoughtfox.com/site/wp-content/uploads/2015/12/device-agnostic-2-160x120.jpg 160w, http://wearethoughtfox.com/site/wp-content/uploads/2015/12/device-agnostic-2-600x450.jpg 600w, http://wearethoughtfox.com/site/wp-content/uploads/2015/12/device-agnostic-2-400x300.jpg 400w" sizes="(max-width: 640px) 100vw, 640px" />

[CC Image courtesy of Jeremy Keith on Flickr](https://flic.kr/p/kiYKaK)

## 2017

Tablets and smartphones will make up most of the sales of connected devices

<img src="http://wearethoughtfox.com/site/wp-content/uploads/2015/12/device-agnostic-3.jpg" alt="Worldwide connected device forecast" class="alignleft size-full wp-image-794" srcset="http://wearethoughtfox.com/site/wp-content/uploads/2015/12/device-agnostic-3.jpg 469w, http://wearethoughtfox.com/site/wp-content/uploads/2015/12/device-agnostic-3-160x98.jpg 160w, http://wearethoughtfox.com/site/wp-content/uploads/2015/12/device-agnostic-3-400x244.jpg 400w" sizes="(max-width: 469px) 100vw, 469px" />

Image from [IDC](http://www.idc.com/getdoc.jsp?containerId=prUS24314413)

## A mobile world

Mobile is often the only point of internet access in some parts of the world

<img src="http://wearethoughtfox.com/site/wp-content/uploads/2015/12/device-agnostic-4.jpg" alt="Mobile&#039;s share of webviews around the world" class="alignleft size-full wp-image-792" srcset="http://wearethoughtfox.com/site/wp-content/uploads/2015/12/device-agnostic-4.jpg 728w, http://wearethoughtfox.com/site/wp-content/uploads/2015/12/device-agnostic-4-580x435.jpg 580w, http://wearethoughtfox.com/site/wp-content/uploads/2015/12/device-agnostic-4-160x120.jpg 160w, http://wearethoughtfox.com/site/wp-content/uploads/2015/12/device-agnostic-4-600x450.jpg 600w, http://wearethoughtfox.com/site/wp-content/uploads/2015/12/device-agnostic-4-400x300.jpg 400w" sizes="(max-width: 728px) 100vw, 728px" />

Image from [We Are Social](http://wearesocial.net/blog/2014/01/social-digital-mobile-worldwide-2014/)

## Are we building a digital product for yesterday or tomorrow?

<img src="http://wearethoughtfox.com/site/wp-content/uploads/2015/12/device-agnostic-5.jpg" alt="Monthly active users for mobile and non-mobile" class="alignleft size-full wp-image-797" srcset="http://wearethoughtfox.com/site/wp-content/uploads/2015/12/device-agnostic-5.jpg 505w, http://wearethoughtfox.com/site/wp-content/uploads/2015/12/device-agnostic-5-160x120.jpg 160w, http://wearethoughtfox.com/site/wp-content/uploads/2015/12/device-agnostic-5-400x299.jpg 400w" sizes="(max-width: 505px) 100vw, 505px" />

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