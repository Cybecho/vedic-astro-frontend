// 전 세계 주요 도시 위치 데이터
const LOCATION_DATA = {
    "대한민국": {
        "서울": { lat: "37.5665", lon: "126.9780", timezone: "+09:00" },
        "부산": { lat: "35.1796", lon: "129.0756", timezone: "+09:00" },
        "대구": { lat: "35.8714", lon: "128.6014", timezone: "+09:00" },
        "인천": { lat: "37.4563", lon: "126.7052", timezone: "+09:00" },
        "광주": { lat: "35.1595", lon: "126.8526", timezone: "+09:00" },
        "대전": { lat: "36.3504", lon: "127.3845", timezone: "+09:00" },
        "울산": { lat: "35.5384", lon: "129.3114", timezone: "+09:00" },
        "수원": { lat: "37.2636", lon: "127.0286", timezone: "+09:00" },
        "고양": { lat: "37.6583", lon: "126.8320", timezone: "+09:00" },
        "용인": { lat: "37.2411", lon: "127.1776", timezone: "+09:00" },
        "성남": { lat: "37.4449", lon: "127.1388", timezone: "+09:00" },
        "창원": { lat: "35.2538", lon: "128.6402", timezone: "+09:00" },
        "청주": { lat: "36.6424", lon: "127.4890", timezone: "+09:00" },
        "전주": { lat: "35.8242", lon: "127.1480", timezone: "+09:00" },
        "천안": { lat: "36.8151", lon: "127.1139", timezone: "+09:00" },
        "안산": { lat: "37.3236", lon: "126.8219", timezone: "+09:00" },
        "안양": { lat: "37.3943", lon: "126.9568", timezone: "+09:00" },
        "포항": { lat: "36.0190", lon: "129.3435", timezone: "+09:00" },
        "제주": { lat: "33.4996", lon: "126.5312", timezone: "+09:00" }
    },
    "일본": {
        "도쿄": { lat: "35.6762", lon: "139.6503", timezone: "+09:00" },
        "오사카": { lat: "34.6937", lon: "135.5023", timezone: "+09:00" },
        "교토": { lat: "35.0116", lon: "135.7681", timezone: "+09:00" },
        "나고야": { lat: "35.1815", lon: "136.9066", timezone: "+09:00" },
        "후쿠오카": { lat: "33.5904", lon: "130.4017", timezone: "+09:00" },
        "요코하마": { lat: "35.4437", lon: "139.6380", timezone: "+09:00" },
        "고베": { lat: "34.6901", lon: "135.1956", timezone: "+09:00" },
        "삿포로": { lat: "43.0642", lon: "141.3469", timezone: "+09:00" },
        "센다이": { lat: "38.2682", lon: "140.8694", timezone: "+09:00" },
        "가와사키": { lat: "35.5308", lon: "139.7029", timezone: "+09:00" },
        "히로시마": { lat: "34.3853", lon: "132.4553", timezone: "+09:00" },
        "오키나와": { lat: "26.2124", lon: "127.6792", timezone: "+09:00" },
        "니가타": { lat: "37.9022", lon: "139.0232", timezone: "+09:00" },
        "하마마츠": { lat: "34.7105", lon: "137.7353", timezone: "+09:00" },
        "쿠마모토": { lat: "32.8031", lon: "130.7076", timezone: "+09:00" }
    },
    "중국": {
        "베이징": { lat: "39.9042", lon: "116.4074", timezone: "+08:00" },
        "상하이": { lat: "31.2304", lon: "121.4737", timezone: "+08:00" },
        "광저우": { lat: "23.1291", lon: "113.2644", timezone: "+08:00" },
        "선전": { lat: "22.5431", lon: "114.0579", timezone: "+08:00" },
        "홍콩": { lat: "22.3193", lon: "114.1694", timezone: "+08:00" },
        "청두": { lat: "30.5728", lon: "104.0668", timezone: "+08:00" },
        "항저우": { lat: "30.2741", lon: "120.1551", timezone: "+08:00" },
        "우한": { lat: "30.5928", lon: "114.3055", timezone: "+08:00" },
        "시안": { lat: "34.3416", lon: "108.9398", timezone: "+08:00" },
        "난징": { lat: "32.0603", lon: "118.7969", timezone: "+08:00" },
        "톈진": { lat: "39.3054", lon: "117.3231", timezone: "+08:00" },
        "충칭": { lat: "29.4316", lon: "106.9123", timezone: "+08:00" },
        "지난": { lat: "36.6512", lon: "117.1201", timezone: "+08:00" },
        "칭다오": { lat: "36.0986", lon: "120.3719", timezone: "+08:00" },
        "대련": { lat: "38.9140", lon: "121.6147", timezone: "+08:00" },
        "선양": { lat: "41.8057", lon: "123.4315", timezone: "+08:00" },
        "하얼빈": { lat: "45.8038", lon: "126.5349", timezone: "+08:00" },
        "마카오": { lat: "22.1987", lon: "113.5439", timezone: "+08:00" }
    },
    "미국": {
        "뉴욕": { lat: "40.7128", lon: "-74.0060", timezone: "-05:00" },
        "로스앤젤레스": { lat: "34.0522", lon: "-118.2437", timezone: "-08:00" },
        "시카고": { lat: "41.8781", lon: "-87.6298", timezone: "-06:00" },
        "휴스턴": { lat: "29.7604", lon: "-95.3698", timezone: "-06:00" },
        "피닉스": { lat: "33.4484", lon: "-112.0740", timezone: "-07:00" },
        "라스베이거스": { lat: "36.1699", lon: "-115.1398", timezone: "-08:00" },
        "필라델피아": { lat: "39.9526", lon: "-75.1652", timezone: "-05:00" },
        "샌안토니오": { lat: "29.4241", lon: "-98.4936", timezone: "-06:00" },
        "샌디에이고": { lat: "32.7157", lon: "-117.1611", timezone: "-08:00" },
        "댈러스": { lat: "32.7767", lon: "-96.7970", timezone: "-06:00" },
        "샌호세": { lat: "37.3382", lon: "-121.8863", timezone: "-08:00" },
        "오스틴": { lat: "30.2672", lon: "-97.7431", timezone: "-06:00" },
        "샌프란시스코": { lat: "37.7749", lon: "-122.4194", timezone: "-08:00" },
        "마이애미": { lat: "25.7617", lon: "-80.1918", timezone: "-05:00" },
        "시애틀": { lat: "47.6062", lon: "-122.3321", timezone: "-08:00" },
        "덴버": { lat: "39.7392", lon: "-104.9903", timezone: "-07:00" },
        "워싱턴DC": { lat: "38.9072", lon: "-77.0369", timezone: "-05:00" },
        "보스턴": { lat: "42.3601", lon: "-71.0589", timezone: "-05:00" },
        "애틀랜타": { lat: "33.7490", lon: "-84.3880", timezone: "-05:00" },
        "포틀랜드": { lat: "45.5152", lon: "-122.6784", timezone: "-08:00" },
        "솔트레이크시티": { lat: "40.7608", lon: "-111.8910", timezone: "-07:00" },
        "미니애폴리스": { lat: "44.9778", lon: "-93.2650", timezone: "-06:00" },
        "호놀룰루": { lat: "21.3099", lon: "-157.8581", timezone: "-10:00" },
        "앵커리지": { lat: "61.2181", lon: "-149.9003", timezone: "-09:00" }
    },
    "영국": {
        "런던": { lat: "51.5074", lon: "-0.1278", timezone: "+00:00" },
        "맨체스터": { lat: "53.4808", lon: "-2.2426", timezone: "+00:00" },
        "버밍엄": { lat: "52.4862", lon: "-1.8904", timezone: "+00:00" },
        "리버풀": { lat: "53.4084", lon: "-2.9916", timezone: "+00:00" },
        "에든버러": { lat: "55.9533", lon: "-3.1883", timezone: "+00:00" },
        "글래스고": { lat: "55.8642", lon: "-4.2518", timezone: "+00:00" },
        "셰필드": { lat: "53.3811", lon: "-1.4701", timezone: "+00:00" },
        "브리스톨": { lat: "51.4545", lon: "-2.5879", timezone: "+00:00" },
        "리즈": { lat: "53.8008", lon: "-1.5491", timezone: "+00:00" },
        "레스터": { lat: "52.6369", lon: "-1.1398", timezone: "+00:00" },
        "노팅엄": { lat: "52.9548", lon: "-1.1581", timezone: "+00:00" },
        "뉴캐슬": { lat: "54.9783", lon: "-1.6178", timezone: "+00:00" },
        "벨파스트": { lat: "54.5973", lon: "-5.9301", timezone: "+00:00" },
        "카디프": { lat: "51.4816", lon: "-3.1791", timezone: "+00:00" },
        "옥스포드": { lat: "51.7520", lon: "-1.2577", timezone: "+00:00" },
        "케임브리지": { lat: "52.2053", lon: "0.1218", timezone: "+00:00" }
    },
    "독일": {
        "베를린": { lat: "52.5200", lon: "13.4050", timezone: "+01:00" },
        "뮌헨": { lat: "48.1351", lon: "11.5820", timezone: "+01:00" },
        "함부르크": { lat: "53.5511", lon: "9.9937", timezone: "+01:00" },
        "쾰른": { lat: "50.9375", lon: "6.9603", timezone: "+01:00" },
        "프랑크푸르트": { lat: "50.1109", lon: "8.6821", timezone: "+01:00" },
        "슈투트가르트": { lat: "48.7758", lon: "9.1829", timezone: "+01:00" },
        "뒤셀도르프": { lat: "51.2277", lon: "6.7735", timezone: "+01:00" },
        "도르트문트": { lat: "51.5136", lon: "7.4653", timezone: "+01:00" },
        "에센": { lat: "51.4556", lon: "7.0116", timezone: "+01:00" },
        "라이프치히": { lat: "51.3397", lon: "12.3731", timezone: "+01:00" },
        "브레멘": { lat: "53.0793", lon: "8.8017", timezone: "+01:00" },
        "드레스덴": { lat: "51.0504", lon: "13.7373", timezone: "+01:00" },
        "하노버": { lat: "52.3759", lon: "9.7320", timezone: "+01:00" },
        "뉘른베르크": { lat: "49.4521", lon: "11.0767", timezone: "+01:00" },
        "두이스부르크": { lat: "51.4344", lon: "6.7623", timezone: "+01:00" },
        "보훔": { lat: "51.4819", lon: "7.2162", timezone: "+01:00" }
    },
    "프랑스": {
        "파리": { lat: "48.8566", lon: "2.3522", timezone: "+01:00" },
        "마르세유": { lat: "43.2965", lon: "5.3698", timezone: "+01:00" },
        "리옹": { lat: "45.7640", lon: "4.8357", timezone: "+01:00" },
        "툴루즈": { lat: "43.6047", lon: "1.4442", timezone: "+01:00" },
        "니스": { lat: "43.7102", lon: "7.2620", timezone: "+01:00" },
        "낭트": { lat: "47.2184", lon: "-1.5536", timezone: "+01:00" },
        "스트라스부르": { lat: "48.5734", lon: "7.7521", timezone: "+01:00" },
        "몽펠리에": { lat: "43.6108", lon: "3.8767", timezone: "+01:00" },
        "보르도": { lat: "44.8378", lon: "-0.5792", timezone: "+01:00" },
        "릴": { lat: "50.6292", lon: "3.0573", timezone: "+01:00" },
        "렌": { lat: "48.1173", lon: "-1.6778", timezone: "+01:00" },
        "르아브르": { lat: "49.4944", lon: "0.1079", timezone: "+01:00" },
        "생테티엔": { lat: "45.4397", lon: "4.3872", timezone: "+01:00" },
        "툴롱": { lat: "43.1242", lon: "5.9280", timezone: "+01:00" },
        "그르노블": { lat: "45.1885", lon: "5.7245", timezone: "+01:00" },
        "디종": { lat: "47.3220", lon: "5.0415", timezone: "+01:00" }
    },
    "이탈리아": {
        "로마": { lat: "41.9028", lon: "12.4964", timezone: "+01:00" },
        "밀라노": { lat: "45.4642", lon: "9.1900", timezone: "+01:00" },
        "나폴리": { lat: "40.8518", lon: "14.2681", timezone: "+01:00" },
        "토리노": { lat: "45.0703", lon: "7.6869", timezone: "+01:00" },
        "팔레르모": { lat: "38.1157", lon: "13.3615", timezone: "+01:00" },
        "제노바": { lat: "44.4056", lon: "8.9463", timezone: "+01:00" },
        "볼로냐": { lat: "44.4949", lon: "11.3426", timezone: "+01:00" },
        "피렌체": { lat: "43.7696", lon: "11.2558", timezone: "+01:00" },
        "바리": { lat: "41.1171", lon: "16.8719", timezone: "+01:00" },
        "카타니아": { lat: "37.5079", lon: "15.0830", timezone: "+01:00" },
        "베네치아": { lat: "45.4408", lon: "12.3155", timezone: "+01:00" },
        "베로나": { lat: "45.4384", lon: "10.9916", timezone: "+01:00" },
        "메시나": { lat: "38.1938", lon: "15.5540", timezone: "+01:00" },
        "파도바": { lat: "45.4064", lon: "11.8768", timezone: "+01:00" },
        "트리에스테": { lat: "45.6495", lon: "13.7768", timezone: "+01:00" },
        "타란토": { lat: "40.4668", lon: "17.2725", timezone: "+01:00" }
    },
    "호주": {
        "시드니": { lat: "-33.8688", lon: "151.2093", timezone: "+10:00" },
        "멜버른": { lat: "-37.8136", lon: "144.9631", timezone: "+10:00" },
        "브리즈번": { lat: "-27.4698", lon: "153.0251", timezone: "+10:00" },
        "퍼스": { lat: "-31.9505", lon: "115.8605", timezone: "+08:00" },
        "애들레이드": { lat: "-34.9285", lon: "138.6007", timezone: "+09:30" },
        "골드코스트": { lat: "-28.0167", lon: "153.4000", timezone: "+10:00" },
        "뉴캐슬": { lat: "-32.9267", lon: "151.7789", timezone: "+10:00" },
        "캔버라": { lat: "-35.2809", lon: "149.1300", timezone: "+10:00" },
        "선샤인코스트": { lat: "-26.6500", lon: "153.0667", timezone: "+10:00" },
        "울롱공": { lat: "-34.4278", lon: "150.8931", timezone: "+10:00" },
        "호바트": { lat: "-42.8821", lon: "147.3272", timezone: "+10:00" },
        "제롱": { lat: "-38.1499", lon: "144.3617", timezone: "+10:00" },
        "타운즈빌": { lat: "-19.2590", lon: "146.8169", timezone: "+10:00" },
        "케언즈": { lat: "-16.9186", lon: "145.7781", timezone: "+10:00" },
        "다윈": { lat: "-12.4634", lon: "130.8456", timezone: "+09:30" },
        "앨리스 스프링스": { lat: "-23.6980", lon: "133.8807", timezone: "+09:30" }
    },
    "인도": {
        "뉴델리": { lat: "28.7041", lon: "77.1025", timezone: "+05:30" },
        "뭄바이": { lat: "19.0760", lon: "72.8777", timezone: "+05:30" },
        "방갈로르": { lat: "12.9716", lon: "77.5946", timezone: "+05:30" },
        "첸나이": { lat: "13.0827", lon: "80.2707", timezone: "+05:30" },
        "콜카타": { lat: "22.5726", lon: "88.3639", timezone: "+05:30" },
        "하이데라바드": { lat: "17.3850", lon: "78.4867", timezone: "+05:30" },
        "아메다바드": { lat: "23.0225", lon: "72.5714", timezone: "+05:30" },
        "푸네": { lat: "18.5204", lon: "73.8567", timezone: "+05:30" },
        "수랏": { lat: "21.1702", lon: "72.8311", timezone: "+05:30" },
        "자이푸르": { lat: "26.9124", lon: "75.7873", timezone: "+05:30" },
        "럭나우": { lat: "26.8467", lon: "80.9462", timezone: "+05:30" },
        "칸푸르": { lat: "26.4499", lon: "80.3319", timezone: "+05:30" },
        "나그푸르": { lat: "21.1458", lon: "79.0882", timezone: "+05:30" },
        "인도르": { lat: "22.7196", lon: "75.8577", timezone: "+05:30" },
        "트리바드룸": { lat: "8.5241", lon: "76.9366", timezone: "+05:30" },
        "코치": { lat: "9.9312", lon: "76.2673", timezone: "+05:30" },
        "비샤카파트남": { lat: "17.6868", lon: "83.2185", timezone: "+05:30" },
        "바라나시": { lat: "25.3176", lon: "82.9739", timezone: "+05:30" },
        "고아": { lat: "15.2993", lon: "74.1240", timezone: "+05:30" },
        "암리차르": { lat: "31.6340", lon: "74.8723", timezone: "+05:30" }
    },
    "브라질": {
        "상파울루": { lat: "-23.5505", lon: "-46.6333", timezone: "-03:00" },
        "리우데자네이루": { lat: "-22.9068", lon: "-43.1729", timezone: "-03:00" },
        "브라질리아": { lat: "-15.8267", lon: "-47.9218", timezone: "-03:00" },
        "살바도르": { lat: "-12.9714", lon: "-38.5014", timezone: "-03:00" },
        "포르탈레자": { lat: "-3.7172", lon: "-38.5433", timezone: "-03:00" },
        "벨루오리존치": { lat: "-19.8157", lon: "-43.9542", timezone: "-03:00" },
        "마나우스": { lat: "-3.1190", lon: "-60.0217", timezone: "-04:00" },
        "쿠리치바": { lat: "-25.4284", lon: "-49.2733", timezone: "-03:00" },
        "레시페": { lat: "-8.0476", lon: "-34.8770", timezone: "-03:00" },
        "포르투알레그리": { lat: "-30.0346", lon: "-51.2177", timezone: "-03:00" },
        "벨렘": { lat: "-1.4558", lon: "-48.5044", timezone: "-03:00" },
        "고이아니아": { lat: "-16.6869", lon: "-49.2648", timezone: "-03:00" },
        "과루요스": { lat: "-23.4624", lon: "-46.5330", timezone: "-03:00" },
        "캄피나스": { lat: "-22.9099", lon: "-47.0626", timezone: "-03:00" },
        "상루이스": { lat: "-2.5297", lon: "-44.3028", timezone: "-03:00" },
        "상곤살루": { lat: "-22.8267", lon: "-43.0537", timezone: "-03:00" }
    },
    "러시아": {
        "모스크바": { lat: "55.7558", lon: "37.6173", timezone: "+03:00" },
        "상트페테르부르크": { lat: "59.9311", lon: "30.3609", timezone: "+03:00" },
        "노보시비르스크": { lat: "55.0084", lon: "82.9357", timezone: "+07:00" },
        "예카테린부르크": { lat: "56.8431", lon: "60.6454", timezone: "+05:00" },
        "니즈니노브고로드": { lat: "56.2965", lon: "43.9361", timezone: "+03:00" },
        "삼라": { lat: "53.1951", lon: "50.1069", timezone: "+04:00" },
        "옴스크": { lat: "54.9885", lon: "73.3242", timezone: "+06:00" },
        "카잔": { lat: "55.8304", lon: "49.0661", timezone: "+03:00" },
        "로스토프나도누": { lat: "47.2357", lon: "39.7015", timezone: "+03:00" },
        "우파": { lat: "54.7388", lon: "55.9721", timezone: "+05:00" },
        "크라스노야르스크": { lat: "56.0184", lon: "92.8672", timezone: "+07:00" },
        "사라토프": { lat: "51.5924", lon: "45.9606", timezone: "+04:00" },
        "보로네시": { lat: "51.6720", lon: "39.1843", timezone: "+03:00" },
        "페름": { lat: "58.0105", lon: "56.2502", timezone: "+05:00" },
        "볼고그라드": { lat: "48.7080", lon: "44.5133", timezone: "+04:00" },
        "이르쿠츠크": { lat: "52.2978", lon: "104.2964", timezone: "+08:00" },
        "블라디보스토크": { lat: "43.1056", lon: "131.8735", timezone: "+10:00" },
        "칼리닌그라드": { lat: "54.7104", lon: "20.4522", timezone: "+02:00" }
    }
};

