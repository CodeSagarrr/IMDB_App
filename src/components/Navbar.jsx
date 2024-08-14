import React from 'react'
import Logo from '../movie.png'

function Navbar() {
  return (
    <div className='flex items-center text-[25px] gap-[30px] border '>
      <img className='w-[80px] mx-[10px]' src={Logo} />

        <a href="/" className='font-bold mt-[8px] text-sky-400'>Movie</a>
        <a href="/watchlist"  className='font-bold  mt-[8px] text-sky-400'>WatchList</a>
    </div>
  )
}

export default Navbar
