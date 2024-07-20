// export default인 경우에는 그거 하나만 가져옴 이름 변경해도 됨
// 그냥 export인 경우에는 여러개 가져오거나 선택해서 가져오거나 해야됨 이때는 함수 이름이 동일해야 함
// 이때는 중괄호 사용 {}
// 한번에 다 가져오는 방법: import * as token from './phone.js'
import makeToken from './phone.js'

// const express = require('express')
import express from 'express'
const app = express();

// express에는 json데이터를 읽을 수 있는 기능이 없다 따라서 추가해서 사용해야 함
// 옛날에는 bodyParser사용했음
app.use(express.json());



// 조회
app.get('/boards', function (req, res) {

  // 1.데이터베이스에 접속해서 데이터를 가지고 온다 (데이터를 조회했다고 가정)
  const result = [
    { number: 1, writer: "소연", title: "제목입니다", contents: "내용이에요" },
    { number: 2, writer: "서영", title: "제목입니다", contents: "내용이에요" },
    { number: 3, writer: "도영", title: "제목입니다", contents: "내용이에요" }
  ]

  // 2. DB에서 가지고 온 응답을 브라우저에 전송한다(response)


  res.send(result);
})

// 등록
app.post('/boards', function (req, res) {

  // 1. 브라우저에서 보낸 데이터를 확인
  console.log(req);
  console.log("=======================");
  console.log(req.body);

  // 2. DB에 접속 후, 데이터를 저장 (데이터 저장했다고 가정)


  // 3. DB에 저장된 결과를 브라우저에 응답으로 주기
  res.send('등록 완료');
})

app.post("/tokens/phone", function(req, res){

  console.log(req.body)
  makeToken(req.body.phNumber);

  res.send("인증 완료");
})

app.listen(3000); // 포트번호