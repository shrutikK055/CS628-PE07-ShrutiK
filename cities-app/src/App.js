import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CitiesList from "./CitiesList";
import AddCity from "./AddCity";
import CityDetails from "./CityDetails";

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <h1>Cities Application</h1>
          <div className="nav-links">
            <Link to="/">Cities List</Link>
            <Link to="/add">Add City</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<CitiesList />} />
          <Route path="/add" element={<AddCity />} />
          <Route path="/city/:name" element={<CityDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
