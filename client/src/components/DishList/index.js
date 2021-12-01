import React from 'react';
import { Grid, Button} from 'semantic-ui-react'

const DishList = ({ dishes = [] }) => {
  if (!dishes.length) {
    return <h3>Click on Add Dish to add a dish</h3>;
  }

  return (
    <>
      <div >
        {dishes && 
            dishes.map((dish) => (
                <Grid style={{ background: '#b2e3f5'  }} celled key={dish._id? dish._id : Math.floor(Math.random() * 10000)}>
                    <Grid.Row style={{ border: '1px solid #34a8eb', borderRadius: '25px' }} >
                        <Grid.Column width={3}>
                            Dish: {dish.dishName}
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Button circular icon color='grey'>Delete</Button>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Grid.Row>
                              Recipe Link:&nbsp; <a href={dish.recipeLink}>{dish.recipeLink}</a>
                            </Grid.Row>
                            <Grid.Row>
                              Notes: {dish.notes}
                            </Grid.Row>                            
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