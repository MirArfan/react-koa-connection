import React from 'react'
import ExperienceCard from './ExperienceCard'
import SectionHeader from '../globalComponent/SectionHeader'
const ExperienceSection = () => {
  return (
    <div id='experience' className='flex flex-col items-center pb-[120px] pt-[120px] '>
        <SectionHeader sectionHeading="Experience"/>
        <ExperienceCard flexdir="flex-row" />
        <ExperienceCard flexdir="flex-row-reverse" />
    </div>
  )
}

export default ExperienceSection