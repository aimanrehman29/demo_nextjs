import React from "react";
import Link from "next/link";
import { IoLogoAngular } from "react-icons/io";

const Table = () => {
  return (
    <div>
      <div className="container mx-auto p-4">
        {/* 🔹 Sold Info Section */}
        <div className="bg-black text-white px-6 rounded-lg text-lg flex flex-col sm:flex-row justify-between items-center">
          {/* Left Section - Sold Price */}
          <div className="flex flex-col sm:flex-row items-center  sm:gap-4">
            <span className="text-center sm:text-left text-xl font-semibold">
              Sold for <br />
              <strong className="text-2xl">$116,498</strong>
            </span>
          </div>

          {/* Right Section - Date, Bids & Comments */}
          <div className="flex flex-col sm:flex-row items-center md:gap-0 lg:gap-4 mt-1 sm:mt-0">
            <span className="text-sm sm:text-base">1/27/25</span>
            <span className="text-sm sm:text-base">Bids: <strong>25</strong></span>
            <span className="text-sm sm:text-base"> Comments: <strong>35</strong></span>
          </div>
        </div>

        {/* 🔹 Auction End Message */}
        <div className="mt-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded">
          <p>
            This auction has ended, see more Porsche 991 911 auctions{" "}
            <a href="#" className="text-green-800 underline">
              here
            </a>
            .
          </p>
        </div>

        {/* 🔹 Auction Info Section */}
        <div className="mt-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <Link href="/" className="flex justify-start gap-1 items-center">
              <IoLogoAngular className="w-[30px] h-[30px] lg:w-[40.47px] lg:h-[40.47px]" />
              <h1 className="font-bold text-green-500 text-lg sm:text-xl">
                Abdan<b className="text-gray-700">&</b>Cars
              </h1>
            </Link>
            <p className="text-gray-500 text-sm mt-2 sm:mt-0">
              Ended January 27th at 11:35 PM
            </p>
          </div>
        </div>

        {/* 🔹 Table Section */}
        <div className="mt-4 border rounded-lg overflow-hidden">
          <table className="w-full sm:w-3/4 mx-auto text-left text-xs border-collapse">
            <tbody>
              <tr className="border-b">
                <td className="p-2 font-bold">Make</td>
                <td className="p-2 text-blue-600 underline">
                  <a href="#">Porsche</a>
                </td>
                <td className="p-2 font-bold">Engine</td>
                <td className="p-2">3.8L Flat-6</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-bold">Model</td>
                <td className="p-2 text-blue-600 underline">
                  <a href="#">991 911</a>
                </td>
                <td className="p-2 font-bold">Drivetrain</td>
                <td className="p-2">Rear-wheel drive</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-bold">Mileage</td>
                <td className="p-2">30,800</td>
                <td className="p-2 font-bold">Transmission</td>
                <td className="p-2">Automatic (7-Speed)</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-bold">VIN</td>
                <td className="p-2">WP0AC2A96ES183212</td>
                <td className="p-2 font-bold">Body Style</td>
                <td className="p-2">Coupe</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-bold">Title Status</td>
                <td className="p-2">Clean (NC)</td>
                <td className="p-2 font-bold">Exterior Color</td>
                <td className="p-2">White</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-bold">Location</td>
                <td className="p-2 text-blue-600 underline">
                  <a href="#">Grimesland, NC 27837</a>
                </td>
                <td className="p-2 font-bold">Interior Color</td>
                <td className="p-2">Black</td>
              </tr>
              <tr>
                <td className="p-2 font-bold">Seller</td>
                <td className="p-2">DreidHail</td>
                <td className="p-2 font-bold">Seller Type</td>
                <td className="p-2">Private Party</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
