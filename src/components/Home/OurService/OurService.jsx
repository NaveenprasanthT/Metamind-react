import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../Shared/Title/sectionTitle';
import { FacebookIcon } from '../../Shared/svgIcon';
import './OurService.css';

function OurService() {
  const ourServiceData = [
    {
      icon: FacebookIcon,
      title: 'Web Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    },
    {
      icon: FacebookIcon,
      title: 'Social Media',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    },
    {
      icon: FacebookIcon,
      title: 'SEO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    },
    {
      icon: FacebookIcon,
      title: 'Paid Campaign',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    },
    {
      icon: FacebookIcon,
      title: 'Online Marketing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    },
    {
      icon: FacebookIcon,
      title: 'Marketing Strategy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    },
    {
      icon: FacebookIcon,
      title: 'Visual Branding',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    },
    {
      icon: FacebookIcon,
      title: 'Video Production',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    },
    {
      icon: FacebookIcon,
      title: 'Product Photography',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    },
    {
      icon: FacebookIcon,
      title: 'Corporate Photography',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    },
    {
      icon: FacebookIcon,
      title: 'Packaging',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    },
  ];
  return (
    <div className="our-service-wrap">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <SectionTitle title="You are the Story, We are the Storyteller" />
      </motion.div>
      <div className="our-service-container">
        {ourServiceData?.map((service) => (
          <motion.div
            className="each-service-wrap"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span>{<service.icon />}</span>
            <SectionTitle title={service.title} />
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default OurService;
