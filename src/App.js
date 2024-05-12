import './App.css';
import Header from './components/Header/Header';
import Promo from './components/Promotion/Promo';
import Brands from './components/Brands/Brands';
import Arrivals from './components/Arrivals/Arrivals';
import Sale from './components/Sale/Sale';
import Favourite from './components/Favourite/Favourite';
import Application from './components/Application/Application';
import Forms from './components/Forms/Forms';
import Footer from './components/Footer/Footer';



let data = {
  cardData: [
    {title: 'Hoodies & Sweetshirt', promo: 'Explore Now!'},
    {title: 'Coats & Parkas', promo: 'Explore Now!'},
    {title: 'Tees & T-Shirt', promo: 'Explore Now!'},
  ],
};




function App (props) {
  return (
    <div className='App'>     
          <Header />
          <Promo />
          <Brands />
          <Arrivals data={data} />
          <Sale />
          <Favourite />
          <Application />
          <Forms />
          <Footer />
    </div>
  );
}

export default App;
