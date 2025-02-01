import Image from "next/image";
import { FaEye, FaShareAlt } from "react-icons/fa";

const CarGallery = () => {
  const images = [
    {
      src: "/images/image copy 2.png",
      alt: "Car Exterior Front View",
      label: "Exterior (39)",
    },
    { src: "/images/image copy 3.png", alt: "Car Exterior Side View" },
    { src: "/images/image copy 4.png", alt: "Car Rear View" },
    { src: "/images/image copy 5.png", alt: "Car Rear Side View" },
    {
      src: "/images/image copy 6.png",
      alt: "Interior Dashboard",
      label: "Interior (25)",
    },
    { src: "/images/image copy 7.png", alt: "Interior Seats" },
    { src: "/images/image copy 9.png", alt: "Interior Seats" },
    {
      src: "/images/image copy 8.png",
      alt: "All Photos",
      label: "Photos (78)",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div>
          <h1 className="text-lg lg:text-2xl font-bold mb-1 lg:mb-2">
            2014 Porsche 911 GT3
          </h1>
          <p className="hidden lg:block text-gray-600 mb-2 lg:mb-4">
            ~30,800 Miles, 475-hp Flat-6, Southern-Owned, Some Modifications
          </p>
        </div>

        <div className="flex space-x-2 lg:space-x-4 mt-2 lg:mt-0">
          <button className="flex items-center space-x-1 lg:space-x-2 text-xs lg:text-sm px-2 lg:px-4 py-1 lg:py-2 border border-gray-400 rounded-lg">
            <FaEye size={14} />
            <span>Watch</span>
          </button>
          <button className="flex items-center space-x-1 lg:space-x-2 text-xs lg:text-sm px-2 lg:px-4 py-1 lg:py-2 border border-gray-400 rounded-lg">
            <FaShareAlt size={14} />
            <span>Share</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 w-full mt-4">
        <div className="w-full lg:w-3/4">
          <Image
            src="/images/image copy.png"
            alt="Featured Porsche"
            width={800}
            height={600}
            className="rounded-lg object-cover w-full"
            priority
          />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 w-full lg:w-1/4">
          {images.map((img, index) => (
            <div key={index} className="relative">
              <Image
                src={img.src}
                alt={img.alt}
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-full"
              />
              {img.label && (
                <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center text-xs lg:text-sm font-medium">
                  {img.label}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarGallery;
