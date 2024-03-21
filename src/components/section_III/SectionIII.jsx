import React from 'react'
import '../section_III/sectionIII.css'

const SectionIII = () => {
    return (
        <div className='sectionIII_main-container'>
            <section className='sectionIII-container'>
                <h1>Fundraising Goal</h1>
                <div className='fund-container'>
                    <p id='goal-tag'>$5 million</p>
                    <p>We need 1,000 people or churches to give $5,000 each.</p>
                </div>
                <div className='fund_video-container'>
                    <h4>How can you partner with us in this gospel work?</h4>
                    <button className='submit-btn'>Donate Now</button>
                    <iframe id='fund-video' src="https://www.youtube.com/embed/bL3mashs3Do?si=sNEdT8Ny-dppLaoj" title="FCC Building Vision Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p>Watch our vision for a new building.</p>
                </div>
            </section>
        </div>
    )
}

export default SectionIII