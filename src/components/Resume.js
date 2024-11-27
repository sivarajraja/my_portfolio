import React from 'react'
import resume_img from '../assets/resume.png'
import DownloadButton from './DownloadButton'

const Resume = () => {
  return (
    <section className='flex justify-end bg-primary py-12' id='resume'>
        <div className='flex flex-col md:flex-row bg-beige text-white w-4/5 rounded-xl mr-11 mb-4'>
            <div className='w-1/2'>
            <img className='hidden md:block p-11' src={resume_img} alt='about img'/>
            </div>

            <div className='w-full md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center ml-6 md:ml-1 mt-7'>

                    <h1 className='text-4xl md:mr-72'>Resume</h1>

                    <p className='mt-11 mb-7 md:mb-4 pr-3 md:ml-40'>Want to Explore My Resume</p>
                    <DownloadButton/>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Resume