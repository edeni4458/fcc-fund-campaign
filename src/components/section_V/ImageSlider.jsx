import { React, useState } from 'react'




const ImageSlider = ({slides}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: "100%",
        position: "relative",
    }

    const slideStyles = {
        width: "100",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
    }

    return (
        <div styles={sliderStyles}>
            <div style={slideStyles}>

            </div>
        </div>
    )
}

export default ImageSlider