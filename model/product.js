import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const pathData = path.resolve("data", "products.json");

export default class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  async addData() {
    try {
      let products = [];
      const fileContent = await readFile(pathData);
      if (fileContent) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      await writeFile(pathData, JSON.stringify(products));
    } catch (err) {
      if (err.code === "ENOENT") {
        console.error("File not found, creating a new file.");
        await writeFile(pathData, JSON.stringify([this], null, 2));
      } else {
        console.error("Error adding product:", err);
      }
    }
  }

  static async showProduct() {
    try {
      const fileContent = await readFile(pathData, "utf-8");
      if (!fileContent) {
        return [];
      }
      return JSON.parse(fileContent); 
    } catch (err) {
      if (err.code === "ENOENT") {
        console.error("File not found, returning empty array.");
        return [];
      } else {
        console.error("Error reading products:", err);
        return [];
      }
    }
  }
}
