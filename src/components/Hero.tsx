import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className="hero max-h-screen mt-10 md:mb-16 lg:mb-20">
            <Image
                src="/forest-unsplash.jpg"
                alt="hero"
                width={1920}
                height={1080}
                objectFit='cover'
                className='brightness-50'
            />
        </div>
    )
}

export default Hero