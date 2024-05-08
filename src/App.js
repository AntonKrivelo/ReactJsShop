import './App.css';
import './style/common.css';
import Header from './components/Header/Header';
import Promo from './components/Promotion/Promo';
import Brands from './components/Brands/Brands';
import Arrivals from './components/Arrivals/Arrivals';




function App(props) {
  return (
    <div className='App'>
            <div className='container'>
                  <Header />
                  <Promo />
                  
            </div>
                  <Brands />
                  <Arrivals />
    </div>
  );
}

export default App;
