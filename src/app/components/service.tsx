import React from "react";
import { FaTruck, FaHeadset, FaMoneyBillWave } from "react-icons/fa";

const Services = () => {
  return (
    <div className=" py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-8">Our Services</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex flex-col items-center text-center">
            <FaTruck className="text-4xl text-gray-800 mb-4" />
            <h3 className="text-xl font-semibold">Free Delivery</h3>
            <p className="text-gray-600">Free Delivery on Orders Above $1000</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaHeadset className="text-4xl text-gray-800 mb-4" />
            <h3 className="text-xl font-semibold">24/7 Customer Service</h3>
            <p className="text-gray-600">
              For Queries and Questions, Feel Free to Contact
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaMoneyBillWave className="text-4xl text-gray-800 mb-4" />
            <h3 className="text-xl font-semibold">Money Back Guarantee</h3>
            <p className="text-gray-600">
              Get Money Back Guarantee on Damaged Products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
