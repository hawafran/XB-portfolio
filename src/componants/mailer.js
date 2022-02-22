import 'materialize-css';
import { TextInput, Button } from 'react-materialize';
import Instagram from '../images/instagram.png';
import Email from '../images/email.png';


const Mailer = () => {
    return (
        <div className = 'contact-form grey lighten-2'>
            <h2>Get in Touch</h2>
            <form>
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