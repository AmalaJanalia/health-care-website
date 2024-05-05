import React, { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import { Link } from "react-router-dom";


const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [greeting, setGreeting] = useState("");
  const [quote, setQuote] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const currentTime = new Date().getHours();
    let greetingMsg = "";

    if (currentTime >= 5 && currentTime < 12) {
      greetingMsg = "Good morning";
    } else if (currentTime >= 12 && currentTime < 18) {
      greetingMsg = "Good afternoon";
    } else {
      greetingMsg = "Good evening";
    }

    setGreeting(greetingMsg);

    fetchQuote();
    fetchImages();
  }, []);

  const fetchQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        setQuote(response.data.content);
      })
      .catch((error) => {
        console.error("Error fetching quote:", error);
      });
  };

  const fetchImages = () => {
    const accessKey = "NSJ3jlpbO74PVJHn0lDkOc6xqzLpJHaw6La152LpqI4"; // Replace with your Unsplash Access Key
    const apiUrl = "https://api.unsplash.com/photos/random?count=5"; // Endpoint to fetch random photos

    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Client-ID ${accessKey}`,
        },
      })
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  };

  const settings = {
    
    speed: 500, 
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2>Welcome to the Dashboard!</h2>
      {user && (
        <p>
          {greeting}, {user.username}
        </p>
      )}
      <p>Quote of the day: {quote}</p>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id}>
            <img
              className="carousel-image"
              src={image.urls.regular}
              alt={image.alt_description}
            />
          </div>
        ))}
      </Slider>
      <button><Link to="/mood-form">start your session</Link></button>
      <Link to ="/Calendar">Calendar</Link>
    </div>
  );
};

export default Dashboard;

