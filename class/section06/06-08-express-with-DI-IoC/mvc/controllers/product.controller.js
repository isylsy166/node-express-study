import { CashService } from "./services/cash.service";
import { ProductService } from "./services/product.service";


export class ProductController {

    buyProduct = (req,res) => {
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
    }


    refundProduct = (req, res) => {
        // 1. 재고 여부 검증
        const productService = new ProductService();
        const isSoldout = productService.checkSoldout();
    
        // 2. 환불
        if(isSoldout){
            res.send("판매완료")
        }
    }
}