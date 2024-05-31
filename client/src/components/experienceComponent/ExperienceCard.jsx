import React from 'react'
import ExperienceSummary from './ExperienceSummary'

import ExperienceDetails from './ExperienceDetails'

const ExperienceCard = (props) => {
    let aligndir = "text-end";
    if (props.flexdir === "flex-row-reverse") { aligndir = "text-start" }

    return (


        <div className={'flex mt-[50px] justify-between w-[70vw] ' + props.flexdir}>
            <ExperienceSummary aligndir={aligndir} />
            {/* <hr className="w-1  h-full" /> */}
            <div className="w-[1px] bg-gray-800" />
            <ExperienceDetails />
        </div>


    )
}

export default ExperienceCard