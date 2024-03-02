import React from 'react';
import { motion } from 'framer-motion';

import AppWrap from '../../wrapper/AppWrap';

import './Header.scss';

const Header = () => {
  return (
    <div className="app__header">
      <div h-text>
        <motion.h1
          initial={{ opacity: 0, textDecoration: 'underline' }}
          whileInView={{ opacity: 1, textDecoration: 'none' }}
          className="greet-text"
        >
		   <h3 className='small-name'><span>Sumair</span> Qaisar</h3>
		   <div className='head-container'>

			<div className='main-head'>
          <span>Designer</span>
          <span>Problem Solver</span>
          <span>Collaborator</span>
          <span className='dev-span'>Developer</span>
			</div>
			<div className='head-image'>
				<img src='avatar.jpg' alt='avatar'></img>
			</div>
		   </div>
        </motion.h1>
        {/* <h1 className="title-text">Front End Developer</h1>
        <h1 className="mission-text">
          I design and develop expereinces that make people's lives{' '}
          <span className="bold">simpler</span>.
        </h1> */}
      </div>
    </div>
  );
};

export default AppWrap(Header, 'home');
