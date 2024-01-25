// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';
import './contact.css';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="contact section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <motion.div className="row" variants={itemVariants}>
          <div className="section-title">
            <h2 className='section__title'>Contact Me</h2>
          </div>
        </motion.div>
        <motion.div className="row" variants={itemVariants}>
          <div className="col-md-6">
            <div className="contact-info">
              <h3>Let's talk about everything!</h3>
            </div>
          </div>
          <div className="col-md-6">
            <motion.form
              action="https://formspree.io/f/xvoezqjq"
              method="POST"
              className="contact-form"
              variants={itemVariants}
            >
              <motion.input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                required
              />
              <motion.input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
              <motion.input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Subject"
                required
              />
              <motion.textarea
                name="message"
                rows="5"
                className="form-control"
                placeholder="Message"
              ></motion.textarea>
              <motion.input
                type="submit"
                className="form-control submit"
                value="SEND MESSAGE"
              />
            </motion.form>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;
