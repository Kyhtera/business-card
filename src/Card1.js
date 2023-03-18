import './css/Card.css';
import Cardheader from './Cardheader';
import Buttons from './Buttons.js';
import Cardbody from './Cardbody.js';
import Footer from './Footer.js';

function card1() {
    return (
        <div className="card">
            <Cardheader />
            <Buttons />
            <Cardbody />
            <Footer />
        </div>
    )
}

export default card1;