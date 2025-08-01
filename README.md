# 베다 점성술 프론트엔드

베다 점성술 서비스를 위한 웹 프론트엔드입니다. 사용자가 생년월일과 출생 위치를 입력하면 점성술 해석을 받을 수 있습니다.

## 기능

- **직관적인 입력 폼**: 생년월일, 출생 시간, 위치 선택
- **전 세계 주요 도시 지원**: 12개국 50여 개 도시의 위도/경도 정보 내장
- **커스텀 프롬프트**: 개발자용 커스텀 프롬프트 입력 기능
- **성능 모니터링**: 응답 시간 및 토큰 사용량 표시
- **반응형 디자인**: 모바일 및 데스크톱 지원
- **로딩 애니메이션**: 처리 중 시각적 피드백

## 사용법

### 로컬에서 파일 직접 실행
```bash
# 간단한 HTTP 서버 실행 (Python)
python -m http.server 8000

# 또는 Node.js 사용
npx serve .

# 브라우저에서 http://localhost:8000 접속
```

### Docker로 실행
```bash
# 이미지 빌드
docker build -t vedic-astro-frontend .

# 컨테이너 실행
docker run -p 80:80 vedic-astro-frontend

# 브라우저에서 http://localhost 접속
```

### Docker Compose로 실행
```bash
# 네트워크 생성 (다른 서비스와 연결용)
docker network create vedic-astro-network

# 서비스 실행
docker-compose up -d
```

## 설정

### API Gateway URL 변경
`script.js` 파일에서 `API_GATEWAY_URL` 상수를 수정하세요:

```javascript
const API_GATEWAY_URL = 'http://your-gateway-url:9595';
```

### 지원 도시 추가
`script.js` 파일의 `LOCATION_DATA` 객체에 새로운 국가/도시를 추가할 수 있습니다:

```javascript
"새로운국가": {
  "새로운도시": { 
    lat: "위도", 
    lon: "경도", 
    timezone: "시간대" 
  }
}
```

## 파일 구조

```
vedic-astro-frontend/
├── index.html          # 메인 HTML 파일
├── style.css           # CSS 스타일시트
├── script.js           # JavaScript 로직
├── Dockerfile          # Docker 이미지 빌드
├── nginx.conf          # Nginx 설정
├── docker-compose.yml  # Docker Compose 설정
└── README.md          # 이 파일
```

## 지원 도시 목록

### 아시아
- **대한민국**: 서울, 부산, 대구, 인천, 광주, 대전, 울산
- **일본**: 도쿄, 오사카, 교토, 나고야, 후쿠오카
- **중국**: 베이징, 상하이, 광저우, 선전, 홍콩
- **인도**: 뉴델리, 뭄바이, 방갈로르, 첸나이, 콜카타

### 북미
- **미국**: 뉴욕, 로스앤젤레스, 시카고, 휴스턴, 피닉스, 라스베이거스

### 유럽
- **영국**: 런던, 맨체스터, 버밍엄, 리버풀
- **독일**: 베를린, 뮌헨, 함부르크, 쾰른
- **프랑스**: 파리, 마르세유, 리옹, 툴루즈
- **이탈리아**: 로마, 밀라노, 나폴리, 토리노

### 기타
- **호주**: 시드니, 멜버른, 브리즈번, 퍼스
- **브라질**: 상파울루, 리우데자네이루, 브라질리아, 살바도르
- **러시아**: 모스크바, 상트페테르부르크, 노보시비르스크, 예카테린부르크

## 의존성

- **API Gateway**: `localhost:9595` 에서 실행되는 베다 점성술 API Gateway
- **백엔드 서비스**: 점성술 계산 서비스 (9393) 및 AI 분석 서비스 (9494)

## 브라우저 호환성

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 라이선스

교육 및 연구 목적으로 제작되었습니다.