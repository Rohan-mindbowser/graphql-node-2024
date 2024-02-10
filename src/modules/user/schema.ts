export const typeDefs = `#graphql
    interface CreateUser{
        email:String,
        password:String,
        fullName:String
    }
    interface User{
        email:String,
        fullName:String,
        id:String
    } 
    type CreateUserMutationResponse{
        id:String
        password:String,
        accessToken:String,
        refreshToken:String,
        message:String,
    }

    type Mutation{
        createUser(email:String,password:String,fullName:String):CreateUserMutationResponse
    } 
`;
