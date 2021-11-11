import React from 'react';
import { Card, Button, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import DishList from '../DishList';

const MealList = ({ 
    meals
}) => {
    if (!meals.length) {
        console.log("meals in meallist", meals);
        console.log("meals.length", meals.length);
        return <h3>You have not added any meals yet</h3>
    }
    console.log('meals in meallist', meals);
    return (
        
        <Grid>
            {meals && 
                meals.map((meal) => (
                    <div key={meal._id}>
                        <Card.Header>Meal: {meal.mealType}
                            <span> {new Date(meal.date).toDateString()}</span>
                        </Card.Header>
                        {console.log('meal in map', meal)}
                        <Card.Content> 
                            <Button>Add Dish</Button>
                            <DishList dishes={meal.dishes} />
                        </Card.Content>
                    </div>
                ))
            }
        </Grid>
       
    )
}

export default MealList;