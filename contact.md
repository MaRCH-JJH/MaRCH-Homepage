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
        <p>강원도 강릉시 범일로 57 강원대학교 강릉캠퍼스 공학관 000호</p>
        <p>Gangneung Campus, Kangwon National University, 57 Beomil-ro, Gangneung-si, Gangwon-do, Korea</p>
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
      src="https://www.google.com/maps?q=%EA%B0%95%EC%9B%90%EB%8C%80%ED%95%99%EA%B5%90+%EA%B0%95%EB%A6%89%EC%BA%A0%ED%8D%BC%EC%8A%A4&output=embed"
      width="100%" 
      height="400" 
      style="border:0;" 
      allowfullscreen="" 
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="MaRCH Lab 위치 지도 - 강원대학교 강릉캠퍼스">
    </iframe>
  </div>
</div>

<section class="section" style="padding-top: 40px;">
  <div class="container">
    <h3 style="margin-bottom: var(--space-content); text-align: center;">대중교통 이용 안내</h3>
    <div style="max-width: 800px; margin: 0 auto; text-align: center;">
      <p style="color: var(--color-secondary); line-height: var(--type-body-line-height);">
        <strong>KTX:</strong> 강릉역 하차 → 택시 약 10분 (강원대학교 강릉캠퍼스)<br>
        <strong>시내버스:</strong> 200, 201, 202번 승차 → 강원대학교 정문 하차<br>
        <strong>자가용:</strong> 영동고속도로 강릉IC → 강릉시내 방향 → 강원대학교 강릉캠퍼스
      </p>
    </div>
  </div>
</section>