import logo from './logo.svg';
import './App.css';
import Shop from './Components/Shop/Shop';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div>
    <h1>The shop</h1>
      <Cart></Cart>
      <Shop></Shop>
    </div>
  );
}

export default App;
