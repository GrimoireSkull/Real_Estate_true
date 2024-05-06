import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import house1 from '../assets/house1.png';
import house2 from '../assets/house2.png';
import house3 from '../assets/house3.png';

const images = [house1, house2, house3]

const carousel = () => {
    return (
        <div className="w-[65rem] mx-auto">
            <Carousel className='w-full py-7 rounded-[1.5rem]' thumbWidth={120} showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={true} showStatus={false}>
                {images.map((property, index) => {
                    return (
                        <div key={index} className='w-full h-full'>
                            <img src={property} alt={'house-${index}'} className='w-full h-full object-cover rounded-[1.5rem]' />
                        </div>
                    )
                })}
            </Carousel>
        </div>

    )
}

export default carousel