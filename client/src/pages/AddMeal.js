import React from 'react';
import MealForm from '../components/MealForm';
import Auth from '../utils/auth';

const AddMeal = () => {
   
    
    const authUserId = Auth.loggedIn()? Auth.getUserId() : null;
    
  
    
    return (
      <main>
        <div className="flex-row justify-center">
        <MealForm />
          
        </div>
      </main>
    );
  };
  
  export default AddMeal;