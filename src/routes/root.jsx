import Card from '../components/Card.jsx';
import user from '../components/profile.png';
import cart from '../components/basket.png';

function Main() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-text font-bold">Здесь мог быть ваш логотип</div>
        <div className="icons">
          <img src={user} alt="user" />
          <a href={`/cart`}>
          <img src={cart} alt="cart" />
          </a>
        </div>
      </header>
      <div className="flex">
      <div className="Container">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="Card-container">
        <input className="Input" placeholder='Поиск по товарам'></input>
      </div>
      </div>
      <div className="flex">
      <div className="Container">
        <Card />
        <Card />
        <Card />
      </div>
      </div>
    </div>
  );
}

export default Main;