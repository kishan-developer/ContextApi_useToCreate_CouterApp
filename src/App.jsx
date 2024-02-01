import { useContext } from 'react'
import './App.css';
import Counter from './Components/Counter';
import { CounterContext } from './Context/Couter';

function App() {
  
  const counterState = useContext(CounterContext);
  console.log("Context" , counterState);

  return (
    <div className="App">
      <h1>Use Name : {counterState.name}</h1>
      <h5>Count is { counterState.count}</h5>
      <Counter/>
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
