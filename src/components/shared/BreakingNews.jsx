import React from 'react'
import Marquee from 'react-fast-marquee'

const BreakingNews = () => {
  return (
    <div className='flex justify-between bg-gray-200 p-2 gap-4 items-center container mx-auto'>
        <button className='bg-red-700 btn btn-primary px-3 py-1 text-white'> Latest</button>
        <Marquee pauseOnHover={true}>
            ok
        </Marquee>
    </div>
  )
}

export default BreakingNews