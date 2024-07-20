// const express = require('express')
import express from 'express'

const app = express();

// 미들웨어 함수 - get 방식
app.get('/', function (req, res) {
  res.send('Hello World ^^*')
})

app.listen(3000); // 포트번호