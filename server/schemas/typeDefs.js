const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String    
  }

  type Dish {
    _id:ID
    dishName: String
    recipeLink: String
    notes: String
  }

  type Meal {
    _id: ID
    mealType: String
    category: String
    userId: User
    notes: String
    date: String   
    dishes: [Dish]
  }

  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    meals(userId: ID!): [Meal]
    meal(userId: ID!): Meal
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addMeal(mealType: String!, category: String!, userId: ID!, date: String!): Meal
    addDish(mealId: ID!, dishName: String!, _id:ID!, recipeLink: String, notes: String,): Meal
  }
`;

module.exports = typeDefs;


// type Mutation {
//   addUser(email: String!, password: String!): Auth
//   login(email: String!, password: String!): Auth
//   addMeal(mealType: String!, category: String!, UserId, ID!, notes: String, dishes: [Dish]): Meal
//   removeMeal(mealId: ID!): Meal
//   updateMeal(mealId: ID!, mealType: String!, category: String!, UserId, ID!, notes: String, dishes: [Dish]): Meal
//   addDish(mealId: ID!, dishName: String!, recipeLink: String, notes: String,): Dish
//   updateDish(mealId: ID!, dishId: ID!, dishName: String!, recipeLink: String, notes: String,): Dish
//   removeDish(mealId: ID!, dishId: ID!)

// }
// `;