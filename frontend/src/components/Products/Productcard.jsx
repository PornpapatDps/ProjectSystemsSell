import React from 'react';
import Button from '../Shared/Button';

const ProductCard = ({ data }) => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="mb-10 w-full max-w-[1500px] px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-4 gap-14 place-items-center">
          {/* Card Section */}
          {data.map((item) => (
            <div className="group relative w-full max-w-[600px] p-8 bg-white shadow-xl rounded-2xl overflow-hidden" key={item.id}>
              {/* Product Image */}
              <div className="relative w-full overflow-hidden rounded-lg">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Hover Button */}
                <div className="hidden group-hover:flex absolute top-0 left-0 
                w-full h-full bg-black/50 justify-center items-center 
                transition-opacity duration-300 rounded-lg">
                  <Button text="🛒 Add to Cart" bgColor="bg-primary" textColor="text-white" />
                </div>
              </div>

              {/* Product Info */}
              <div className="leading-10 text-center mt-5">
                <h2 className="text-3xl font-bold text-gray-700">{item.title}</h2>
                <h2 className="text-2xl font-semibold text-gray-700">{item.price}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
