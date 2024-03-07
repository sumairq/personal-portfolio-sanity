import React from 'react'
import './NestedSkills.scss'

const NestedSkills = () => {


  return (
<div>
<h1>Why Hire Me</h1>
</div>
  )
}

export default NestedSkills

{/* <div className='app__skills-container'>
      <motion.div className='app__skills-list'>
        {skills?.map((skill) => (
          <motion.div
          whileInView={{opacity: [0, 1]}}
          transition={{duration: 0.5}}
          className="app__skills-item app__flex"
          key={skill.name}
          >
          <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
            <img src={urlFor(skill.icon)} alt={skill.name}/>
          </div>
          <p className='p-text'>{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div> */}