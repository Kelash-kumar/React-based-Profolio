import  { useState } from 'react';
import './projects.css';
import work1 from '../../../public/assets/work-1.svg';
import work2 from '../../../public/assets/work-2.svg';
import work3 from '../../../public/assets/work-3.svg';
import work4 from '../../../public/assets/work-4.svg';
import work5 from '../../../public/assets/work-5.svg';
import work6 from '../../../public/assets/work-6.svg';

// eslint-disable-next-line react/prop-types
function ProjectItem({ title, category, imgSrc }) {
  return (
    <div className="projects__item">
      <div className="projects__item-img">
        <img src={imgSrc} alt="" />
      </div>
      <div className="projects__item-info">
        <h3 className="projects__item-title">{title}</h3>
        <span className="projects__item-category">{category}</span>
      </div>
    </div>
  );
}

function Projects() {
  const allCategories = ['All', 'Branding', 'Creative', 'Design', 'Photography'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      image: work1,
      title: 'Project Management Illustration',
      category: 'Design',
    },
    {
      id: 2,
      image: work2,
      title: 'Guest App Walkthrough Screens',
      category: 'Art',
    },
    {
      id: 3,
      image: work3,
      title: 'Delivery App Wireframe',
      category: 'Branding',
    },
    {
      id: 4,
      image: work4,
      title: 'Onboarding Motivation',
      category: 'Design',
    },
    {
      id: 5,
      image: work5,
      title: 'iMac Mockup Design',
      category: 'Creative',
    },
    {
      id: 6,
      image: work6,
      title: 'Game Store App Concept',
      category: 'Art',
    },
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="section projects">
      <div className="container">
        <div className="projects__header">
          <h3 className="section__title">Recent</h3>
          <div className="section__header">
            <div className="section__tabs">
              {allCategories.map((category) => (
                <div
                  key={category}
                  className={`section__tab ${selectedCategory === category ? 'section__tab--active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="projects__content">
          {filteredProjects.map((item) => (
            <ProjectItem key={item.id} title={item.title} category={item.category} imgSrc={item.image} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
