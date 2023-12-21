import React, {useState} from 'react'

import navbarItems from '../../configs/navbar.configs';
import { images } from '../../constants';
import "./Navbar.scss";
import {HiMenuAlt4, HiX} from 'react-icons/hi'; 
import { motion } from "framer-motion"


function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
      
      <div className='app__navbar-logo'>
        <img src = {images.logo} alt ="logo"/>
      </div>

      <ul className='app__navbar-links'>

        {navbarItems.map((item)=>(
          <li className="app__flex p-text" key ={item.link}>
            <div/>
            <a href ={item.path}>{item.display}</a>
          </li>
        ))}

      </ul>

      <div className = "app__navbar-menu">
        <HiMenuAlt4 onClick= { ()=> setToggle(true)}/>
        {toggle && (
          <motion.div 
            whileInView ={ {x:[300,0]}} 
            transition={{duration : 0.85, ease : 'easeOut'}}
          >
              <HiX onClick={()=> setToggle(false)}/>
                <ul>
                  {navbarItems.map( (item) => (
                    <li key ={item.display}>
                      <a href ={item.path} onClick={ ()=> setToggle(false) }>{item.display}</a>
                    </li>
                   ))}
                   <li>test</li>
                </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar