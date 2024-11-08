# 웹사이트 기능 정의서

## 메인 페이지
- 메인 페이지: `/`

## 회사 소개
- 회사 소개: `/about`

## 회원 인증
- 로그인: `/authorize/sign-in`
- 회원가입: `/authorize/sign-up`
- 아이디 찾기: `/authorize/find-id`
- 비밀번호 찾기: `/authorize/find-pass`

## 마이 페이지
- 마이 페이지: `/my`
- 내 정보 수정: `/my/modify`
- 비밀번호 변경: `/my/modify/password`
- 회원 탈퇴: `/my/withdraw`

## 게시판
- 게시글 목록: `/board/:boardKey`
- 게시글 내용 보기: `/board/:boardKey/:postId`
- 게시글 작성하기: `/board/:boardKey/write`
- 게시글 수정하기: `/board/:boardKey/:postId/edit`

## 약관 페이지
- 사이트 이용 약관: `/agreement/site`
- 개인정보처리방침: `/agreement/privacy`
