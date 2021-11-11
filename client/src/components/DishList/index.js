import React from 'react';
import { Grid, Button } from 'semantic-ui-react'

const DishList = ({ dishes = [] }) => {
  if (!dishes.length) {
    return <h3>Click on Add Dish to add a dish</h3>;
  }

  return (
    <>
      <div >
        {dishes && 
            dishes.map((dish) => (
                <Grid celled key={dish._id? dish._id : Math.floor(Math.random() * 10000)}>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            Dish: {dish.dishName}
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Button>Delete</Button>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            Recipe Link: <a href={dish.recipeLink}>{dish.recipeLink}</a>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            Notes: {dish.notes}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            ))
        }
      </div>
    </>
  );
};

export default DishList;


{/* <h3>Dish{}: dish.name</h3> */}