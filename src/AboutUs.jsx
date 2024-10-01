import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      {/* <h1 className="about-us-heading">About Us</h1> */}
      <p className="about-us-description">Welcome to House Plant Shop!</p>
      <p className="about-us-content">
        Our founders started out as a group of childhood friends that all had a passion for nature and the outdoors. 
        Post college, they ended up becoming roommates. Turns out, having a home filled with plants was something they continued to have in common. 
        Unfortunately, they found it difficult to find a place online to purchase houseplants that was easy to navigate and wasn’t just geared to wholesale. 
        So, in 2017, they decided to launch HousePlantShop.com to be the ultimate destination for everything houseplants. 
      </p>
      {/* <p className="plant_logo_left"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}
      <p className="about-us-content">
      <strong>Everything House Plants</strong><br/>
      We’re your online houseplant destination. 
      We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! 
      </p>
      {/* <p className="plant_logo_right"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}

      <p className="about-us-content">
        Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today and experience the 
        beauty of nature right at your doorstep.
      </p>
    </div>
  );
}

export default AboutUs;
