import React from "react";
import CardItem from "./CardItem";
import "./ServicesCard.css";

function ServicesCard() {
  return (
    <div className="cards">
      <h1>Our Services</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <h2>Waxing</h2>

          <ul className="cards__items">
            <CardItem
              src="images/brazillian.jpg"
              text="Our specialists are total pros — and they've seen it all! So the next time you're baring it all, bare confidently."
              label="Brazilian Wax"
              path="/services"
            />
            <CardItem
              src="images/brow.jpg"
              text="There’s no such thing as the perfect brow — just the best shape that highlights your highlights. You’re in great hands."
              label="Brow Wax"
              path="/services"
            />
            <CardItem
              src="images/facial.jpg"
              text="All faces have at least a little hair— it’s totally normal! But if you want to polish up a bit, we’re here to make it happen."
              label="Facial Wax"
              path="/services"
            />
          </ul>
          <h2>Make Up Application</h2>
          <ul className="cards__items">
            <CardItem
              src="images/waxing.jpg"
              text="We offer all kinds of waxing services for women, but these three are guests’ most requested."
              label="Waxing"
              path="/services"
            />
            <CardItem
              src="images/makeup.jpg"
              text="From traditional to airbrush, let us style you up!"
              label="Make Up"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
