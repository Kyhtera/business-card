import './css/Card.css';
import CARDHEADER from './Cardheader';
import BUTTONS from './Buttons.js';
import CARDBODY from './Cardbody.js';
import FOOTER from './Footer.js';

function card1(){
    return (
        <div className="card">
            <CARDHEADER/>
            <BUTTONS/>
            <CARDBODY/>
            <FOOTER/>
        </div>
    )
}

export default card1;