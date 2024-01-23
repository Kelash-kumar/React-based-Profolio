/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  
const ProjectItem = ({imgSrc,title,category}) => {
  return (
    <motion.div className="projects__item" variants={fadeInUp}>
    <motion.div className="projects__item-img">
      <img src={imgSrc}  />
    </motion.div>
    <motion.div className="projects__item-info">
      <h3 className="projects__item-title">{title}</h3>
      <span className="projects__item-category">{category}</span>
    </motion.div>
  </motion.div>
  )
}

export default ProjectItem