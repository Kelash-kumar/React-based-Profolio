import IconsComponent from './goal.component';
import { FaServicestack } from "react-icons/fa";
import'./about.css';
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { FaAngleDoubleDown } from "react-icons/fa";
import { useEffect, useState } from 'react';
const About = () => {
const [isScrolled, setIsScrolled] = useState(true);

useEffect(()=>{
  const handleScroll = () => {
    if(window.scrollY>0){
      console.log(window.scrollY);
      setIsScrolled(false);
    }else{
      setIsScrolled(true);
     
    }
     
  }
  return window.addEventListener('scroll',handleScroll);
})

  return (
    <section className=" about section ">
     <div className='about__container container'>
     <h1 className='section__title'>About Me</h1>
     <div className='about__content'>
      <img className='profile-img ' src="data:image/jpeg;base64,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" alt="image" />
       <div className='about__content__text'>
        <p>I am a <strong>Frontend Developer </strong> with a passion for learning and building web applications. I am a self-taught developer with a background in business and finance. I am currently working as a freelancer and looking for a full-time job as a Frontend Developer. I am a team player and I love working with people. I am a fast learner and I am always looking for ways to improve my skills.</p>
        <p>My goal is to become a Full Stack Developer and build amazing web applications that will help people and make their lives easier. I am currently learning React and I am looking forward to learning more about it.</p>
        <p>When I am not coding, I like to read books, watch movies and TV shows, play video games, and spend time with my family and friends.</p>
          <button className='btn'>Download CV</button>
       </div>
     
     </div>
      {
        isScrolled && 
          <span className='about__down__icon'
           onClick={()=>window.scrollTo(
              {
                top:window.innerHeight,
                behavior:'smooth',
                
              }
            
           )}
          >
        <FaAngleDoubleDown 
        style={{fontSize:'2rem',color:'#fff'}}
        />
      </span>
        
      }
      
     
      <div className='more_about'>
      <div className='about__goal__container'>
      <IconsComponent icon={<MdGroups  />}
        name='Clinets satisfied'
        value='100'
      />
      <IconsComponent icon={<FaServicestack />}
        name='Services'
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
        <span>kelash.raisal@gmail.com</span>
        <span>+92 3491100042</span>
        <span>Rashidi Hostel Muet Jamshoro ,Sindh</span>
      </footer>
      </div>
      </div>     
    </section>
  )
}

export default About