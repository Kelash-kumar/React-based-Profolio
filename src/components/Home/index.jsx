import { motion } from 'framer-motion';
import './style.css';
import { CiFacebook } from 'react-icons/ci';
import { CiLinkedin } from 'react-icons/ci';
import { FiGithub } from 'react-icons/fi';
import profile_image from '../../assets/profile.jpeg'

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="homepage container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.section className="intro" variants={itemVariants}>
        <motion.img
          className="user_img"
          src={profile_image}
          alt="image"
        />
        <motion.h1 className="name">Kelash Kumar</motion.h1>
        <motion.h3 className="job">MERN Stack Developer</motion.h3>
        <motion.div
          className="social-icons header__icons"
          variants={itemVariants}
        >
          <a href="https://www.linkedin.com/in/kelash-kumar-47245a255/" target="_blank" rel="noopener noreferrer">
          <CiLinkedin className="icon media_icon" />
          </a>
          <a href="https://github.com/Kelash-kumar" target="_blank" rel="noopener noreferrer">
          <FiGithub className="icon media_icon" />
          </a>
          <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <CiFacebook className="icon media_icon" />
          </a>
        </motion.div>
        <motion.a href="#" className="btn" variants={itemVariants}>
          Hire Me
        </motion.a>
      </motion.section>
    </motion.section>
  );
};

export default Home;
