
import './App.css';
import Cosmetic from './components/Cosmetic/Cosmetic';
import Grocery from './components/Grocery/Grocery';
import Shoes from './components/Shoes/Shoes';

function App() {
  return (
    <div className="App">
      <Cosmetic></Cosmetic>
      <Shoes></Shoes>
      <Grocery></Grocery>
    </div>
  );
}

export default App;
