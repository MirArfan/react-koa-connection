import React from 'react'

const Hero = () => {
    return (
      
        <section className="hero flex justify-center items-center h-screen" style={{ height: '130vh' }} >
            <div className="container mx-auto px-4 py-36 text-center mt-20 ">
                <h1 className="text-6xl font-semibold  text-black">
                    Hi, I'm Mir Arfan Uddin
                </h1>
                <p className="mt-6 text-xl text-gray-900 md:text-2xl lg:text-3xl">
                    I design and build things.
                </p>
                <div className="flex justify-center mt-8">
                    <svg
                        className="w-6 h-6 cursor-pointer" 
                        viewBox="0 0 448 512"
                    >
                        <path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" />
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default Hero