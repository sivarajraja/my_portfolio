import React, { useState } from 'react'

const Header = () => {

  const [displayNav,setDisplayNav] = useState(false);
  return (
    <header className='flex justify-end md:justify-center p-8 bg-beige'>
        <nav className='hidden md:block'>
        <ul className='flex text-white'>
            <li className='transform transition duration-100 hover:scale-110'><a href='#home'>Home</a></li>
            <li className='transform transition duration-100 hover:scale-110'><a href='#about'>About</a></li>
            <li className='transform transition duration-100 hover:scale-110'><a href='#project'>Project</a></li>
            <li className='transform transition duration-100 hover:scale-110'><a href='#resume'>Resume</a></li>
            <li className='transform transition duration-100 hover:scale-110'><a href='#contact'>Contact</a></li>
        </ul>
        </nav>

        {
          displayNav && <nav className='block md:hidden'>
          <ul onClick={()=>setDisplayNav(!displayNav)} className='flex flex-col text-white mobile-view'>
              <li><a href='#home'>Home</a></li>
              <li><a href='#about'>About</a></li>
              <li><a href='#project'>Project</a></li>
              <li><a href='#resume'>Resume</a></li>
              <li><a href='#contact'>Contact</a></li>
          </ul>
          </nav>
        }

        <button onClick={()=>setDisplayNav(!displayNav)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-white md:hidden">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        </button>

    </header>
  )
}

export default Header