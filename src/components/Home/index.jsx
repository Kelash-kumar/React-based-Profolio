/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import './style.css';
import { useUser } from '../../UserContext';
import HandWave from './HandWave';
const Home = () => {

  const user = useUser();
  const { name, profession, profile_image, social } = user;


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

        <motion.h1 className="name"> Hi, <HandWave /> I'm {name}</motion.h1>
        <motion.h3 className="job">{profession}</motion.h3>
        <motion.div
          className="social-icons header__icons"
          variants={itemVariants}
        >
          {
            social.map((item, index) => {
              return (
                <a href={item.link} target="_blank" rel="noopener noreferrer" key={index}>
                  {item.icons}
                </a>
              )
            })
          }

        </motion.div>
        <motion.a href="mailto:kelash.raisal@example.com?subject=Job%20Opportunity&body=Hello%20I%20am%20interested%20in%20working%20with%20you!"
          className='btn'
          variants={itemVariants}
        >Hire Me</motion.a>
      </motion.section>
    </motion.section>
  );
};

export default Home;
