import React, { useState } from 'react';

const Third = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    id: ''
  });
  const [a, setA] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setA([...a, formData]); 
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      age: '',
      id: ''
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          ID:
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        {a && a.map((value, index) => (
          <div key={index}>
            <p>Name: {value.name}</p>
            <p>Age: {value.age}</p>
            <p>ID: {value.id}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Third;
