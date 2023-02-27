import './css/Footer.css';

import twitter from "./img/twitter.png";
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import github from './img/github.png';

function body() {
    return (
        <div className='footer'>
            <a href="#"><img className='icon' src={twitter}></img></a>
            <img className='icon' src={facebook}></img>
            <img className='icon' src={instagram}></img>
            <img className='icon' src={github}></img>
        </div>
    );
}

export default body;