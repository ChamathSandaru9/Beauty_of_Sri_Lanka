import React from "react";
import "./Experiences.css";

function Experiences() {
  const experiences = [
    {
      title: "Beach Adventures",
      image: "/experiences/beach.jpg",
      description:
        "Enjoy surfing, swimming, and relaxing on Sri Lanka's beautiful tropical beaches.",
    },
    {
      title: "Scenic Train Journeys",
      image: "/experiences/train.jpg",
      description:
        "Experience unforgettable train journeys through mountains, forests, and tea plantations.",
    },
    {
      title: "Wildlife Safaris",
      image: "/experiences/safari.jpg",
      description:
        "Discover elephants, leopards, and amazing wildlife on an exciting safari adventure.",
    },
    {
      title: "Sri Lankan Cuisine",
      image: "/experiences/food.jpg",
      description:
        "Taste delicious traditional dishes including rice and curry, hoppers, and kottu.",
    },
    {
      title: "Hiking & Adventure",
      image: "/experiences/hiking.jpg",
      description:
        "Explore breathtaking mountains, waterfalls, and scenic hiking trails across Sri Lanka.",
    },
    {
      title: "Tea Plantation Tours",
      image: "/experiences/tea.jpg",
      description:
        "Visit beautiful tea plantations and discover the story behind world-famous Ceylon tea.",
    },
  ];

  return (
    <section id="experiences" className="experiences-section">

      <div className="experiences-header">
        <p className="section-subtitle">EXPERIENCE SRI LANKA</p>

        <h2>Unforgettable Experiences</h2>

        <p className="section-description">
          Discover exciting adventures, rich traditions, delicious food,
          and unforgettable moments across the beautiful island of Sri Lanka.
        </p>
      </div>

      <div className="experience-grid">

        {experiences.map((experience) => (
          <div className="experience-card" key={experience.title}>

            <img
              src={experience.image}
              alt={experience.title}
            />

            <div className="experience-content">
              <h3>{experience.title}</h3>

              <p>{experience.description}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Experiences;