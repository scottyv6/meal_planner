import React from 'react';
import { Grid, Button } from 'semantic-ui-react'

const DishList = ({ dishes = [] }) => {
  if (!dishes.length) {
    return <h3>Click on Add Dish to add a dish</h3>;
  }

  return (
    <>
      <div className="flex-row my-4">
        {dishes && 
            dishes.map((dish) => (
                <grid celled>
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
                </grid>
            ))
        }
      </div>
    </>
  );
};

export default DishList;


{/* <h3>Dish{}: dish.name</h3> */}