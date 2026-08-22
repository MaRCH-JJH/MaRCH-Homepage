---
layout: page
title: "소식"
subtitle: "MaRCH Lab의 최신 소식과 공지사항입니다."
lang: "ko_KR"
---

<div class="news-list">
  {% for post in site.posts %}
  {% include news-card.html post=post %}
  {% endfor %}
</div>