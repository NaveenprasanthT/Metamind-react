import React from 'react';
import { motion } from 'framer-motion';
import image1 from "../../../assets/OurWorks/image1.png";
import image2 from "../../../assets/OurWorks/image2.png";
import image3 from "../../../assets/OurWorks/image3.png";
import image4 from "../../../assets/OurWorks/image4.png";
import image5 from "../../../assets/OurWorks/image5.png";
import image6 from "../../../assets/OurWorks/image6.png";
import './ourWorks.css';
import SectionTitle from '../../Shared/Title/sectionTitle';
import Button from '../../Shared/Button/button';

function OurWorks() {
  const firstSection = [
    {
      id: 1,
      gridColumnStart: 1,
      gridColumnEnd: 4,
      gridRowStart: 1,
      gridRowEnd: 7,
      imageToShow: image1,
    },
    {
      id: 2,
      gridColumnStart: 4,
      gridColumnEnd: 8,
      gridRowStart: 1,
      gridRowEnd: 5,
      imageToShow: image2,
    },
    {
      id: 3,
      gridColumnStart: 8,
      gridColumnEnd: 12,
      gridRowStart: 1,
      gridRowEnd: 7,
      imageToShow: image3,
    },
    {
      id: 4,
      gridColumnStart: 1,
      gridColumnEnd: 4,
      gridRowStart: 7,
      gridRowEnd: 12,
      imageToShow: image4,
    },
    {
      id: 5,
      gridColumnStart: 4,
      gridColumnEnd: 8,
      gridRowStart: 5,
      gridRowEnd: 12,
      imageToShow: image5,
    },
    {
      id: 6,
      gridColumnStart: 8,
      gridColumnEnd: 12,
      gridRowStart: 7,
      gridRowEnd: 12,
      imageToShow: image6,
    },
  ];
  return (
    <div className="our-works-wrap">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <SectionTitle title="Our Works" />
      </motion.div>
      <div className="our-works-container">
        <div className="our-works-first-section">
          {firstSection?.map((each) => (
            <motion.img
              src={each?.imageToShow}
              style={{
                gridColumnStart: each.gridColumnStart,
                gridColumnEnd: each.gridColumnEnd,
                gridRowStart: each.gridRowStart,
                gridRowEnd: each.gridRowEnd,
              }}
              key={each.id}
              className="first-section-image"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </div>
      <div className="button-wrap">
        <Button buttonTxt="Show more" />
      </div>
    </div>
  );
}

export default OurWorks;
