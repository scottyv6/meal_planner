import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

import { ADD_MEAL } from '../../utils/mutations';

import Auth from '../../utils/auth';
import { Form, Button, Dropdown } from 'semantic-ui-react'


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
    const [formState, setFormState] = useState({
        mealType: '',
        category: '',
        date: '',
    }); 

    const [currentDate, setNewDate] = useState(null);

    const onChange = (event, data) => {
        const { name, value } = event.target;
        setNewDate(data.value);
        setFormState({...formState, [name]: value});
        console.log('name in onchange', name)
        console.log('value in onchange', value)
        console.log('formState in onchange', formState)

    }

    const [addMeal] = useMutation(ADD_MEAL);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log('formstate in handleFormSubmit', formState)
        try {
            console.log('Auth.getProfile().data._id', Auth.getProfile().data._id)
        const { data } = await addMeal({
            variables: {
            ...formState,
            userId: Auth.getProfile().data._id,            
            },
        });

        
        } catch (err) {
        console.error(err);
        }
    };



    return (
        <div>
            <Form onSubmit={handleFormSubmit}>
                <Form.Field name="date"> 
                    <label>Date</label>
                    
                    <SemanticDatepicker  onChange={onChange} />   
                    </Form.Field>
                <Form.Field  >
                    <label>Meal Type</label>
                    <Dropdown
                        name="mealType"
                        placeholder='Meal Type'
                        fluid
                        selection
                        options={mealOptions}
                        onChange={onChange}
                    />
                </Form.Field>
                <Form.Field  name="category">
                    <label>Meal Category</label>
                    <Dropdown
                        placeholder='Meal Category'
                        fluid
                        selection
                        options={categories}
                        onChange={onChange}
                    />
                </Form.Field>
                <Button type='submit' to="/home">Submit</Button>
            </Form>
        </div>
)

}

export default MealForm;
