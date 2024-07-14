import React from "react";
import "./card.css";
import Button from "../../Shared/Button/button";

const Card = () => {
  return (
    <div className="cardContainer">
      <div className="cardWrapper">
        <div className="cardLContainer">
          <h1>Wanna Fly with Us?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
        <div className="cardBtnContainer">
          <Button buttonTxt={"Contact US"} handleClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Card;
