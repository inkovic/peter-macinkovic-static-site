---
templateKey: 'blog-post'
title: 'Is there a difference between link relationships and sameAs microdata?'
image: /img/blog/difference-between-link-relationships-and-sameas-microdata.png
date: 2015-02-09T15:04:10.000Z
emoji: 😕
description: What is the difference between rel="me" or itemprop="sameAs" for establishing authorship of web content? I answer Jason's question on the webmasters stack exchange and the importance of scope.
tags:
  - Structured Data
  - schema.org
  - Stack Exchange
---

I often contribute to StackExchange websites, mainly to the  [Webmasters StackExchange](http://webmasters.stackexchange.com/)  as SEO is the main topic there.

I plan to go over all of my (successful) answers on the Stack Exchange website and dive deeper in my blog.

[Jason Chisel](http://webmasters.stackexchange.com/users/49632/jason-chisel)  asked the  [following question on the Webmasters StackExchange](http://webmasters.stackexchange.com/questions/77009/should-i-use-rel-me-or-itemprop-sameas-when-linking-to-social-networks-like/77013#77013):

> What is the difference between rel="me" or itemprop="sameAs" for establishing authorship of web content?

The source of Jason's confusion comes with the design of the two methods:

-   **rel="me":**  The  [relationship attribute](http://www.w3.org/TR/html401/struct/links.html)  for`<link>`and`<a>`help establish relationships between a hyperlink. For authorship,`rel="me"`,`rel="author"`and`rel="publisher"`can be used to reference external platforms.`rel="me"`is more generic and used as a 'catch-all' for online profiles.
-   **itemprop="sameAs" href="example.com/yourprofile":**  The itemprop attribute helps contextualise markup to provide context and semantic meaning in markup. The`sameAs`itemprop can be used in multiple  _itemtypes_, by default in  [WebPage](http://schema.org/WebPage)  but best utilised within the  [Organization](http://schema.org/Organization)  itemtype.

It doesn't help Jason's case when there is a little double-speak for industry best practices stemming  [from this answer](http://webmasters.stackexchange.com/questions/18956/rel-author-and-rel-me-in-wordpress):

> rel=”me” Defines The Person
> 
> While the rel=”author” attribute is new markup, rel=”me” is not.  **In fact, for a number of years now Google has encouraged its use. It should be used in links that point from a social networking profile back to your website and vice-versa.**  This tells Google that the same name and bio information on separate websites is actually the same person.

All the while, the official Google Developer Help Documentation discusses how to  [specify your social profiles to Google](https://developers.google.com/structured-data/customize/social-profiles):

> **Use markup on your official website to add your social profile information to the Google Knowledge panel in some searches.**  Knowledge panels can prominently display your social profile information. [...] **Note:** _As long as you use the same schema.org types as the example, you can also use microdata or RDFa markup formats instead of JSON-LD. For example, in microdata, visible links can be marked up by in a structured data SPAN, like this:_

So, you can see where Jason can get a little reserved about which way to go.

My answer to Jason was very simple: Why not have both?

You can reference  [Schema.org/Organization](http://schema.org/Organization)  to understand what  _sameAs_  is intended for:

> URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Freebase page, or official website. [sameAs, URL, Organization]

However, I was careful to point out that you must  **understand scope**  with Microdata. The  **sameAs**under the  _Organization_  item type refers to a  _corporate identity_.

If you were to include itemprop="sameAs" without declaring an Organization in scope, then the default scope would be for http://schema.org/WebPage.

The sameAs value for  _WebPage_  refers to pages that are similar for that exact page - which would only be 'About Us', 'Our Organisation' type of pages. A blog post, product page or similar pages  **would be inappropriate**  for this.

## Why is scope so complex

The reason why scope is so complex for Microdata lies in the original intent for its conception.

Microdata exists to  _specify_  specific regions on your webpage and  _clarify_  its purpose, intent and meaning.

Take a website like  [Crunchbase](https://www.crunchbase.com/). They often feature external websites and companies listed on their pages - in fact, that is the  _purpose_  of the website.

So how would you tell search engine's that a Facebook link belongs to an external company, not your own, before Microdata existed?

This is extremely problematic especially on list pages where you have multiple entities, extenral links and now way to contextualise this information.

Microdata and Schema was created  _specifically_  for this use case: if your website only contains links to  _your_  properties, then robots could 'do the math' and  _assume_  these properties belong to the  _WebPage_entity - but why make them do the math?

Simplify and clarify the process by utilising scope and Microdata to your website so that you can add precision to your authorship.