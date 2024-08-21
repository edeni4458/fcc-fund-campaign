import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import '../header/emailJs.css'
import "../section_III/sectionIII.css"


const EmailJs = () => {
    const popRef = useRef()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [number, setNumber] = useState('')
    const [amount, setAmount] = useState('')
    const [pledge, setPledge] = useState(false)
    // const [emailHistory, setEmailHistory] = useState({})

    let emailRegx = /^([a-zA-Z0-9._]+)@([a-zA-Z0-9]+)\.([a-z]+)(\.([a-z]+))?$/;
    let numberReg = /^(?:\+1\s?)?\(?([2-9][0-9]{2})\)?[-.\s]?([2-9][0-9]{2})[-.\s]?([0-9]{4})$/
    console.log(typeof number)



    // useEffect(() => {
    //     fetch("http://localhost:8000/history")
    //         .then(res => res.json)
    //         .then(data => {
    //             if (!data.error) {
    //                 console.log(data)

    //             }

    //             else {
    //                 console.log(data.error)
    //             }
    //         })


    // }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        const serviceId = 'emmanuel_set-up'
        const templateId = 'fcc-fund-camp'
        const publicKey = 'wKhF1Jo161NykecSP'
        const templateParams = {
            name: name,
            email: email,
            message: message,
            number: number,
            amount: amount,
        }
       if( emailRegx.test(email)  && numberReg.test(number)){
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((res) => {
                console.log('Email sent sucessfully.', res)
                setName('');
                setEmail('');
                setMessage('');
                setNumber('');
                setAmount('');
            })
            .catch((error) => {
                console.error('Error sending email:', error)
            })

       }
       else{
        return <p>invalid Params</p>
       }
        
    }



    const handleClick = () => {
        console.log(numberReg.test(number))
        if (name && email && message && amount && number &&  emailRegx.test(email) && numberReg.test(number) ) {
        
            setPledge(true)
            closeModal()

        }
        else {
            console.log("missing params")
            // alert("enter valid email")
        }

    }

    function openModal() {

        popRef.current.showModal()
    }
    function closeModal() {

        popRef.current.close()
    }

    return (
        <div className="dialog-con">
            <dialog id="dialog" ref={popRef}>
                <section className='emailJs_main-container'>
                    <form className='form-container' action="" method="post" onSubmit={sendEmail}>
                        <div className='label_main-container'>
                            <div className='label-container'>
                                <label name='email'>Email Address</label>
                            </div>
                            <input required onChange={(e) => setEmail(e.target.value)} type="email" value={email} />
                            <div className='label-container'>
                                <label name='name' >Full name</label>
                            </div>
                            <input required onChange={(e) => setName(e.target.value)} type="text" value={name} />
                            <div className='label-container'>
                                <label name='note'>Message</label>
                            </div>
                            <input required onChange={(e) => setMessage(e.target.value)} type="text" value={message}/>
                            <div className='label-container'>
                                <label name='number'>Contact Number</label>
                            </div>
                            <input required onChange={(e) => setNumber(e.target.value)} type="number" value={number}/>
                            <div className='label-container'>
                                <label name='amount'>Amount</label>
                            </div>
                            <input required onChange={(e) => setAmount(e.target.value)} type="number" value={amount} placeholder='$'/>
                        </div>
                        {/* <input onClick={handleClick} className='submit-btn' type='submit' value={pledge} /> */}
                        <div className='pledge-buttons'>
                            <div className='submit-pledge-button-container'>
                                <button onClick={handleClick} className='submit-pledge'>Pledge</button>
                            </div>
                            <button onClick={closeModal} className='cancel-pledge'>Cancel</button>
                        </div>
                    </form>
                </section>
            </dialog>
            <div className='header_container-button'>

                {pledge ? <p className='thanks-p'>Thanks for your Pledge</p> : <button onClick={openModal} className='make-a-pledge-btn'>Pledge</button>}

            </div>

            {/* <div> {pledge ? : null}</div> */}

        </div>

    )
}

export default EmailJs