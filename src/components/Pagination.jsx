import React from 'react'

function Pagination({Next,Before,PageNo}) {
    return (
        <div>

          <div className='bg-gray-600/75 h-[50px] mt-[30px] p-4 flex justify-center gap-[30px]'>
              <div onClick={Before} className='cursor-pointer'> <i class="fa-solid fa-arrow-left"></i></div>   
              <div className='font-bold '>{PageNo}</div>
            <div onClick={Next}  className='cursor-pointer'><i class="fa-solid fa-arrow-right"></i></div>
          </div>
        </div>
    )
}

export default Pagination
