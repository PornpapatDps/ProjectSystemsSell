import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Navbar/Hero/Hero';
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Category3 from './components/Category/Category3';
import Category4 from './components/Category/Category4';
import Sevices from './components/Services/Services';
import Banner from './components/Banner/Banner';

import Blogs from './components/Blogs/Blogs';
import Partner from './components/Partner/Pathner';
import Footer from './components/Footer/Footer';
import About from './components/About/About'; // นำเข้าหน้า About
import AboutShrimp from './components/About/AboutShrimp'; // นำเข้าหน้า Shrimp
import AboutFish from './components/About/AboutFish'; // นำเข้าหน้า Fish
import Shop from './components/Shop/Shop'; // นำเข้าหน้า Shop
import ShopShrimp from './components/Shop/ShoptShrimp'; // นำเข้าหน้า Shrimp
import ShopFish from './components/Shop/ShopFish'; // นำเข้าหน้า Fish
import { CartProvider } from "./components/CartContext/CartContext"; 
import shirmp from './assets/SA/RedB.png';
import fish1 from './assets/SA/f4.png';
import Checkout from "./components/Checkout/Checkout";

import CartPage from './components/CartContext/CartPage';
import ShippingDetails from './components/ShippingDetails/ShippingDetails';
import AuthPages from './components/Auth/AuthPages';


const BannerData = {
  disount: "30% OFF",
  title: "New Collection",
  date: "2021-12-31",
  image: shirmp,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  bgColor: "#f42c37",
};

const BannerData2 = {
  disount: "30% OFF",
  title: "New Collection",
  date: "2021-12-31",
  image: fish1,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  bgColor: "#fdc62e",
};

const App = () => {
  return (
    <CartProvider> {/* ✅ เพิ่ม CartProvider ตรงนี้ */}
      <Router>
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-300 overflow-hidden">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Banner data={BannerData} />
                <Category />
                <Category2 />
                <Category3 />
                <Category4 />
                <Sevices />
                  {/* 🛒 แสดงตะกร้าสินค้า */}
                <Banner data={BannerData2} />
                <Blogs />
              </>
            } />
            
            <Route path="/home" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/shrimp" element={<AboutShrimp />} />
            <Route path="/fish" element={<AboutFish />} />

            <Route path="/shop" element={<Shop />} />
            <Route path="/shrimp-shop" element={<ShopShrimp />} />
            <Route path="/fish-shop" element={<ShopFish />} />

            <Route path="/Cart" element={<CartPage />} />

            <Route path="/checkout" element={<Checkout />} />
            <Route path="/shipping-details" element={<ShippingDetails />} />

            <Route path="/signin" element={<AuthPages isSignUp={false} />} />
            <Route path="/signup" element={<AuthPages isSignUp={true} />} />
           
          </Routes>
          <Partner />
          <Footer />
        </div>
      </Router>
    </CartProvider>  
  );
};

export default App;
