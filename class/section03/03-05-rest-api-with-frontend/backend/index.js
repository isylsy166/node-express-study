import makeToken from './phone.js'
import cors from 'cors'
// const express = require('express')
import express from 'express'
const app = express();

app.use(express.json());
app.use(cors()); // cors 허용



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
  const result = makeToken(req.body.phNumber);
  console.log(result);

  res.send(result);
})

app.listen(3000); // 포트번호