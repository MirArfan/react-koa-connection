import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';


const ContactForm = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_gbkb5um', 'template_woyp284', form.current, {
                publicKey: 'tlf3Hkvi5WRaoEiwp',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset();
                    alert('Email Sent !');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div>
            <h1 className='font-sm text-3xl mt-[32px]'>Contact Me</h1>
            <span className='font-lg'>Please fill out form below to discuss any work opportunities</span>
            <form ref={form} onSubmit={sendEmail} action="" className='m-4 flex flex-col justify-center items-center max-w-4xl'>
                <input required className='text-sm w-[100%] max-w-2xl m-2 px-2 py-4 border-0 text-black rounded-lg bg-gray-100' type="text" placeholder='Your Name' name='from_name' />
                <input required className='text-sm w-[100%] max-w-2xl m-2 px-2 py-4 border-0 text-black rounded-lg bg-gray-100' type="email" placeholder='Your Mail' name='from_email' />
                <textarea className='text-sm w-[100%] max-w-2xl m-2 px-2 py-4 border-0 text-black rounded-lg bg-gray-100' name="message" id="" placeholder='Your message'></textarea>
                <button className='text-base border-2 rounded-lg m-8 py-3 px-14 bg-blue-400' type='submit' value='Send'>Submit</button>
            </form>
        </div>
    )
}

export default ContactForm