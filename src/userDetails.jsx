// profile image
import profile_image from './assets/profile.jpeg';
// services images
import image1 from './assets/wd.avif';
import image2 from './assets/Msd.jpg';
import image3 from './assets/fsd.avif';

// projects images
import work1 from './assets/Docs-App-react.png';
import work2 from './assets/Blog-website-login_singup.png';
import work3 from './assets/Pinterest_SingUp page.png';
import work4 from './assets/work-4.svg';
import work5 from './assets/work-5.svg';
import work6 from './assets/work-6.svg';
// icons
import { CiFacebook } from 'react-icons/ci';
import { CiLinkedin } from 'react-icons/ci';
import { FiGithub } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa6';
import { MdOutlineClass } from 'react-icons/md';


const userDetails = {
  name: 'Kelash Kumar',
  email: 'kelash.raisal@gmail.com',
  phone: '92 3491100042',
  address: 'Jasmhoro Sindh Pakistan',
  profession: 'MERN Stack Developer',
  profile_image: profile_image,
  about:`My name is Kelash Kumar, and I am a dedicated software engineering student hailing from Umerkot, Sindh. I am currently pursuing my education at Mehran University of Engineering and Technology. With a fervent passion for technology, I have diligently acquired a comprehensive skill set in web development and am eager to apply my knowledge to real-world projects.
          I am a self-taught developer, I am currently working as a freelancer and looking for a full-time job as a MERN Stack Developer. I am a team player and I love working with people. I am a fast learner and I am always looking for ways to improve my skills.
          I have expertise in React, Node, Express, MongoDB, HTML, CSS, Bootstrap, Framer-motion, JavaScript, JSON, Git, GitHub,firebase and more, considering them indispensable life skills for my chosen career path. Applying my knowledge, I have successfully undertaken and completed several projects, showcasing my proficiency in these technologies.
          My experience extends to working with RESTful APIs, a crucial aspect of modern web development.My  aim is to deepen my understanding of Modern web dev. to further enhance my capabilities and inch closer to achieving my career goal.
          I am enthusiastic about leveraging my acquired skills and knowledge to contribute meaningfully to the field of web development and am committed to staying abreast of industry trends and advancements.`,
  social: [
    { name: 'Linkedin', link: 'https://www.instagram.com/kelash_raisal/', icons: <CiLinkedin className="icon media_icon" /> },
    { name: 'GitHub', link: 'https://www.github.com/kelash-raisal/', icons: <FiGithub className="icon media_icon" /> },
    { name: 'Facebook', link: 'https://www.facebook.com/kelash.raisal/', icons: <CiFacebook className="icon media_icon" /> },
  ],
  skills: [
    { name: 'HTML', percentage: '90', color: '#f16529' },
    { name: 'CSS', percentage: '90', color: '#2965f1' },
    { name: 'TailwindCss', percentage: '60', color: '#563d7c' },
    { name: 'JavaScript', percentage: '75', color: '#f0db4f' },
    { name: 'React', percentage: '70', color: '#61dbfb' },
    { name: 'Node', percentage: '70', color: '#68a063' },
    { name: 'Express', percentage: '60', color: '#ffef00' },
    { name: 'MongoDB', percentage: '60', color: '#4db33d' },
    { name: 'WordPress', percentage: '40', color: '#21759b' },
    { name: 'Git', percentage: '50', color: '#f34f29' },
    { name: 'GitHub', percentage: '50', color: '#211f1f' },],
  resumeData: [
    {
      type: 'education',
      icon: <MdOutlineClass className="exp_icon" />,
      year: '2021-present',
      title: 'Software Engineering',
      desc: 'Mehran University of Engineering and Technology. Currently studying in 3rd year.',},
    {
      type: 'education',
      icon: <MdOutlineClass className="exp_icon" />,
      year: '2019-2020',
      title: 'Intermediate',
      desc: 'BFPS School System.Achieved above 80% marks in all subjects .',
    },
    {
      type: 'education',
      icon: <MdOutlineClass className="exp_icon" />,
      year: '2023',
      title: 'computer Course',
      desc: 'I have done my computer course in 2022. ',},
    {
      type: 'experience',
      icon: <FaGraduationCap className="exp_icon" />,
      year: '2021',
      title: 'Web Developer',
      desc: 'I have done my internship in Web Development.After successfully completing the internship, ',
    },
    {
      type: 'experience',
      icon: <FaGraduationCap className="exp_icon" />,
      year: '2022',
      title: 'React Developer',
      desc: 'I have done my internship in React Development.After successfully completing the internship, ',
    },
    {
      type: 'experience',
      icon: <FaGraduationCap className="exp_icon" />,
      year: '2023',
      title: 'MERN Developer',
      desc: 'I have done my internship in MERN Development.After successfully completing the internship, ',
    },
  ],
  services: [
    { title: 'Web Development', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, voluptatum.', image: image1 },
    { title: 'MERN Development', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, voluptatum.', image: image2 },
    { title: 'FULL Stack Development', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, voluptatum.', image: image3 },
  ],
  projects: [
    { id: 1, image: work1, title: 'React Docs App', category: 'Design' },
    { id: 2, image: work2, title: 'React Blog Website', category: 'Design' },
    { id: 3, image: work3, title: 'Pinterest SignUp Page', category: 'Photography' },
    { id: 4, image: work4, title: 'Onboarding Motivation', category: 'Design' },
    { id: 5, image: work5, title: 'iMac Mockup Design', category: 'Creative' },
    { id: 6, image: work6, title: 'Game Store App Concept', category: 'Art' },
  ],
};

export default userDetails;

