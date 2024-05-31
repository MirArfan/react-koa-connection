import React, { useState } from 'react'
import github from '/src/assets/github.svg'
import shareicon from '/src/assets/share.svg'
import SectionHeader from '../globalComponent/SectionHeader'
import ContactForm from './ContactForm'

const ContactSection = () => {
    const [show, setShow]=useState(false);
    const toggle=(()=>{
           setShow(!show);
    });
    return (
        <div id='contact' className='flex flex-col items-center pb-[120px] pt-[120px]  '>
            <SectionHeader sectionHeading="Contact" />
            <div className='text-center w-[35%]'>
                <p className='mt-[73px] text-base font-normal '>I am currently seeking employment, and I would appreciate it if you could contact me with any available job opportunities.</p>
                <button onClick={toggle} className='text-base font-normal border-2 border-gray-600 rounded-md py-2 px-3.5 mt-16'>Write Message</button>
                {show && <ContactForm/>}
                <div className={'flex flex-row  gap-1.5  mt-40 justify-center' }>
                    <img className='w-[20px] h-[20px] cursor-pointer' src={github} alt="github icon" />
                    <img className='w-[20px] h-[20px] cursor-pointer' src={shareicon} alt="github icon" />
                </div>
            </div>
            
        </div>
    )
}

export default ContactSection