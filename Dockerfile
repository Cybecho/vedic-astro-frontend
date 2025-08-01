FROM nginx:alpine

# 정적 파일 복사
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Nginx 설정 파일 복사
COPY nginx.conf /etc/nginx/nginx.conf

# 포트 80 노출
EXPOSE 80

# Nginx 시작
CMD ["nginx", "-g", "daemon off;"]