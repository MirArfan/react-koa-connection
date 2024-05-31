import React from 'react'
import aboutpic from '/src/assets/MirArfan.jpeg';

// const aboutimage= 'Personal_Portfolio/Portfolio/src/assets/Aboutme.jpeg';
// const aboutimage = require('../Aboutme');
const AboutPicture = () => {
    return (
        <div>
            <img src={aboutpic} alt="picture"  className='h-[300px] w-[390px] rounded-md'/>
        </div>
    )
}

export default AboutPicture