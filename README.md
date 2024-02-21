![header](https://capsule-render.vercel.app/api?type=waving&color=timeGradient&text=MongoDB를%20사용하여%20학습노트%20구현✍🏻&animation=twinkling&fontSize=23&fontAlignY=40&fontAlign=70&height=250&width=1325&align=center)
<br>
<br>
<div align="center">
  <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=Vue.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/axios-412991?style=flat&logo=axios&logoColor=#5A29E4"/>
  <img src="https://img.shields.io/badge/html5-E34F26?style=flat&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/css-1572B6?style=flat&logo=css3&logoColor=#fff"/>
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat&logo=javascript&logoColor=white"/>
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=MongoDB&logoColor=white"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white"/>
</div>

<br><br>

## 🙇🏻‍♂️ 프로젝트 소개
Today-I-Learned는 학습내용을 정리하고 복습할 수 있는 CRUD 기능으로 구현된 프로젝트입니다.<br>
학과 수업과 개인공부를 하다보니 많은 양의 학습내용을 정리하여 '필요한 기능 및 내용을 효과적으로 관리할 수 있을까?' 라는 생각으로 프로젝트를 개발하였습니다.

<br><br>

## 🛠️ Tech
**1. vue2.0**<br>
>*vue create vue_til*

**2. vuex**<br>
>*npm install vuex@next*

**3. router**<br>
>*npm install vue-router@4*

**4. axios**<br>
>*npm install axios*

**5. Node Version Manager**<br>
>*Express : v10.16.3*<br>
>*vue_til : v20.4.0*

**6. Express.js**<br>

**7. MongoDB**<br>



<br><br>

## 🔗 MongoDB Info

|   Name   |   Column   | 
|:--------:|:-----------:|
|   User   |     _id     |
|      |     username     |
|      |     password     |
|      |     nickname     |
|      |     insertedDate     |
|      |     created_at     |
|      |     update_at     |
|   Post   |     _id     |
|      |     title     |
|      |     contents     |
|      |     createdBy     |
|      |     created_at     |
|      |     updated_at     |






<br>

## 💿 Vuex Info
| Name | State |
|:--------:|:-----------:|
| store | nickname |
| store | token |

<br>

## 🖥️ Views
**1. Join**<br>
  - 회원가입 화면입니다.
  - ID와 Password, Nickname을 작성한 뒤 `CREATE ACCOUNT` 버튼을 클릭하여 회원가입 할 수 있습니다.
  <img width="1137" alt="join" src="https://github.com/whiteDwarff/Today-I-Learned/assets/115057117/197d4bc2-4099-4689-bb98-992a5ac75c41"><br>
  - 작성한 데이터는 MongoDB의 users 테이블에 저장됩니다.<br>
  <img width="1137" height="300" src="https://github.com/whiteDwarff/Today-I-Learned/assets/115057117/29b35259-a774-40d3-be19-b150410e8370"><br>
  
<br><br>

**2. Login**<br>
  - 로그인 화면입니다.
  - 작성된 데이터는 서버를 통해 MongoDB로 post 요청을 보내 회원여부를 판단합니다.
  <img width="1137" alt="login" src="https://github.com/whiteDwarff/Today-I-Learned/assets/115057117/b707a4cd-c7af-4572-b902-28954dcebdd0"><br><br>
  - 로그인이 완료되면 cookie 저장소에 쿠기가 저장됩니다.<br>
  - 저장된 쿠키를 통해 클라이언트 측에서 데이터를 보존하고 재사용할 수 있습니다.
    
```ruby
      function saveAuthToCookie(value) {
        document.cookie = `til_auth=${value}`;
      }
      function saveUserToCookie(value) {
          document.cookie = `til_user=${value}`;
      }
```  
<br><br>

**3. Main**<br>
  - 메인화면 입니다.
  - 우측 하단의 연필 아이콘을 통해 게시글을 작성할 수 있습니다.
  - 접속 시 get 요청으로 데이터를 받아오고 없다면 빈화면이 출력됩니다.
<img src="https://github.com/whiteDwarff/Today-I-Learned/assets/115057117/b573c404-6129-4ef3-a27e-cc9ef7925f8f" alt="main_empty"><br>

<br><br>

**4. Post**<br>
  - 게시글 작성 화면 입니다.
  - 작성된 데이터는 서버를 통해 MongoDB의 post에 테이블에 저장됩니다.
<img width="1137" alt="addPost" src="https://github.com/whiteDwarff/Today-I-Learned/assets/115057117/44308661-f964-47a2-b06f-02dee5d6b231"><br>
<img width="1137" alt="addPost1" src="https://github.com/whiteDwarff/Today-I-Learned/assets/115057117/8c196567-9f27-4d78-a9c4-16a4c5062b33"><br>

<br><br>

**5. Update**<br>
 - 작성한 게시글을 수정할 수 있습니다.
 - put 요청을 통해 게시글을 수정 후 메인화면으로 이동합니다.
<img src="https://github.com/whiteDwarff/Today-I-Learned/assets/115057117/ec79a40c-bfbd-4ca3-a8fb-d4fbd8af5348" alt="update"><br>

<br><br>

**6. Delete**<br>
  - 휴지통 아이콘을 눌러서 작성한 게시글을 삭제할 수 있습니다.
  - delete 요청을 통해 게시글이 삭제됩니다.
<img width="1247" alt="delete" src="https://github.com/whiteDwarff/Today-I-Learned/assets/115057117/e6ecf502-a90a-4dc9-adf9-7f750885df76"><br>
<img width="1165" alt="delete1" src="https://github.com/whiteDwarff/Today-I-Learned/assets/115057117/00fd4a22-b17a-40fb-af22-0e750bba03ed"><br>

<br><br>

**6. Log out**<br>
  - nav의 log out을 클릭하면 페이지에서 로그아웃 할 수 있습니다.
    ```ruby
      function deleteCookie(value) {
        document.cookie = `${value}=; expires = Thu, 01 Jan 1970 00:00:01 GMT;`;
    }
    ```

