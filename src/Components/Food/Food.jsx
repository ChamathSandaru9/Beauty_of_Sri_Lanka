import React from "react";
import "./Food.css";

function Food() {
  const foods = [
    {
      title: "Rice & Curry",
      image: "/food/rice-curry.jpg",
      description:
        "Enjoy Sri Lanka's traditional rice and curry, served with a variety of flavorful curries and side dishes.",
    },
    {
      title: "Hoppers",
      image: "/food/hoppers.webp",
      description:
        "Taste crispy, bowl-shaped Sri Lankan pancakes made from fermented rice batter and coconut milk.",
    },
    {
      title: "Kottu Roti",
      image: "/food/kottu.jpg",
      description:
        "Try chopped roti stir-fried with vegetables, eggs, meat, and aromatic Sri Lankan spices.",
    },
    {
      title: "String Hoppers",
      image: "/food/string-hoppers.avif",
      description:
        "Enjoy delicate rice-flour noodles traditionally served with curry and delicious coconut sambol.",
    },
    {
      title: "Pol Sambol",
      image: "/food/pol-sambol.jpg",
      description:
        "Taste this spicy coconut relish made with fresh coconut, chili, onion, and lime.",
    },
    {
      title: "Watalappam",
      image: "/food/watalappam.jpg",
      description:
        "Finish your meal with this delicious traditional coconut custard flavored with spices and jaggery.",
    },
  ];

  return (
    <section id="food" className="food-section">

      <div className="food-header">
        <p className="section-subtitle">TASTE SRI LANKA</p>

        <h2>Flavors of Sri Lanka</h2>

        <p className="section-description">
          Discover the rich flavors, traditional recipes, and delicious dishes
          that make Sri Lankan cuisine truly special.
        </p>
      </div>

      <div className="food-grid">

        {foods.map((food) => (
          <div className="food-card" key={food.title}>

            <img
              src={food.image}
              alt={food.title}
            />

            <div className="food-content">
              <h3>{food.title}</h3>

              <p>{food.description}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Food;