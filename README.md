# **[ Pal 검색 서비스 ]**

사용한 기술 스택<br>
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img alt="SASS" src ="https://img.shields.io/badge/SASS-cc6699.svg?&style=for-the-badge&logo=Sass&logoColor=white"/>
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

<br>
<br>
배포사이트
<img alt="SASS" src ="https://img.shields.io/badge/vercel-ffffff.svg?&style=for-the-badge&logo=vercel&logoColor=black"/><br>

### **<필수 요구사항>**

#### <페이지>
~~1. 로딩 페이지(애니메이션)~~
1. 프로필 페이지
- 스크롤이 가능한 형태의 리스팅 페이지
- 전체 페이지 데스크탑-모바일 반응형 페이지

#### <기능>
- ~~사진 등록~~, ~~삭제~~, ~~수정~~, 편집(선택)
- ~~직원 검색 기능~~
- infinity scroll 기능
- ~~LocalStorage~~
- CSS
    ~~- 상대수치 사용(rem, em)~~
- JavaScript
    ~~- DOM event 조작~~ <br>

### [배포용 사이트](https://pal-search.vercel.app/)

User Flow
![user Flow](/public/img/README/user_flow.png)<br>

Loading image
![Loading image](/public/img/README/loading_page.png)<br>

Header
![alt text](/public/img/README/hedear.png)

Manage Elements
![alt text](/public/img/README/manage_Els.png)

아쉬운 것 <br>
1. vite를 vercel을 통해 배포하려고 하였으나 이미지가 전부 엑박으로 보인다. 이미지 경로 문제라고 생각하여 구글링을 해보았지만, 해결방법을 찾지 못했다.
- public 폴더에 넣으면 해결되는줄 알고 해봤으나 소용이 없었다.
2. 과제 기간은 2주였으나 1주는 강의를 다시 보는데 사용하느라, 과제를 하는 데에 1주만 할애 한 것이 매우 아쉽다.
2. 검색 기능이 이상하게 동작한다.
3. 강의에 나온 예시처럼 api 요청을 하고난 뒤에 로딩을 띄우고 싶었으나, 아직 하는 방법을 몰라 처음 렌더링 할 때 setTimeOut 함수를 통해 임의로 로딩을 시켰다.
4. 컴포넌트를 사용하려다 보니 불필요할 정도로 많이 나눠진 것 같다.
5. 게임 캐릭터(pal)의 api를 외국인 분이 깃헙에 올려주신 것을 배포해서 해보려고 하였으나, 이해도가 부족하여 못했다.
6. 여전히 BEM 방법론을 따르기 힘들다. (--는 상태, __는 하위요소?라고 하였으나, 상태로 나눠야 할 지, 하위요소로 취급해야 할 지 모르겠다.)
7. main.js 부분에 Enroll을 통해 추가된 요소들마다 다른 버튼들과 상효작용하는 addEventListener를 일일이 추가해야 하는 것이 매우 비효율적이고, 코드가 너무 많이 들어간다고 생각했다.
8. 최근 modal의 html 태그로 dialog 관련 많은 기능이 있다고 하는데 하나도 못써봤다.
9. 웹을 어떻게 구성해야 할 지에 대해 감이 없어, 남들에 비해 아직 많이 느린 것 같다.
10. 각각의 Manage Element들의 event들을 컴포넌트 단위로 나눌 수 있을 것 같은데, 방법을 몰라 Dom Event 관련 모든 함수들을 main.js에 다 넣은 것이 매우 아쉽다.
