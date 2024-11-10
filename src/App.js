import './App.css';
import Cart from './Components/Cart/Cart';
import AllCategories from './Components/Filter/AllCategories';
import Gifts from './Components/GiftsCmponent/Gifts';

function App() {
  return (
    <div className="App">

      <div className="block">
      <AllCategories />
      <Cart />
      </div>

      <div className="block">
      <Gifts />
    </div>

    </div>
  );
}

export default App;
