import React from 'react';
import { Card, Button, Container } from 'semantic-ui-react';
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
        
        <Container style={{  }}>
            {meals && 
                meals.map((meal) => (
                    <div style={{ background: '#a2e3f5', borderColor: 'blue', borderRadius: '25px', padding: '20px', margin: '20px' }} key={meal._id}>
                        <Card.Header>Meal: {meal.mealType}
                            <Container textAlign='right'> {new Date(meal.date).toDateString()}</Container>
                        </Card.Header>
                        {console.log('meal in map', meal)}
                        <Card.Content> 
                            <Button color='teal' size='large'>Add Dish</Button>
                            <DishList dishes={meal.dishes} />
                        </Card.Content>
                    </div>
                ))
            }
        </Container>       
    )
}

export default MealList;