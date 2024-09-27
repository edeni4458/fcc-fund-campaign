import React from 'react'
import liveFam from '../z_images/our-values-bg.jpg'
import './live.css'

const Live = () => {
    return (
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
    )
}

export default Live