import React from "react";
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

const ServicesData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
    title: "Free Shipping",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
    title: "24/7 Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
    title: "Secure Payment",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
    title: "Money Back Guarantee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Services = () => {
  return (
    <div className="font-[Kanit]">
      <div className="container my-14 md:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {ServicesData.map((service) => (
            <div key={service.id} className="flex flex-col items-start sm:flex-row gap-4">
              {service.icon}
              <div>
                <h1 className="lg:text-xl font-bold">{service.title}</h1>
                <h1 className="text-gray-400 text-sm">{service.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
