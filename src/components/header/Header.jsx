import React from 'react'
import fccLogo from '../z_images/fcc_logo-2.png'
import '../header/header.css'
import headerImage from '../z_images/home pic_2.jpg'



const Header = () => {

    return (
        <header className='header_main-container'>
            <div className='header_sub-container' >
                <div className='header_container-elements'>
                    <div className="fcc-img">
                        <a href='https://www.fccbronx.org/' target='_blank'>
                            <img id='fcc_image' src={fccLogo} alt='Fordham-Community-Church-Logo' />
                        </a>
                    </div>
                    <div className='top-header'>
                        <h1 className='title'>Fordham Community Church</h1>
                        <h2 className='buildtext'>Building a Kingdom family that displays the love of Jesus</h2>
                    </div>
                </div>
                <div className="header-Image">
                    <img id='headerImage' src={headerImage} alt='Fordham-Community-Church-Logo' />
                </div>
            </div>
        </header>
    )
}

export default Header