import React from 'react'

const SectionHeader = (props) => {
    
    return (
        <div className="flex flex-row w-[70vw]">
            <hr className="h-[1px] my-8 w-[40vw] bg-gray-900 border-0 dark:bg-gray-900 "/>

            <h1 className="text-[36px]  w-[30vw] text-center mt-1">{props.sectionHeading}</h1>

            <hr className="h-[1px] my-8 w-[40vw] bg-gray-900 border-0 dark:bg-gray-900"/>
        </div>
    )
}

export default SectionHeader