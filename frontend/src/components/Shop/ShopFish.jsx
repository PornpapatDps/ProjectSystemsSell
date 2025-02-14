import React from 'react';

import Image1 from "../../assets/SA/f1.png";
import Image2 from "../../assets/SA/f3.png";
import Image3 from "../../assets/SA/f2.png";
import Image4 from "../../assets/SA/f4.png";
import Image5 from "../../assets/SA/f5.png";
import Image6 from "../../assets/SA/f6.png";
import Image7 from "../../assets/SA/f7.png";
import Image8 from "../../assets/SA/f8.png";

import Heading from '../Shared/Heading'; 
import ProductCard from '../Products/Productcard';

const ProductsData2 = [
  { id: 1, img: Image1, title: "ปลาซิวไบจิเต้", price: "฿60", stock: 100 },
  { id: 2, img: Image2, title: "ปลาซิวกาแล็คซี่", price: "฿70", stock: 100 },
  { id: 3, img: Image3, title: "ปลาซิวเพชรน้อย", price: "฿10", stock: 100 },
  { id: 4, img: Image4, title: "ปลาคาดินัล ", price: "฿20", stock: 100 },
  { id: 5, img: Image5, title: "ปลานีออน", price: "฿20", stock: 100 },
  { id: 6, img: Image6, title: "ปลาซิวฟ้า", price: "฿50", stock: 100 },
  { id: 7, img: Image7, title: "ปลาคาดินัลเผือก", price: "฿30", stock: 100 },
  { id: 8, img: Image8, title: "ปลาเรนโบว์นีออนสั้น", price: "฿20", stock: 100 },
];

const ShopFish = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900 dark:text-white px-10 py-12 w-full font-[Kanit]">
      {/* Header */}
      <h1 className="text-5xl font-extrabold mb-6 text-center text-gray-800 dark:text-white">
        🐟 เมนูเลือกประเภทปลาสวยงาม
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl text-center mb-12">
        ปลาสวยงามเป็นสัตว์เลี้ยงยอดนิยมที่ช่วยเพิ่มความสวยงามให้กับตู้ไม้น้ำ 
        แต่ละชนิดมีเอกลักษณ์เฉพาะตัว และความต้องการในการดูแลที่แตกต่างกัน
      </p>

      {/* Product Section */}
      <div className="w-[1600px]">
        {/* Header for Products */}
        <Heading title="Our Products" subtitle="Explore Our Products" />

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 w-full max-w-[1600px] px-5">
          <ProductCard data={ProductsData2} />
        </div>
      </div>
    </div>
  );
};

export default ShopFish;
