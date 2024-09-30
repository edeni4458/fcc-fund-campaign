import React, { useRef, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'
import hisWord from '../z_images/knowing_HIS_word.jpg'
import './know.css'
const Know = () => {

    const ref = useRef();

    const { ref: inViewRef, inView } = useInView({
        threshold: 0.1,
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
        <div ref={setRefs} className={`sub-section_testimony-know ${inView ? 'animate' : ''}`}>
            <div className='know-pic-container'>
                <img id='know-word-pic' src={hisWord} alt='' />
            </div>
            <div className='testimony-know'>
                <p>Knowing God's Word</p>
                <ol className='list-know'>
                    <li>Preached through Gen; Ephesians; Acts; Ruth; 1 Thess; Proverbs; Marriage; Faith etc...</li>
                    <li>The church Loves God’s word</li>
                    <li>Gospel clarity</li>
                    <li>Growing gospel impact</li>
                    <li>Opportunities to preach and pulpit fill</li>
                    <li>The word being preached in Spanish and English</li>
                </ol>
            </div>
        </div>
    )
}

export default Know