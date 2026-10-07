import React from "react";
import "./Destinations.css";

function Destinations() {
  const destinations = [
    {
      name: "Kandy",
      image: "/destinations/Kandy.png",
      description: "Discover ancient culture, temples, and beautiful mountain scenery.",
    },
    {
      name: "Galle",
      image: "/destinations/Galle.jpg",
      description: "Explore the historic Galle Fort and the beautiful southern coast.",
    },
    {
      name: "Yala",
      image: "/destinations/Yala.png",
      description: "Experience Sri Lanka's wildlife and unforgettable safari adventures.",
    },
    {
      name: "Nuwara Eliya",
      image: "/destinations/Nuwara Elliya.png",
      description: "Enjoy cool mountain air, tea plantations, and breathtaking landscapes.",
    },
    {
      name: "Sigiriya",
      image: "/destinations/Sigiriya.jpg",
      description: "Explore the ancient Sigiriya Rock Fortress, surrounded by stunning landscapes and rich Sri Lankan history.",
    },
    {
      name: "Ella",
      image: "/destinations/Ella.avif",
      description: "Enjoy breathtaking mountain views, scenic train journeys, waterfalls, and beautiful tea plantations.",
    },
  ];

  return (
    <section id="destinations" className="destinations-section">

      <div className="destinations-header">
        <p className="section-subtitle">EXPLORE SRI LANKA</p>

        <h2>Discover Our Destinations</h2>

        <p className="section-description">
          From beautiful mountains and historic cities to wildlife and
          tropical coastlines, discover the amazing places of Sri Lanka.
        </p>
      </div>

      <div className="destination-grid">

        {destinations.map((destination) => (
          <div className="destination-card" key={destination.name}>

            <img
              src={destination.image}
              alt={destination.name}
            />

            <div className="destination-content">
              <h3>{destination.name}</h3>

              <p>{destination.description}</p>

              <a href="#home" className="destination-link">
                Explore
              </a>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Destinations;