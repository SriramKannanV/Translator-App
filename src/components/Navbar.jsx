import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-20'>
      <div className='bg-text-primary h-full text-white px-4 px-md-30 flex items-center gap-1'>
        <i className="fa-solid fa-globe text-accent text-4xl"></i>
        <h1 className='text-3xl font-semibold'>Translator App</h1>
      </div>
    </div>
  )
}

export default Navbar
