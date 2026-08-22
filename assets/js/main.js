(function() {
  'use strict';

  const THEME_KEY = 'marchlab-theme';
  const DARK_CLASS = 'dark';

  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    updateThemeToggle(isDark);
  }

  function updateThemeToggle(isDark) {
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.setAttribute('aria-label', isDark ? '라이트 모드로 전환' : '다크 모드로 전환');
    }
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
    updateThemeToggle(newTheme === 'dark');
  }

  function initMobileNav() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const nav = document.getElementById('mobile-nav');
    const overlay = document.getElementById('mobile-nav-overlay');
    const closeBtn = document.getElementById('mobile-nav-close');

    if (!toggle || !nav || !overlay) return;

    function openNav() {
      nav.classList.add('is-open');
      overlay.classList.add('is-visible');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', '메뉴 닫기');
      document.body.style.overflow = 'hidden';
    }

    function closeNav() {
      nav.classList.remove('is-open');
      overlay.classList.remove('is-visible');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', '메뉴 열기');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', () => {
      if (nav.classList.contains('is-open')) {
        closeNav();
      } else {
        openNav();
      }
    });

    closeBtn?.addEventListener('click', closeNav);
    overlay.addEventListener('click', closeNav);

    nav.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', closeNav);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        closeNav();
      }
    });
  }

  function initMemberTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const memberCards = document.querySelectorAll('.member-card');

    if (tabButtons.length === 0) return;

    function showCategory(category) {
      memberCards.forEach(card => {
        const cardCategory = card.dataset.category;
        if (category === 'all' || cardCategory === category) {
          card.style.display = '';
          card.hidden = false;
        } else {
          card.style.display = 'none';
          card.hidden = true;
        }
      });
    }

    function setActiveTab(button) {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    }

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.dataset.category;
        setActiveTab(button);
        showCategory(category);
        updateUrlHash(category);
      });

      button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          button.click();
        }
      });
    });

    function updateUrlHash(category) {
      const hash = category === 'all' ? '' : category;
      history.replaceState(null, '', hash ? '#' + hash : window.location.pathname);
    }

    function initFromHash() {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const targetButton = document.querySelector(`.tab-btn[data-category="${hash}"]`);
        if (targetButton) {
          setActiveTab(targetButton);
          showCategory(hash);
        }
      }
    }

    window.addEventListener('hashchange', initFromHash);
    initFromHash();
  }

  function initPublicationFilters() {
    const filterCheckboxes = document.querySelectorAll('.filter-checkbox input[type="checkbox"]');
    const publicationItems = document.querySelectorAll('.publication-item');

    if (filterCheckboxes.length === 0) return;

    function applyFilters() {
      const activeFilters = Array.from(filterCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

      publicationItems.forEach(item => {
        const type = item.dataset.type;
        const category = item.dataset.category;
        
        const typeMatch = activeFilters.includes(type) || activeFilters.includes('all');
        const categoryMatch = activeFilters.includes(category) || activeFilters.includes('all');
        
        if (typeMatch && categoryMatch) {
          item.style.display = '';
          item.hidden = false;
        } else {
          item.style.display = 'none';
          item.hidden = true;
        }
      });
    }

    filterCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', applyFilters);
    });
  }

  function initAwardAccordions() {
    const awardYears = document.querySelectorAll('.award-year');

    awardYears.forEach(year => {
      const summary = year.querySelector('.award-year-summary');
      if (!summary) return;

      summary.addEventListener('click', (e) => {
        if (e.target.closest('a, button')) return;
        
        const isOpen = year.hasAttribute('open');
        
        if (!isOpen) {
          awardYears.forEach(y => y.removeAttribute('open'));
          year.setAttribute('open', '');
        } else {
          year.removeAttribute('open');
        }
      });

      summary.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          summary.click();
        }
      });
    });
  }

  function initImageModal() {
    const triggers = document.querySelectorAll('.award-image-trigger');
    
    if (triggers.length === 0) return;

    const modal = createModal();
    document.body.appendChild(modal);

    let lastFocusedElement = null;

    function createModal() {
      const modal = document.createElement('div');
      modal.className = 'image-modal';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('aria-label', '이미지 확대 보기');
      modal.innerHTML = `
        <div class="image-modal-content">
          <button class="image-modal-close" aria-label="닫기">
            <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <img class="image-modal-image" src="" alt="">
          <p class="image-modal-caption"></p>
        </div>
      `;
      return modal;
    }

    function openModal(imageSrc, caption) {
      lastFocusedElement = document.activeElement;
      
      const modalImage = modal.querySelector('.image-modal-image');
      const modalCaption = modal.querySelector('.image-modal-caption');
      
      modalImage.src = imageSrc;
      modalImage.alt = caption;
      modalCaption.textContent = caption;
      
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      
      const closeBtn = modal.querySelector('.image-modal-close');
      closeBtn.focus();
      
      trapFocus(modal);
    }

    function closeModal() {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
      
      if (lastFocusedElement) {
        lastFocusedElement.focus();
      }
    }

    function trapFocus(element) {
      const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      element.addEventListener('keydown', function handleTab(e) {
        if (e.key !== 'Tab') return;
        
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      });
    }

    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const imageSrc = trigger.dataset.modalImage;
        const caption = trigger.dataset.modalCaption;
        openModal(imageSrc, caption);
      });

      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          trigger.click();
        }
      });
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.closest('.image-modal-close')) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) {
        closeModal();
      }
    });
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const headerHeight = document.querySelector('.site-header')?.offsetHeight || 60;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          target.focus({ preventScroll: true });
        }
      });
    });
  }

  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id], main > section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    if (sections.length === 0 || navLinks.length === 0) return;

    const observerOptions = {
      rootMargin: '-60px 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id || link.getAttribute('href') === '/' + id + '/');
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  }

  function initAnimations() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const animatedElements = document.querySelectorAll(
      '.highlight-card, .research-card, .award-item, .publication-item, .member-card, .news-card, .stat-item'
    );

    const observerOptions = {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  function initCopyDoi() {
    document.querySelectorAll('.publication-doi').forEach(doiLink => {
      doiLink.addEventListener('click', (e) => {
        if (e.ctrlKey || e.metaKey) return;
        
        e.preventDefault();
        const doiText = doiLink.textContent.replace('DOI: ', '').trim();
        
        navigator.clipboard.writeText(doiText).then(() => {
          const originalText = doiLink.textContent;
          doiLink.textContent = '복사됨!';
          doiLink.style.color = 'var(--color-primary)';
          
          setTimeout(() => {
            doiLink.textContent = originalText;
            doiLink.style.color = '';
          }, 2000);
        });
      });
      
      doiLink.title = 'Ctrl+클릭으로 링크 열기, 클릭으로 DOI 복사';
    });
  }

  function initLazyImages() {
    if ('loading' in HTMLImageElement.prototype) return;

    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.removeAttribute('loading');
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => observer.observe(img));
  }

  function init() {
    initTheme();
    initMobileNav();
    initMemberTabs();
    initPublicationFilters();
    initAwardAccordions();
    initImageModal();
    initSmoothScroll();
    initScrollSpy();
    initAnimations();
    initCopyDoi();
    initLazyImages();

    const themeToggle = document.getElementById('theme-toggle');
    themeToggle?.addEventListener('click', toggleTheme);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(THEME_KEY)) {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        updateThemeToggle(e.matches);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();