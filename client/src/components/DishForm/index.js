import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_DISH } from '../../utils/mutations';
import { Form, Button } from 'semantic-ui-react';
import { useHistory, useParams } from 'react-router-dom';


const DishForm = ({ userId }) => {
    let { id } = useParams();
    let history = useHistory();

    const [formState, setFormState] = useState({
        dishName: '',
        recipeLink: '',
        notes: '',
    });    

    const onChange = (event, data) => {
        const { name, value } = data || event.target;        
        setFormState({...formState, [name]: value});
        console.log('name in onchange', name)
        console.log('value in onchange', value)
        console.log('formState in onchange', formState)
    }

    const [addDish] = useMutation(ADD_DISH);

    const handleFormSubmit = async (event) => {
        event.preventDefault();        
        try {            
            const { data } = await addDish({
            variables: {
            ...formState,
            mealId: id,
            },
        });
        history.push("/")
        } catch (err) {
        console.error(err);
        }
    };

    return (
        <div>
            <Form onSubmit={handleFormSubmit}>
                <Form.Input 
                    name="dishName"
                    label="Dish Name"
                    onChange={onChange}
                    value={formState.dishName}                
                />

                <Form.Input 
                    name="recipeLink"
                    label="Recipe Link"
                    onChange={onChange}
                    value={formState.recipeLink}                
                />

                <Form.TextArea 
                    name="notes"
                    label="Notes"
                    onChange={onChange}
                    value={formState.notes}                
                />
                
                <Button type='submit' to="/">Submit</Button>
            </Form>
        </div>
    )
}

export default DishForm;