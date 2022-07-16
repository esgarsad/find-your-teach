import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postTitle: String!, $postText: String!, $postPrice: String!) {
    addPost(postText: $postText, postTitle: $postTitle, postPrice: $postPrice) {
      _id
      postTitle
      postPrice
      postText
      createdAt
      username
      commentCount
      comments {
        _id
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentBody: String!) {
    addComment(postId: $postId, commentBody: $commentBody) {
      _id
      commentCount
      comments {
        _id
        commentBody
        createdAt
        username
      }
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($postTitle: String!, $postText: String!, $postPrice: String!) {
    deletePost(postText: $postText, postTitle: $postTitle, postPrice: $postPrice) {
      _id
      postTitle
      postPrice
      postText
      createdAt
      username
      commentCount
      comments {
        _id
      }
    }
  }
`;




