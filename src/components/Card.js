import logo from './phone.png'

function Card() {
    return (
      <div className="Card-container">
        <img className="Phone" src={logo} alt="Logo" />
        <div className="Card-flex">
            <div className="Card-text">IPhone 12</div>
            <div className="Card-text">56000$</div>
        </div>
        <div className="Card-button">В корзину</div>
      </div>
    );
  }
  
  export default Card;