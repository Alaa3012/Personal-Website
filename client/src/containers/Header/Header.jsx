import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Header.scss';


const scaleVariants = {
  whileInView: {
    x: [200, 0],
    scale: [0, 1.2,1],
    opacity: [0, 1,1],
    transition: {
      duration: 1.5 ,
      ease: 'easeInOut',
      type: "spring", 
      damping : 7
    },
  },
};

const inViewVariants = { x: [-200, 0] ,scale :[0,1]};

function Header(){ 

  const [viewed, setviewed] = useState(false)

  return (
  
  <div className="app__header app__flex">
    <div
      className="app__header-info"
    >
      <motion.div 
        whileInView= { (viewed) ? {scale: 1, x:0} : inViewVariants}
        whileHover={ { scale: 1.2}}
        onHoverStart={e => {setviewed(true);}}
        onHoverEnd={e => {}}
        whileTap={{ scale: 0.8 }}
        style = {{cursor: 'pointer'}}
        transition={{type: "spring", damping : 7}}
        className="app__header-badge"
      >
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Alaa</h1>
          </div>
        </div>
      </motion.div>

      <motion.div 
        whileInView= { (viewed) ? {scale: 1, x:0} : inViewVariants}
        whileHover={ { scale: 1.2}}
        onHoverStart={e => {setviewed(true);}}
        onHoverEnd={e => {}}
        whileTap={{ scale: 0.8 }}
        style = {{cursor: 'pointer'}}
        transition={{type: "spring", damping : 7}}
        className="app__header-badge"
      >
        <div className="tag-cmp app__flex">
          <p className="p-text">Web Developer</p> 
          <p className="p-text">Blockchain Engineer</p>
        </div>
      </motion.div>
    
    </div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
    
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{scale: [0, 1.25] }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
      style = {{cursor: 'pointer'}}
    >
      {[images.node, images.redux, images.graphql].map((circle, index) => (
        <motion.div 
          whileInView= { (viewed) ? {scale: 1, x:0} : inViewVariants}
          whileHover={ { scale: 1.2}}
          onHoverStart={e => {setviewed(true);}}
          onHoverEnd={e => {}}
          whileTap={{ scale: 0.8 }}
          style = {{cursor: 'pointer'}}
          transition={{type: "spring", damping : 7}}
          className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </motion.div>
      ))}
    </motion.div>
  </div>
)};

export default Header;