import { Product } from "../../models/productModel.js";
import { GraphQLError } from "graphql";

export const resolvers = {
  Mutation: {
    addProduct: async (_, { input }, { decodedToken }) => {
      try {
        if (!decodedToken.id) {
          throw new Error("You are not authorized to perform this action.");
        }
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
      } catch (error) {
        return error;
      }
    },
  },
};
