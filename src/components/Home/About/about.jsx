import React from "react";
import { motion } from "framer-motion";
import "./about.css";
import SectionTitle from "../../Shared/Title/sectionTitle";

const About = () => {
  return (
    <div className="aboutContainer">
      <motion.div
        className="aboutLeftContainer"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <SectionTitle title={"Welcome to Metamind"} />
      </motion.div>
      <motion.div
        className="aboutRightContainer"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}>
        <p>
          We are a team of passionate creatives who are dedicated to helping our
          clients achieve their marketing goals through innovative and effective
          strategies. Our agency is made up of designers, developers, marketers,
          and project managers who all work together to deliver exceptional
          results for our clients. Whether you are looking to launch a new
          product, increase your online presence, or drive more traffic to your
          website, we have the skills and expertise to help you achieve your
          goals. We work closely with our clients to understand their unique
          needs and develop customized strategies that are tailored to their
          specific objectives.
        </p>
        <p>
          At our agency, we are committed to delivering exceptional quality and
          service. We pride ourselves on our attention to detail and our ability
          to deliver projects on time and within budget. We are always striving
          to exceed our clients’ expectations and deliver outstanding results
          that help them achieve their business objectives.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
