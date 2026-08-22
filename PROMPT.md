# 역할
당신은 정적 사이트 생성기(Jekyll) + GitHub Pages + Decap CMS를 사용해 연구실 소개 웹사이트를 구축하는 시니어 프론트엔드 개발자입니다. 비전공자도 관리자 페이지(/admin)에서 블로그처럼 콘텐츠만 수정하면 자동 배포되도록 만듭니다.

# 기술 스택
- 호스팅: GitHub Pages (무료, HTTPS 자동)
- SSG: Jekyll (GitHub Pages 네이티브 지원)
- CMS: Decap CMS (구 Netlify CMS) — /admin 관리자 페이지 제공
- 스타일링: CSS Variables + Vanilla JS (경량, 의존성 없음)
- 데이터: _data/*.yml (CMS가 읽/쓰는 단일 소스)

# 사이트 구조 (페이지/라우팅)
- 홈: /
- 연구 경력: /research/
- 수상 경력: /awards/
- 멤버: /members/
- 논문/성과: /publications/
- 연락처/오시는길: /contact/

# Decap CMS 컬렉션 설계 (static/admin/config.yml)
[원본 프롬프트의 config.yml 내용 삽입]

# Jekyll 레이아웃/컴포넌트 구조
_layouts/
├── default.html        # 베이스 레이아웃 (헤더, 푸터, SEO)
├── page.html           # 일반 페이지
├── home.html           # 홈 전용 (히어로, 하이라이트 섹션)
└── collection.html     # 컬렉션 리스트 페이지 (research, awards 등 공용)

_includes/
├── head.html           # 메타태그, OG, JSON-LD
├── header.html         # 네비게이션 (데이터 기반 동적 생성)
├── footer.html
├── hero.html           # 홈 히어로 섹션
├── member-card.html    # 멤버 카드 컴포넌트
├── research-card.html  # 연구분야 카드
├── award-item.html     # 수상 항목
├── publication-item.html # 논문 항목
├── news-card.html      # 소식 카드
├── mobile-nav.html     # 모바일 햄버거 메뉴
└── decap-cms.html      # CMS 스크립트 로드 (개발환경만)

# 핵심 구현 요구사항
1. 데이터 기반 네비게이션: _data/site.yml 기반 동적 생성
2. 멤버 페이지: Vanilla JS로 탭 전환 및 URL 해시(#phd, #master 등) 지원
3. 논문 페이지: 연도별 그룹화 + 체크박스 필터(Journal/Conference 등) + DOI 자동 링크
4. 수상 경력: 연도별 아코디언 (최신 연도 기본 오픈) + 이미지 모달 확대
5. 반응형 + 접근성 + 다크모드 (CSS Variables + localStorage)
6. SEO/공유 최적화 (meta tags, JSON-LD, sitemap.xml 자동 생성)
7. 이미지 최적화: GitHub Pages 안전 호환을 위해 Ruby 플러그인 대신 Actions 단계 또는 표준 HTML srcset 활용
8. 배포 파이프라인 (.github/workflows/pages.yml): Jekyll 빌드, CMS 폴더 복사, GH Pages 배포

# 추가 보완 요구사항
9. 로컬 실행 가이드 (README.md 내 포함)
   - Ruby/Bundler 환경에서 `bundle exec jekyll serve`로 로컬 테스트하는 법 안내
10. Decap CMS 인증 관련 주의사항 명시
    - Netlify Identity 연동 시 '신규 가입 차단(Disable Signup)' 설정 방법 인수인계서 포함
11. 예외 및 빌드 안정성 처리
    - 깔끔한 `404.html` 페이지 생성
    - GitHub Pages 빌드 시 언더바 파일 누락 방지를 위한 `.nojekyll` 파일 자동 생성 규칙 추가

# 비전공자 인수인계 문서 자동 생성 (docs/HANDOVER.md)
1. 저장소 권한 추가 방법
2. /admin 접속 → GitHub 로그인 → 콘텐츠 수정 → Publish
3. 이미지 업로드 가이드 (파일명 규칙, 용량 제한)
4. 배포 확인 방법 (Actions 탭)
5. 자주 하는 실수/해결법
6. 도메인 연결 시 설정 변경점

# 초기 데이터 시딩
- members.yml, research.yml, awards.yml, publications.yml, site.yml 샘플 데이터 구조화 포함 생성