---
layout: default
title: "연구실 소개"
description: "RF/Microwave 회로 설계와 RF Power Amplifier를 중심으로 연구하는 MaRCH Lab을 소개합니다."
lang: "ko_KR"
---

<section class="about-hero">
  <div class="container">
    <h1 class="about-hero-title">Microwave &amp; RF 기술의 가능성을 연구하다</h1>
    <p class="about-hero-subtitle">Microwave and RF Circuit Research Laboratory</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="about-intro">
      <div class="about-visual">
        <img src="{{ site.baseurl }}/assets/images/hero-main.jpg" alt="MaRCH Lab 클린룸에서 반도체 소자를 측정하는 모습" class="about-visual-image" loading="lazy" width="800" height="600">
      </div>
      <div class="about-intro-text">
        <h2>MaRCH Lab을 소개합니다</h2>
        <p>MaRCH Lab(Microwave and RF Circuit ResearcH Lab)은 RF/Microwave 회로 설계와 RF Power Amplifier를 핵심 연구 분야로, MMIC 및 RF 반도체, RF Measurement &amp; System 분야까지 연구하고 있습니다.</p>
        <p>회로 이론과 설계에 그치지 않고, 실제 제작과 측정을 통해 설계 결과를 검증하고 개선하는 연구를 지향합니다.</p>
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
      <article class="highlight-card">
        <div class="highlight-icon" aria-hidden="true">
          {% include icon.html name="waveform" size="large" %}
        </div>
        <h3 class="highlight-title">High Efficiency</h3>
        <p class="highlight-description">고효율·고출력 RF Power Amplifier 설계 기술을 확보합니다.</p>
      </article>
      <article class="highlight-card">
        <div class="highlight-icon" aria-hidden="true">
          {% include icon.html name="chip" size="large" %}
        </div>
        <h3 class="highlight-title">Advanced RF Semiconductor</h3>
        <p class="highlight-description">GaAs/GaN 기반 MMIC 및 RF 반도체 설계 역량을 강화합니다.</p>
      </article>
      <article class="highlight-card">
        <div class="highlight-icon" aria-hidden="true">
          {% include icon.html name="antenna" size="large" %}
        </div>
        <h3 class="highlight-title">From Design to Measurement</h3>
        <p class="highlight-description">설계-제작-측정을 아우르는 실전형 연구 환경을 구축합니다.</p>
      </article>
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
      <li class="workflow-step">
        <span class="workflow-step-number" aria-hidden="true">1</span>
        <h3 class="workflow-step-title">Concept</h3>
        <p class="workflow-step-description">연구 목표와 사양을 정의합니다.</p>
      </li>
      <li class="workflow-step">
        <span class="workflow-step-number" aria-hidden="true">2</span>
        <h3 class="workflow-step-title">Circuit Design</h3>
        <p class="workflow-step-description">임피던스 매칭과 회로 토폴로지를 설계합니다.</p>
      </li>
      <li class="workflow-step">
        <span class="workflow-step-number" aria-hidden="true">3</span>
        <h3 class="workflow-step-title">EM Simulation</h3>
        <p class="workflow-step-description">전자기 시뮬레이션으로 설계를 검증합니다.</p>
      </li>
      <li class="workflow-step">
        <span class="workflow-step-number" aria-hidden="true">4</span>
        <h3 class="workflow-step-title">Fabrication</h3>
        <p class="workflow-step-description">설계한 회로를 실제로 제작합니다.</p>
      </li>
      <li class="workflow-step">
        <span class="workflow-step-number" aria-hidden="true">5</span>
        <h3 class="workflow-step-title">Measurement</h3>
        <p class="workflow-step-description">VNA·스펙트럼 분석기로 특성을 측정합니다.</p>
      </li>
      <li class="workflow-step">
        <span class="workflow-step-number" aria-hidden="true">6</span>
        <h3 class="workflow-step-title">Analysis &amp; Optimization</h3>
        <p class="workflow-step-description">측정 결과를 분석하고 설계를 개선합니다.</p>
      </li>
    </ol>
  </div>
</section>

<section class="about-cta">
  <div class="container">
    <div class="about-cta-inner">
      <h2 class="about-cta-title">Join MaRCH Lab</h2>
      <p class="about-cta-text">RF/Microwave 기술을 직접 설계하고, 제작하고, 측정하며 연구하고 싶은 학생을 기다립니다.</p>
      <a href="{{ site.baseurl }}/contact/" class="btn btn-primary btn-large">
        연락하기
        {% include icon.html name="mail" size="small" %}
      </a>
    </div>
  </div>
</section>
