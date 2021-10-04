const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        username: String
        email:String
        password: String
        savedBooks: [bookSchema]
    }

    type  Book {
        authors: String
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }
    
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        savedBooks: [bookSchema]
      }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(authors: [String!], description: String!, title: String!, bookId: String!, image: String!, link: String!): 
        removeBook(bookId: String!): User
      }

      type Auth {
        token: ID!
        user: User
      }
`
