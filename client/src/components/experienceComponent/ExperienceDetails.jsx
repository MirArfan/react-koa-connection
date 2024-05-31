import React from 'react'

const ExperienceDetails = () => {
    const data = ['Lorem ipsum dolor sit amet,dolor sit amet consectetur adipiscing elit. Praesent sit amet vestibulum felis vivamus facilisis ligula', 'Lorem ipsum dolor sit amet, dolor sit amet consectetur adipiscing elit. Praesent sit amet vestibulum felis vivamus facilisis ligula', 'Lorem ipsum dolor sit amet, dolor sit amet consectetur adipiscing elit. Praesent sit amet vestibulum felis vivamus facilisis ligula'];

    return (
        <div className=' w-[75%]'>
            <ul >
                {
                    data.map((line, index) => 
                    (<li key={index} className='list-disc text-[17px] text-justify'>{line}</li>))
                }
            </ul>
        </div>
    )
}

export default ExperienceDetails