export const typeDefs = `#graphql
    interface Product{
        name:String,
        company:String,
        price:Int
    }
    input ProductInput{
        name:String,
        company:String,
        price:Int
    }
    type AddProductMutationResponse{
        id:String
        message:String,
    }
    type Mutation{
        addProduct(input:ProductInput):AddProductMutationResponse
    }
`;
