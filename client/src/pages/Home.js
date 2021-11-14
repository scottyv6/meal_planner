import React from 'react';

import { useQuery } from '@apollo/client';

import MealList from '../components/MealList'
import { QUERY_MEALS } from '../utils/queries';

import Auth from '../utils/auth';

import mealbg1 from '../images/mealbg1.jpg'

const Home = () => {
   
  const authUserId = Auth.loggedIn()? Auth.getUserId() : null;
  //console.log("authUserId is", authUserId);
  // const authUserId = "618cefeb91e5324d2429ed3b"

  const {loading, data} = useQuery (QUERY_MEALS,
    {
      variables: { userId: authUserId },
    }
  );

  const meals = data?.meals || [];
  console.log('meals:', meals);
  console.log('data:', data);

  if (!Auth.loggedIn()) {
    return (
      <main>
        <div className="flex-row justify-center">
          <h4>Click on Login or Signup to enter site</h4>
         
        </div>
        <div style={{ margin: '20px' }}>
        <img src={mealbg1} alt="Picure of food"></img>
        </div>    
      </main> 
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className="flex-row justify-center">
        <MealList 
          meals={meals}
        />
      </div>
    </main>
  );
};

export default Home;
