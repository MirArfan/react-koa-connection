import React from 'react'

const ExperienceSummary = (props) => {
    return (
        <div className=' w-[10vw] flex flex-col  justify-center'>
            <p className={'text-[24px] ' + props.aligndir}>Job Title</p>
            <p className={'text-[16px] ' + props.aligndir}>Company Name</p>
            <hr className="h-[1px] w-full bg-gray-900 border-0 dark:bg-gray-900 mt-[10px] mb-[12px]" />
            <p className={'text-[14px] ' + props.aligndir} >Apr 2018 - Dec 2022</p>
        </div>
    )
}

export default ExperienceSummary