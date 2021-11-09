import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import DishList from '../DishList';

const MealList = ({ 
    meals,
}) => {
    // if (!meals.length) {
    //     return <h3>You have not added any meals yet</h3>
    // }

    return (
        
        <Card>
            {meals && 
                meals.map((meal) => (
                    <>
                        <Card.Header>Meal: {meal.mealType}
                            <span> {meal.date}</span>
                        </Card.Header>
                        <Card.Content> 
                            <Button>Add Dish</Button>
                            <DishList dishes={meal.dishes} />
                        </Card.Content>
                    </>
                ))
            }
        </Card>
       
    )
}

export default MealList;