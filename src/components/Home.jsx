import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            I'm a Full Stack Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            Currently working from North Carolina with a strong desire for Full-Stack development with experience in a variety of languages such as React JS, Node, Phython and more.
          </p>
          <div>
            <button>
              <span>
              Portfolio<MdOutlineKeyboardArrowRight/>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home