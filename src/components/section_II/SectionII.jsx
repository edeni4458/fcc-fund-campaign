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
                        <div className='photo_mission-container'>
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
                    <div className='sub-section_testimony-know'>
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
                    <div className='sub-section_testimony-live'>
                        <div className='testimony-live'>
                            <p>Live: Like a Family</p>
                            <ol className='list-know'>
                                <li>Raise new elders (2) raise new deacons (5)</li>
                                <li>Thriving ministry
                                    <ul>
                                        <li>FCC Kids</li>
                                        <li>Welcome Team</li>
                                        <li>Sound Team</li>
                                        <li>Worship Team (15 volunteers)</li>
                                    </ul>
                                </li>
                                <li>City Link Groups
                                    <ul>
                                        <li>Small groups 3 (15-20 people faithfully in each group)</li>
                                    </ul>
                                </li>
                                <li>Growing Deep Discipleship
                                    <ul>
                                        <li>30 students each semester (theology, spiritual disciplines)</li>
                                    </ul>
                                </li>
                                <li>Women’s Ministry
                                    <ul>
                                        <li>Conference close to 100 women last year</li>
                                    </ul>
                                </li>
                                <li>Men’s Retreat</li>
                            </ol>
                        </div>
                        <div className='live-pic-container'>
                            <img id='live-fam-pic' src={liveFam} alt='' />
                        </div>
                    </div>
                    <div className='sub-section_testimony-love'>
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
                    <div className='quote-container'>
                        <p>“That big old building sitting there is how you project the gospel forward in your city.” <br />- Mark Dever</p>
                        <p>"Generally speaking, city churches can’t purchase historic properties on their own. They will need kingdom-minded benefactors who embrace this vision of the gospel in the city and the church’s role in promoting the common good. Who will help churches buy or remain in their kingdom outposts?" <br />- Duke Kwon</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SectionII