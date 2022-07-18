const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    posts: [Post]
    
  }

  type Post {
    _id: ID
    postTitle: String
    postText: String
    postPrice: Float
    createdAt: String
    username: String
    commentCount: Int
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
       post(_id: ID!): Post
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postText: String! postTitle:String!, postPrice:String!): Post
    addComment(postId: ID!, commentBody: String!): Post
    deletePost(_id: ID!): Post
  }
`;

module.exports = typeDefs;
