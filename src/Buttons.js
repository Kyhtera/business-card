import './css/Buttons.css';
import mail from './img/mail.png';
import linkedin from './img/linkedin.svg';

function buttons(){
    return(
        <div className='buttons'>
            <div className="button btn1"><img className='button-img' src={mail}/><span>Email</span></div>
            <div className="button btn2"><img className='button-img' src={linkedin}/><span>LinkedIn</span></div>
        </div>
    );
}

export default buttons;