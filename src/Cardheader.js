import './css/Header.css';
import img from './img/ahmet.jpg';

function header() {
    return (
        <div>
            <img className="card-image" src={img} />
            <div className="name">
                <div className="h1">Ahmet USLU</div>
                <div className="h2">Web3 Developper</div>
                <div className="h3">kythera Web</div>
            </div>
        </div>
    );
}

export default header;