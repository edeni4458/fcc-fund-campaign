import React from 'react'
import '../section_III/sectionIII.css'
import EmailJs from '../header/EmailJs'

const SectionIII = () => {
    return (
        <div className='sectionIII_main-container'>
            <section className='sectionIII-container'>
                <hr className='divider'></hr>
                <h1>Fundraising Goal</h1>
                <div className='fund-container'>
                    <p id='goal-tag'>$5 million</p>
                    <p>We need 1,000 people or churches to give $5,000 each.</p>
                </div>
                <div className='fund_buttons-container'>

                    <button className='submit-btn'>Donate Now</button> <EmailJs/>
                   
                  
                </div>
            </section>
        </div>
    )
}

export default SectionIII