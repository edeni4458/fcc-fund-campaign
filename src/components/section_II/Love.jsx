import React, { useRef, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'
import loveYal from '../z_images/love_our_barrio.jpg'
import './love.css'


const Love = () => {

    const ref = useRef();

    const { ref: inViewRef, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
        trackVisibility: true,
        delay: 100
    });


    const setRefs = useCallback(
        (node) => {
            ref.current = node;
            inViewRef(node);
        },
        [inViewRef]
    )

    return (
        <div ref={setRefs} className={`sub-section_testimony-love ${inView ? 'animate' : ''}`}>
            <div className='love-pic-container'>
                <img id='love-yal-pic' src={loveYal} alt='' />
            </div>
            <div className='testimony-love'>
                <p>Love: Our Neighborhood</p>
                <ol className='list-know'>
                    <li>Day at The Park</li>
                    <li>Family Paint and Sip night</li>
                    <li>Coat Drive (2k coats 4 yrs)</li>
                    <li>Bookbag Drive</li>
                    <li>Giving essentials during Covid</li>
                    <li>Serve families of fire victims 2022 (15k given out)</li>
                    <li>ESL: 45 students a week; W African
                        <ul>
                            <li>Muslim and Latino immigrants</li>
                        </ul>
                    </li>
                    <li>25% of members people we baptized.</li>
                </ol>
            </div>
        </div>
    )
}

export default Love