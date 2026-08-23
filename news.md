---
layout: page
title: "소식"
subtitle: "MaRCH Lab의 최신 소식과 공지사항입니다."
lang: "ko_KR"
---

<div class="news-list">
  {% assign pinned_posts = site.posts | where: "pinned", true | sort: "order" %}
  {% assign other_posts = site.posts | where_exp: "post", "post.pinned != true" %}
  {% assign ordered_posts = pinned_posts | concat: other_posts %}
  {% for post in ordered_posts %}
  {% include news-card.html post=post %}
  {% endfor %}
</div>