# 배포 가이드

## 배포 방법

### 1. GitHub Pages 배포 (자동)

GitHub 저장소에 푸시하면 자동으로 배포됩니다.

```bash
git add .
git commit -m "배포 준비"
git push origin main
```

**주의**: GitHub Pages는 서버리스 함수를 지원하지 않으므로, 네이버 API 프록시는 작동하지 않습니다. 
뉴스 기능은 CORS 에러로 인해 제한될 수 있습니다.

### 2. Vercel 배포 (권장)

Vercel은 서버리스 함수를 지원하므로 네이버 API 프록시가 정상 작동합니다.

#### 방법 1: Vercel CLI 사용
```bash
npm i -g vercel
vercel
```

#### 방법 2: Vercel 웹사이트
1. [Vercel](https://vercel.com)에 로그인
2. "New Project" 클릭
3. GitHub 저장소 연결
4. 자동 배포

### 3. Netlify 배포

Netlify Functions를 사용하여 프록시 서버를 배포할 수 있습니다.

## 프록시 서버

### 로컬 개발
```bash
node naver-proxy-server.js
```

### 배포 환경
- **Vercel**: `api/naver-proxy.js` 서버리스 함수 자동 사용
- **GitHub Pages**: 프록시 없음 (CORS 에러 가능)
- **Netlify**: `netlify/functions/naver-proxy.js` 필요

## 환경 변수

네이버 API 인증 정보는 코드에 포함되어 있습니다. 
프로덕션 환경에서는 환경 변수로 관리하는 것을 권장합니다.

