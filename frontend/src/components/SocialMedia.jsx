import React from 'react'
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { FaAngellist, FaGithub } from 'react-icons/fa';

const socialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href="https://twitter.com/sumair_qaisar">
            <BsTwitter />
            </a>
        </div>
        <div>
            <a href="https://angel.co/u/sumair-qaisar">
            <FaAngellist />
            </a>
        </div>
        <div>
            <a href="https://github.com/sumairq">
            <FaGithub />
            </a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/sumairq/">
            <BsLinkedin />
            </a>
        </div>
        </div>
  )
}

export default socialMedia
