import React from "react";
// import BannerBackground from "../Assets/home-banner-background.png";
// import BannerImage from "../Assets/home-banner-image.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={BannerBackground} alt="" /> */}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Want to make $10,000 plus a month from the comfort of your home?
          </h1>
          <hr></hr>
          <br/>
          <a href="https://calendly.com/coaching-c0y/initial-amazon-business-consultation-call?month=2023-09">
          <button className="book-button">
            <span>Click Here to Book a free 15 minute Coaching Call!</span>
          </button>
          </a>
        </div>
        <div className="home-image-section">
          {/* <img src={BannerImage} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;