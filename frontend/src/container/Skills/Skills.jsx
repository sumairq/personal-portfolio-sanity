import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

import './Skills.scss';

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperience(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Why Hire Me</h2>
      <div><img className='question' src="./question.png" alt="question" /></div>
      

      <div className="wrapper">
        <div className="grid-item">
          <span className='first-letter'>I</span> bring 3 years of experience crafting dynamic and visually stunning
          websites. I specialize in creating responsive and user-friendly
          interfaces that captivate audiences and drive engagement. With a keen
          eye for design and a passion for innovation, I excel in translating
          client visions into polished, functional websites that exceed
          expectations.
        </div>
        <div className="grid-item">
        <span className='first-letter'>F</span>rom translating technical jargon for clients to fostering
          collaboration across teams, I ensure clear understanding and
          alignment. With a knack for problem-solving and feedback integration,
          I deliver high-quality solutions on time.
        </div>
        <div className="grid-item">
        <span className='first-letter'>I</span> excel in guiding junior team members, fostering their growth, and
          sharing knowledge effectively. By providing clear direction,
          constructive feedback, and personalized support, I empower others to
          thrive in their roles and contribute to project success.{' '}
        </div>
        <div className="grid-item">
          {' '}
          <span className='first-letter'>I</span> inspire and motivate team members to achieve their best by setting
          clear goals, fostering collaboration, and leading by example. With a
          strategic vision and effective communication,
        </div>
        <div className="grid-item"> <span className='first-letter'>I</span> prioritize staying up-to-date on the latest technologies. Continuously learning and exploring emerging trends, I ensure that our projects benefit from the most innovative solutions available.</div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
);
