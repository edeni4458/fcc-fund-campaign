import React from 'react'
import '../section_I/sectionI.css'



const SectionI = () => {






    return (
        <div className='sectionI_main-container'>
            <span className='sectionI_mainContainer'>

            </span>
            <section className='sectionI-container'>
                <div className='both_headings'>
                <div className='sectionI_heading'>
                    <h1>Why a building?</h1>
                </div>
                <div className='sectionI_heading-II '>
                    <h3>We want to own a building in the Bronx in order to help reshape the spiritual climate through planting gosple centered Churches</h3>
                </div>
                </div>
                <div className='sectionI_heading-III'>
                <iframe width="860" height="455" src="https://www.youtube.com/embed/bL3mashs3Do?si=ZNQVrHzC8Lb_OH1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                {/* <iframe width="420" height="315" src="https://youtu.be/FoGg4vIu31c?si=sBAg5JeOqUTjsMyK" title="description"></iframe> */}
                </div>
                <p>“That big old building sitting there is how you project the gospel forward in your city.” <br></br>Mark Dever, Pastor, Capitol Hill Baptist Church</p>
            </section>
        </div>
    )
}

export default SectionI