import React from 'react'
import reactWeather from '../assets/portfolio/reactWeather.jpg'
import ReadMe from '../assets/portfolio/ReadMe.jpg'
import Remind from '../assets/portfolio/Remind.jpg'
import fightGame from '../assets/portfolio/fightGame.jpg'
import Recipe from '../assets/portfolio/Recipe.jpg'


const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: reactWeather,
      demo: 'https://weather-app-base.netlify.app/',
      code: 'https://github.com/jonesdy99/weather-app'
    },
    {
      id: 2,
      src: ReadMe,
      demo: 'https://pc-part-picker.herokuapp.com/',
      code: 'https://github.com/jonesdy99/PC-Part-Picker'
    },
    {
      id: 3,
      src: Remind,
      demo: 'https://remind-me-main.herokuapp.com/',
      code: 'https://github.com/jonesdy99/remind-me-main'
    },
    {
      id: 4,
      src: fightGame,
      demo: 'https://jsfighting.netlify.app/',
      code: 'https://github.com/jonesdy99/fighting-game'
    },
  ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out my work here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({id,src,demo,code}) => (
          <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
            <div className='flex items-center justify-center'>
              <a href={demo} target='_blank' rel='noreferrer'><button className='w-1/2 px-6 py-3 m-5 duration-200 hover:scale-105'>Demo</button></a>
              <a href={code} target='_blank' rel='noreferrer'><button className='w-1/2 px-6 py-3 m-5 duration-200 hover:scale-105'>Code</button></a>
            </div>
          </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio