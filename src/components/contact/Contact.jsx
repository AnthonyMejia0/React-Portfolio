import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import mailbox from './mailbox.png'
import './contact.scss'    

function Contact() {
    const form = useRef();
    const serviceKey = process.env.REACT_APP_SERVICE_KEY;
    const templateKey = process.env.REACT_APP_TEMPLATE_KEY;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  
    const sendEmail = (e) => {
      e.preventDefault();
      document.getElementById("sent").style.visibility = 'hidden';
  
      emailjs.sendForm(serviceKey, templateKey, form.current, publicKey)
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            document.getElementById("sent").style.visibility = 'visible';
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="contact" id='contact'>

            <div className="contact-me">
                <h2>Thanks for stopping by.</h2>
                <h1>Get In Touch</h1>
                <h3>I'm currently looking for new opportinities, so feel free to
                    leave me a message whether for work or just to say hi. My inbox
                    is always open and I will do my best to get back to you as soon as possible.</h3>
            </div>

            <div className='contact-form'>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" required/>
                    <label>Email</label>
                    <input type="email" name="user_email" required/>
                    <label>Message</label>
                    <textarea name="message" required/>
                    <input type="submit" value="Send"/>
                    <h3 id='sent'>Message Sent!</h3>
                </form>
                <div className="img-container">
                    <img src={mailbox} alt="Mailbox" />
                    <a className='link' href='https://pngtree.com/so/Mailbox' target='_blank' rel="noreferrer">Mailbox png from pngtree.com</a>
                </div>
            </div>
        </div>
    )
}

export default Contact
