## Stock Guru

AI 기반 가상 투자 고수들에게서 조언을 얻을 수 있는 다국어 웹 애플리케이션입니다.  
사용자는 종목을 입력하고 원하는 고수를 선택하면, 실시간 주가 데이터와 뉴스 기반 요약, 고수별 맞춤 조언을 한 번에 확인할 수 있습니다.

---

###  주요 기능
- **실시간 시세 조회**: Yahoo Finance API를 활용해 현재가, 변동률, 거래량 등을 표시합니다.
- **투자자 선택형 조언**: 워렌 버핏, 피터 린치 등 10명의 철학을 반영한 동적 조언과 분석 근거 제공.
- **다국어 UI**: 한국어, 영어, 일본어, 중국어, 스페인어 UI 전환.
- **뉴스 요약**: 종목별 최신 뉴스 + 감성 키워드 기반 브리핑.
- **자동완성 검색**: 티커/종목명 자동완성으로 빠른 탐색 지원.

---

###  기술 스택
| Layer | Tech |
| --- | --- |
| UI | HTML5, CSS (Glassmorphism), Inter Font |
| 로직 | Vanilla JavaScript (`script.js`) |
| 데이터 | Yahoo Finance Search/Chart API |
| 프록시 | `corsproxy.io`, `allorigins.win`, `thingproxy.freeboard.io` |

---

###  아키텍처 인포그래픽
```mermaid
graph TD
    A[사용자 브라우저] -->|요청/상호작용| B[index.html & style.css]
    B --> C[script.js<br/>상태  이벤트 로직]
    C --> D[투자자 데이터<br/>(내장 JSON)]
    C -->|fetchWithProxy| E[CORS Proxy 계층<br/>(corsproxy  allorigins  thingproxy)]
    E --> F[Yahoo Finance API<br/>Search  Chart  News]
    C --> G[UI 컴포넌트 렌더링<br/>(투자자 카드/조언/뉴스)]
    G --> A
```

> **흐름 설명**
> 1. 사용자가 브라우저에서 정적 자산(`index.html`, `style.css`)을 로드합니다.  
> 2. `script.js`가 투자자 데이터를 로드하고 다국어 UI, 자동완성, 조언 로직을 초기화합니다.  
> 3. 종목 검색/조언 실행 시 `fetchWithProxy`가 3단계 CORS 프록시를 순차 시도하여 Yahoo Finance API와 통신합니다.  
> 4. 응답 데이터를 실시간 시세 카드, 고수 조언 카드, 뉴스 브리핑으로 렌더링합니다.

---

###  로컬 실행
```bash
npm install
npx serve -l 3000
# 또는
python -m http.server 3000
```
브라우저에서 `http://localhost:3000` 접속 후 테스트하세요.

---

###  향후 개선 아이디어
- Yahoo Finance `quoteSummary` 등으로 실재 재무 지표 연동
- 서버리스 프록시/캐시를 통한 안정적인 API 호출
- 접근성 개선(ARIA, 키보드 포커스 루프)
- 투자자 데이터 분리/모듈화
