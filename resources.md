---
layout: page
title: "자료실"
subtitle: "MaRCH Lab 구성원을 위한 자료실입니다. 비밀번호가 필요합니다."
lang: "ko_KR"
---

<div id="resources-gate" class="resources-gate">
  <div class="resources-gate-icon" aria-hidden="true">
    {% include icon.html name="lock" size="xlarge" %}
  </div>
  <h2 class="resources-gate-title">비밀번호를 입력해주세요</h2>
  <p class="resources-gate-subtitle">자료실은 비밀번호로 보호되어 있습니다.</p>
  <form id="resources-gate-form" class="resources-gate-form">
    <input type="password" id="resources-password-input" class="resources-gate-input" placeholder="비밀번호" autocomplete="off" aria-label="비밀번호">
    <button type="submit" class="btn btn-primary">확인</button>
  </form>
  <p id="resources-gate-error" class="resources-gate-error" role="alert" hidden>비밀번호가 올바르지 않습니다.</p>
</div>

<div id="resources-content" class="resources-content" hidden>
  {% if site.data.resources.items.size > 0 %}
  <ul class="resources-list" role="list">
    {% for item in site.data.resources.items %}
    <li class="resource-item">
      <div class="resource-icon" aria-hidden="true">
        {% include icon.html name="file" size="large" %}
      </div>
      <div class="resource-info">
        <h3 class="resource-title">{{ item.title }}</h3>
        {% if item.description %}
        <p class="resource-description">{{ item.description }}</p>
        {% endif %}
        {% if item.date %}
        <time class="resource-date" datetime="{{ item.date }}">{{ item.date | date: "%Y.%m.%d" }}</time>
        {% endif %}
      </div>
      {% if item.url %}
      <a href="{{ item.url }}" class="resource-link" target="_blank" rel="noopener noreferrer" aria-label="{{ item.title }} Google Drive에서 열기">
        {% include icon.html name="external-link" size="small" %}
        Drive에서 열기
      </a>
      {% endif %}
    </li>
    {% endfor %}
  </ul>
  {% else %}
  <div class="collection-empty-state">
    <p>등록된 자료가 없습니다. 추후 업데이트 예정입니다.</p>
  </div>
  {% endif %}
</div>

<script>
  window.__RESOURCES_PASSWORD__ = {{ site.data.resources.password | jsonify }};
</script>
