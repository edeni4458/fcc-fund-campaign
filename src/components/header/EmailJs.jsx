import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import '../header/emailJs.css'


const EmailJs = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

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




    return (
        <section className='emailJs_main-container'>
            <form className='form-container' onSubmit={sendEmail} action="" method="post">
                <div className='label_main-container'>
                    <div className='label-container'>
                        <label name='name'>fullname</label>
                        <input onChange={(e) => setName(e.target.value)} type="text" value={name} />
                    </div>
                    <div className='label-container'>
                        <label name='email' >email</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" value={email} />
                    </div>
                    <div className='label-container'>
                        <label name='note'>leave us a note</label>
                        <input onChange={(e) => setMessage(e.target.value)} type="textarea" rows="4" value={message}></input>
                    </div>
                    <div className="submit-container">
                        <input  type='submit' className="btn btn-dark" />
                    </div>
                </div>
            </form>
        </section>
    )
}

export default EmailJs