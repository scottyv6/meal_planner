import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

import { ADD_MEAL } from '../../utils/mutations';

import Auth from '../../utils/auth';
import { Form, Button, Dropdown } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'


const MealForm = ({ userId }) => {
    

    const mealOptions = [
        {
            key: 'Breakfast',
            text: 'Breakfast',
            value: 'Breakfast',
        },
        {
            key: 'Lunch',
            text: 'Lunch',
            value: 'Lunch',
        },
        {
            key: 'Dinner',
            text: 'Dinner',
            value: 'Dinner',
        },
    ]

    const categories = [
        {
            key: 'Beef',
            text: 'Beef',
            value: 'Beef',
        },
        {
            key: 'Chicken',
            text: 'Chicken',
            value: 'Chicken',
        },
        {
            key: 'Pork',
            text: 'Pork',
            value: 'Pork',
        },
        {
            key: 'Lamb',
            text: 'Lamb',
            value: 'Lamb',
        },
        {
            key: 'Fish',
            text: 'Fish',
            value: 'Fish',
        },
        {
            key: 'Seafood',
            text: 'Seafood',
            value: 'Seafood',
        },
        {
            key: 'Vegetarian',
            text: 'Vegetarian',
            value: 'Vegetarian',
        },
        {
            key: 'Other',
            text: 'Other',
            value: 'Other',
        },
    ]

    let history = useHistory();

    const [formState, setFormState] = useState({
        mealType: '',
        category: '',
        date: '',
    }); 

        const onChange = (event, data) => {
        const { name, value } = data || event.target;        
        setFormState({...formState, [name]: value});       

    }

    const [addMeal] = useMutation(ADD_MEAL);

    const handleFormSubmit = async (event) => {
        event.preventDefault();        
        try {            
            const { data } = await addMeal({
            variables: {
            ...formState,
            userId: Auth.getProfile().data._id,            
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
                <Form.Field name="date"> 
                    <label>Date</label>
                    
                    <SemanticDatepicker  onChange={onChange} value={formState.date} name="date" /> 
                </Form.Field>

                <Form.Field  >
                    <label>Meal Type</label>
                    <Dropdown
                        name="mealType"
                        label="Meal Type"
                        placeholder='Meal Type'
                        fluid
                        selection
                        options={mealOptions}
                        onChange={onChange}
                        value={formState.mealType}
                    />
                </Form.Field>

                <Form.Field >
                    <label>Meal Category</label>
                    <Dropdown
                        name="category"
                        placeholder='Meal Category'
                        fluid
                        selection
                        options={categories}
                        onChange={onChange}
                        value={formState.category}
                    />
                </Form.Field>
                <Button type='submit' to="/">Submit</Button>
            </Form>
        </div>
    )
}

export default MealForm;