import React, { useState } from 'react';

const SearchBar = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission
    console.log('Name:', name);
    console.log('Email:', email);
  };

  const handleClear = () => {
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center border-2 border-gray-600 p-4 rounded-md">
      <div className="flex flex-col mr-4">
        <label htmlFor="name" className="mb-1">Name:</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter name" 
          className="p-2 border rounded-md"
        />
      </div>
      <div className="flex flex-col mr-4">
        <label htmlFor="email" className="mb-1">Email:</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter email" 
          className="p-2 border rounded-md"
        />
      </div>
      <button type="submit" className="py-2 px-4 mt-6 bg-red-600 text-white rounded-md mr-2">Submit</button>
      <button type="button" onClick={handleClear} className="py-2 px-4 mt-6 bg-white border rounded-md">Clear</button>
    </form>
  );
};

export default SearchBar;
