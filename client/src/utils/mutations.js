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

export const ADD_MEAL = gql`
  mutation addMeal($mealType: String!, $category: String!, $userId: ID!, $date: String!) {
    addMeal(mealType: $mealType, category: $category, userId: $userId, date: $date) {
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
`;

export const ADD_DISH = gql`
  mutation addDish($dishName: String!, $_id: ID!  $recipeLink: String, $mealId: ID!, $notes: String) {
    addDish(dishName: $dishName, _id: $_id, recipeLink: $recipeLink, mealId: $mealId, notes: $notes) {
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
`;
