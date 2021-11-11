const db = require('../config/connection');
const { User, Meal } = require('../models');
const userSeeds = require('./userSeeds.json');
const mealSeeds = require('./mealSeeds.json');

db.once('open', async () => {
  try {
    await Meal.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    const user = await User.findOne()
        
    for (let i = 0; i < mealSeeds.length; i++) {
      const { _id } = await Meal.create(mealSeeds[i]);
      const meal = await Meal.findOneAndUpdate(
          {_id: _id},
         {
          $addToSet: {
            userId: user._id,
          },
          
        }
      );  
      
    }
    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
