import { Product } from "../../models/productModel.js";

export const resolvers = {
  Mutation: {
    addProduct: async (_, { input }, {}) => {
      try {
        const product = await Product.create({
          name: input.name,
          company: input.company,
          price: input.price,
        });
        await product.save();
        return {
          id: product._id.toHexString(),
          message: "Product added...",
        };
      } catch (error) {}
    },
  },
};
