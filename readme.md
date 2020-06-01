# readMe

* 설치 가이드 문서 : https://dev-yakuza.github.io/ko/react-native/install-on-windows/
* 참고 깃허브 링크 : https://github.com/dev-yakuza/Reactnative



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

  
* * 스타일 컴포넌트

  * ```
    npm install --save styled-components
    ```

  * root import & 타입스크립트

```
C:\reactwork\Counter>npm install typescript @types/react @types/react-native @types/styled-components babel-plugin-root-import --save-dev

```



-- 


* 안드로이드 sdk : 10.0, 9.0, 8.0 설치하시오

  

* 설치할 기본 설정 : 블로그 보면 다있다. 
  * 타입 스크립트
  * 스타일 컴포넌트
  * root import

- 기본적으로 파일명은 **스네이크 작명**으로 함.  예시는 아래 폴더
  - 앞에 기능, 뒤에 소속

* expo 사용하지 않음. => 네이티브 방식으로 함. 추후 다른 기능을 추가할 시 문제가 될수 있음



기본 이름 : foogether
```
npm install 
npm install typescript @types/react @types/react-native @types/styled-components babel-plugin-root-import --save-dev
npm install --save styled-components

npm install --save @react-native-community/async-storage
react-native link @react-native-community/async-storage



npm install --save react-native-splash-screen
react-native link react-native-splash-screen


npm install --save react-gesture-handler react-native-reanimated


```

## 업무 배정(ui 분배)

* 하은 : 로그인, 회원가입, 계정찾기, 홈
* 여진 : 마이페이지, 후기 작성
* 나연 : 모이자, 댓글, 검색
* 희운 : 카메라, 공간대여, 알람
* 보윤 : 하단 네비게이션바, 판매상품, 위치 정보

-> 아래 3명은 다음주까지 메인만들어오기

## 폴더 구조 (추후 개발하다 불편하면 변경할 것임)



```
src
├─Component
│  ├─BigCatalog
│  ├─Button
│  └─IconButton
├─Context
│  └─User
│      └─@types
└─Screens
    ├─@types
    ├─MainHome
    ├─Meetings
    ├─Modal
    ├─MyPage
    ├─Product
    │  └─ProductHome
    │      ├─@type    
    │      
    ├─ResetPassword
    ├─Search
    ├─SignIn
    ├─SignUp
    └─SpaceShared

```



* 설치한 리액트 네이티브 api

각자 설치하면 여기에다 다운 받은 명령어 적어 놓기

​		- install령어적기

1) 네비게이션 관련

```
// 리엑트 네이티브 v5 라이브러리
npm install --save @react-navigation/native
// 리액트 네이티브 v5 라이브러리를 사용하기 위한 라이브러리
npm install --save react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
//스텍 네비
npm install --save @react-navigation/stack
// 바텀바
npm install --save @react-navigation/bottom-tabs
// 드로어
npm install --save @react-navigation/drawer
//탑탭바
npm install --save @react-navigation/material-top-tabs react-native-tab-view

// 아이콘 설치
npm install react-native-vector-icons --save

// 타입스크립트를 위한 아이콘 설치
npm install --save-dev @types/react-native-vector-icons

// 아이콘 라이브러리 연결
react-native link react-native-vector-icons

npm install --save @react-navigation/material-bottom-tabs react-native-paper

```

2) 비동기 저장소 관련

```
npm install --save @react-native-community/async-storage
react-native link @react-native-community/async-storage

```

