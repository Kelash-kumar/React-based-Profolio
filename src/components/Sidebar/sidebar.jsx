import { motion } from "framer-motion";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdContactPhone } from "react-icons/md";
import { FaToolbox } from "react-icons/fa6";
import { MdMedicalServices } from "react-icons/md";
import { MdOutlineCastForEducation } from "react-icons/md";
import './sidebar.css';
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
          <IoHomeOutline/>
        </Link>
        <Link to='/about' className='icons'>
          <CgProfile/>
        </Link>
        <Link to='/services' className='icons'>
          <MdMedicalServices/>
        </Link>
        <Link to='/resume' className='icons'>
          <MdOutlineCastForEducation/>
        </Link>
        <Link to='/projects' className='icons'>
          <FaToolbox/>
        </Link>
        <Link to='/contact' className='icons'>
          <MdContactPhone/>
        </Link>
      </div>
      
      <span className='sidebar-footer-text'>2022-2023</span>
    </motion.div>
  )
}

export default Sidebar;
