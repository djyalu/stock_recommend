## Stock Recommend

미국과 한국 주식 정보를 수집하여 종목을 추천하는 웹 애플리케이션입니다.  
주요 주식 종목의 재무 지표를 분석하여 추천 점수를 계산하고, 상위 추천 종목을 제공합니다.

---

###  주요 기능
- **주식 데이터 수집**: 미국과 한국의 주요 주식 종목 데이터를 자동으로 수집합니다.
- **종목 추천 시스템**: PER, ROE, PBR, 매출 성장률, 부채비율 등을 종합 평가하여 추천 점수를 계산합니다.
- **실시간 시세 조회**: Yahoo Finance API를 활용해 현재가, 변동률, 거래량 등을 표시합니다.
- **추천 이유 제공**: 각 종목의 추천 이유를 상세히 표시합니다.
- **다국어 UI**: 한국어, 영어, 일본어, 중국어, 스페인어 UI 전환.

---

###  기술 스택
| Layer | Tech |
| --- | --- |
| UI | HTML5, CSS (Glassmorphism), Inter Font |
| 로직 | Vanilla JavaScript (`script.js`) |
| 데이터 | Yahoo Finance Chart API (미국/한국 주식) |
| 프록시 | `corsproxy.io`, `allorigins.win`, `thingproxy.freeboard.io` |
| 추천 알고리즘 | PER, ROE, PBR, 매출 성장률, 부채비율 종합 평가 |

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
> 2. `script.js`가 다국어 UI를 초기화합니다.  
> 3. 사용자가 "종목 추천 받기" 버튼을 클릭하면, 미국과 한국 주식 목록을 순회하며 데이터를 수집합니다.  
> 4. `fetchWithProxy`가 3단계 CORS 프록시를 순차 시도하여 Yahoo Finance API와 통신합니다.  
> 5. 각 종목의 재무 지표를 분석하여 추천 점수를 계산하고, 상위 추천 종목을 카드 형태로 렌더링합니다.

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
