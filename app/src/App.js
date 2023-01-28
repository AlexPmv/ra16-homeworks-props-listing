import logo from './logo.svg';
import './App.css';
import Listing from './components/Listing';
import etsy from './data/etsy';

function App() {
  const items = etsy.filter(item => item.state === 'active');
  
  return (
    <div className="App">
      <Listing items={items}/>
    </div>
  );
}

export default App;
