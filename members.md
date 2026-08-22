---
layout: page
title: "멤버"
subtitle: "MaRCH Lab의 연구원들을 소개합니다."
lang: "ko_KR"
body_class: "members-page"
---

<div class="members-tabs" role="tablist" aria-label="멤버 카테고리">
  <button class="tab-btn active" data-category="all" role="tab" aria-selected="true" aria-controls="panel-all">전체</button>
  <button class="tab-btn" data-category="professor" role="tab" aria-selected="false" aria-controls="panel-professor">교수</button>
  <button class="tab-btn" data-category="postdoc" role="tab" aria-selected="false" aria-controls="panel-postdoc">박사후연구원</button>
  <button class="tab-btn" data-category="phd" role="tab" aria-selected="false" aria-controls="panel-phd">박사과정</button>
  <button class="tab-btn" data-category="master" role="tab" aria-selected="false" aria-controls="panel-master">석사과정</button>
  <button class="tab-btn" data-category="alumni" role="tab" aria-selected="false" aria-controls="panel-alumni">졸업생</button>
</div>

<div class="members-grid" role="list" aria-label="멤버 목록">
  {% assign sorted_members = site.data.members.items | sort: "order" %}
  {% for member in sorted_members %}
  {% include member-card.html member=member %}
  {% endfor %}
</div>