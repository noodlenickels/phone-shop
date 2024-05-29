import Character from '../components/Character.jsx';
import user from '../components/profile.png';
import star from '../components/star.png';
import cart from '../components/basket.png';
import logo from '../components/phone.png'

function Cart() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-text">Здесь мог быть ваш логотип</div>
        <div className="icons">
          <img src={user} alt="user" />
          <a href={`/cart`}>
          <img src={cart} alt="cart" />
          </a>
        </div>
      </header>
      <div className="Cart-body">
          <div className="flex-phone">
                <img className="phone-card" src={logo} alt="Logo" />
                <div className="text-part">
                  <div className="card-text">iPhone 12</div>
                  <div className="card-text down-marg">56000</div>
                  <Character />
                  <Character />
                  <Character />
                  <Character />
                  <Character />
                </div>
                <div className="rating">
                  <div className="cart-button">В корзину</div>
                  <div className="stars">
                    <img src={star} />
                    <img src={star} />
                    <img src={star} />
                    <img src={star} />
                    <img src={star} />
                  </div>
                </div>
          </div>
          <div className="text-lorem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
      </div>
    </div>
  );
}

export default Cart;