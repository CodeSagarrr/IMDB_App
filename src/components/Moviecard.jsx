import React from 'react'

function Moviecard({ poster_path,name}) {
  return ( 
    <div className=' mt-[10px] h-[40vh] w-[200px] bg-cover bg-center rounded-lg cursor-pointer hover:scale-110 duration-300 relative  ' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>

   <div className='text-white  w-full text-center absolute bottom-0 font-[600] bg-gray-600/75  p-[5px] '>
    {name}
   </div>
      
    </div>
  )
}

export default Moviecard
