const { AuthenticationError } = require('apollo-server-express');
const { User, Meal } = require('../models');
const { signToken } = require('../utils/auth');
const { v4: uuidv4 } = require('uuid')

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },

    // filter by userId
    meals: async (parent, {userId}) => {
      return Meal.find({ userId: userId }).populate("userId");
    },
    
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    
    addMeal: async (parent, {mealType, category, userId, date}) => {
      const meal = await Meal.create({mealType, category, userId, date});
      return { meal};
    },

    addDish: async (parent, {mealId, dishName, recipeLink, notes}) => {
      const dishId = uuidv4();
      console.log('dishId', dishId);
      const meal= await Meal.findOneAndUpdate(
        {_id: mealId},
        {
          $push: {
            dishes: {dishName, dishId, recipeLink, notes}
          } 
        } 
      );
      return { meal};
    }
    
    
  },
};

module.exports = resolvers;
