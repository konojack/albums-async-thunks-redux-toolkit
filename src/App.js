import React, { useEffect } from 'react';
import UsersList from './components/UsersList';

const App = () => {
  let domain = window.location.origin; //http://someurl.com
  let port = 3005;

  const fetchData = async url => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    console.log('WINDOW ORIGIN');
    let url = `${domain}:${port}/users`;
    const data = fetchData(url);
    console.log(data);
  }, [domain, port]);

  return (
    <div className="container mx-auto">
      <UsersList />
    </div>
  );
};

export default App;
