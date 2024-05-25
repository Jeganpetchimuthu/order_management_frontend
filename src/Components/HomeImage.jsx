import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Style-Components/HomeImage.css";
function HomeImage() {
  return (
    <div className="Homeimg">
      <Carousel>
        <div>
          <img
            src="https://www.evanik.com/wp-content/uploads/2021/10/New-Project-10.png"
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIil_7zrrAJAx6h2iBgbGpbevEN-7KkKrDjtV6gR5tJsMWZNiZq9lBk8CLfTZ3z-4rqfc&usqp=CAU"
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            src="https://www.comestri.com/wp-content/uploads/2020/11/Order-Process-Graphic.png"
            alt="Slide 3"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default HomeImage;
