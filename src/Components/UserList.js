import React, { useState, useEffect } from 'react';

//Fetching data from api and display using useEffect Hook
const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(  () => {
    // Function to fetch data from API
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      finally{
        console.log("m to chalna hi tha");
      }
    };
    fetchData();

           return () => {
    };
  }, []); 
  return (
    <div>
      <h2>User List:</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
