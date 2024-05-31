import React from 'react'
import github from '/src/assets/github.svg'
import shareicon from '/src/assets/share.svg'

const FeaturedDetails = (props) => {
  return (
    <div className={'w-[50%] '+props.aligndir}>
        <h1 className={'text-3xl font-normal mb-2 '}>Project Name</h1>
        <p className='text-base font-normal '> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis. Vivamus facilisis ligula id fringilla gravida. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse numquam, voluptatem quos possimus totam maxime corrupti fuga rem similique dolores doloremque enim cum rerum sunt, eum beatae? Assumenda, doloribus fuga? </p>
        <hr className="h-[1.5px] my-[12px] bg-gray-900 "/>
         
         <div className=''>
        <ul className={'text-sm font-normal flex flex-row gap-2.5 mb-2  ' + props.alignFlex}>
            <li className=''>HTML</li>
            <li> CSS</li>
            <li>JS</li>
            <li>Figma</li>
            <li>React</li>
        </ul>
        <div className={'flex flex-row  gap-1.5 text-end  ' + props.alignFlex}>
             <img className='w-[15px] h-[17px] cursor-pointer ' src={github} alt="github icon" />
             <img className='w-[15px] h-[16px] cursor-pointer ' src={shareicon} alt="github icon" />
        </div>
        </div>
    </div>
  )
}

export default FeaturedDetails