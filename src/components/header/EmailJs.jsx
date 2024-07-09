import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import '../header/emailJs.css'
import "../section_III/sectionIII.css"


const EmailJs = () => {
    const popRef = useRef()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [pledge, setPledge] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        const serviceId = 'emmanuel_set-up'
        const templateId = 'fcc-fund-camp'
        const publicKey = 'wKhF1Jo161NykecSP'
        const templateParams = {
            name: name,
            email: email,
            message: message,
        }
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((res) => {
                console.log('Email sent sucessfully.', res)
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error sending email:', error)
            })
    }



    const handleClick = () => {
        setPledge(true)
        closeModal()
    }

    function openModal() {

        popRef.current.showModal()
    }
    function closeModal() {

        popRef.current.close()
    }

    console.log(pledge)
    return (
        <div className="dialog-con">
            <dialog id="dialog" ref={popRef}>
                <section className='emailJs_main-container'>
                    <form className='form-container' onSubmit={sendEmail} action="" method="post">
                        <div className='label_main-container'>
                            <div className='label-container'>
                                <label name='email'>email address</label>
                            </div>
                            <input required onChange={(e) => setEmail(e.target.value)} type="email" value={email} />
                            <div className='label-container'>
                                <label name='name' >first name</label>
                            </div>
                            <input required onChange={(e) => setName(e.target.value)} type="text" value={name} />
                            <div className='label-container'>
                                <label name='note'>last name</label>
                            </div>
                            <input required onChange={(e) => setMessage(e.target.value)} type="text" value={message}></input>
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
              
                {pledge?  <p className='thanks-p'>Thanks for your Pledge</p> :<button onClick={openModal} className='make-a-pledge-btn'>Pledge</button>}
                
            </div>
           
            {/* <div> {pledge ? : null}</div> */}
          
        </div>
         
    )
}

export default EmailJs