import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>
        <p className='text-xl mt-20'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deserunt nemo, tempore facilis adipisci, quo eveniet, atque veritatis voluptate nam nihil voluptas ullam repellat dolores quis dolore laborum dolorem. Corporis!
        </p>
        <br />
        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos at mollitia nihil corrupti, dolore blanditiis sapiente dolores, numquam animi laudantium molestiae est adipisci ex provident amet aliquid sed rerum consequuntur!
        </p>
      </div>
    </div>
  )
}

export default About