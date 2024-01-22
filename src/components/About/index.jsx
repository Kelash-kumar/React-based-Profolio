import  { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import IconsComponent from './goal.component';
import { FaServicestack } from "react-icons/fa";
import './about.css';
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { FaAngleDoubleDown } from "react-icons/fa";
import profile_image from '../../assets/profile.jpeg';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.section className="about section" variants={stagger} initial="hidden" animate="visible">
      <div className='about__container container'>
        <motion.h1 className='section__title' variants={fadeInUp}>About Me</motion.h1>
        <div className='about__content'>
          <motion.img src={profile_image} alt="profile-image" className="profile-img" variants={fadeInUp} />
          <div className='about__content__text'>
            <motion.p variants={fadeInUp}>I am a <strong>Frontend Developer </strong> with a passion for learning and building web applications. I am a self-taught developer with a background in business and finance. I am currently working as a freelancer and looking for a full-time job as a Frontend Developer. I am a team player and I love working with people. I am a fast learner and I am always looking for ways to improve my skills.</motion.p>
            <motion.p variants={fadeInUp}>My goal is to become a Full Stack Developer and build amazing web applications that will help people and make their lives easier. I am currently learning React and I am looking forward to learning more about it.</motion.p>
            <motion.p variants={fadeInUp}>When I am not coding, I like to read books, watch movies and TV shows, play video games, and spend time with my family and friends.</motion.p>
            <motion.button className='btn' variants={fadeInUp}>Download CV</motion.button>
          </div>
        </div>
        {isScrolled &&
          <motion.span className='about__down__icon'
            style={{ cursor: 'pointer', backgroundColor: '#fff', borderRadius: '50%', padding: '0.5rem' }}
            onClick={() => window.scrollTo(
              {
                top: window.innerHeight,
                behavior: 'smooth',
              }
            )}
            variants={fadeInUp}
          >
            <FaAngleDoubleDown
              style={{ fontSize: '2rem', color: '#0f3f0f' }}
            />
          </motion.span>
        }
        <div className='more_about'>
          <div className='about__goal__container'>
            <IconsComponent icon={<MdGroups />}
              name='Clinets satisfied'
              value='100'
            />
            <IconsComponent icon={<FaServicestack />}
              name='Services provided'
              value='08'
            />
            <IconsComponent icon={<MdOutlineIncompleteCircle />}
              name='project compeletion'
              value='121'
            />
            <IconsComponent icon={<AiOutlineFundProjectionScreen />}
              name='project compeletion'
              value='121'
            />
          </div>
          <footer className='about__footer'>
            <motion.span variants={fadeInUp}>kelash.raisal@gmail.com</motion.span>
            <motion.span variants={fadeInUp}>+92 3491100042</motion.span>
            <motion.span variants={fadeInUp}>Rashidi Hostel Muet Jamshoro, Sindh</motion.span>
          </footer>
        </div>
      </div>
    </motion.section>
  )
}

export default About;
