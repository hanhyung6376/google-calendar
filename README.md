# Google Calendar API 연동 프로토타입
google oauth2 방식의 인증 방식을 이용해 calendar events insert, get api 사용
user의 refresh token을 이용해 access token 발급 후 local storage를 이용하여 저장 후 api 요청
local storage에 access token이 없거나 access token이 만료된 경우 api 요청 후 authorization error 에러를 받을 시 access_token 재발급

### Tech Stack
- recoil
- axios
- styled-components

### .env
```javascript
REACT_APP_GOOGLE_CLIENT_ID="your client id"
REACT_APP_GOOGLE_SECRET_KEY="your client secret key"
REACT_APP_REFRESH_TOKEN="your oauth2 refresh token"
REACT_APP_GOOGLE_API_KEY="your api key"
REACT_APP_CALENDAR_ID="your calendar id"
```

### project run
```javascript
yarn install
yarn start
```
