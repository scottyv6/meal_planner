const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const mealSchema = new Schema({
  category: {
    type: String,
    required: 'Select a meal type.',    
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  notes:{
    type: String,
  },
  dishes: [
    {
      name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 64,
      },
      recipeLink: {
        type: String,        
      },
      notes: {
        type: String,
      }     
    },
  ],
});

const Meal = model('Meal', mealSchema);

module.exports = Meal;