// API Gateway URL - 현재 호스트의 /api 경로 사용 (Nginx 프록시)
const API_GATEWAY_URL = `${window.location.protocol}//${window.location.host}/api`;

// DOM 요소 참조
let form, loadingOverlay, resultsSection;
let countrySelect, citySelect, latitudeInput, longitudeInput, timezoneInput;
let processingTimeEl, tokenUsageEl, interpretationTextEl;

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    console.log('페이지 로드됨. API Gateway URL:', API_GATEWAY_URL);
    initializeDOM();
    populateCountrySelect();
    setupEventListeners();
});

function initializeDOM() {
    form = document.getElementById('astro-form');
    loadingOverlay = document.getElementById('loading-overlay');
    resultsSection = document.getElementById('results-section');
    
    countrySelect = document.getElementById('country');
    citySelect = document.getElementById('city');
    latitudeInput = document.getElementById('latitude');
    longitudeInput = document.getElementById('longitude');
    timezoneInput = document.getElementById('timezone');
    
    processingTimeEl = document.getElementById('processing-time');
    tokenUsageEl = document.getElementById('token-usage');
    interpretationTextEl = document.getElementById('interpretation-text');
}

function populateCountrySelect() {
    const countries = Object.keys(LOCATION_DATA);
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countrySelect.appendChild(option);
    });
}

