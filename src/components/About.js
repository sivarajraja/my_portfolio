import React from 'react'
import about_img from '../assets/about.png'

const About = () => {
  return (
    <section className='flex justify-end bg-primary pb-11' id='about'>
        <div className='flex flex-col md:flex-row bg-beige text-white w-4/5 rounded-xl mr-11 mb-4'>
            <div className='w-1/2'>
            <img className='hidden md:block p-11' src={about_img} alt='about img'/>
            </div>

            <div className='w-full md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center ml-6 md:ml-1 mt-7'>

                    <h1 className='text-4xl border-b-2 md:mr-72'>My Story <span className='text-red-400 text-5xl'>&</span> Vision</h1>

                    <p className='mt-7 text-base pr-3'>Hello! I'm Sivaraj, a 
                    B.Tech Computer Science and Engineering student at <span className='text-red-400 text-lg'>SRM University</span>. 
                    I have a strong passion for technology and actively participate in 
                    Competitive Programming Contest</p>

                    <p className='mt-5 pr-3'>
                    I'm Proficient in Frontend Skills like <span className='text-red-400 text-lg'>React.js, Redux, Bootstrap, Tailwind CSS, ANT Design</span>.
                    </p>

                    <p className='mt-5 mb-7 md:mb-4 pr-3'> Have Some Knowledge in Backend as <span className='text-red-400 text-lg'>
                    Google Firebase</span> and Database like <span className='text-red-400 text-lg'>MYSql</span> and other databases.</p>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default About