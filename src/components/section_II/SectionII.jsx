import React from 'react'
import '../section_II/sectionII.css'
import Know from './Know'
import Live from './Live'
import Love from './Love'
import { Link } from 'react-router-dom'

const SectionII = () => {
    return (
        <div>
            <section className='sectionII_main-container'>
                <div className='sectionII_title'>
                    <Link reloadDocument to={"/"}><button className='goback'>Main Page</button></Link>
                </div>
                <div className='sectionII_mission-container'>
                    <div className='sub-section_testimony'>
                        <h1>What God has done</h1>
                        <p> Two Services  9:45 AM (Spanish) | 11:45 AM (English)</p>
                    </div>
                    <Know />
                    <div className='quote-container'>
                        <p>“That big old building sitting there is how you project the gospel forward in your city.” <br />- Mark Dever</p>
                    </div>
                    <Live />
                    <div className='quote-container'>
                        <p>"Generally speaking, city churches can’t purchase historic properties on their own.<br/>They will need kingdom-minded benefactors who embrace this vision of the gospel in the city and the church’s role in promoting the common good.<br/>Who will help churches buy or remain in their kingdom outposts?" <br />- Duke Kwon</p>
                    </div>
                    <Love />
                    <div className='end_main-page-btn'>
                        <Link reloadDocument to={"/"}><button className='goback'>Main Page</button></Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SectionII