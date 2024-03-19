import React from 'react'
import '../section_V/sectionV.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import bldImg1 from '../z_images/bld-img-1.jpeg';
import bldImg2 from '../z_images/bld-img-2.jpeg';
import bldImg3 from '../z_images/bld-img-3.jpeg';
import bldImg4 from '../z_images/bld-img-4.jpeg';
import bldImg5 from '../z_images/bld-img-5.jpeg';

const SectionV = () => {

    const settings = {

        focusOnSelect: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: true,
        infinite: true,
        speed: 500,

    };
    return (
        <div className='sectionV_main-container'>
            <section className='section-container'>
                <div className='bld-container'>
                    <h1>Desired Property</h1>
                    <div className='bld-info-container'>
                        <p>Address: 4725 Park Avenue, Bronx NY, 10469</p>
                        <ul className='bld-list'>
                            <li>3 Floors</li>
                            <li>Seats over 300</li>
                            <li>Limited Parking</li>
                        </ul>
                    </div>
                </div>
                <div className='building_images'>
                    <Slider {...settings}>
                        <div className='slider_image-container'>
                            <img src={bldImg1} alt='Church Building Image1 ' />
                        </div>
                        <div className='slider_image-container'>
                            <img src={bldImg2} alt='Church Building Image1 ' />
                        </div>
                        <div className='slider_image-container'>
                            <img src={bldImg3} alt='Church Building Image1 ' />
                        </div>
                        <div className='slider_image-container'>
                            <img src={bldImg4} alt='Church Building Image1 ' />
                        </div>
                        <div className='slider_image-container'>
                            <img src={bldImg5} alt='Church Building Image1 ' />
                        </div>
                        {/* Add more slides as needed */}
                    </Slider>
                </div>
            </section>
        </div>
    )
}

export default SectionV