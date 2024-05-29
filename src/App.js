import './App.css';
import Header from './components/Header/Header';
import Promo from './pages/Promotion/Promo';
import Brands from './components/Brands/Brands';
import Footer from './components/Footer/Footer';
import Arrivals from './pages/Arrivals/Arrivals.jsx';
import { Route, Routes } from 'react-router-dom';
import Favourite from './pages/Favourite/Favourite.jsx';
import Sale from './components/Sale/Sale.jsx';
import Forms from './pages/Forms/Forms.jsx';
import Application from './components/Application/Application.jsx';


let data = {
  cardData: [
    {title: 'Hoodies & Sweetshirt', promo: 'Explore Now!'},
    {title: 'Coats & Parkas', promo: 'Explore Now!'},
    {title: 'Tees & T-Shirt', promo: 'Explore Now!!'},
  ],
};




function App (props) {
  return (
    <div className='App'>  
          <Header />
          {/* <Promo />
          <Arrivals data={data} />
          <Sale />
          <Favourite />
           */} 
          <Routes>
              <Route path="/" Component={ Promo } />
              <Route path="/catalogue" element={ <Arrivals data={data} /> }  />
              <Route path="/favourite" element={<Favourite /> } />
              <Route path="/lifestyle" Component={ Sale } />
              <Route path="/app" Component={ Application } />  
          </Routes>    
           {/* <Forms /> */}
          <Brands />    
          <Footer />
    </div>
  );
}

export default App;
