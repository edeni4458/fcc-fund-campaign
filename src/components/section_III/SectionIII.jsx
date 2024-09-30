import React, { useRef, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'
import '../section_III/sectionIII.css'
import EmailJs from '../header/EmailJs'
import Check from '../check/Check'

const SectionIII = () => {
    const ref = useRef();

    const { ref: inViewRef, inView } = useInView({
        threshold: 0.5,
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
        <div className='sectionIII_main-container'>
            <div className='fund_video-container'>
                <h1>Why a building?</h1>
                <p>We want to own a building in the Bronx in order to help reshape the spiritual climate through planting<br /> gospel centered churches.</p>
                <iframe id='fund-video' src="https://www.youtube-nocookie.com/embed/bL3mashs3Do?si=-VXqq4FXzg7huSme" title="FCC Building Vision Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <p>“That big old building sitting there is how you project the gospel forward in your city.”<br /><span id='itally-Mark'>Mark Dever, Pastor, Capitol Hill Baptist Church</span></p>
            </div>
            <section ref={setRefs} className={`sectionIII-container ${inView ? 'animate' : ''}`}>
                <h1>Fundraising Goal</h1>
                <div className='fund-container'>
                    <p id='goal-tag'>$5 million</p>
                    <p>We need 1,000 people or churches to give $5,000 each.</p>
                </div>
                <div className='fund_buttons-container'>
                    <button className='submit-btn'><a target='_blank' rel="noreferrer" href="https://give.tithe.ly/?formId=628eb570-6865-11ee-90fc-1260ab546d11&locationId=3d8cfb07-e380-4b62-934e-9b297cd5dbdb&fundId=b8519216-bd02-4a8a-b1fc-d3ecef61125e">Donate Now</a></button>
                    <EmailJs />
                </div>
                <Check/>
            </section>
        </div>
    )
}

export default SectionIII