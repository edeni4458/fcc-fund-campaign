import React from 'react'
import fccLogo from '../z_images/fcc_logo-2.png'
import  '../header/header.css'
import EmailJs from './EmailJs'



const Header = () => {
    
    return (
        <header  className='header_main-container'>
            <div className='header_sub-container' >
                <div className='header_container-elements'>
                    <img src={fccLogo} alt='Fordham-Community-Church-Logo' />
                    <h2>Help us to own some brick in the Bronx in order to help reshape the spiritual climate of the Bronx through planting gospel centered churches</h2>
                    <div className='header_container-button'>
                        <button className='submit-btn'>Donate Now</button>
                        <h4 className='h4-text-building-fund'>Select "FCC Building Fund" to designate donation for building.</h4>
                    </div>
                </div>
                <EmailJs />
            </div>
        </header>
    )
}

export default Header