function setupEventListeners() {
    // 국가 선택 시 도시 목록 업데이트
    countrySelect.addEventListener('change', function() {
        updateCitySelect(this.value);
    });
    
    // 도시 선택 시 위치 정보 업데이트
    citySelect.addEventListener('change', function() {
        updateLocationInfo(countrySelect.value, this.value);
    });
    
    // 폼 제출 이벤트
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmit();
    });
    
    // 폼 리셋 이벤트
    form.addEventListener('reset', function() {
        setTimeout(() => {
            resetForm();
        }, 10);
    });
    
    // 결과 복사 버튼
    document.getElementById('copy-result').addEventListener('click', function() {
        copyResultToClipboard();
    });
    
    // 새로운 해석 버튼
    document.getElementById('new-reading').addEventListener('click', function() {
        showForm();
    });
}

function updateCitySelect(country) {
    // 도시 선택 초기화
    citySelect.innerHTML = '<option value="">도시 선택</option>';
    
    if (country && LOCATION_DATA[country]) {
        const cities = Object.keys(LOCATION_DATA[country]);
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
        citySelect.disabled = false;
    } else {
        citySelect.innerHTML = '<option value="">먼저 국가를 선택하세요</option>';
        citySelect.disabled = true;
    }
    
    // 위치 정보 초기화
    clearLocationInfo();
}

