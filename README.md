# 프로젝트 제목

이 프로젝트는 Node.js를 백엔드로, Vue.js를 프론트엔드로 사용하여 회원 관리와 게시판 기능을 제공하는 RESTful API 애플리케이션입니다. 데이터베이스로는 MySQL을 사용하며, JWT 토큰을 통해 회원 로그인 보안을 강화하였습니다. 또한, 회원 가입 시 휴대폰 번호 인증을 활용합니다.

## 목차

- [기능](#기능)
- [API 엔드포인트](#api-엔드포인트)
  - [회원 관리](#회원-관리)
  - [게시판](#게시판)
- [데이터베이스 구조](#데이터베이스-구조)
- [사용 기술](#사용-기술)
- [설치 방법](#설치-방법)

## 기능

- **회원 관리**: 회원 가입, 로그인, 비밀번호 재설정 및 탈퇴 기능을 제공합니다.
- **게시판 시스템**: 사용자가 게시글과 댓글을 작성, 수정, 삭제할 수 있으며, 다양한 게시판을 지원합니다.
- **토큰 기반 인증**: JWT 토큰을 통해 안전한 회원 인증을 제공합니다.
- **휴대폰 인증**: 회원 가입 시 휴대폰 번호 인증을 통해 보안을 강화합니다.

## 웹사이트 기능 정의서

### 메인 페이지

- 메인 페이지: `/`

### 회사 소개

- 회사 소개: `/about`

### 회원 인증

- 로그인: `/authorize/sign-in`
- 회원가입: `/authorize/sign-up`
- 아이디 찾기: `/authorize/find-id`
- 비밀번호 찾기: `/authorize/find-pass`

### 마이 페이지

- 마이 페이지: `/my`
- 내 정보 수정: `/my/modify`
- 비밀번호 변경: `/my/modify/password`
- 회원 탈퇴: `/my/withdraw`

### 게시판

- 게시글 목록: `/board/:boardKey`
- 게시글 내용 보기: `/board/:boardKey/:postId`
- 게시글 작성하기: `/board/:boardKey/write`
- 게시글 수정하기: `/board/:boardKey/:postId/edit`

### 약관 페이지

- 사이트 이용 약관: `/agreement/site`
- 개인정보처리방침: `/agreement/privacy`

## API 엔드포인트

### 회원 관리

| 기능                 | 메서드 | 엔드포인트               |
| -------------------- | ------ | ------------------------ |
| 로그인 처리          | POST   | `/users/authorize`       |
| 토큰 재발급          | POST   | `/users/authorize/token` |
| 내 정보 조회         | GET    | `/users`                 |
| 회원 가입            | POST   | `/users`                 |
| 회원 정보 수정       | PUT    | `/users`                 |
| 회원 탈퇴            | DELETE | `/users`                 |
| 비밀번호 변경        | PUT    | `/users/password-change` |
| 아이디/비밀번호 찾기 | POST   | `/find/:type`            |
| 비밀번호 초기화      | POST   | `/users/password-reset`  |
| 휴대폰 번호 인증     | POST   | `/users/authorize/phone` |

### 게시판

| 기능                 | 메서드 | 엔드포인트                                |
| -------------------- | ------ | ----------------------------------------- |
| 게시판 정보 가져오기 | GET    | `/board/:boardKey`                        |
| 게시글 목록 가져오기 | GET    | `/board/:boardKey/posts`                  |
| 게시글 상세 조회     | GET    | `/board/:boardKey/posts/:postId`          |
| 게시글 조회수 증가   | POST   | `/board/:boardKey/posts/:postId/hit`      |
| 댓글 목록 조회       | GET    | `/board/:boardKey/posts/:postId/comments` |
| 댓글 작성            | POST   | `/board/:boardKey/posts/:postId/comments` |
| 댓글 수정            | PUT    | `/board/:boardKey/posts/:postId/comments` |
| 댓글 삭제            | DELETE | `/board/:boardKey/posts/:postId/comments` |
| 게시글 신규 작성     | POST   | `/board/:boardKey/posts`                  |
| 게시글 수정          | PUT    | `/board/:boardKey/posts`                  |
| 게시글 삭제          | DELETE | `/board/:boardKey/posts/:postId`          |

## 데이터베이스 구조

이 애플리케이션은 MySQL에서 다음과 같은 테이블을 사용합니다:

| 테이블명          | 설명                 |
| ----------------- | -------------------- |
| `tbl_members`     | 회원 데이터 테이블   |
| `tbl_board`       | 게시판 정보 테이블   |
| `tbl_board_posts` | 게시글 데이터 테이블 |

## 사용 기술

- **프론트엔드**: Vue.js
- **백엔드**: Node.js
- **데이터베이스**: MySQL
- **인증 방식**: JWT를 통한 안전한 회원 로그인
- **휴대폰 인증**: 회원 가입 시 보안을 위한 인증

---
