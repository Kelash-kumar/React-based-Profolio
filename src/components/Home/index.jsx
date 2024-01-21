import { motion } from 'framer-motion';
import './style.css';
import { CiFacebook } from 'react-icons/ci';
import { CiLinkedin } from 'react-icons/ci';
import { FaXTwitter } from 'react-icons/fa6';
import profile_image from '../../../public/assets/avatar-1.svg'

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
        <motion.h3 className="job">Backend Developer</motion.h3>
        <motion.div
          className="social-icons header__icons"
          variants={itemVariants}
        >
          <CiFacebook className="icon media_icon" />
          <CiLinkedin className="icon media_icon" />
          <FaXTwitter className="icon media_icon" />
        </motion.div>
        <motion.a href="#" className="btn" variants={itemVariants}>
          Hire Me
        </motion.a>
      </motion.section>
    </motion.section>
  );
};

export default Home;
