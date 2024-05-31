import React from 'react'
import github from '/src/assets/github.svg'
import shareicon from '/src/assets/share.svg'
const OtherDetails = (props) => {
  return (
    <div className={'w-[80%] '}>
        <h1 className={'text-2xl font-normal mb-2'}>Project Name</h1>
        <p className='text-sm font-normal'> Lorem ipsum dolor sit amet, consectetur  hjre anoph abc doloribus fuga? </p>
        <hr className="h-[1.5px] my-[12px] bg-gray-900"/>
         
         <div className=''>
        <ul className={'text-sm font-normal flex flex-row gap-2.5 mb-2 '}>
            <li className=''>HTML</li>
            <li> CSS</li>
            <li>JS</li>
        </ul>
        <div className={'flex flex-row  gap-1.5 text-end' }>
             <img className='w-[15px] h-[17px] cursor-pointer' src={github} alt="github icon" />
             <img className='w-[15px] h-[16px] cursor-pointer' src={shareicon} alt="github icon" />
        </div>
        </div>
    </div>
  )
}

export default OtherDetails