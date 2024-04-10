import { useInView } from "react-intersection-observer";
import React from 'react'
import "./goalbar.css"
import { useState } from 'react'


export default function Goalbar() {

    const [message, setMessage] = useState("Donate")

    // let message = "Donate"
    handleOnClick = () => {
        setMessage("Thank you")
    }


    const [heigh, setHeigh] = useState("4")
    // const [marg, setMarg] = useState("376px")
    const [money, setMoney] = useState(2500000)
    // let money = 250000

    let height_5 = 250000
    let height_10 = 500000
    let height_25 = 1250000
    let height_50 = 2500000
    let height_75 = 3750000
    let height_100 = 5000000
    if (money === height_5) {
        // setHeight("5%")
    }

    function handleOnClick() {
        if (money === height_50) {
            setHeigh(parseInt(heigh) + 10)

        }
        // setMarg(marg - 18.8)
    }
    const { ref: goalBarRef, inView: goalBarView } = useInView({
        thresehold: 0,
        delay: 9000
    });

    const [redBackColor, setRedBackColor] = useState()

    const redBackground = "red"
    

    const blueBackground = "blue"


    return (
        <div ref={goalBarRef} className='goalbar' >
            <div style={goalBarView ?{opacity:1}:{backgroundColor:'red'}} className='goal-letter'>
                <p id='goalbar_text'>5,000,000</p>
                <div className='goal-filler' style={{ height: heigh + "%" }} ></div>
            </div>
            {/* <button onClick={handleOnClick} className='btn btn-dark'>Donate</button> */}
            <button className='submit-btn-Bar' onClick={handleOnClick}>{message}</button>
        </div>
    )
}
