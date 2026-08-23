---
layout: default
title: "지도교수"
description: "MaRCH Lab 지도교수 전주영 교수 소개 - RF 회로 및 시스템, 전력증폭기 연구."
lang: "ko_KR"
---

<section class="section professor-hero-section">
  <div class="container">
    <div class="professor-hero-inner">
      <div class="about-intro">
        <div class="member-image-wrapper professor-photo">
          <img src="{% include image-url.html path=site.data.professor.photo %}" alt="{{ site.data.professor.name }} 교수" class="member-image" loading="lazy" width="300" height="400">
        </div>
        <div class="about-intro-text">
          <p class="professor-eyebrow">{{ site.data.professor.eyebrow }}</p>
          <h1 class="professor-name">{{ site.data.professor.name }}</h1>
          <p class="professor-role">{{ site.data.professor.role }}</p>
          <p class="professor-affiliation">{{ site.data.professor.affiliation }}</p>

          <p class="professor-interests-label">Research Interests</p>
          <ul class="professor-interests-list" aria-label="연구 관심분야">
            {% for interest in site.data.professor.interests %}
            <li class="professor-interest-item">
              <span class="professor-interest-en">{{ interest.en }}</span>
              <span class="professor-interest-ko">{{ interest.ko }}</span>
            </li>
            {% endfor %}
          </ul>

          <nav class="professor-section-links" aria-label="교수 상세 정보 바로가기">
            <a href="#education">학력</a>
            <span aria-hidden="true">·</span>
            <a href="#career">경력</a>
            <span aria-hidden="true">·</span>
            <a href="#publications">논문</a>
            <span aria-hidden="true">·</span>
            <a href="#patents">특허</a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section professor-cv-section">
  <div class="container">
    <div class="professor-body">

      <div class="professor-cv-block" id="education">
        <h2 class="professor-cv-title">학력</h2>
        <ul class="professor-plain-list">
          {% for entry in site.data.professor.education %}
          <li>{{ entry }}</li>
          {% endfor %}
        </ul>
      </div>

      <div class="professor-cv-block" id="career">
        <h2 class="professor-cv-title">주요 경력</h2>
        <ul class="professor-plain-list">
          {% for entry in site.data.professor.career %}
          <li>{{ entry.text }}
            {% if entry.sub_items.size > 0 %}
            <ul>
              {% for sub in entry.sub_items %}
              <li>{{ sub }}</li>
              {% endfor %}
            </ul>
            {% endif %}
          </li>
          {% endfor %}
        </ul>
      </div>

      <div class="professor-cv-block" id="publications">
        <h2 class="professor-cv-title">주요 논문</h2>
        <ol class="pub-list">
          {% for pub in site.data.professor.publications %}
          <li class="pub-entry">
            <p class="pub-title">{{ pub.title }}</p>
            <p class="pub-meta">{{ pub.meta }}</p>
          </li>
          {% endfor %}
        </ol>
      </div>

      <div class="professor-cv-block" id="patents">
        <h2 class="professor-cv-title">특허</h2>
        <ol class="pub-list">
          {% for patent in site.data.professor.patents %}
          <li class="pub-entry">
            <p class="pub-title">{{ patent.title }}</p>
            <p class="pub-meta">{{ patent.meta }}</p>
          </li>
          {% endfor %}
        </ol>
      </div>

    </div>
  </div>
</section>

<section class="section professor-contact-section">
  <div class="container">
    <header class="section-header">
      <h2 class="section-title">Contact</h2>
    </header>
    <div class="professor-contact">
      <div class="contact-item">
        <div class="contact-icon">
          {% include icon.html name="mail" size="large" %}
        </div>
        <div class="contact-details">
          <h4>이메일</h4>
          <p><a href="mailto:{{ site.data.site.email }}">{{ site.data.site.email }}</a></p>
        </div>
      </div>
      <div class="contact-item">
        <div class="contact-icon">
          {% include icon.html name="location" size="large" %}
        </div>
        <div class="contact-details">
          <h4>연구실</h4>
          <p>{{ site.data.professor.office }}</p>
        </div>
      </div>
    </div>
  </div>
</section>
