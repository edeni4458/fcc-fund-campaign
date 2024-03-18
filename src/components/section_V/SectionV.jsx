import React from 'react'
import '../section_V/sectionV.css'
import ImageSlider from './ImageSlider'

const slides = [
    { url: "https://mcusercontent.com/896f3c9eb24d187e42f9531bc/images/adec791f-b28e-8e6b-19ba-024663664f11.jpeg" },
    { url: "https://mcusercontent.com/896f3c9eb24d187e42f9531bc/_compresseds/86ec99c9-6686-9902-e530-c8ba3cab76c2.jpeg" },
    { url: "https://mcusercontent.com/896f3c9eb24d187e42f9531bc/_compresseds/d1e52b9b-33ba-4959-c2b0-da66f514c010.jpeg" },
    { url: "https://mcusercontent.com/896f3c9eb24d187e42f9531bc/_compresseds/a2bb4263-7028-26f9-2431-c3e466e0a169.jpeg" },
    { url: "https://mcusercontent.com/896f3c9eb24d187e42f9531bc/_compresseds/467cd56e-2b99-22ee-bf54-7dcbfc7ddc67.jpeg" }
];

const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
}

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
                    </div>
                    <div style={containerStyles}>
                        <ImageSlider slides={slides}/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SectionV