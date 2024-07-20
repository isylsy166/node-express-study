// const express = require('express')
import express from 'express'
import {CashService, chshService} from './cash.js'
import { ProductService } from './product.js';

const app = express();

//구매하기 API
app.post('/products/buy', function(req,res){
    // 1.가진 돈 검증(대략 10줄)
    const cashService = new CashService();
    const hasMoney = cashService.checkValue();

    // 2.재고여부 검증
    const productService = new ProductService();
    const isSoldout = productService.checkSoldout();

    // 3. 구매
    if(hasMoney && isSoldout){
        res.send("상품 구매 완료!");
    }
})

//환불하기 API : 화살표 함수
app.post('products/refund', (req, res) => {
    // 1. 재고 여부 검증
    const productService = new ProductService();
    const isSoldout = productService.checkSoldout();

    // 2. 환불
    if(isSoldout){
        res.send("판매완료")
    }
})


app.listen(3000); // 포트번호