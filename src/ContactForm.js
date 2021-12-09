import { useState } from "react";
import './styles.css'
const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [nam, setNam] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    let formData={
        name:nam,
        email:email,
        subject:subject,
        message:message
    }
    let xhr = new XMLHttpRequest();
    xhr.open('POST','http://localhost:3000/');
    xhr.setRequestHeader('content-type','application/json');
    xhr.onload = function()
    {
        console.log(xhr.responseText);
        if(xhr.responseText === 'success')
        {
            alert('Email Sent');
            setNam('');
            setEmail('');
            setMessage('');
            setSubject('');
        }else{
            alert('Message Not SENT!!!!!!!!!!!!');
        }
    }
    xhr.send(JSON.stringify(formData));
    }
    return (
        <div className="form-container" align="center">
            <form className="contact-form" align="center">
                <h1 style={{color:"black",fontSize:"xxxlarge"}}>Contact Us</h1>
                <input type="text" id="name" placeholder="Name" value={nam} onChange={(e) => {setNam(e.target.value)}}/><br />
                <input type="email" id="email" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}}/><br />
                <input type="test" id="subject" placeholder="Subject" value={subject} onChange={(e) => {setSubject(e.target.value)}}/><br />
                <textarea id="message" placeholder="Please enter your message" cols={10} rows={10} value={message} onChange={(e) => {setMessage(e.target.value)}}/><br />
                <input type="submit" className="submit" defaultValue="Send" onClick={handleSubmit}/>
            </form>
        </div>
    )
}

export default ContactForm;