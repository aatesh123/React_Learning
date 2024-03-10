import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataListComponent = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.example.com/data');
      setData(response.data);
    } catch (error) {
      setError(error);
    }
  };

  if (error) {
    throw error; // Let the error boundary catch and handle the error
  }

  return (
    <div>
      <h2>Data List</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataListComponent;
