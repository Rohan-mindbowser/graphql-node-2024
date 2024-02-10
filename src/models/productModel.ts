import { Schema, model, connect } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    company: { type: String, required: true },
    price: { type: String, required: true },
  },
  { timestamps: true }
);

export const Product = model("Product", productSchema);
