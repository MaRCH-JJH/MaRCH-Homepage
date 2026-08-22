# MaRCH Lab 웹사이트 인수인계서

이 문서는 비전공자도 웹사이트 콘텐츠를 관리할 수 있도록 작성되었습니다.

## 1. 저장소 권한 추가 방법

### GitHub에서 협업자 추가

1. GitHub 저장소 페이지 접속
2. 상단 메뉴 **Settings** 클릭
3. 왼쪽 사이드바 **Collaborators** 클릭
4. **Add people** 버튼 클릭
5. 추가할 사람의 GitHub 사용자명 또는 이메일 입력
6. 권한 선택: **Write** (쓰기 권한) 또는 **Admin** (관리자 권한)
7. **Add [이름] to this repository** 클릭

### 권한별 차이

| 권한 | 가능한 작업 |
|------|-------------|
| **Read** | 보기만 가능 |
| **Triage** | 이슈/라벨 관리 |
| **Write** | 푸시, 브랜치 생성, PR 병합 |
| **Maintain** | 설정 변경, 협업자 관리 |
| **Admin** | 모든 권한 + 저장소 삭제/이전 |

**추천**: 콘텐츠 관리자는 **Write** 권한 부여

---

## 2. /admin 접속 → GitHub 로그인 → 콘텐츠 수정 → Publish

### 관리자 페이지 접속

1. 배포된 웹사이트 주소 뒤에 `/admin/` 붙여서 접속
   - 예: `https://your-username.github.io/MaRCH_Homepage_code/admin/`
2. **"Login with GitHub"** 버튼 클릭
3. GitHub 계정으로 로그인 (권한이 있는 계정만 가능)
4. 권한 승인 화면에서 **Authorize** 클릭

### 콘텐츠 수정 방법

#### 사이트 설정 수정 (네비게이션, 푸터, 히어로 등)

1. 왼쪽 메뉴 **사이트 설정** 클릭
2. 원하는 항목 수정:
   - **사이트명/태그라인**: 한글/영문 각각 입력
   - **네비게이션**: 메뉴명, URL, 순서 변경 가능
   - **푸터**: 저작권 문구, 링크 추가/삭제
   - **히어로**: 제목, 부제목, CTA 버튼, 통계 숫자
   - **하이라이트**: 4개 카드 내용/아이콘/링크
3. 우상단 **Save** → **Publish** 클릭

#### 멤버 추가/수정/삭제

1. 왼쪽 메뉴 **멤버** 클릭
2. **New 멤버** 버튼으로 추가
3. 필수 항목 입력:
   - **ID**: 고유 식별자 (영문, 예: `prof-kim`)
   - **이름 (한글/영문)**
   - **직책**: 드롭다운에서 선택 (교수/박사후연구원/박사과정/석사과정/졸업생)
   - **학위/전공**
   - **이메일/연락처/연구실**
   - **프로필 이미지**: 업로드 또는 기존 이미지 선택
   - **소개/연구관심분야**
   - **외부 링크**: Google Scholar, ORCID, LinkedIn
   - **카테고리**: 탭 분류용 (professor/postdoc/phd/master/alumni)
   - **정렬 순서**: 숫자 (작을수록 위)
4. **Save** → **Publish**

#### 연구 분야 수정

1. 왼쪽 메뉴 **연구 분야** 클릭
2. 기존 항목 클릭하여 수정 또는 **New 연구 분야**로 추가
3. 아이콘명은 미리 정의된 것 중 선택: `cpu`, `waveform`, `chip`, `antenna`

#### 수상 경력 추가

1. 왼쪽 메뉴 **수상 경력** 클릭
2. 연도별로 그룹화되어 있음
3. **New 수상 경력** 클릭 → 연도 선택 → 수상 내역 추가
4. 이미지 업로드 가능 (시상식 사진 등)

#### 논문/성과 추가

1. 왼쪽 메뉴 **논문/성과** 클릭
2. 연도별 그룹화
3. **New 논문/성과** 클릭 → 연도 선택 → 논문 추가
4. **DOI** 입력 시 자동으로 링크 생성됨
5. **타입**: Journal/Conference 선택
6. **분야**: Circuit Design/Power Amplifier/MMIC/Measurement 선택
7. **추천 논문** 체크 시 상단에 뱃지 표시

### 발행(Publish) 프로세스

1. 수정 완료 후 우상단 **Save** 클릭
2. 커밋 메시지 확인/수정 (자동 생성됨)
3. **Publish** 버튼 클릭
4. GitHub Actions에서 빌드/배포 진행 (약 1-3분 소요)
5. 배포 완료 후 웹사이트에서 확인

---

## 3. 이미지 업로드 가이드

### 파일명 규칙

```
✅ 올바른 예시:
  prof-kim.jpg
  dr-lee-profile.png
  award-2024-best-paper.webp
  research-computational.jpg

❌ 잘못된 예시:
  김교수님 사진.jpg        (한글 포함)
  prof kim.jpg             (공백 포함)
  IMG_1234.JPG             (대문자, 의미없는 이름)
  award#1.png              (특수문자 포함)
```

