import React from "react";
import { useParams } from "react-router-dom";

const cities = {
  Seattle: { country: "USA", population: "733,919" },
};

const CityDetails = () => {
  const { name } = useParams();
  const city = cities[name];

  if (!city) {
    return <h2>City Not Found</h2>;
  }

  return (
    <div className="container">
      <h2>{name} Details</h2>
      <p>Country: {city.country}</p>
      <p>Population: {city.population}</p>
    </div>
  );
};

export default CityDetails;
