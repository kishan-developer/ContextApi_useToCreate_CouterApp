import { useContext } from 'react'
import './App.css';
import Item from './Components/Item';
import Cart from './Components/Cart';

function App() {
  
  
  return (
    <div className="App">
      <div className="cards">
        <Item name="Macbook Pro" price={100000} />
        <Item name="Pendrive" price={400} />
        <Item name="Mobile" price={20000} />
        <Item name="AirBuerd" price={300} />
      </div>
      <Cart/>
    </div>
  );
}

export default App;
