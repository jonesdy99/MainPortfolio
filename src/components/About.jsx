import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const About = () => {

  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} className='ml-4'/>
        </>
      ),
      href: 'https://www.linkedin.com/in/dylan-j-8b3365122/',
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} className='ml-4'/>
        </>
      ),
      href: 'https://github.com/jonesdy99',
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} className='ml-4'/>
        </>
      ),
      href: 'mailto:jonesdylan1165@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} className='ml-4'/>
        </>
      ),
      href: '/ResumePDF.pdf',
      download: true,
    }
  ]

  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>
        <p className='text-xl mt-20'>
          Currently located in Goldsboro, NC which is about an hour away from Raleigh and 3 hours away from Charlotte. Recently graduated from East Carolina University and eager to get my career started in the tech field. Click on some of the links below to learn more about me.
        </p>
        <br />



        <div className='flex justify-center lg:hidden'>
      <ul className='flex flex-row'>
        {links.map(({id, child, href, style, download}) => (
        // eslint-disable-next-line no-useless-concat
        <li key={id} className={"flex flex-row h-10 w-6 px-4 hover:rounded-md duration-300" + " " + style}>
            <a href={href} 
            className='flex flex-row items-center h-10 px-4 text-white' 
            download={download} 
            target='_blank' 
            rel='noreferrer'>
              {child}
            </a>
        </li>
        ))}
      </ul>
    </div>
      </div>
    </div>
  )
}

export default About