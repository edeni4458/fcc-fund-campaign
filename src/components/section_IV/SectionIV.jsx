import React, { useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer'
import './sectionIV.css';
import know from "../z_images/Know.jpg";
import love from "../z_images/Love.jpg";
import live from "../z_images/Live.jpg";
import OurStory from './OurStory';
import { Link } from 'react-router-dom';

const SectionIV = () => {

    const ref = useRef();
    
    const { ref: inViewRef, inView } = useInView({
        threshold: 0.7,
        triggerOnce: true,
        trackVisibility: true,
        delay: 100
    });

    const setRefValues = useCallback(
        (node) => {
            ref.current = node;
            inViewRef(node);
        },
        [inViewRef]
    )


    return (
        <div className='sectionIV_main-container'>
            <div className='heading-container'>
                <h1>Our Values</h1>
            </div>
            {/* <Carousel/> */}
            <div ref={setRefValues} className={`image-and-p-main-container ${inView ? 'fade-in' : ''}`}>
                <Link to={"/detailspage"} reloadDocument >
                    <div className='image-and-p-container'>
                        <div className='image-container'  >
                            <img className='img-edit' src={know} alt='' />
                        </div>
                        <div className='p-container'>
                            <h2>Know</h2>
                            <p>Knowing God's word<br /> and the Gospel.</p>
                        </div>
                    </div>
                </Link>
                <Link to={"/detailspage"} reloadDocument >
                    <div className='image-and-p-container'>
                        <div className='image-container' >
                            <img className='img-edit' src={live} alt='' />
                        </div>
                        <div className='p-container'>
                            <h2>Live</h2>
                            <p>Living like family,<br /> following Jesus together.</p>
                        </div>
                    </div>
                </Link >
                <Link to={"/detailspage"} reloadDocument >
                    <div className='image-and-p-container'>
                        <div className='image-container'>
                            <img className='img-edit' src={love} alt='' />
                        </div>
                        <div className='p-container'>
                            <h2>Love</h2>
                            <p>Loving our neighbors<br /> in word and deed.</p>
                        </div>
                    </div>
                </Link>
            </div>
            <OurStory />
        </div>
    )
}

export default SectionIV