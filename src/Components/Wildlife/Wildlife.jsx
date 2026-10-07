import React from "react";
import "./Wildlife.css";

function Wildlife() {
  const wildlife = [
    {
      title: "Sri Lankan Elephants",
      image: "/wildlife/elephant.webp",
      description:
        "See magnificent Sri Lankan elephants in their natural habitats and national parks.",
    },
    {
      title: "Sri Lankan Leopards",
      image: "/wildlife/leopard.jpg",
      description:
        "Discover the majestic Sri Lankan leopard, one of the island's most famous wild animals.",
    },
    {
      title: "Bird Watching",
      image: "/wildlife/birds.jpg",
      description:
        "Explore Sri Lanka's rich birdlife and discover colorful native and migratory birds.",
    },
    {
      title: "Sri Lankan Sloth Bears",
      image: "/wildlife/bear.jpg",
      description:
        "Discover the rare Sri Lankan sloth bear, found mainly in the island's dry zone forests.",
    },
    {
      title: "Wild Monkeys",
      image: "/wildlife/monkey.webp",
      description:
        "Meet playful monkeys and discover the different species found across the island.",
    },
    {
      title: "Whale Watching",
      image: "/wildlife/whale.jpg",
      description:
        "Experience unforgettable whale watching adventures along Sri Lanka's beautiful coastline.",
    },
  ];

  return (
    <section id="wildlife" className="wildlife-section">

      <div className="wildlife-header">
        <p className="section-subtitle">DISCOVER WILDLIFE</p>

        <h2>Wildlife of Sri Lanka</h2>

        <p className="section-description">
          Discover Sri Lanka's incredible wildlife, from magnificent elephants
          and leopards to colorful birds and amazing marine life.
        </p>
      </div>

      <div className="wildlife-grid">

        {wildlife.map((animal) => (
          <div className="wildlife-card" key={animal.title}>

            <img
              src={animal.image}
              alt={animal.title}
            />

            <div className="wildlife-content">
              <h3>{animal.title}</h3>

              <p>{animal.description}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Wildlife;