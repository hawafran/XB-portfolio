import 'materialize-css';
import { TextInput, Button } from 'react-materialize';
import Instagram from '../images/instagram.png';
import Email from '../images/email.png';
import emailjs from 'emailjs-com'

function sendEmail(e){
    e.preventdefault();

    emailjs.sendForm('service_x5nw4wd', 'template_k95owwl', e.target, '0B9RHKd8iAI_5DC6o').then(res=>{
        console.log(res);
    }).catch(err=>console.log(err))

}

const Mailer = () => {
    return (
        <div className = 'contact-form grey lighten-2'>
            <h2>Get in Touch</h2>
            <form onSubmit={sendEmail}>
            <TextInput 
                id="TextInput-40" 
                label="Name" />

            <TextInput 
                email id="TextInput-47" 
                label="Email" 
                validate/>

            <TextInput 
                id="TextInput-40" 
                label="Message" />

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