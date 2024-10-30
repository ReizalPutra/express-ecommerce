import express from "express";
import bodyParser from "body-parser";
import { adminRouter } from "./routes/admin.js";
import { shopRouter } from "./routes/shop.js";
import path from "node:path";
import { notFoundPage } from "./controler/error.js";

const app = express();
const port = 3000; // Initialize an Express application

// config
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve("public")));
app.set("view engine", "pug");
app.set("views", "view");

// routes
app.use("/admin", adminRouter);
app.use(shopRouter);

app.use(notFoundPage);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
