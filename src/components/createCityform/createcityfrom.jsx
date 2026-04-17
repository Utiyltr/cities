import React, { useState } from "react";
import "./createcityfrom.css";
import { v4 as uidv4 } from "uuid";
function createcityfrom({ Addcity }) {
  const [city, setCity] = useState({
    id: uidv4(),
    img: "",
    cityName: "",
    Citydescription: "",
    whyfavaurite: "",
    population: "",
    location: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    Addcity(city);
  };
  return (
    <div className="modal-wrapper">
      <div className="overlay">
        <div className="modal">
          <h2>Add your Favourite City</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Img Url : </span>
              <input
                type="url"
                onChange={(e) => {
                  setCity((prev) => {
                    return { ...prev, img: e.target.value };
                  });
                }}
                required
              />
            </label>
            <label>
              <span>City Name : </span>
              <input
                type="text"
                onChange={(e) => {
                  setCity((prev) => {
                    return { ...prev, cityName: e.target.value };
                  });
                }}
                required
              />
            </label>
            <label>
              <span> City Description : </span>
              <input
                type="text"
                onChange={(e) => {
                  setCity((prev) => {
                    return { ...prev, Citydescription: e.target.value };
                  });
                }}
                required
              />
            </label>
            <label>
              <span> why is it your Favourite : </span>
              <input
                type="text"
                onChange={(e) => {
                  setCity((prev) => {
                    return { ...prev, whyfavaurite: e.target.value };
                  });
                }}
                required
              />
            </label>
            <label>
              <span> Population : </span>
              <input
                type="text"
                onChange={(e) => {
                  setCity((prev) => {
                    return { ...prev, population: e.target.value };
                  });
                }}
                required
              />
            </label>
            <label>
              <span> Location : </span>
              <input
                type="text"
                onChange={(e) => {
                  setCity((prev) => {
                    return { ...prev, location: e.target.value };
                  });
                }}
                required
              />
            </label>
            <button className="modal-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default createcityfrom;
// id: 1,
//       img: "https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt4200e2b750dc496d/677a72bc0680e57c0fca79be/norbert-braun-naGF02nMH5U-unsplash-Header_Mobile.jpg?fit=crop&disable=upscale&auto=webp&quality=60&crop=smart",
//       cityname: "Berlin",
//       cityDescription:
//         "Berlin is the capital of Germany, as well as its largest city by both area and population.[10] With 3.7 million inhabitants,[5] it has the highest population within its city limits of any city in the European Union. The city is also one of the states of Germany, being the third-smallest state in the country by area",
//       whyfavourite:
//         "has a great history not only of people but luxury car companies ",
//       population: "14MLN +",
//       location: "Germany",
