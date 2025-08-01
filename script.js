// 전 세계 주요 도시 위치 데이터
const LOCATION_DATA = {
    "대한민국": {
        "서울": { lat: "37.5665", lon: "126.9780", timezone: "+09:00" },
        "부산": { lat: "35.1796", lon: "129.0756", timezone: "+09:00" },
        "대구": { lat: "35.8714", lon: "128.6014", timezone: "+09:00" },
        "인천": { lat: "37.4563", lon: "126.7052", timezone: "+09:00" },
        "광주": { lat: "35.1595", lon: "126.8526", timezone: "+09:00" },
        "대전": { lat: "36.3504", lon: "127.3845", timezone: "+09:00" },
        "울산": { lat: "35.5384", lon: "129.3114", timezone: "+09:00" }
    },
    "일본": {
        "도쿄": { lat: "35.6762", lon: "139.6503", timezone: "+09:00" },
        "오사카": { lat: "34.6937", lon: "135.5023", timezone: "+09:00" },
        "교토": { lat: "35.0116", lon: "135.7681", timezone: "+09:00" },
        "나고야": { lat: "35.1815", lon: "136.9066", timezone: "+09:00" },
        "후쿠오카": { lat: "33.5904", lon: "130.4017", timezone: "+09:00" }
    },
    "중국": {
        "베이징": { lat: "39.9042", lon: "116.4074", timezone: "+08:00" },
        "상하이": { lat: "31.2304", lon: "121.4737", timezone: "+08:00" },
        "광저우": { lat: "23.1291", lon: "113.2644", timezone: "+08:00" },
        "선전": { lat: "22.5431", lon: "114.0579", timezone: "+08:00" },
        "홍콩": { lat: "22.3193", lon: "114.1694", timezone: "+08:00" }
    },
    "미국": {
        "뉴욕": { lat: "40.7128", lon: "-74.0060", timezone: "-05:00" },
        "로스앤젤레스": { lat: "34.0522", lon: "-118.2437", timezone: "-08:00" },
        "시카고": { lat: "41.8781", lon: "-87.6298", timezone: "-06:00" },
        "휴스턴": { lat: "29.7604", lon: "-95.3698", timezone: "-06:00" },
        "피닉스": { lat: "33.4484", lon: "-112.0740", timezone: "-07:00" },
        "라스베이거스": { lat: "36.1699", lon: "-115.1398", timezone: "-08:00" }
    },
    "영국": {
        "런던": { lat: "51.5074", lon: "-0.1278", timezone: "+00:00" },
        "맨체스터": { lat: "53.4808", lon: "-2.2426", timezone: "+00:00" },
        "버밍엄": { lat: "52.4862", lon: "-1.8904", timezone: "+00:00" },
        "리버풀": { lat: "53.4084", lon: "-2.9916", timezone: "+00:00" }
    },
    "독일": {
        "베를린": { lat: "52.5200", lon: "13.4050", timezone: "+01:00" },
        "뮌헨": { lat: "48.1351", lon: "11.5820", timezone: "+01:00" },
        "함부르크": { lat: "53.5511", lon: "9.9937", timezone: "+01:00" },
        "쾰른": { lat: "50.9375", lon: "6.9603", timezone: "+01:00" }
    },
    "프랑스": {
        "파리": { lat: "48.8566", lon: "2.3522", timezone: "+01:00" },
        "마르세유": { lat: "43.2965", lon: "5.3698", timezone: "+01:00" },
        "리옹": { lat: "45.7640", lon: "4.8357", timezone: "+01:00" },
        "툴루즈": { lat: "43.6047", lon: "1.4442", timezone: "+01:00" }
    },
    "이탈리아": {
        "로마": { lat: "41.9028", lon: "12.4964", timezone: "+01:00" },
        "밀라노": { lat: "45.4642", lon: "9.1900", timezone: "+01:00" },
        "나폴리": { lat: "40.8518", lon: "14.2681", timezone: "+01:00" },
        "토리노": { lat: "45.0703", lon: "7.6869", timezone: "+01:00" }
    },
    "호주": {
        "시드니": { lat: "-33.8688", lon: "151.2093", timezone: "+10:00" },
        "멜버른": { lat: "-37.8136", lon: "144.9631", timezone: "+10:00" },
        "브리즈번": { lat: "-27.4698", lon: "153.0251", timezone: "+10:00" },
        "퍼스": { lat: "-31.9505", lon: "115.8605", timezone: "+08:00" }
    },
    "인도": {
        "뉴델리": { lat: "28.7041", lon: "77.1025", timezone: "+05:30" },
        "뭄바이": { lat: "19.0760", lon: "72.8777", timezone: "+05:30" },
        "방갈로르": { lat: "12.9716", lon: "77.5946", timezone: "+05:30" },
        "첸나이": { lat: "13.0827", lon: "80.2707", timezone: "+05:30" },
        "콜카타": { lat: "22.5726", lon: "88.3639", timezone: "+05:30" }
    },
    "브라질": {
        "상파울루": { lat: "-23.5505", lon: "-46.6333", timezone: "-03:00" },
        "리우데자네이루": { lat: "-22.9068", lon: "-43.1729", timezone: "-03:00" },
        "브라질리아": { lat: "-15.8267", lon: "-47.9218", timezone: "-03:00" },
        "살바도르": { lat: "-12.9714", lon: "-38.5014", timezone: "-03:00" }
    },
    "러시아": {
        "모스크바": { lat: "55.7558", lon: "37.6173", timezone: "+03:00" },
        "상트페테르부르크": { lat: "59.9311", lon: "30.3609", timezone: "+03:00" },
        "노보시비르스크": { lat: "55.0084", lon: "82.9357", timezone: "+07:00" },
        "예카테린부르크": { lat: "56.8431", lon: "60.6454", timezone: "+05:00" }
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
    interpretationTextEl.value = result.interpretation || '해석 결과를 받지 못했습니다.';
    
    // 결과 섹션 표시
    showResults();
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