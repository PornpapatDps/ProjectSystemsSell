import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Navbar/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Category3 from "./components/Category/Category3";
import Category4 from "./components/Category/Category4";
import Sevices from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Blogs from "./components/Blogs/Blogs";
import Partner from "./components/Partner/Pathner";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import AboutShrimp from "./components/About/AboutShrimp";
import AboutFish from "./components/About/AboutFish";
import Shop from "./components/Shop/Shop";
import ShopShrimp from "./components/Shop/ShoptShrimp";
import ShopFish from "./components/Shop/ShopFish";
import { CartProvider } from "./components/CartContext/CartContext";
import Checkout from "./components/Checkout/Checkout";
import CartPage from "./components/CartContext/CartPage";
import ShippingDetails from "./components/ShippingDetails/ShippingDetails";
import AuthPages from "./components/Auth/AuthPages";
import ShippingReport from "./components/ShippingReport/ShippingReport";
import { Analytics } from "@vercel/analytics/react";
import img1 from "./assets/SA/f4.png";
import img2 from "./assets/SA/RedB.png";


const BannerData = {
  discount: "30% OFF",
  title: "New Collection",
  date: "2025-3-3",
  title2: "กุ้งแคระ",
  title3: "Red B",
  title4: "กุ้งเรดบี (Red Bee Shrimp) เป็นกุ้งแคระน้ำจืดที่ได้รับความนิยมอย่างมาก...",
  bgColor: "#f42c37",
  image:img2,
};

const BannerData2 = {
  discount: "30% OFF",
  title: "New Collection",
  date: "2024-12-31",
  title2: "ปลา",
  title3: "Cardinal Tetra",
  title4: "ปลาคาร์ดินัลเป็นปลาขนาดเล็กที่มีสีสันสดใส...",
  bgColor: "#e65100",
  image:img1,
  
};

// ✅ ฟังก์ชันเช็คว่าอยู่หน้า Signin หรือ Signup หรือไม่
// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const location = useLocation();
  const hideLayout = location.pathname === "/signin" || location.pathname === "/signup";

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-300 overflow-hidden">
      {!hideLayout && <Navbar />}
      <Analytics />
      {children}
      {!hideLayout && <Partner />}
      {!hideLayout && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Hero />
                <Banner data={BannerData} />
                <Category />
                <Category2 />
                <Category3 />
                <Category4 />
                <Sevices />
                <Banner data={BannerData2} />
                <Blogs />
              </Layout>
            }
          />

          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/shrimp" element={<Layout><AboutShrimp /></Layout>} />
          <Route path="/fish" element={<Layout><AboutFish /></Layout>} />
          <Route path="/shop" element={<Layout><Shop /></Layout>} />
          <Route path="/shrimp-shop" element={<Layout><ShopShrimp /></Layout>} />
          <Route path="/fish-shop" element={<Layout><ShopFish /></Layout>} />
          <Route path="/cart" element={<Layout><CartPage /></Layout>} />
          <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
          <Route path="/shipping-details" element={<Layout><ShippingDetails /></Layout>} />
          <Route path="/shipping-report" element={<Layout><ShippingReport /></Layout>} />

          {/* ✅ Signin & Signup จะแสดงผลแบบเต็มหน้า ไม่มี Navbar, Partner, Footer */}
          <Route path="/signin" element={<AuthPages isSignUp={false} />} />
          <Route path="/signup" element={<AuthPages isSignUp={true} />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
