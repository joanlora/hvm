import React from "react";
import Review1 from "../images/Review1.jpeg";
import Review2 from "../images/Review2.jpeg";

const About = () => {
  return (
    <div className="reviewBody">

<h1 className="reviewSlogan">Too Good to be true? Look at our results from real clients</h1>

<div class="responsive">
  <div class="gallery">
      <img src= {Review1}/>
      {/* <div class="desc">Add a description of the image here</div> */}
  </div>
</div>

<div class="responsive">
  <div class="gallery">
    
      <img src= {Review2}/>
    
    {/* <div class="desc">Add a description of the image here</div> */}
  </div>
</div>

<div class="clearfix"></div>

</div>
  );
};

export default About;