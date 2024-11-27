import React from 'react'
import extension from '../assets/chrome.jpg'
import blog from '../assets/blog.jpg'
import fruit_shop from '../assets/fruit_shop.jpg'

const Projects = () => {
  return (
    <section className='bg-primary text-beige py-5' id='project'>
      <div className='flex flex-col py-16 md:w-4/5 justify-center bg-white rounded-xl mr-11 ml-5 md:ml-36 border-2 border-beige border-opacity-50'>
        <div className='w-full'>
          <div className='flex flex-col px-16'>
            <h1 className=' ml-5 text-3xl md:text-4xl md:mr-72'>Projects :</h1>
            <p className='md:px-7 pt-7'>These are Some of my best projects. I have built these with React, Tailwind and Firebase. Check them out.</p>
          </div>
        </div>

        <div className='w-full'>
          <div className='flex flex-col md:flex-row justify-center pt-12 px-11 pb-6 gap-16'>

            <div className='relative'>
              <img className='h-[200px] w-[300px] rounded-lg border-2 border-beige' src={extension} alt='extension'/>
              <div className='project-animation'>
                <p className='text-center py-12 px-2 text-sm'>A Youtube TimeStamp Chrome Extension. Build with HTML,CSS3 and JavaScript<br/> 
                <a target='blank' className='rounded-sm p-1 bg-green-600' href='https://github.com/sivarajraja/YouTube-Bookmark-Manager-Chrome-Extension.git'>Link</a></p>
              </div>
              <h1 className='flex justify-center mt-3 text-base'>TimeStamp Chrome Extension</h1>
            </div>

            <div className='relative'>
              <img className='h-[200px] w-[300px] rounded-lg border-2 border-beige' src={blog} alt='blog'/>
              <div className='project-animation'>
                <p className='text-center py-16 px-2 text-sm'>A Blog Website. Build with React JS, Bootstrap with Google Firebase<br/>
                <a target='blank' className='rounded-sm p-1 bg-green-600' href='https://github.com/sivarajraja/blog_using_firestore.git'>Link</a></p>
              </div>
              <h1 className='flex justify-center mt-3 text-base'>Blog Website</h1>
            </div>

            <div className='relative'>
              <img className='h-[200px] w-[300px] rounded-lg border-2 border-beige' src={fruit_shop} alt='fruit shop'/>
              <div className='project-animation'>
                <p className='text-center py-16 px-2 text-sm'>A Fruit Shop Website. Build only with Tailwind CSS<br/>
                <a target='blank' className='rounded-sm p-1 bg-green-600' href='https://github.com/sivarajraja/Fruit_shop.git'>Link</a></p>
              </div>
              <h1 className='flex justify-center mt-3 text-base'>Fruit Shop Website</h1>
            </div>

          </div>
        </div>

      </div>

    </section>
  )
}

export default Projects