import { motion } from "framer-motion";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineContactPhone } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { MdOutlineMedicalServices } from "react-icons/md";
import { LiaGraduationCapSolid } from "react-icons/lia";import './sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <motion.div 
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="sidebar"
    >
      <span className='logo_div'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0A0HBisWIQ5iCj6OKYCWYvMglrIoa6OCp-eCGKlT43kq1en3oI2_jpQowg&s" alt="image" />
      </span>

      <div className='sidebar__icons_div'>
        <Link to='/' className='icons'>
          <IoHomeOutline/><span className="icon__name">home</span>
        </Link>
        <Link to='/about' className='icons'><span className="icon__name">About</span>
          <CgProfile/>
        </Link>
        <Link to='/services' className='icons'><span className="icon__name">Services</span>
          <MdOutlineMedicalServices/>
        </Link>
        <Link to='/resume' className='icons'><span className="icon__name">Resume</span>
          <LiaGraduationCapSolid/>
        </Link>
        <Link to='/projects' className='icons'><span className="icon__name">Projects</span>
          <GrProjects/>
        </Link>
        <Link to='/contact' className='icons'><span className="icon__name">Contact</span>
          <MdOutlineContactPhone/>
        </Link>
      </div>
      
    </motion.div>
  )
}

export default Sidebar;
