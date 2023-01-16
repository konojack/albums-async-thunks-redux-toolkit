import React, { useEffect } from 'react';
import UsersList from './components/UsersList';

const App = () => {
  // const fetchData = async url => {
  //   const response = await fetch('http://localhost:3005/users', {
  //     method: 'POST',
  //     body: JSON.stringify({ name: 'DAWID' }),
  //   });
  //   const data = await response.json();
  //   return data;
  // };

  return (
    <div className="container mx-auto">
      <UsersList />
    </div>
  );
};

export default App;
