import React from 'react';
import Button from '../Shared/Button';
import { useCart } from '../CartContext/CartContext';

const ProductCard = ({ data }) => {
  const { addToCart } = useCart(); // ใช้งานฟังก์ชันเพิ่มสินค้าไปยังตะกร้า

  return (
    <div className="flex justify-center items-center w-full">
      <div className="mb-10 w-full max-w-[1500px] px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10 place-items-center">
          {data.map((item) => (
            <div key={item.id} className="group relative w-full max-w-[350px] p-6 bg-white shadow-lg rounded-xl overflow-hidden">
              
              {/* รูปสินค้า */}
              <div className="relative w-full overflow-hidden rounded-lg">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* ปุ่มเพิ่มลงตะกร้า */}
                <div className="hidden group-hover:flex absolute inset-0 bg-black/50 justify-center items-center rounded-lg transition-opacity duration-300">
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-primary text-white px-6 py-2 rounded-lg text-lg font-semibold shadow-md hover:bg-primary-dark transition"
                  >
                    🛒 เพิ่มลงตะกร้า
                  </button>
                </div>
              </div>

              {/* ข้อมูลสินค้า */}
              <div className="text-center mt-4">
                <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                <h2 className="text-lg font-bold text-gray-700">{item.price}</h2>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
