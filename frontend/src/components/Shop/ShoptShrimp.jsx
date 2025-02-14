import React from 'react';
import Heading from '../Shared/Heading';
import ProductCard from '../Products/Productcard';

import Image1 from "../../assets/SA/RedB.png";
import Image2 from "../../assets/SA/SushiOrange.png";
import Image3 from "../../assets/SA/Yamato.png";
import Image4 from "../../assets/SA/blue.png";
import Image5 from '../../assets/SA/Snow.png';
import Image6 from '../../assets/SA/SushiRed.png';
import Image7 from '../../assets/SA/Yellow.png';
import Image8 from '../../assets/SA/Red.png';

const ProductsData = [
  { id: 1, img: Image1, title: "กุ้งแคระเรด บี รอง", price: "฿100" },
  { id: 2, img: Image2, title: "กุ้งแคระ ส้มซูชิ", price: "฿15" },
  { id: 3, img: Image3, title: "กุ้งยามาโตะ", price: "฿60" },
  { id: 4, img: Image4, title: "กุ้งดรีมบลู", price: "฿20" },
  { id: 5, img: Image5, title: "กุ้งสโนว์บอล", price: "฿20" },
  { id: 6, img: Image6, title: "กุ้งซูชิแดง", price: "฿15" },
  { id: 7, img: Image7, title: "กุ้งส้มเคลือบเหลือง", price: "฿10" },
  { id: 8, img: Image8, title: "กุ้งแดง", price: "฿10" },
];

const ShopFish = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900 dark:text-white px-10 py-12 w-full font-[Kanit]">
      {/* Header */}
      <h1 className="text-5xl font-extrabold mb-6 text-center text-gray-800 dark:text-white">
        🐟 เมนูเลือกประเภทกุ้งแคระ
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl text-center mb-12">
        กุ้งแคระ
      </p>

      {/* Product Section */}
      <div className="w-[1600px] dark:bg-gray-900">
        {/* Header for Products */}
        <Heading title="Our Products" subtitle="Explore Our Products" />

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 w-full max-w-[1600px] px-5">
          <ProductCard data={ProductsData} />
        </div>
      </div>
    </div>
  );
};

export default ShopFish;
