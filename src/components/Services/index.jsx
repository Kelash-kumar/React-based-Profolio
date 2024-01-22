/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';
import './services.css';
import image1 from '../../assets/service-1.svg';
import image2 from '../../assets/service-2.svg';
import image3 from '../../assets/service-3.svg';

const ProgressBar = ({ skillName, value, color }) => {
  return (
    <motion.div
      className="skill_progress__item"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <p>{skillName}</p>
      <div className="progress">
        <div
          className="progress-bar"
          style={{
            width: `${value}%`,
            backgroundColor: `${color}`,
          }}
        ></div>
      </div>
    </motion.div>
  );
};

const ServiceItem = ({ image, title, description }) => {
  return (
    <motion.div
      className="service-item"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img src={image} alt={`Service Icon`} />
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

const Services = () => {
  return (
    <motion.div
      className="service"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section__title">My Services</h2>
      <div className="services-container">
        <ServiceItem
          image={image1}
          title="Web Development"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula auctor sem, et sagittis lorem fermentum id."
        />
        <ServiceItem
          image={image2}
          title="Graphic Design"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula auctor sem, et sagittis lorem fermentum id."
        />
        <ServiceItem
          image={image3}
          title="Mobile App Development"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula auctor sem, et sagittis lorem fermentum id."
        />
      </div>
      <div className="skill_progress">
        <h2 className="section__title">My Skills</h2>
        <div className="skill_progress__container">
          <ProgressBar skillName={'HTML'} value={90} color={'#f16529'} />
          <ProgressBar skillName={'CSS'} value={80} color={'#2965f1'} />
          <ProgressBar skillName={'Javascript'} value={70} color={'#f0db4f'} />
          <ProgressBar skillName={'React'} value={60} color={'#61dbfb'} />
          <ProgressBar skillName={'Node'} value={50} color={'#68a063'} />
          <ProgressBar skillName={'MongoDB'} value={56} color={'#4db33d'} />
          <ProgressBar skillName={'Express'} value={48} color={'#ffef00'} />
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
