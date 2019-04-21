---
templateKey: 'blog-post'
title: 'Google will not penalise you for duplicate GitHub pages'
image: /img/blog/google-wont-penalise-you-duplicate-github-pages.png
date: 2015-02-06T15:04:10.000Z
emoji: 😕
description: Will Google penalize me for duplicate content on GitHub from my knowledge base? I explain the history of duplicate content and why you shouldn't worry.
tags:
  - Duplicate Content
  - Google Penalties
  - Stack Exchange
---

I often contribute to StackExchange websites, mainly to the  [Webmasters StackExchange](http://webmasters.stackexchange.com/)  as SEO is the main topic there.

I plan to go over all of my (successful) answers on the Stack Exchange website and dive deeper in my blog.

[Walbuc](http://webmasters.stackexchange.com/users/49530/walbuc)  asked the  [following question on the Webmasters StackExchange](http://webmasters.stackexchange.com/questions/76924/will-google-penalize-me-for-duplicate-content-on-github-from-my-knowledge-base/76927#76927):

> Will Google penalize me for duplicate content on GitHub from my knowledge base?

The premise of this question is using GitHub as a 'clone' of documentation would incur the dreaded 'duplicate penalty' from Search Engines like Google.

## It is difficult to get penalised for Duplicate Content. VERY DIFFICULT

There are often two major penalties that may be attributed to Google specifically:

-   **Sandboxing:**  A sandboxed website is where your website gets 'pushed back' in search engine rankings - this is very common for new websites with a surge in backlinks, websites with unnatural backlink profiles and websites that feature large scale unoriginal content. This is the most common penalty Google delviers and should be observable from the Google Webmasters tool.
-   **Deindexing:**  A deindexed website is where your website is completely removed from the search engine's index - meaning it will not show up for any search query. This is the SEO equivalent of the death penalty. This type of penalty occurs mainly for paid link schemes, fraud, private blog networks, spam networks and scraping content without a license.

Having duplicate content, especially one which  _you_  are the source, is  **not**  grounds for a penalty in a vacuum.

Duplicate content may 'de-value' your content and it will have less weight than it would organically but it's Google's job  **to identify the original content**  whilst devaluing other pages.

Setting a canonical link on your website is your way of telling search engines that  **this url is the original source**  of content.

`<link rel="canonical" href="http://example.com/document">`

As for external web-pages where you cannot control the`<link>`attributes in the header, search engines such as Google will have to  **infer**  who the original publisher is.

This inference from search engines - doing the 'math' as it were - can be based on many factors:

-   **Date of Indexing:**  The most common way for Google to infer the original publisher is the date of indexing. The first webpage seen for the exact variation of content is often believed to be original. This can be dangerous in syndication if you 'jump the gun' and a syndication source beats you to the punch in showing up in Google.
-   **Relevance:**  Being published on a relevant source is also another signal of authority.  [If it looks like a duck](http://en.wikipedia.org/wiki/Duck_test), Google will probably think it is and can make inference based on the publication and content history on whether or not it is the original source.
-   **Site Structure:**  Google isn't stupid - most of the time, anyway. A website much like Github serves a specific purpose - source control.With the advent of  [Github Pages](https://pages.github.com/), it is not unusual for Github to contain  _entirely duplicate pages_  for websites with static source files - often published on generators such as  [Jekyll](http://jekyllrb.com/)  and  [Middleman](https://middlemanapp.com/).

A lot of Github Pages have their source code fully available and indexed on Github so I can confidently infer that Google can do the math on the source content- based on Github's architecture, content patterns etc.

## A word about content syndication

Syndication is a normal part of the web and Google is very intelligent. Look at this example of the content from a Mashable article:

`-site:mashable.com/2015/02/05/whatsapp-testing-voice-calling/ "It's not clear when the feature may be rolled out more widely or when the app's iPhone users will be able to use it."`

As you can see, there are hundreds of verbatim content rips - doesn't harm Mashable whatsoever as the publisher.

Until something like  [rel=syndication](http://indiewebcamp.com/rel-syndication)  is fully accepted into the spec, cases like this are really "Let Google do their job", you can only truly control content of your website.

## Final thoughts on duplicate content

As a final aside, you have to understand why duplicate content penalties exist and who they are targeting.

They were originally formulated to devalue automatic content farms and content scrapers/spinners who were intentionally trying to game the system.

This is  **not**  you.

The modern way Google indexes the web, it's usually the first indexed page that gets the value. (i.e. the first press release shows up, 400 clones are omitted).

Original content should be valued, but duplicate content shouldn't be feared, as long as  _you_  are the one controlling it.

If Google cannot discern this,  _they_  are the ones at fault: they are failing to do their job.