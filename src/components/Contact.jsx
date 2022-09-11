import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
          <p className='py-6'>Have a question or want to work together?</p>
        </div>
        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/8c5e328a-a08c-4bc5-b401-7a058a67aa7e" method='POST' className='flex flex-col w-full md:w-1/2'>
            <input type="text" name='name' placeholder='Enter your name here' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <input type="text" name='email' placeholder='Enter your email here' className='my-5 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <textarea name="message" placeholder='C:\\body\>' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
            <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact