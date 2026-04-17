import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Citylist from "./components/citylist/citylist";
import Createcityfrom from "./components/createCityform/createcityfrom";

import "./App.css"

function App() {
  const [city, setCity] = useState([]);

  const [showmodal, setshowmodal] = useState(false);

  const Addcity = (newCity) => {
    setCity((prev) => {
      return [...prev, newCity];
    });
    setshowmodal(false);
  };

  const deleteCity = (id) => {
    setCity((cities) => {
      return cities.filter((city) => {
        return city.id !== id;
      });
    });
  };

  const closeModal = (e) => {
    if (e.target.className === "overlay") setshowmodal(false);
    if (e.key === "Escape") setshowmodal(false);
  };

  return (
    <div onClick={closeModal} className="App">
    <h1 className="title">Hello world</h1>
      <Navbar citieslength={city.length} />
      <main>
        <div className="no-cities">
          {city.length === 0 && <h2>No Cities</h2>}
        </div>
        <Citylist deleteCity={deleteCity} cities={city} />
      </main>
      {showmodal && <Createcityfrom Addcity={Addcity} />}
      <button onClick={() => setshowmodal(true)} className="create-city">
        Add your Favourite City
      </button>
      <Footer />
    </div>
  );
}

export default App;
