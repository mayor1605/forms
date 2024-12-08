import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Form Data:', formData); 
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-11 border rounded-md w-1/2 mx-auto mt-[300px]">
      <div>
        <label htmlFor="name" className="block font-medium">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded w-full p-2"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-medium">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border rounded w-full p-2"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block font-medium">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="border rounded w-full p-2"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
}

export default Form;


