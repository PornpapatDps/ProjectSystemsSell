import React from 'react'
// import './index.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Navbar/Hero/Hero';
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Category3 from './components/Category/Category3';
import Category4 from './components/Category/Category4';
import Sevices from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Products from './components/Products/Products';
import shirmp from './assets/SA/RedB.png';
import fish from './assets/SA/f4.png';
import Blogs from './components/Blogs/Blogs';
import Partner from './components/Partner/Pathner';
import Footer from './components/Footer/Footer';
import About from './About';


const BannerData = {
  disount:"30% OFF",
  title:"New Collection",
  date:"2021-12-31",
  image: shirmp,
  title2:"Air Solo Bass",
  title3:"Winter Sale",
  title4:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  bgColor:"#f42c37",
}
const BannerData2 = {
  disount:"30% OFF",
  title:"New Collection",
  date:"2021-12-31",
  image: fish,
  title2:"Air Solo Bass",
  title3:"Winter Sale",
  title4:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  bgColor:"#fdc62e",
}
const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white
    duration-300 overflow-hidden'>
      <Navbar />
      <Hero />
      <Category/>
      <Category2/>
      <Category3/>
      <Category4/>
      <Sevices/>
      <Banner data={BannerData} />
      <Products/>
      <Banner data={BannerData2} />
      <Blogs/>
      <Partner/>
      <Footer />
      
     
    </div>
  )
}

export default App
