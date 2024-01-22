import'./resume.css';
import Card from './card';
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";
import { MdOutlineClass } from "react-icons/md";
const Education = () => {

  const Data=[
    {
      type:'education',
      icon:<MdOutlineClass className='exp_icon'/>,
      year:'2021-present',
      title:'Software Engineering',
      desc:'Graduating from the University of Muet Jamshoro.still studying in 5th semester.'
    },
    {
      type:'education',
      icon:<MdOutlineClass className='exp_icon'/>,
      year:'2019-2020',
      title:'O-level ',
      desc:'BFPS School System.Achieved above 80% marks in all subjects .'
    },
    {
      type:'education',
      icon:<MdOutlineClass className='exp_icon'/>,
      year:'2023',
      title:'computer Course',
      desc:'APTECH Computer Education. The course was about Basics of computer knowledges and MS Office.'
    },
    {
      type:'experience',
      icon:<FaGraduationCap className='exp_icon'/>,
      year:'2021',
      title:'Web Developer',
      desc:'I have done my internship in Web Development. After successfully completing the internship, '
    },
    {
      type:'experience',
      icon:<FaGraduationCap className='exp_icon'/>,
      year:'2022',
      title:'React  Developer',
      desc:'I have done my internship in React Development.After successfully completing the internship, '
    },
    {
      type:'experience',
      icon:<FaGraduationCap className='exp_icon'/>,
      year:'2023',
      title:'Full stack MERN Developer',
      desc:'I have done my internship in MERN Development.After successfully completing the internship, '
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="edu_pge"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="edu_container">
        <div className='experience'>
          <h1 style={{ fontSize: '1.7rem', marginBottom: '2rem' }}>Experience</h1>
          {Data.map((item, index) => {
            return (
              item.type === 'experience' && (
                <motion.div
                  className="experience_content"
                  key={index}
                  variants={itemVariants}
                >
                  <Card
                    icon={item.icon}
                    year={item.year}
                    title={item.title}
                    desc={item.desc}
                  />
                </motion.div>
              )
            );
          })}
        </div>

        <div className='experience'>
          <h1 style={{ fontSize: '1.7rem', marginBottom: '2rem' }}>Education</h1>
          {Data.map((item, index) => {
            return (
              item.type === 'education' && (
                <motion.div
                  className="experience_content"
                  key={index}
                  variants={itemVariants}
                >
                  <Card
                    icon={item.icon}
                    year={item.year}
                    title={item.title}
                    desc={item.desc}
                  />
                </motion.div>
              )
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Education;
