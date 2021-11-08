import React from 'react';
import { Link } from 'react-router-dom';

const MealList = ({ 
    meals,
}) => {
    if (!meals.length) {
        return <h3>You have not added any meals yet</h3>
    }

    return (
        <div>

        </div>
    )
}

export default MealList;