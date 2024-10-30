import { Router } from "express";

import { getProducts, getIndex, getCart, getOrder, getCheckout } from "../controler/shop.js";

const shopRouter = Router();

shopRouter.get("/products", getProducts);
shopRouter.get("/", getIndex);
shopRouter.get('/cart', getCart)
shopRouter.get('/orders', getOrder)
shopRouter.get('/checkout', getCheckout)

export { shopRouter };
