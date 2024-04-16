import React,  { useState } from 'react'
import "./goalbar.css"



export default function Goalbar() {



    const [heigh, setHeigh] = useState("4")
    const [marg, setMarg] = useState("376px")
    const [money, setMoney] = useState(2500000)
    // // let money = 250000

    // let height_5 = 250000
    // let height_10 = 500000
    // let height_25 = 1250000
    let height_50 = 2500000
    // let height_75 = 3750000
    // let height_100 = 5000000
    // if (money === height_5) {
    //     // setHeight("5%")
    // }

    function handleOnClick() {
        if (money === height_50) {
            setHeigh(parseInt(heigh) + 10)

        }
        // setMarg(marg - 18.8)
    }

    
    const [message, setMessage] = useState("Donate")

    // let message = "Donate"
    const handleClick = () => {
        setMessage("Thank you")
    }



    return (
        <div className='goalbar' >
            <div  className='goal-letter'>
                <p id='goalbar_text'>5,000,000</p>
                <div className='goal-filler' style={{ height: heigh + "%" }} ></div>
            </div>
            {/* <button onClick={handleOnClick} className='btn btn-dark'>Donate</button> */}
            <button className='submit-btn-Bar' onClick={handleClick}>{message}</button>
        </div>
    )
}
