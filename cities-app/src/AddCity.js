import React, { useState } from "react";

const AddCity = () => {
  const [city, setCity] = useState({ name: "", country: "", population: "" });

  const handleChange = (e) => {
    setCity({ ...city, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`City Added: ${city.name}`);
    setCity({ name: "", country: "", population: "" });
  };

  return (
    <div className="container">
      <h2>Add City</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={city.name} onChange={handleChange} required />
        
        <label>Country:</label>
        <input type="text" name="country" value={city.country} onChange={handleChange} required />

        <label>Population:</label>
        <input type="text" name="population" value={city.population} onChange={handleChange} required />

        <button type="submit">Add City</button>
      </form>
    </div>
  );
};

export default AddCity;
