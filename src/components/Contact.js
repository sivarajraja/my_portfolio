import React from 'react'
import { BsEmojiSmileFill } from 'react-icons/bs'

const Contact = () => {
  return (
    <section className='bg-primary text-beige py-5 md:pb-16' id='contact'>
      <div className='flex flex-col pt-16 pb-6 md:w-4/5 justify-center bg-white rounded-xl mr-11 ml-5 md:ml-36 border-2 border-beige border-opacity-50'>
        <div className='w-full'>
          <div className='flex flex-col px-16'>
            <h1 className='text-center ml-5 text-3xl md:text-4xl border-b-2 border-beige pb-2'>Contact</h1>
            <p className='md:px-7 mb-5 pt-7'>Contact me via : </p>
          </div>
        </div>
        <div className='flex flex-col text-center mt-6'>
            <p className='mb-2'><span className='font-bold mr-2'>Gmail :</span>sivarajraja47@gmail.com</p>
            <p className='mb-2'><span className='font-bold mr-2'>Yahoo :</span>sivarajraja47@yahoo.com</p>
            <p className='mb-2'><span className='font-bold mr-2'>Phone :</span>+91 9789594506</p>
        </div>
        <p><BsEmojiSmileFill className='m-auto mt-14 hover:text-yellow-500'/></p>
      </div>

    </section>
  )
}

export default Contact