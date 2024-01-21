import'./resume.css';
import Card from './card';
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

  return (
    <div className="edu_pge">
      <div className="edu_container">
        <div className='experience'>
          <h1
          style={{
            fontSize:'1.7rem',
            marginBottom:'2rem'
          
          }}
          >Experience</h1>
        {
          Data.map((item, index) => {
            return (
               item.type==='experience' && <div className="experience_content" key={index}>
                  <Card
                    icon={item.icon}
                    year={item.year}
                    title={item.title}
                    desc={item.desc}
                  />
                </div>

            )
          })}
          </div>

          <div className='experience'>
          <h1
          style={{
            fontSize:'1.7rem',
            marginBottom:'2rem',          
          }}
          >Education</h1>
        
        {
          Data.map((item, index) => {
            return (
               item.type==='education' && <div className="experience_content" key={index}>
                  <Card
                    icon={item.icon}
                    year={item.year}
                    title={item.title}
                    desc={item.desc}
                  />
                </div>

            )
          })}
          </div>   
      </div>
    </div>
  )
}

export default Education