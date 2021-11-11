import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useLazyQuery, useQuery } from '@apollo/client';

import MealList from '../components/MealList'
import { QUERY_MEALS } from '../utils/queries';

import Auth from '../utils/auth';

const Home = () => {
   
  // const [ getMeals, { loading, data } ] = useLazyQuery(QUERY_MEALS);
  // console.log('data 1st try:', data);

  // if (!Auth.loggedIn()) {
  //   return (
  //     <main>
  //       <div className="flex-row justify-center">
  //         Not logged in
  //       </div>    
  //     </main>
  //   );
  // }

  // const authUserId = Auth.getUserId();
  // console.log("authUserId is", authUserId);
  
  // getMeals({
  //   variables: { userId: authUserId },
  // });

  // const meals = data;
  // console.log('meals:', meals);
  // console.log('data:', data);
  

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
          Not logged in
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
