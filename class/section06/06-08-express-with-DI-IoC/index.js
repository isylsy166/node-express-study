// const express = require('express')
import express from 'express'
import { ProductController } from './mvc/controllers/product.controller';

const app = express();

const productcontroller = new ProductController();

// 상품 API
app.post('/products/buy', productcontroller.buyProduct) //구매하기 API
app.post('/products/refund', productcontroller.refundProduct) //환불하기 API


app.listen(3000); // 포트번호