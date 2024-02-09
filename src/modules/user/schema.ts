export const typeDefs = `#graphql
    interface CreateUser{
        email:String,
        password:String,
        fullName:String
    }
    type CreateUserMutationResponse{
        email:String,
        password:String,
        accessToken:String,
        refreshToken:String,
        message:String,
    }

    type Mutation{
        createUser(email:String,password:String):CreateUserMutationResponse
    } 
`;
