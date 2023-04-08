import logo from './logo.svg';
import './App.css';
import Main from './Component/HomePage/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Component/Contact/Contact';
import About from './Component/About/About';
import ProductCard from './Component/ProductCard/ProductCard';
import Sunglass from './Component/HomePage/Sunglass/Sunglass';
import Clothes from './Component/HomePage/Clothes/Clothes';

import Jewelry from './Component/HomePage/Jewelry/Jewelry';
import Fitness from './Component/HomePage/Fitness/Fitness';
import Booking from './Component/Booking/Booking';
import Production from './Component/HomePage/Clothes/Production';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main></Main>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductCard />} />
          <Route path="/sunglass" element={<Sunglass />} />
          <Route path="/cloths" element={<Clothes />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/jewelry" element={<Jewelry />} />
          <Route path="/booking" element={<Booking />} />
           <Route path="/production" element={<Production />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