function updateLocationInfo(country, city) {
    if (country && city && LOCATION_DATA[country] && LOCATION_DATA[country][city]) {
        const location = LOCATION_DATA[country][city];
        latitudeInput.value = location.lat;
        longitudeInput.value = location.lon;
        timezoneInput.value = location.timezone;
    } else {
        clearLocationInfo();
    }
}

function clearLocationInfo() {
    latitudeInput.value = '';
    longitudeInput.value = '';
    timezoneInput.value = '';
}

async function handleFormSubmit() {
    if (!validateForm()) {
        return;
    }
    
    const formData = collectFormData();
    
    try {
        showLoading();
        const result = await callAstroAPI(formData);
        displayResult(result);
    } catch (error) {
        handleError(error);
    } finally {
        hideLoading();
    }
}

function validateForm() {
    const requiredFields = [
        'birth-year', 'birth-month', 'birth-day',
        'birth-hour', 'birth-minute', 'country', 'city'
    ];
    
    for (const fieldId of requiredFields) {
        const field = document.getElementById(fieldId);
        if (!field.value.trim()) {
            field.focus();
            alert(`${field.labels[0].textContent}을(를) 입력해주세요.`);
            return false;
        }
    }
    
    // 날짜 유효성 검사
    const year = parseInt(document.getElementById('birth-year').value);
    const month = parseInt(document.getElementById('birth-month').value);
    const day = parseInt(document.getElementById('birth-day').value);
    
    const date = new Date(year, month - 1, day);
    if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
        alert('올바른 날짜를 입력해주세요.');
        return false;
    }
    
    return true;
}

