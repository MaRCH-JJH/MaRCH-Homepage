---
layout: page
title: "연락처/오시는길"
subtitle: "MaRCH Lab을 찾아오시는 방법과 연락처 정보입니다."
lang: "ko_KR"
---

<div class="contact-grid">
  <div class="contact-info">
    <h3>연락처</h3>
    
    <div class="contact-item">
      <div class="contact-icon">
        {% include icon.html name="location" size="large" %}
      </div>
      <div class="contact-details">
        <h4>주소</h4>
        <p>{{ site.data.site.address }}</p>
        <p>{{ site.data.site.address_en }}</p>
      </div>
    </div>
    
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
        {% include icon.html name="phone" size="large" %}
      </div>
      <div class="contact-details">
        <h4>전화</h4>
        <p><a href="tel:{{ site.data.site.phone }}">{{ site.data.site.phone }}</a></p>
      </div>
    </div>
    
    <div class="contact-item">
      <div class="contact-icon">
        {% include icon.html name="github" size="large" %}
      </div>
      <div class="contact-details">
        <h4>GitHub</h4>
        <p><a href="{{ site.data.site.github }}" target="_blank" rel="noopener noreferrer">{{ site.data.site.github }}</a></p>
      </div>
    </div>
  </div>
  
  <div class="contact-map">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.123456789!2d126.9516!3d37.4639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDI3JzUwLjAiTiAxMjbCsDU3JzA1LjciRQ!5e0!3m2!1sko!2skr!4v1234567890"
      width="100%" 
      height="400" 
      style="border:0;" 
      allowfullscreen="" 
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="MaRCH Lab 위치 지도">
    </iframe>
  </div>
</div>

<section class="section" style="padding-top: 40px;">
  <div class="container">
    <h3 style="margin-bottom: var(--space-content); text-align: center;">대중교통 이용 안내</h3>
    <div style="max-width: 800px; margin: 0 auto; text-align: center;">
      <p style="color: var(--color-secondary); line-height: var(--type-body-line-height);">
        <strong>지하철:</strong> 2호선 서울대입구역 3번 출구 → 셔틀버스 이용 (약 10분)<br>
        <strong>버스:</strong> 5511, 5513, 5515번 승차 → 서울대학교 정문 하차
      </p>
    </div>
  </div>
</section>