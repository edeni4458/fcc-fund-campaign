import React from 'react'
import '../section_II/sectionII.css'
import fccImg1 from '../z_images/fcc_image-1.jpg'
import fccImg2 from '../z_images/fcc_image-2.jpg'
import fccImg3 from '../z_images/fcc_image-3.jpg'
import hisWord from '../z_images/knowing_HIS_word.jpg'
import liveFam from '../z_images/live_like_family.jpeg'
import loveYal from '../z_images/love_our_barrio.jpg'

const SectionII = () => {
    return (
        <div>
            <section className='sectionII_main-container'>
                <div className='sectionII_title'>
                    <h1>Commitments</h1>
                </div>
                <div className='sectionII_mission-container'>
                    <div className='main_photo_mission-container'>
                        <div className='photo_mission-container'>
                            <img src={fccImg1} alt='' />
                            <h2>Know</h2>
                            <p>Devoted to God's word</p>
                        </div>
                        <div id='middle-container' className='photo_mission-container'>
                            <img src={fccImg2} alt='' />
                            <h2>Live</h2>
                            <p>Live like a family</p>
                        </div>
                        <div className='photo_mission-container'>
                            <img src={fccImg3} alt='' />
                            <h2>Love</h2>
                            <p>Love our neighbors like Jesus</p>
                        </div>
                    </div>
                    <div className='sub-section_testimony'>
                        <h2>What God has done</h2>
                        <p>FCC Today: Two Services 9:45 AM (Spanish) | 11:45 AM</p>
                    </div>
                    <div className='sub-seection_testimony-know'>
                        <img id='know-word-pic' src={hisWord} alt='' />
                        <div>
                            <p>Knowing God's Word</p>
                            <ol>
                                <li>Preached through Gen; Ephesians; Acts; Ruth; 1 thess; Proverbs; Marriage; Faith etc...</li>
                                <li>The church Loves God’s word</li>
                                <li>Gospel clarity</li>
                                <li>Growing gospel impact</li>
                                <li>Opportunities to preach and pulpit fill</li>
                                <li>The word being preached in Spanish and English</li>
                            </ol>
                        </div>
                    </div>
                    <div>
                        <img id='live-fam-pic' src={liveFam} alt='' />
                        <p>Live: Like a Family</p>
                    </div>
                    <div>
                        <img id='love-yal-pic' src={loveYal} alt='' />
                        <p>Love: Our Neighborhood</p>
                    </div>
                    <hr />
                    <div>
                        <p>“That big old building sitting there is how you project the gospel forward in your city,” - Mark Dever</p>
                        <p>"Generally speaking, city churches can’t purchase historic properties on their own. They will need kingdom-minded benefactors who embrace this vision of the gospel in the city and the church’s role in promoting the common good. Who will help churches buy or remain in their kingdom outposts?" - Duke Kwon</p>
                    </div>
                    <hr />
                </div>
            </section>
        </div>
    )
}

export default SectionII