function collectFormData() {
    return {
        latitude: latitudeInput.value,
        longitude: longitudeInput.value,
        year: document.getElementById('birth-year').value,
        month: document.getElementById('birth-month').value,
        day: document.getElementById('birth-day').value,
        hour: document.getElementById('birth-hour').value,
        min: document.getElementById('birth-minute').value,
        sec: document.getElementById('birth-second').value,
        time_zone: timezoneInput.value,
        dst_hour: document.getElementById('dst-hour').value,
        dst_min: document.getElementById('dst-minute').value,
        custom_prompt: document.getElementById('custom-prompt').value.trim()
    };
}

async function callAstroAPI(data) {
    console.log('API 호출 URL:', `${API_GATEWAY_URL}/astro`);
    console.log('요청 데이터:', data);
    
    try {
        const response = await fetch(`${API_GATEWAY_URL}/astro`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            mode: 'cors'
        });
        
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API 호출 실패: ${response.status} - ${errorText}`);
        }
        
        const result = await response.json();
        console.log('API 응답:', result);
        return result;
    } catch (error) {
        console.error('API 호출 중 오류:', error);
        throw error;
    }
}

function displayResult(result) {
    // 메타데이터 표시
    if (result.processing_time) {
        processingTimeEl.textContent = result.processing_time;
    }
    
    if (result.token_usage) {
        const usage = result.token_usage;
        tokenUsageEl.textContent = `총 ${usage.total_tokens || '?'}개 (입력: ${usage.prompt_tokens || '?'}, 출력: ${usage.completion_tokens || '?'})`;
    }
    
    // 해석 결과 표시
    const interpretation = result.interpretation || '해석 결과를 받지 못했습니다.';
    interpretationTextEl.value = interpretation;
    
    // textarea 높이를 내용에 맞게 자동 조정
    autoResizeTextarea(interpretationTextEl);
    
    // 결과 섹션 표시
    showResults();
}

function autoResizeTextarea(textarea) {
    // 기본 높이로 초기화
    textarea.style.height = 'auto';
    
    // 내용에 따라 높이 계산
    const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight);
    const lines = textarea.value.split('\n').length;
    const padding = parseInt(window.getComputedStyle(textarea).paddingTop) + 
                   parseInt(window.getComputedStyle(textarea).paddingBottom);
    
    // 최소 400px, 최대 1000px로 제한
    const minHeight = 400;
    const maxHeight = 1000;
    const calculatedHeight = Math.max(lines * lineHeight + padding, textarea.scrollHeight);
    const finalHeight = Math.min(Math.max(calculatedHeight, minHeight), maxHeight);
    
    textarea.style.height = finalHeight + 'px';
}

function handleError(error) {
    console.error('API 호출 오류:', error);
    
    let errorMessage = error.message;
    
    // 네트워크 오류 메시지 개선
    if (error.message.includes('Failed to fetch') || error.message.includes('ERR_BLOCKED_BY_CLIENT')) {
        errorMessage = `네트워크 오류가 발생했습니다.\n\n가능한 원인:\n1. 광고 차단기가 요청을 차단했을 수 있습니다\n2. API 서버(${API_GATEWAY_URL})에 연결할 수 없습니다\n3. CORS 정책으로 인해 차단되었을 수 있습니다\n\n해결 방법:\n- 광고 차단기를 일시적으로 비활성화해보세요\n- API 서버가 실행 중인지 확인하세요`;
    }
    
    alert(`오류가 발생했습니다: ${errorMessage}`);
}

function showLoading() {
    loadingOverlay.classList.remove('hidden');
    form.style.pointerEvents = 'none';
}

function hideLoading() {
    loadingOverlay.classList.add('hidden');
    form.style.pointerEvents = 'auto';
}

function showResults() {
    form.style.display = 'none';
    resultsSection.classList.remove('hidden');
}

function showForm() {
    resultsSection.classList.add('hidden');
    form.style.display = 'block';
}

function resetForm() {
    citySelect.innerHTML = '<option value="">먼저 국가를 선택하세요</option>';
    citySelect.disabled = true;
    clearLocationInfo();
    hideLoading();
    showForm();
}

function copyResultToClipboard() {
    interpretationTextEl.select();
    document.execCommand('copy');
    
    const button = document.getElementById('copy-result');
    const originalText = button.textContent;
    button.textContent = '복사됨!';
    setTimeout(() => {
        button.textContent = originalText;
    }, 2000);
}