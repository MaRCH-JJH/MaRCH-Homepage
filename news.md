---
layout: page
title: "소식"
subtitle: "MaRCH Lab의 최신 소식과 공지사항입니다."
lang: "ko_KR"
---

<div class="news-view-toggle" role="group" aria-label="보기 방식 선택">
  <button type="button" class="news-view-btn active" data-view="list" aria-pressed="true">
    {% include icon.html name="list" size="small" %}
    1열
  </button>
  <button type="button" class="news-view-btn" data-view="grid" aria-pressed="false">
    {% include icon.html name="grid" size="small" %}
    3열
  </button>
</div>

<div class="news-list" id="news-list">
  {% assign pinned_posts = site.posts | where: "pinned", true | sort: "order" %}
  {% assign other_posts = site.posts | where_exp: "post", "post.pinned != true" %}
  {% assign ordered_posts = pinned_posts | concat: other_posts %}
  {% for post in ordered_posts %}
  {% include news-card.html post=post %}
  {% endfor %}
</div>