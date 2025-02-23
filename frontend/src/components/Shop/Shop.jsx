
import { Link } from 'react-router-dom';
import img1 from '../../assets/SA/shrimp1.png';
import img2 from '../../assets/SA/fish1.png';

const Shop = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 dark:text-white p-6 font-kanit">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">🐠 ขาย 🦐</h1>
      <p className="text-lg max-w-3xl text-center mb-10 text-gray-700 dark:text-gray-300">
        เราเป็นร้านค้าออนไลน์ที่รวบรวมสัตว์น้ำหายากและมีคุณภาพ พร้อมให้คำแนะนำเกี่ยวกับการเลี้ยงสัตว์น้ำ
        เพื่อให้คุณสามารถเลือกสัตว์น้ำที่เหมาะสมกับตู้ของคุณได้อย่างมั่นใจ
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Card for Shrimp */}
        <div className="bg-gray-200 p-8 rounded-xl shadow-lg text-center flex flex-col items-center hover:scale-105 transition-transform">
          <img src={img1} alt="กุ้งแคระ" className="w-24 h-24 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900">กุ้งแคระ</h2>
          <p className="text-lg text-gray-800">สุดยอดกุ้งกินเศษอาหาร</p>
          <Link to="/shrimp-shop">
            <button className="mt-4 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              คลิ๊กเพื่อเลือกซื้อ
            </button>
          </Link>
        </div>

        {/* Card for Fish */}
        <div className="bg-gray-200 p-8 rounded-xl shadow-lg text-center flex flex-col items-center hover:scale-105 transition-transform">
          <img src={img2} alt="ปลาตู้" className="w-24 h-24 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900">ปลาตู้</h2>
          <p className="text-lg text-gray-800">สุดยอดปลาสวยงาม</p>
          <Link to="/fish-shop">
            <button className="mt-4 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            คลิ๊กเพื่อเลือกซื้อ
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Shop;
