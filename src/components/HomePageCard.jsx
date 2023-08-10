import React from 'react'

const HomePageCard = ({title , img , link}) => {
  return (
    <div className='h-[420px] bg-white z-30 m-3'>
        <div className='text-lg xl:text-xl font-semibold ml-4 mt-4'>
          {title}</div>
        <div className='h-[300px] m-4'>
          <img className='h-[100%] w-[100%] object-contain'
           src={img}/>
          </div>
        <div className='text-sm xl:text-sm text-blue-400'>
          {link}</div>
    </div>
  )
}

export default HomePageCard