### 용량 제한

- **권장**: 500KB 이하
- **최대**: 1MB (GitHub Pages 제한)
- 큰 이미지는 자동 압축되지 않음 → 미리 리사이즈 권장

### 권장 이미지 크기

| 용도 | 크기 | 비율 | 용도 |
|------|------|------|------|
| 프로필 사진 | 300×300px | 1:1 | 멤버 카드 |
| 연구분야 대표 | 800×500px | 16:10 | 연구 카드 썸네일 |
| 수상 이미지 | 400×300px | 4:3 | 아코디언 썸네일 |
| 히어로 배경 | 1920×1080px | 16:9 | 홈페이지 상단 |
| OG 이미지 | 1200×630px | 1.91:1 | SNS 공유 시 |

### 이미지 최적화 도구

- **온라인**: [TinyPNG](https://tinypng.com/), [Squoosh](https://squoosh.app/)
- **맥**: ImageOptim 앱
- **윈도우**: Caesium Image Compressor
- **명령줄**: `imagemagick` (`convert input.jpg -quality 85 -resize 800x500 output.jpg`)

### (개발자용) 이미지 경로가 두 가지 형식으로 저장되는 이유

이 사이트는 `march-jjh.github.io/MaRCH-Homepage/`처럼 도메인 루트가 아닌 하위 경로에 배포됩니다.
Decap CMS의 이미지 위젯 자체 미리보기 기능은 이 하위 경로를 모르기 때문에, `public_folder`를
`/assets/images`(루트 기준 상대경로)로 두면 CMS 편집 화면에서 이미지가 업로드/저장은 정상적으로
되어도 썸네일 미리보기만 깨져 보이는 문제가 있었습니다(실제 배포된 사이트에는 정상 표시됨).

이를 해결하기 위해 `admin/config.yml`의 `public_folder`를 전체 URL
(`https://march-jjh.github.io/MaRCH-Homepage/assets/images`)로 바꿨습니다. 그 결과:

- **이제부터 CMS로 새로 업로드하는 이미지**는 `https://march-jjh.github.io/MaRCH-Homepage/assets/images/파일명`처럼 전체 URL 형태로 저장됩니다.
- **기존에 이미 들어있던 이미지 경로**(`/assets/images/hero-main.jpg` 등)는 예전 형식 그대로 남아있습니다.

두 형식을 모두 정상적으로 처리하도록 `_includes/image-url.html`이라는 공용 include를 만들어서,
이미지를 화면에 표시하는 모든 곳(히어로 배경, 연구/멤버/수상 카드, OG 공유 이미지 등)에서
이 include를 거치도록 했습니다. 따라서 **직접 YAML 파일을 수정할 때는 예전처럼
`/assets/images/파일명`(슬래시로 시작) 형식을 그대로 써도 되고, CMS로 업로드하면
자동으로 전체 URL 형식이 저장되니 신경 쓰지 않아도 됩니다.**

---

## 4. 배포 확인 방법 (Actions 탭)

### GitHub Actions에서 배포 상태 확인

1. 저장소 상단 **Actions** 탭 클릭
2. 최신 워크플로우 클릭 (보통 "Deploy Jekyll site to GitHub Pages")
3. 단계별 로그 확인:
   - ✅ **Checkout** - 코드 체크아웃
   - ✅ **Setup Ruby** - Ruby 환경 구성
   - ✅ **Install dependencies** - 번들 설치
   - ✅ **Build Jekyll site** - 사이트 빌드
   - ✅ **Copy Decap CMS config** - CMS 파일 복사
   - ✅ **Create .nojekyll** - 언더바 파일 보호
   - ✅ **Upload artifact** - 아티팩트 업로드
   - ✅ **Deploy to GitHub Pages** - 페이지 배포

### 배포 소요 시간

- 평균: **1-3분**
- 처음 배포: 3-5분 (캐시 없음)
- 의존성 변경 시: 2-4분

### 배포 실패 시 확인사항

| 에러 유형 | 원인 | 해결 |
|-----------|------|------|
| `bundle install` 실패 | Gemfile.lock 충돌 | Actions에서 "Re-run jobs" 클릭 |
| Jekyll 빌드 에러 | YAML 문법 오류 | 로컬에서 `bundle exec jekyll build`로 확인 |
| 권한 에러 | GitHub Pages 설정 | Settings > Actions > Workflow permissions 확인 |
| CMS 파일 누락 | admin 폴더 없음 | 워크플로우에서 복사 단계 확인 |

---

## 5. 자주 하는 실수/해결법

### 콘텐츠 수정 관련

| 실수 | 증상 | 해결 |
|------|------|------|
| YAML 들여쓰기 오류 | 빌드 실패, 페이지 깨짐 | CMS에서 수정 (직접 YAML 편집 금지) |
| 필수 필드 누락 | 저장 안 됨 | 빨간색 필수 표시 항목 모두 입력 |
| 이미지 업로드 안 함 | 빈 이미지 자리 표시자 | 이미지 필드에서 업로드 또는 선택 |
| DOI 잘못 입력 | 링크 깨짐 | `10.xxxx/xxxxx` 형식만 입력 (URL 전체 X) |

### 네비게이션/메뉴 관련

| 실수 | 증상 | 해결 |
|------|------|------|
| URL 오타 | 404 에러 | `/`로 시작하는 상대 경로 사용 (예: `/research/`) |
| 메뉴 순서 꼬임 | 원하는 순서 안 나옴 | `site.yml`에서 순서대로 나열 |
| 영문명 누락 | 언어 전환 시 빈칸 | `en` 필드 필수 입력 |

### 배포/사이트 관련

| 실수 | 증상 | 해결 |
|------|------|------|
| Publish 안 누름 | 수정사항 반영 안 됨 | Save 후 반드시 Publish 클릭 |
| 브라우저 캐시 | 변경사항 안 보임 | `Ctrl+Shift+R` (강제 새로고침) |
| _config.yml 수정 | 사이트 전체 깨짐 | 비전공자는 수정 금지, 개발자에게 요청 |

### 긴급 복구

```bash
# 로컬에서 이전 버전으로 롤백
git log --oneline -10
git revert <커밋해시>
git push origin main
```

---

## 6. 도메인 연결 시 설정 변경점

### 커스텀 도메인 연결 절차

#### 1. GitHub Pages 설정

1. 저장소 **Settings** > **Pages**
2. **Custom domain** 입력: `marchlab.example.ac.kr`
3. **Enforce HTTPS** 체크 (SSL 인증서 자동 발급 대기)
4. **Save**

#### 2. DNS 레코드 설정 (도메인 구매처에서)

**A 레코드** (필수, 4개 모두 추가):
```
@  A  185.199.108.153
@  A  185.199.109.153
@  A  185.199.110.153
@  A  185.199.111.153
```

**CNAME 레코드** (www 서브도메인용):
```
www  CNAME  your-username.github.io
```

#### 3. Jekyll 설정 업데이트 (`_config.yml`)

```yaml
url: "https://marchlab.example.ac.kr"
baseurl: ""  # 루트 도메인 사용 시 빈 문자열
```

#### 4. Decap CMS 설정 업데이트 (`admin/config.yml`)

```yaml
site_url: https://marchlab.example.ac.kr
logo_url: https://marchlab.example.ac.kr/assets/images/logo.png
```

#### 5. 검증 체크리스트

- [ ] `https://marchlab.example.ac.kr` 접속 가능
- [ ] `https://www.marchlab.example.ac.kr` 리다이렉트 확인
- [ ] HTTPS 자물쇠 아이콘 표시
- [ ] `/admin/` 관리자 페이지 접속 가능
- [ ] 모든 페이지 정상 로드
- [ ] 이미지/리소스 로드 확인 (개발자도구 Network 탭)
- [ ] SNS 공유 시 OG 이미지 정상 표시 (Facebook Debugger, Twitter Card Validator)

### 서브디렉토리 사용 시 (예: `example.ac.kr/marchlab`)

```yaml
# _config.yml
url: "https://example.ac.kr"
baseurl: "/marchlab"

# admin/config.yml
site_url: https://example.ac.kr/marchlab
```

---

## 7. 연락처 및 지원

### 기술 지원

- **개발자**: [개발자 이름/연락처]
- **이슈 등록**: GitHub Issues 탭 활용
- **긴급 연락**: [비상 연락망]

### 유용한 링크

- [Jekyll 공식 문서](https://jekyllrb.com/docs/)
- [Decap CMS 문서](https://decapcms.org/docs/)
- [GitHub Pages 문서](https://docs.github.com/en/pages)
- [Netlify Identity 설정](https://docs.netlify.com/visitor-access/identity/)

---

## 부록: 마크다운 작성 가이드 (CMS 마크다운 필드용)

### 기본 문법

```markdown
# 제목 1
## 제목 2
### 제목 3

**굵은 텍스트**
*기울임 텍스트*
~~취소선~~

- 목록 항목 1
- 목록 항목 2
  - 중첩 목록

1. 번호 목록 1
2. 번호 목록 2

[링크 텍스트](https://example.com)
![이미지 설명](/assets/images/image.jpg)

> 인용문

`인라인 코드`

```코드 블록```
```

### 표 작성

```markdown
| 헤더 1 | 헤더 2 | 헤더 3 |
|--------|--------|--------|
| 셀 1   | 셀 2   | 셀 3   |
| 셀 4   | 셀 5   | 셀 6   |
```

### 줄바꿈

- 단일 줄바꿈: 엔터 한 번
- 단락 분리: 빈 줄 한 줄 (엔터 두 번)

---

*최종 업데이트: 2024년*
*문서 버전: 1.0*