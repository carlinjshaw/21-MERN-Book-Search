import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
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

export const SAVE_BOOK = gql`
  mutation saveBook($title: String!) {
    saveBook(title: $title) {
      _id
      authors 
      description
      bookId
      image
      link 
      title
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($title: String!) {
    removeBook(title: $title) {
      _id
      authors 
      description
      bookId
      image
      link 
      title
    }
  }
`;