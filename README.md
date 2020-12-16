## 실행 순서

- .env.test 작성
- .env.test의 DB_NAME으로 DB생성
- npm run start:test

## REST API

- POST /auth/register 회원가입
- POST /auth/login 로그인

- GET /memos 전체 메모 확인
  - 로그인 필요
  - 비밀메모 포함 안됨
  - 내가작성한 비밀메모는 포함됨
- GET /memos/mine 내가 작성한 메모 확인
  - 로그인 필요
- POST /memos 메모 작성
  - 로그인 필요
  - 일반 메모 or 비밀메모 작성 가능
