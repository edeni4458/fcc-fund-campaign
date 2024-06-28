import React from 'react'
import '../section_III/sectionIII.css'
import EmailJs from '../header/EmailJs'

const SectionIII = () => {
    return (
        <div className='sectionIII_main-container'>
            <div className='fund_video-container'>
                <h1>Why a building?</h1>
                <p>We want to own a building in the Bronx in order to help reshape the spiritual climate through planting<br /> gospel centered churches.</p>
                <iframe id='fund-video' src="https://www.youtube.com/embed/bL3mashs3Do?si=sNEdT8Ny-dppLaoj" title="FCC Building Vision Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <p>“That big old building sitting there is how you project the gospel forward in your city.”<br /><span id='itally-Mark'>Mark Dever, Pastor, Capitol Hill Baptist Church</span></p>
            </div>
            <section className='sectionIII-container'>
                {/* <hr className='divider'></hr> */}
                <h1>Fundraising Goal</h1>
                <div className='fund-container'>
                    <p id='goal-tag'>$5 million</p>
                    <p>We need 1,000 people or churches to give $5,000 each.</p>
                </div>
                <div className='fund_buttons-container'>
               
                    <button className='submit-btn'> <a href="https://give.tithe.ly/?formId=628eb570-6865-11ee-90fc-1260ab546d11">Donate Now</a></button>
                    <EmailJs />
                </div>
            </section>
        </div>
    )
}

export default SectionIII