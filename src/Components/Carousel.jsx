// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function Carousel() {
//   const [navArrowColor, setNavArrowColor] = useState("black");

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   const handleArrowClick = () => {
//     // Change arrow color to red on click
//     setNavArrowColor("red");
//   };

//   return (
//     <div>
//       <Slider {...settings}>
//         <div>
//           <img
//             src="https://www.evanik.com/wp-content/uploads/2021/10/New-Project-10.png"
//             alt="Slide 1"
//           />
//         </div>

//         <div>
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIil_7zrrAJAx6h2iBgbGpbevEN-7KkKrDjtV6gR5tJsMWZNiZq9lBk8CLfTZ3z-4rqfc&usqp=CAU"
//             alt="Slide 2"
//           />
//         </div>

//         <div>
//           <img
//             src="https://www.comestri.com/wp-content/uploads/2020/11/Order-Process-Graphic.png"
//             alt="Slide 3"
//           />
//         </div>
//       </Slider>
//       <button
//         className="slick-prev"
//         onClick={handleArrowClick}
//         style={{ color: navArrowColor }}
//       >
//         Previous
//       </button>
//       <button
//         className="slick-next"
//         onClick={handleArrowClick}
//         style={{ color: navArrowColor }}
//       >
//         Next
//       </button>
//     </div>
//   );
// }

// export default Carousel;
// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Carousel = () => {
//   const [navArrowColor, setNavArrowColor] = useState("black");

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   const handleArrowClick = () => {
//     // Change arrow color to red on click
//     setNavArrowColor("red");
//   };

//   return (
//     <div>
//       <Slider {...settings}>
//         <div>
//           <h3>Slide 1</h3>
//         </div>
//         <div>
//           <h3>Slide 2</h3>
//         </div>
//         <div>
//           <h3>Slide 3</h3>
//         </div>
//       </Slider>
//       <button
//         className="slick-prev"
//         onClick={handleArrowClick}
//         style={{ color: navArrowColor }}
//       >
//         Previous
//       </button>
//       <button
//         className="slick-next"
//         onClick={handleArrowClick}
//         style={{ color: navArrowColor }}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// // export default Carousel;
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// //import "./Carousel.css"; // Custom CSS for carousel styles

// const Carousel = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     prevArrow: <CustomPrevArrow />,
//     nextArrow: <CustomNextArrow />,
//   };

//   return (
//     <div>
//       <Slider {...settings}>
//         <div>
//           <h3>Slide 1</h3>
//         </div>
//         <div>
//           <h3>Slide 2</h3>
//         </div>
//         <div>
//           <h3>Slide 3</h3>
//         </div>
//       </Slider>
//     </div>
//   );
// };

// // Custom previous arrow component
// const CustomPrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, color: "red", left: "-30px" }}
//       onClick={onClick}
//     />
//   );
// };

// // Custom next arrow component
// const CustomNextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, color: "red", right: "-30px" }}
//       onClick={onClick}
//     />
//   );
// };

// export default Carousel;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return <button onClick={onClick}>Previous</button>;
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return <button onClick={onClick}>Next</button>;
  };

  return (
    <Slider {...settings}>
      {/* Add your carousel items here */}
      <div>
        <h3>Slide 1</h3>
      </div>
      <div>
        <h3>Slide 2</h3>
      </div>
      <div>
        <h3>Slide 3</h3>
      </div>
    </Slider>
  );
}

export default MyCarousel;
