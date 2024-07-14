import React from "react";
import { motion } from "framer-motion";
import "./card.css";
import Button from "../../Shared/Button/button";

const Card = () => {
  return (
    <div className="cardContainer">
      <div className="cardWrapper">
        <motion.div
          className="cardLContainer" 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1>Wanna Fly with Us?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </motion.div>
        <motion.div
          className="cardBtnContainer"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Button buttonTxt={"Contact US"} handleClick={() => { }} />
        </motion.div>
      </div>
    </div>
  );
};

export default Card;
