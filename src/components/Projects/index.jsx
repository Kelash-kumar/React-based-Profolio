
import { useState } from 'react';
import { motion } from 'framer-motion';
import './projects.css';
// import work1 from '../../assets/Docs-App-react.png';
// import work2 from '../../assets/Blog-website-login_singup.png';
// import work3 from '../../assets/Pinterest_SingUp page.png';
// import work4 from '../../assets/work-4.svg';
// import work5 from '../../assets/work-5.svg';
// import work6 from '../../assets/work-6.svg';
import { useUser } from '../../UserContext';
import ProjectItem from './ProjectItem';


const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};


function Projects() {
  const user = useUser();
  const projects=user.projects;
  const allCategories = ['All', 'Nodejs', 'Creative', 'Design', 'Reactjs'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <motion.section className="section projects" variants={stagger} initial="hidden" animate="visible">
      <div className="container">
        <motion.div className="projects__header">
          <motion.h3 className="section__title">Recent Work</motion.h3>
          <div className="section__header">
            <div className="section__tabs">
              {allCategories.map((category) => (
                <motion.div
                  key={category}
                  className={`section__tab ${selectedCategory === category ? 'section__tab--active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div className="projects__content">
          {filteredProjects.map((item) => (
            <ProjectItem key={item.id} title={item.title} category={item.category} imgSrc={item.image} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Projects;
