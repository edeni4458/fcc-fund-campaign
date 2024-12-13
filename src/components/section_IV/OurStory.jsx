import React, { useRef, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'
import ourStory1 from '../z_images/our-story-1.png'
import ourStory2 from '../z_images/knowing_HIS_word.jpg'
import './ourStory.css'

const OurStory = () => {

    
    const ref = useRef();
    
    const { ref: inViewRef, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
        trackVisibility: true,
        delay: 100
    });

    const setRefStory = useCallback(
        (node) => {
            ref.current = node;
            inViewRef(node);
        },
        [inViewRef]
    )
    return (
        <div className='our_story_main-container'>
            <div  className='our_story-container'>
                <h1>Our Story</h1>
            </div>
            <div ref={setRefStory} className={`our-story ${inView ? 'fade-in-story' : ''}`}>
                <div className='para-and-image'>
                    <p>FCC started as a bible study in an<br/>apartment with 11 people.<br/>We dedicated ourselves to living<br/> our DNA and values and God in<br/> turn began to open doors. We saw<br/> a church formed around the<br/> preaching of God’s word that<br/> began to have presence in our<br/> neighborhood.</p>
                    <img className='img_edit' src={ourStory1} alt='taken during a bible study' />
                </div>
                <div className='para-and-image'>
                    <p>We are awed at what God has done<br/> as FCC is now 5 years old and how<br/> the Lord has established this new<br/>church.</p>
                    <img className='img_edit' src={ourStory2} alt='taken during a Sunday service' />
                </div>
            </div>
        </div>
    )
}

export default OurStory