import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      }
    }
`;



export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email      
    }
  }
`;

export const QUERY_MEALS = gql`
  query getMeals ($userId: ID!){
    meals (userId: $userId) {
      _id
      mealType
      category
      userId {
        _id
      }
      notes
      date
      dishes {
        _id
        dishName
        recipeLink
        notes
      }
    }
  }
`
