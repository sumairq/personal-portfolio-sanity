import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  // const [abouts, setAbouts] = useState([]);

  const abouts = [
    {
      image: './header-art.png',
      title: 'Front-end Development',
      description: [
        'HTML',
        'CSS',
        'JavaScript',
        'Responsive Design',
        'SASS',
        'Tailwind',
        'Material UI',
		'React.js',
		'Next.js',
		'Gatsby.js',
		'Vue.js'
      ],
    },
    {
      image: './backend.jpg',
      title: 'Back-end Development ',
      description: ['Nodejs', 'Ruby on Rails', 'MongoDB', 'Firebase'],
    },
    {
      image: './full-stack.jpg',
      title: 'Full-stack Development ',
      description: [
        'Proficiency in both front-end and back-end technologies.',
        'Ability to develop and maintain both client and server-side aspects of web applications.',
      ],
    },
    {
      image: './web-design.jpg',
      title: 'Web Design',
      description: [
        'User Interface (UI) Design',
        'User Experience (UX) Design',
        'Figma',
      ],
    },
    {
      image: './version-control.jpg',
      title: 'Version Control',
      description: ['Git','Github', 'Gitlab', 'Bitbucket', 'Mercurial'],
    },
    {
      image: './performance.png',
      title: 'Web Performance Optimization',
      description: ['Page Load Speed Optimization', 'Image size Optimization', 'Lazy Loading'],
    },
    {
      image: './testing.svg',
      title: 'Testing and Debugging',
      description: ['Unit Testing',
		'Integration Testing',
		'Browser Developer Tools'],
    },
    {
      image: './api2.jpg',
      title: 'Web APIs',
      description: ['RESTful APIs', 'GraphQL', 'Postman API testing'],
    },
    {
      image: './cms.png',
      title: 'Content Management Systems',
      description: ['WordPress', 'Sanity.io', 'contentful'],
    },
    {
      image: './accessibility.jpg',
      title: 'Web Accessibility ',
      description: ['WCAG Standards', 'ARIA Roles and Attributes', 'Screen Reader Compatibility'],
    },
    {
      image: './responsive.jpg',
      title: 'Responsive Web Design',
      description: ['Media Queries', 'Flexbox', 'CSS Grid'],
    },
  ];

  return (
    <div className="about-section">
      <h2 className="head-text">
        I work with <span>Startups, Agencies & Brands</span>
        <br />
        <div className="skills-inlcude">
          My expertise <span>include</span>
        </div>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.image} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              <ol className="desc-list style_1">
                {about.description.map((item) => {
                  return <li>{item}</li>;
                })}
              </ol>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
