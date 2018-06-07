---
id: 807
title: 'Update — Hyperlocal chat project'
date: 2016-03-11T14:48:40+00:00
author: Rob
excerpt: 'The latest about our chatbot project for hyperlocal news and information. '
layout: blog
guid: http://wearethoughtfox.com/?p=807
permalink: /blog/update-hyperlocal-chat-project/
image: /site/wp-content/uploads/2016/03/arndalepostbox-1-160x109.jpg
categories:
  - Blog
tags:
  - citybot
  - conversational-ui
  - media
---
We’ve been working on a [conversational UI for news and information](http://wearethoughtfox.com/blog/conversational-ui-part-1/) with [Trinity Mirror Regionals](http://manchestereveningnews.co.uk/). The idea for a product has emerged from that work. Here’s an attempt to show where we are up to at the moment.

## Introduction
We are creating social objects from a neighbourhood’s existing infrastructure which citizens can converse via SMS, Twitter, Telegram and other messaging services to “get in the know” about a specific place.

![Screenshot of the Arndale Postbox Twitter account](/images/blog-arndalepostbox.jpg)

Our approach goes beyond conventional approaches to open data such as data visualisation, maps, etc and towards humanised suggestions that prompt and guide individual action. The social object speaks in the first person, answering questions as part of a dialogue in a different context for journalism, ie next to friends and other services in SMS and chat apps.

## Questions

The main questions are:

  1. How can we make the city more searchable and query-able for citizens to help them make the best decisions in their day-to-day lives?
  2. How can a news organisation become part of the fabric of the city?
  3. How can we build a service with a high standard of ethics and integrity, especially with regard to personal data.
  4. How can we make money?

The two key challenges are acquisition and retention. Hyperlocal news is helpful because it gives a reason to follow and excuse for the service to remind you it exists once every day or two. The more fun features can be built on top of that core interaction.

The other questions are around the nature of the objects — single or multiple use, spoke only when spoken to or listening and push out? And how do we make people aware of the services available? This is where being embedded in a city will help — stickers, posters, etc — and having a media company on board — adverts, promos, etc.

## Status

### ArndalePostbox

A general-purpose Twitter bot that responds to a variety of commands. The main problem here is how to let people know about the range of possible commands available.

  * <https://twitter.com/arndalepostbox> A Twitter bot that responds to questions about  &#8216;rain&#8217;, &#8216;latest&#8217;, &#8216;popular&#8217;, &#8216;burger&#8217;, &#8216;vote&#8217;, &#8216;safe&#8217;, &#8216;random crime&#8217;.
  * <https://github.com/robertocarroll/chatui-twitter/>
  * The issues are mostly in the original repo: <https://github.com/robertocarroll/chatui/issues>
  * The big issue for me is <https://github.com/robertocarroll/chatui/issues/36> How to make Hubot understand threads and context. A user can reply and the conversation can carry on.

### PiccadillyWall
A single-purpose Twitter bot that tells you about where to get a burger in the city centre.

  * <https://twitter.com/piccadillywall> A Twitter bot around service discovery specifically burger restaurants. Responds to questions around &#8216;burger nearest&#8217;, &#8216;burger cheapest&#8217;, &#8216;burger best&#8217;, &#8216;burger cleanest&#8217;.
  * <https://github.com/robertocarroll/chatuitwitterburger>
  * <https://github.com/robertocarroll/chatuitwitterburger/blob/master/scripts/burger.coffee>
  * The big issue here for me is https://github.com/robertocarroll/chatuitwitterburger/issues/1 Hubot needs a trigger word followed by a modifier. How can we get it to understand more natural questions?

## Details

Chat apps such as WhatsApp, Telegram, WeChat and Viber are becoming more popular than social networks such as Twitter, LinkedIn, Facebook, and Instagram. News organisations need to work out ways to deliver valuable, important, original journalism through this new medium. But it’s not just about going where people are. At the heart of our product is the idea of journalism as a conversation. Rather than simply driving traffic to a news organisation’s website, we aim to provide as much information as possible as part of a conversation inside the messaging app. That means focusing on the important local questions people want news organisations to answer to make their lives better. It also means getting beyond the traditional article as the atomic unit of news towards structured data and dialogue.

### Editorial

Designing a trusted automated companion with an appropriate personality to deliver news and information will be a big challenge but also a great innovation if successful.

We will focus on local news and information which would be interesting and useful to people living and working within the neighbourhood of the social object. The most obvious questions are around daily information (weather, transport, etc), hyperlocal news, service discovery (restaurants, cinema, etc) and civic information (crime, schools, planning applications, etc). We’ve started exploring these areas for the initial prototypes by answering the direct questions of citizens.

Another area we are starting to explore is the social object as a nexus for local news and information pulling in local tweets, images, mentions, etc, analysing them and publishing a summary based on that information. For example, we are collecting all tweets with “I feel” or “I am feeling” within the area of the ArndalePostbox, doing sentiment analysis and considering how to use this information. In this way, the social object becomes a witness to history, building up a unique archive of media around a particular area which would otherwise be lost behind rate-limited APIs.

Another area to explore is how we can encourage sharing and encounters in the area. How can we catalyse relationships between people sharing the same physical space and time and then get out the way? The conversational medium makes it natural for people to respond. We’d like to design and develop a service that provides ways for citizens to talk about their neighbourhood and perhaps even collaborate on complex decisions such a planning applications without leaving their messaging app of choice.

### Technical

The main technical innovation and challenge is to build a coherent, accessible and consistent service on top of existing services and without expensive hardware. There isn’t an app, user logins or even much of a website — everything runs on top of other services through a conversational interface. The chat engine itself is quite primitive at the moment. So far we’ve used the tone and structure of the conversation to develop the experience. It doesn’t involve complex natural language processing nor does it detect and account for context changes in user inputs. We are starting to develop an approach to handling errors and null responses appropriately, preferring to be “as smart as a puppy” rather than trying to respond intelligently to everything. These are points we’d like to explore and develop further, perhaps allowing users to have extended conversations, as well as customise the service to suit their needs over time.

Another innovation will be to create the illusion of a connected object without the usual dependence on electricity, radio, etc. By adopting existing objects in the city, we can bind the experience to a physical object with a location, providing users with a mental model and fixed location for the interaction. We can get many of the benefits of a connected object without the associated issues and expense.

## The product

The product will likely consist of:

1. Conversations answering questions people have about the city as well as ways to gather and collate information from people
2. A chat system to manage these conversations, including ways to see conversations and monitor metrics such as number of conversations, unique users, etc.
3. Adapters for various messenger apps
4. A collection and analysis system to gather data such as local tweets, images, etc.
5. A push notification system to send out this information to users
6. A way for users to personalise what they receive
7. Ways to make people aware of the service and what it can do, e.g. posters in the city, adverts in the paper, etc.

## Similar projects

Here‘s a [good summary of chat UIs](https://medium.com/@tedlivingston/the-future-of-chat-isn-t-ai-b07f65bc252).

### Chat UI

  1. <https://angel.co/assist>
  2. <https://digit.co/>
  3. <https://getpurple.io/>
  4. <http://www.brianlovin.com/design-details/quartz-for-ios>
  5. <http://www.hellolamppost.co.uk/>

### Hyperlocal

  1. <http://maps.latimes.com/neighborhoods/>
  2. <http://berglondon.com/projects/schooloscope/>
  3. <https://www.everyblock.com/>
  4. <https://lasttramfrom.co.uk/>

### Service discovery and information in the city
Previous approaches to providing physical information points in a city revolve around kiosks with touch screens. These are expensive and are proven to be under-utilised. If you create a mobile app for local news and information, a user has download it, limiting the audience and keeping the entire experience tied to the screen. We prefer to build on top of existing infrastructure and technologies, stitching together existing services with established communities to create valuable new services in the city.
