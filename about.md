---
layout: default
title: "연구실 소개"
description: "RF/Microwave 회로 설계와 RF Power Amplifier를 중심으로 연구하는 MaRCH Lab을 소개합니다."
lang: "ko_KR"
---

<section class="about-hero">
  <div class="container">
    <h1 class="about-hero-title">{{ site.data.about.hero.title }}</h1>
    <p class="about-hero-subtitle">{{ site.data.about.hero.subtitle }}</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="about-intro">
      <div class="about-visual">
        <img src="{% include image-url.html path=site.data.about.intro.image %}" alt="MaRCH Lab 클린룸에서 반도체 소자를 측정하는 모습" class="about-visual-image" loading="lazy" width="800" height="600">
      </div>
      <div class="about-intro-text">
        <h2>{{ site.data.about.intro.heading }}</h2>
        <p>{{ site.data.about.intro.paragraph_1 | strip_newlines }}</p>
        <p>{{ site.data.about.intro.paragraph_2 | strip_newlines }}</p>
      </div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="vision-heading">
  <div class="container">
    <header class="section-header">
      <h2 id="vision-heading" class="section-title">Research Vision</h2>
    </header>
    <div class="highlights-grid">
      {% for item in site.data.about.vision %}
      <article class="highlight-card">
        <div class="highlight-icon" aria-hidden="true">
          {% include icon.html name=item.icon size="large" %}
        </div>
        <h3 class="highlight-title">{{ item.title }}</h3>
        <p class="highlight-description">{{ item.description }}</p>
      </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section" aria-labelledby="research-areas-heading">
  <div class="container">
    <header class="section-header">
      <h2 id="research-areas-heading" class="section-title">Research Areas</h2>
      <p class="section-subtitle">MaRCH Lab의 3가지 연구 분야입니다.</p>
    </header>
    <div class="research-grid">
      {% for item in site.data.research.items %}
      {% include research-card.html item=item %}
      {% endfor %}
    </div>
  </div>
</section>

<section class="section" aria-labelledby="workflow-heading">
  <div class="container">
    <header class="section-header">
      <h2 id="workflow-heading" class="section-title">Research Workflow</h2>
    </header>
    <ol class="workflow-timeline">
      {% for step in site.data.about.workflow %}
      <li class="workflow-step">
        <span class="workflow-step-number" aria-hidden="true">{{ forloop.index }}</span>
        <h3 class="workflow-step-title">{{ step.title }}</h3>
        <p class="workflow-step-description">{{ step.description }}</p>
      </li>
      {% endfor %}
    </ol>
  </div>
</section>

<section class="about-cta">
  <div class="container">
    <div class="about-cta-inner">
      <h2 class="about-cta-title">{{ site.data.about.cta.title }}</h2>
      <p class="about-cta-text">{{ site.data.about.cta.text }}</p>
      <a href="{{ site.baseurl }}/contact/" class="btn btn-primary btn-large">
        연락하기
        {% include icon.html name="mail" size="small" %}
      </a>
    </div>
  </div>
</section>
