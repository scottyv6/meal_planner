import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';

import MealList from '../components/MealList'
import { QUERY_MEALS } from '../utils/queries';

import Auth from '../utils/auth';

const Meal = () => {
  const { username: userParam } = useParams();

  
  const [ getMeals, { loading, data } ] = useLazyQuery(QUERY_MEALS);
  console.log('data 1st try:', data);

  if (!Auth.loggedIn()) {
    return (
      <main>
        <div className="flex-row justify-center">
          Not logged in
        </div>    
      </main>
    );
  }

  const authUserId = Auth.getUserId();
  console.log("authUserId is", authUserId);
  
  getMeals({
    variables: { userId: authUserId },
  });

  const meals = data;
  console.log('meals:', meals);
  console.log('data:', data);
  
  

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className="flex-row justify-center">
        meals in meal page
        <MealList 
          meals={meals}
        />
      </div>
    </main>
  );
};

export default Meal;
