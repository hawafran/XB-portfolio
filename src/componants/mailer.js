import 'materialize-css';
import { TextInput, Button } from 'react-materialize';
import Instagram from '../images/instagram.png';
import Email from '../images/email.png';
import {send} from 'emailjs-com';
import {useState} from 'react';


const Mailer = () => {

    const [sender_name, set_sender_name] = useState('');
    const [sender_email, set_sender_email] = useState('');
    const [message, set_message] = useState('');
    const handleName = (e) => {
        set_sender_name(e.target.value)
    }
    const handleEmail = (e) => {
        set_sender_email(e.target.value)
    }
    const handleMessage = (e) => {
        set_message(e.target.value)
    }
    const sendEmail = (e) => {
        e.preventDefault();
        send (
            'service_x5nw4wd',
            'template_k95owwl',
            {sender_name, sender_email, message},
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
        <div className = 'contact-form grey lighten-2'>
            <h2>Get in Touch</h2>
            <form onSubmit = {sendEmail}>
            <TextInput 
                id="TextInput-40" 
                label="Name" 
                value = {sender_name}
                onChange = {handleName}/>

            <TextInput 
                email id="TextInput-47" 
                label="Email" 
                value = {sender_email}
                validate
                onChange = {handleEmail}/>

            <TextInput 
                id="TextInput-40" 
                label="Message"
                value = {message}
                onChange = {handleMessage}/>

            <Button 
                node="button" 
                type="submit" 
                waves="light"
                className="grey darken-4">
                Submit
            </Button>
            </form>
        <h1></h1>
        <h1></h1>    
        <h4>Follow Me</h4>
        <img className='instagram-icon valign-conter' src = {Instagram}style={{width: '10%'}} alt = "instagram-icon" />
        <img className='email-icon valign-center' src = {Email}style={{width: '12%'}} alt = "email-icon" />
        </div>

    )
}

export default Mailer;