import React from "react";
import "./citylist.css";

function citylist({ cities, deleteCity }) {
  return (
    <div className="citylist">
      <div className="cityList-container container">
        {cities.map((city) => {
          return (
            <div className="card" key={city.id}>
              <div className="card-inner">
                <img
                  src={city.img}
                  alt={city.cityName}
                  width={150}
                  height={150}
                />
                <h3>Name : {city.cityName}</h3>
                <p>
                  <strong>Description : </strong>
                  {city.Citydescription}
                </p>
                <p>
                  <strong>Why it is your favourite : </strong>
                  {city.whyfavaurite}
                </p>{" "}
                <p>
                  <strong>Population : </strong>
                  {city.population}
                </p>{" "}
                <p>
                  <strong>Location : </strong>
                  {city.location}
                </p>
                <button onClick={() => deleteCity(city.id)}>
                  Delete This City from Fav's
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default citylist;
