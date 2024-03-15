import React from 'react'
import '../section_V/sectionV.css'

const SectionV = () => {
    return (
        <div>
            <section>
                <div>
                    <h1>Desired Property</h1>
                    <hr />
                    <div>
                        <p>Address: 4725 Park Avenue, Bronx NY, 10469</p>
                        <ul>
                            <li>3 Floors</li>
                            <li>Seats over 300</li>
                            <li>Limited Parking</li>
                        </ul>
                        <img src='' alt='main-img' />
                    </div>
                    <div className='building_images'>
                        <div>
                            <img src='' alt='img 1' />
                        </div>
                        <div>
                            <img src='' alt='img 2' />
                        </div>
                        <div>
                            <img src='' alt='img 3' />
                        </div>
                        <div>
                            <img src='' alt='img 4' />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SectionV