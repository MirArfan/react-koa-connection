import React from 'react'
import AboutHeader from '../globalComponent/SectionHeader'
import AboutDetais from './AboutDetais'
import AboutPicture from './AboutPicture'

const AboutSection = () => {
    return (
        <section id='about' className="flex flex-col items-center pt-[120px] pb-[120px]  bg-gray-100 " >
             <AboutHeader sectionHeading="About me"/>
            <div className=" flex justify-between container w-[70vw] flex-row items-center mt-[50px] ">
               
                <AboutDetais />
                <AboutPicture/>
            </div>
        </section >
    )
}

export default AboutSection