import React from 'react'
import './sectionIV.css'
import know from "../z_images/Know.jpg"
import love from "../z_images/Love.jpg"
import live from "../z_images/Live.jpg"
import OurStory from './OurStory'

const SectionIV = () => {

    function handleClick() {

        const newUrl = {
            create: "create new url"
        }
        window.history.pushState(newUrl, "", "/detailPage")
        window.location.reload()
    }


    return (
        <div className='sectionIV_main-container'>
            <div className='heading-container'>
                <h1>Our Values</h1>
            </div>
            <div className='image-and-p-main-container'>
                <div className='image-and-p-container'>
                    <div className='image-container' onClick={handleClick} >
                        <img className='img-edit' src={know} alt='' />
                    </div>
                    <div className='p-container'>
                        <h2>Know</h2>
                        <p>Knowing God's word<br /> and the Gospel.</p>
                    </div>
                </div>
                <div className='image-and-p-container'>
                    <div className='image-container' onClick={handleClick}>
                        <img className='img-edit' src={live} alt='' />
                    </div>
                    <div className='p-container'>
                        <h2>Live</h2>
                        <p>Living like family,<br /> following Jesus together.</p>
                    </div>
                </div>
                <div className='image-and-p-container'>
                    <div className='image-container' onClick={handleClick}>
                        <img className='img-edit' src={love} alt='' />
                    </div>
                    <div className='p-container'>
                        <h2>Love</h2>
                        <p>Loving our neighbors<br /> in word and deed.</p>
                    </div>
                </div>
            </div>
            <OurStory />
        </div>
    )
}

export default SectionIV