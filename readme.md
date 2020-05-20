# readMe

* 설치 가이드 문서 : https://dev-yakuza.github.io/ko/react-native/install-on-windows/



chocolatey v 0.10.15

PS C:\reactwork> node --version
v14.2.0

C:\reactwork>npm --version
6.14.4

C:\reactwork>python --version
Python 2.7.18

C:\reactwork>react-native --version
react-native-cli: 2.0.1
react-native: n/a - not inside a React Native project directory

C:\reactwork>java -version
java version "1.8.0_241"
Java(TM) SE Runtime Environment (build 1.8.0_241-b07)
Java HotSpot(TM) 64-Bit Server VM (build 25.241-b07, mixed mode)

* 그냥 자바 8만 사용하면 됨

* 파이썬은 2

* 나머지 리엑트 관련한것은 대부분 처음설치할 것이니까 최대한 맞춰주기

  



* 안드로이드 sdk : 10.0, 9.0, 8.0 설치하시오

  

* 설치할 기본 설정 : 블로그 보면 다있다. 
  * 타입 스크립트
  * 스타일 컴포넌트
  * root import

- 기본적으로 파일명은 **스네이크 작명**으로 함.  예시는 아래 폴더
  - 앞에 기능, 뒤에 소속

* expo 사용하지 않음. => 네이티브 방식으로 함. 추후 다른 기능을 추가할 시 문제가 될수 있음



기본 이름 : fingApp



폴더 구조 (추후 개발하다 불편하면 변경할 것임)

* fingApp

  * tsconfig.json : 타입스크립트 설정파일

  * /src

    * App.tsx : 메인함수에서 네비게이션 호출

    * /navigation 

      * /Navigator.tsx : 네비게이션 함수 가지고 있음, 각각의 mainpage 를 호출한다.

    * / home  : 홈페이지

      * mainHome.tsx

    * / vendor : 판매해요 페이지 모음

      * mainVendor.tsx

    * /myPage : 마이페이지 모음

      * mainMyPage.tsx

    * /meetings

      * mainMeetings.tsx

    * /spaceShared

      * mainShared.tsx

        

  * App.tsx 



* 설치한 리액트 네이티브 api

각자 설치하면 여기에다 버전정보, 다운받은 api 이름, 링크 적어 놓아야 됨. 안그러면 나중에 충돌됨

​		- instal하신거 장하면됩니다.

예) 

| 순번 | api 이름            | 버전 | 링크                                             | 기능            |
| ---- | ------------------- | ---- | ------------------------------------------------ | --------------- |
| 1    | react-navigation-v5 |      | https://reactnavigation.org/docs/getting-started | 네비게이션 설정 |
|      |                     |      |                                                  |                 |
|      |                     |      |                                                  |                 |



