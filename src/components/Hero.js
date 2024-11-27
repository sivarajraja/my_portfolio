import React from 'react'
import myimg from '../assets/my_vector1.png'
import { FaGithubSquare } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { SiLeetcode } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";

const Hero = () => {
  return (
    <section className='flex px-8 py-20 bg-primary justify-center' id='home'>

      <div className=' w-full md:w-1/2 p-20 mx-0 bg-white text-beige rounded-l-xl border-2 md:border-r-0 border-beige border-opacity-50'>
        <p>hello!</p>
        <h1 className='text-4xl'>I'm Sivaraj <span className='md:text-6xl hover:text-green-600'>VR</span></h1>
        <p className='flex text-base pt-40 pb-3 justify-end'>connect with me in . . .</p>
        <div className='flex gap-7 justify-end'>
        <a target='blank' className='transform transition duration-100 hover:scale-125 hover:text-blue-500' href='https://www.linkedin.com/in/sivarajvr494506/'><RxLinkedinLogo size={26}/></a>
        <a target='blank' className='transform transition duration-100 hover:scale-125 hover:text-red-800' href='https://github.com/sivarajraja'><FaGithubSquare size={26}/></a>
        <a target='blank' className='transform transition duration-100 hover:scale-125 hover:text-orange-400' href='https://leetcode.com/u/shivaa_11/'><SiLeetcode size={26}/></a>
        <a target='blank' className='transform transition duration-100 hover:scale-125 hover:text-pink-600' href='https://www.instagram.com/ishiva_____/'><AiFillInstagram size={26}/></a>
        </div>
      </div>
      <img className='w-1/3 hidden md:block rounded-r-xl border-2 border-l-0 border-beige border-opacity-50' src={myimg} alt='my-img'/>
    </section>
  )
}

export default Hero