import 'materialize-css';
import { TextInput, Button } from 'react-materialize';
import Instagram from '../images/instagram.png';
import Email from '../images/email.png';
import {send} from 'emailjs-com';
import {useState} from 'react';


const Mailer = () => {

    const [sender_name, set_sender_name] = useState('');
    const [sender_email, set_sender_email] = useState('');
    const [message_subject, set_message_subject] = useState('');
    const [message, set_message] = useState('');
    const handleName = (e) => {
        set_sender_name(e.target.value)
    }
    const handleEmail = (e) => {
        set_sender_email(e.target.value)
    }
    const handleMessagesubject = (e) => {
        set_message_subject(e.target.value)
    }
    const handleMessage = (e) => {
        set_message(e.target.value)
    }
    const sendEmail = (e) => {
        e.preventDefault();
        send (
            'service_x5nw4wd',
            'template_k95owwl',
            {sender_name, sender_email, message_subject, message},
            '0B9RHKd8iAI_5DC6o'
        )
        .then((response) => {
            console.log('Message sent successfully', response.status, response.text)
        })
        .catch((err) =>{
            console.log("failed", err)
        })
    }

    return (
        <div className = 'contact-form grey lighten-4 text-black'>
            <h2>Get in Touch</h2>
            <form onSubmit = {sendEmail}>
            <TextInput 
                id="TextInput-40" 
                label="Your Name" 
                value = {sender_name}
                color = {'black'}
                onChange = {handleName}/>

            <TextInput 
                email id="TextInput-47" 
                label="Your Email Address" 
                value = {sender_email}
                validate
                onChange = {handleEmail}/>
                
                <TextInput 
                id="TextInput-40" 
                label="Message Subject" 
                value = {message_subject}
                onChange = {handleMessagesubject}/>

            <TextInput 
                id="TextInput-40" 
                className='yellow-text text-darken-2'
                label="Message"
                value = {message}
                style={{height: '175px'}}
                onChange = {handleMessage}/>

            <Button 
                node="button" 
                type="submit" 
                waves="light"
                className="grey darken-4">
                Submit
            </Button>
            </form>
        <h4 className='follow-header'>Follow Me</h4>
        <img className='instagram-icon valign-conter' src = {Instagram}style={{width: '10%'}} alt = "instagram-icon" />
        <img className='email-icon valign-center' src = {Email}style={{width: '12%'}} alt = "email-icon" />
        </div>

    )
}

export default Mailer;