import { Router } from "express";
import path from 'node:path'
import { getAddProduct, getProducts, postAddProduct } from "../controler/admin.js";

const adminRouter = Router();



// router
// /admin/add-product => GET
adminRouter.get("/add-product", getAddProduct);

// /admin/products => GET
adminRouter.get('/products', getProducts)

// /admin/add-product => POST
adminRouter.post("/add-product", postAddProduct);

export {adminRouter};