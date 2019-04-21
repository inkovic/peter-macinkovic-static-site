---
templateKey: 'blog-post'
title: 'Seeing the full conversion funnel in Google Analytics'
image: /img/blog/see-full-conversion-funnel-in-google-analytics.png
date: 2015-02-10T15:04:10.000Z
emoji: 📊
description: I often contribute to StackExchange websites, mainly to the Webmasters StackExchange as SEO is the main topic there. I plan to go over all of my (successful) answers on the Stack Exchange website and dive deeper in my blog.
tags:
  - Google Analytics
  - Stack Exchange
---

I often contribute to StackExchange websites, mainly to the  [Webmasters StackExchange](http://webmasters.stackexchange.com/)  as SEO is the main topic there.

I plan to go over all of my (successful) answers on the Stack Exchange website and dive deeper in my blog.

[Jimmy Hooker](http://jimmyhooker.com/)  asked the  [following question on the Webmasters StackExchange](http://webmasters.stackexchange.com/questions/77054/how-to-see-the-full-conversion-funnel-of-a-customer/77059#77059):

> How to see the full conversion funnel of a customer?

Jimmy isn't completely satisfied with his current Google Analytics set up in validating whether or not campaigns have been successful.

He wants a more  _granular_  view of Google Analytics for paid campaigns, or other similar campaigns, to see if these campaign lead to a conversion.

He already has  [goal conversion](https://support.google.com/analytics/answer/1032415?hl=en)  set up as well as  [event tracking](https://support.google.com/analytics/answer/1033068?hl=en)  but Jimmy desires details on an even detailed level - on a customer-by-customer basis if need be.

## Segmented data. The broad way. The easy way.

[Segments](https://support.google.com/analytics/answer/3123951?hl=en)  in Google Analytics is a good stopping-point between an Analytics amateur and an analytics pro.

Segments allow you to separate 'patterns' in your analytics so you can have a more granular look at your data.

For what Jimmy would want to do he would simply have to segment 'Paid Users' in order to observe analytic behaviour for paid users - across multiple sessions.

Segments are great at the user level for building effective remarketing lists. For example, segmented users you have visited your`/contact`page but have  _not_  submitted your contact form are prime targets for a remarketing campaign to recapture these lost leads.

## Attribution Modeling. The precise way. The hard way.

Segmenting for 'Paid Traffic' is great for a broad overview for Jimmy's problem, however the real useful data comes into play with  [attribution modeling](https://support.google.com/analytics/answer/1662518?hl=en).

This is where you can track first interaction/last interaction to see if Paid traffic leads to users who return to your website and convert later, or if it's good at bringing people back who failed to convert the first time.

Attribution modelling helps fight the bias of the 'Last Attribution' model getting all the credit for a goal conversion - what kind of insights do you get from a goal if the traffic source is direct?

In all likelihood this is a repeat visitor who has sold themselves after returning to the website.

Here is a comparison for he different attribution models:

-   **Last Interaction:**  The default model, the last touch point of a customer. This model often introduces a lack of insights, especially with direct traffic into just  _what_  lead a user to complete a goal.
-   **Last Non-Direct Click:**  A simple model that filters out direct traffic as a source. Can help what was the  _selling point_  for a user prior to conversion.
-   **Last Adwords Click:**  A variation on the Last Interaction model specifically focused on Adwords campaigns. A section of Adwords customers convert from the 2nd - 6th campaign click, especially within the B2B space, so this would be great to see the 'winning' Adwords campaign that leads to a purchasing decision.
-   **First Interaction Model:**  The first attribution model gives full credit to the first touch point for a customer - i.e. Adwords Campaign. This is useful if you want to identify which technique is effective in bringing new users, even if it doesn't necessarily lead to an immediate sale.
-   **Linear Model:**  The linear model provides an equal reward to each step of the conversion path. This is a good model when trying to identify the 'typical' conversion for users when forming your personas.
-   **Time Decay:**  The time decay model provides greater weight to interactions closer to the conversion. When a user is in a purchasing mind set, they may have multiple touch points with your website prior to actually pulling the trigger.
-   **Position Based Model:**  The position based attribution model provides credit to the first and last interactions, whilst evenly distributing the middle interactions. This model is great to value what brought a customer to the website and what converted them.

## Further Granularity

One thing that Jimmy wanted was absolute granularity on a user-by-user level.

To achieve this, a clever manipulation of setting your goals by setting your  _goal url as a query_  would be the best way to achieve this.

For example having goals end with`/contact/thank-you?id=222`instead of`contact/thank-you`allows an extra level of flexibility in segmenting your Google Analytics data.

This is great if you are keeping track ideal customers separately in your CRM and you want to look them up to see what patterns they have i.e. returned to your website within a week after purchase.

For your goal, changing it to`starts with`has way more insights for isolated analytical observation than an  _exact url_  for goals.

This kind of granular observation for individual conversions would be ideal for people like Jimmy wanting to observe behaviour and making further design decision based on actionable data.