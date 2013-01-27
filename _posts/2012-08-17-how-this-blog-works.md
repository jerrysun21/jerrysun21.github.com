---
layout: post
title: "How This Blog Works"
description: "Brief overview of the technologies used for this website"
category:
tags: [blog]
---

I've always wanted to keep a blog, just to have a more professional presence on the internet.  I tried Wordpress and Blogger hosted blogs but felt both of them were too bloated for my needs.  I wanted a simple blog with a simple layout that I could easily maintain.

A few months back, my friend introduced me to [Github Pages](pages.github.com).  My first impression was that it was too minimalistic - I had to write the HTML and CSS for my blog.  So I gave up on the idea at that point.

Fast forward to last week, I was again, exploring the idea of building a blog using Github Pages.  I thought that since the pages were built using HTML and CSS, I could write a set of Python scripts to author the pages and posts for me, after I've written the content.  Upon further investigation, I discovered something like that already existed, [Jekyll](jekyllrb.com).

At first, things were still a bit daunting - the workings of the World Wide Web were always a mystery to me, and the last time I had written serious HTML and CSS was more than 4 years ago in high school.

However, the more I worked with Jekyll, the simpler things became.  For instance, I can define a main layout HTML document that can be used as a template for all posts, including layouts.  For a layout to use a template layout, the child layout must have some YAML front-matter defining its parent layout.  Within the parent layout, there must be a content section to plug the child layout into.  Take a look at my [layouts](https://github.com/jerrysun21/jerrysun21.github.com/tree/master/_layouts) folder as an example.

There's still a lot more work to do, such as adding in a comments section and tweaks to the CSS so things don't look so bland, but I'm learning a lot in the process.
