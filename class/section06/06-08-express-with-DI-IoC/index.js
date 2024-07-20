// const express = require('express')
import express from 'express'
import { ProductController } from './mvc/controllers/product.controller';
import { CashService } from './mvc/controllers/services/cash.service';
import { ProductService } from './mvc/controllers/services/product.service';
import { PointService } from './mvc/controllers/services/point.service copy';

const app = express();

/* 
    의존성 주입으로 발생하는 장점!
    1. new 한번으로 모든 곳에서 재사용 가능 (싱글톤 패턴)
    2. 의존성 주입으로 몽땅 한꺼번에 변경 가능
*/
const cashService = new CashService(); // 
const productService = new ProductService();
const pointService = new PointService();


// 상품 API
const productcontroller = new ProductController(cashService,productService,pointService);
app.post('/products/buy', productcontroller.buyProduct) //구매하기 API
app.post('/products/refund', productcontroller.refundProduct) //환불하기 API


app.listen(3000); // 포트번호