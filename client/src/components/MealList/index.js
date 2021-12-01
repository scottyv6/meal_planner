import React from 'react';
import { Card, Container } from 'semantic-ui-react';
import DishList from '../DishList';
import { Link } from 'react-router-dom';

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
                        <Card.Header>Meal: {meal.mealType} <br/> Category: {meal.category}
                            <Container textAlign='right'> {new Date(meal.date).toDateString()}</Container>
                        </Card.Header>                        
                        <Card.Content> 
                        <Link className="btn btn-lg btn-info m-2" to={`/dish/${meal._id}`}>
                            Add Dish
                        </Link>
                            <DishList dishes={meal.dishes} />
                        </Card.Content>
                    </div>
                ))
            }
        </Container>       
    )
}

export default MealList;