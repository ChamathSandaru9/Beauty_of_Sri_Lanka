// import React,{useState} from 'react'
// import { Slider } from "./Slider";
// import "./Home.css";
// import {useEffect} from 'react'
// import { SlArrowLeft } from "react-icons/sl";
// import { SlArrowRight } from "react-icons/sl";


// function Home() {

//   const [activeImg,setActiveImg] = useState(0);
//   const handlePrev = () =>{
//     if (activeImg <= 0) {
//       setActiveImg(Slider.length - 1)
//     }else{
//       setActiveImg(activeImg - 1)
//     }
//   }

//   useEffect(()=>{
//     let timer = setTimeout(() =>{
//       handleNext();
//     }, 3000);

//     return() =>{
//       clearTimeout(timer);
//     }

//   },[activeImg])

//   const handleNext =() =>{
//     setActiveImg((activeImg + 1) % Slider.length)
//   }
//   return (
//     <>
//       <div className="carousel">
//         <button onClick ={handlePrev}>
//           <SlArrowLeft />
//         </button>
//         {
//           Slider.map((item,i)=>{
//             return(
//               <img className= {activeImg === i ?"img" : "hide"} 
//               src={item.url} alt={item.alt} key={item.id} />
//             )
//           })
//         }
//         <button onClick ={handleNext}>
//           <SlArrowRight />
//         </button>
//       </div>
//     </>
//   )
// }

// export default Home
import React, { useState, useEffect } from "react";
import { Slider } from "./Slider";
import "./Home.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function Home() {
  const [activeImg, setActiveImg] = useState(0);

  const handlePrev = () => {
    if (activeImg <= 0) {
      setActiveImg(Slider.length - 1);
    } else {
      setActiveImg(activeImg - 1);
    }
  };

  const handleNext = () => {
    setActiveImg((activeImg + 1) % Slider.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeImg]);

  return (
    <section id="home">
      <div className="carousel">

        {/* Hero Image */}
        {Slider.map((item, i) => {
          return (
            <img
              className={activeImg === i ? "img" : "hide"}
              src={item.url}
              alt={item.alt}
              key={item.id}
            />
          );
        })}

        {/* Hero Overlay */}
        <div className="hero-overlay">
        {/* Hero Content */}
        <div className="hero-content">
          <span>WELCOME TO SRI LANKA</span>
          <h1>Discover the Beauty of Sri Lanka</h1>

          <p>
            Explore breathtaking destinations, unforgettable experiences,
            amazing wildlife, and delicious Sri Lankan food.
          </p>

          <a href="#destinations" className="hero-btn">
            Explore Sri Lanka
          </a>
        </div>

        {/* Previous Button */}
        <button className="prev-btn" onClick={handlePrev}>
          <SlArrowLeft />
        </button>

        {/* Next Button */}
        <button className="next-btn" onClick={handleNext}>
          <SlArrowRight />
        </button>
        </div>

      </div>
    </section>
  );
}

export default Home;