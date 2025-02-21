import React, { useState } from "react";
import { Link } from "react-router-dom";

const CitiesList = () => {
  const [cities, setCities] = useState([{ name: "Seattle", country: "USA", population: "733,919" }]);

  return (
    <div className="container">
      <h2>Cities List</h2>
      <ul>
        {cities.map((city, index) => (
          <li key={index}>
            <Link to={`/city/${city.name}`}>{city.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CitiesList;
