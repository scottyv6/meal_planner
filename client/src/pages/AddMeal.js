import React from 'react';

import Auth from '../utils/auth';

const AddMeal = () => {
   
    
    const authUserId = Auth.loggedIn()? Auth.getUserId() : null;
    
  
    
    return (
      <main>
        <div className="flex-row justify-center">
          temp
          
        </div>
      </main>
    );
  };
  
  export default AddMeal;