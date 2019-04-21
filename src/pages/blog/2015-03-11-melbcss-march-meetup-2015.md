---
templateKey: 'blog-post'
title: 'MelbCSS March Meetup, 2015'
image: /img/blog/melbcss-smacss-2015.png
date: 2015-03-11T15:04:10.000Z
emoji: 💻
description: With Melbourne SEO being scheduled for Tuesday night, Wednesday night was freed for my first trip to the Melbourne CSS meetup. Located at the heaquarters of the 99 Designs office, the MelbCSS Meetup was scheduled to kick-off at 6:30pm (the talks actually started around 7pm).
tags:
  - Meetup
  - CSS
---

With Melbourne SEO being scheduled for Tuesday night, Wednesday night was freed for my first trip to the Melbourne CSS meetup.

Located at the heaquarters of the  [99 Designs office](http://99designs.com.au/), the  [MelbCSS Meetup](http://www.meetup.com/MelbCSS/events/219671320/)  was scheduled to kick-off at 6:30pm (the talks actually started around 7pm).

## SMACSS my BEMS up

The first talk of the evening was by  [Myles Eftos](http://myles.eftos.id.au/)  ([@madpilot](https://twitter.com/madpilot)) from  [RedBubble](http://www.redbubble.com/)  wonderfully titled "SMACSS my BEMS up" - about coupling HTML elements and class names using  [SMACSS](https://smacss.com/)  and  [BEM](https://bem.info/).

Myles talks about the process of redesigning the RedBubble website, dealing with over  _eight_  years of legacy code.

Naturally, they decided it was better to start off from scratch.

### Goals

The key goals for the new website redesign were:

-   more discoverable code
-   more consistent of code
-   faster developer workflow

Having an easy to manage code base with a consistent, reinforced style-guide and best practices can help alleviate inefficiencies in the development process.

### Investigation of Libraries and establishing ground rules

Myles tested a variety of libraries and rebuilt the  _same product page_  three or four times.

This is a low-cost, low-risk process to help avoid 'betting on the wrong horse' with a cumbersome external library that might not quote  _gel_  with your development team.

RedBubble eventually settled on  [Foundation](http://foundation.zurb.com/)  from Zurb as the Framework to power their new design.

Bootstrap was also another framework to be considered but it seemed to bloated with features RedBubble didn't need.

**Discoverable and Consistent Code**

Using SMACSS as a development mantra helps allow the front-end code to be broken up in a more logical and manageable manner.

By using a SMACCS and BEM workflow (which Myles describes BEM as a really opinionated module) RedBubble can work towards achieving their initial goal of a codebase that is more discoverable, more consistent and creates a faster development workflow.

**Hard limit of 3 CSS selectors**

Limiting CSS selectors to three helps with maintaining more manageable front-end codebase as well as ensure a semantic use of selectors are used within the markup.

Ideally only  **one css selector**  should be used per element, with the hard limit of three only to be used in edge use-case situations that require multiple classes.

**no IDs - ever**

To avoid confusion within the front end development environment IDs are never to be used for HTML elements.

This helps keep the styling consistent by focusing only on the class syntax and keeps the markup clean.

**One CSS file per block**

Keeping the codebase nice and segmented, each  _Block_  would require only one (S)CSS file.

This is a no brainer in keeping your working environment small and contextual - helping with code findability in large team projects.

**AMCSS**

Using the Attribute Modules technique ([AMCSS](http://amcss.github.io/)) is an effective way to apply styles via data-attributes.

This help removes unnecessary classes in the markup, thereby making it more human readable, and also organises styles in a more logical, meaningful manner.

### Key Takeaways

Naming is hard.

Almost anyone involved in the software development field has had debates and held preferences for particular semantic naming conventions.

These debates often get very heated, even when it is ostensibly about nothing important.

Using rich, meaningful naming conventions help improve the clarity of the codebase whilst shorter names introduces the risk of uncertainty, especially within the team development environment.

Overall I enjoyed Myle's presentation, but I wanted him to elaborate more on  _why_  he originaly formulated the project goals the way he did.

**EDIT: Miles has provided answers via Twitter which are now embedded below.**

I could  _infer_  why improving code discovery, consistency and improving the development workflow were desired from an eight-year old legacy website but I had hoped he would illustrate these pain points from a personal perspective.

_Why_  was it hard to work on the pre-existing codebase?

_How_  has poor naming conventions cost the RedBubble website in the past?

_What_  was it like integrating strict SMACCS/BEM conventions to a team who already have fully formed habits?

These were things I was hoping for from Myles to help set the scene and illustrate their pain points.

What caused the sudden desire to search for a solution?

Why now and why not last year or why not next year?

## How to encourage your boss to respond

The next presentation was an absolute delight.

Peter Wilson ([@pwcc](http://twitter.com/pwcc)) began his presentation with candour and humour - with multiple slides with increasing "blah blah blahs" as he gave his personal introduction and job title.

Peter works in the corporate space, in which business-speak like "Cost/Benefits Analysis", "ROI" and bureaucratic command-chains reign supreme.

> My name is Peter. I make boring software for a living

In order to communicate the business case of a responsive web design to your corporate overloads, Peter outlines a five-step process for a successful pitch:

-   planning
-   proposal
-   pitching
-   demo
-   build it

### Planning

**Use the right language**

Using the right vernacular for justify the business case for your proposal is key in communicating the value of responsive web design.

Words like "Business Case", "Cost/Benefits", "Use Case" and "ROI" are really foundational in preparing a serious business discussion in a field that supervisors and managers are unfamiliar with.

**Case Studies**

Using Case Studies can help form the narrative of success during a pitch in which clear, desirable goals can be identified from previous successes in other industries.

Peter described using  [Barneys](http://www.luxurydaily.com/barneys-ramps-up-digital-efforts-with-new-web-site/)  as an successful case study example to showcase the business benefits of a responsive website design.

**Form a perspective and communicate value**

Using  _Design_  and  _Development_  as a means to an end is the perspective you should take when pitching the case for responsive design.

Peter also discussed communicating the Pros and Cons of a responsive website design project in a fair, objective manner to help simplify the risks and rewards of the project.

Using Project Cost vs Average Sale Value is a good way to provide a dichotomy in costs / benefits analysis in justifying the business case for a responsive web design project.

Planning for  _all_  of these steps is key for preparing for your pitch.

### Proposal

You need to create a 'hook' for your proposal and communicate it as a narrative.

People love stories.

By effectively telling the story of a successful responsive website you can help make the decision making process easier.

**Recruit Allies within the company**

Share your unfinished proposal document with colleagues within the company.

These colleagues can provide valuable feedback so you can answer the 'right' questions within the process.

An additional benefit of sharing the document: people talk about it.

Internal discussion informally about the document helps build familiarity and awareness ahead of the formal demonstration.

Do not be afraid to share the document to the boss: Use the unfinished proposal document as a recruiting tool so that you may form strategic allies to support your cause.

> A rumour will build curiosity, a rumour will build anticipation.

### Pitch

Practice your presentation ahead of time, repeatedly, to ensure you are confident and alleviate any needs from your audience during your pitch.

Presenter notes allow you to be human.

Keeping to your key points helps prevent 'yak shaving', talking about things that may be interesting to you - but not so much your audience.

Being responsive to audience questions and feedback is an additional benefit to well organised speaker notes.

You can help make the audience feel comfortable in your pitch whilst avoiding being derailed by a tangent that was urgent to answer, but not important.

### Demonstration

A live-demonstration is great because it showcases the capabilities of the responsive design project in real-time.

But there are risks of failure with a live demo.

This is why Peter recommends to  **pre-record**  your demo ahead of time to showcase the full benefits of your responsive design project.

This  **guarantees**  that your demo  _works_.

Peter shared an example in which his initial demo for a responsive website  _failed_  to work very small screens - less than 320px wide.

Because he was aware of the bug and knew that this bug wouldn't be a problem for the final project, he simply omitted resizing the browser for this width in his demonstration.

This helps  _YOU_  control the meeting - as a pre-recorded demo commands the patience, time and respect that a talking human can't really achieve.

After the pitch,  _THEN_  you distribute the proposal document.

There is no better time to submit the proposal then after a successful demonstration.

Be attentive and be sure to answer questions that you may not think are 'real' questions.

> I think this is important for the company, which makes it important to me

### Build It

Sometimes the best way to get an new idea to take off in the corporate environment is to  **just do it**.

Build just a few key patterns, a few key screens to demonstrate and justify the benefits of investing in responsive web design.

Establishing a  _business case_  just works - it works for Peter and is greatly successful in communicating the value of a project to those who don't understand it yet.

Be sure to test your own ideas.

You'll do better work for it.

## Thoughts on MelbCSS

This was my first session at MelbCSS and overall my experience was a positive one - despite a rocky start.

Due to  [SEO Melbourne moving to Tuesdays](http://apexaction.com.au/blog/melbourne-seo-meetup-march-2015)  I was able to make time in my calendar for the event.

I arrived just after 6pm at the  _99 Designs_  office, located right behind Richmond Station.

I was feeling ill that day and because I didn't know of any of the attendees I just kind of laid-back and ignored the networking aspect of the event.

The sessions were good - Myles' one was good and engaging, though I listed my critiques earlier.  **EDIT:**  _Myles has kindly provided answers to each and every one of my qestions. In retrospect the lack of a Q&A session hurt the presentation more._

Peter's presentation was excellent, amusing and engaging.

I will definitely set aside time to attend next month and hope to contribute more next time.