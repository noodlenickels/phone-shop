import Card from './Card';
import user from './profile.png';
import cart from './basket.png';

function Main() {
    function goToCart() {

    }
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-text">Здесь мог быть ваш логотип</div>
        <div className="icons">
          <img src={user} alt="user" />
          <img onClick={goToCart} src={cart} alt="cart" />
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