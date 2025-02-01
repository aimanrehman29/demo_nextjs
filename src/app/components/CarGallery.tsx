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
      label: " Photos (78)",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Title */}
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-2">2014 Porsche 911 GT3</h1>
          <p className="text-gray-600 mb-4">
            ~30,800 Miles, 475-hp Flat-6, Southern-Owned, Some Modifications
          </p>
        </div>
        <div className="flex space-x-4 mt-4">
          <button className="flex items-center space-x-2">
            <FaEye size={10} />
            <span>Watch</span>
          </button>
          <button className="flex items-center space-x-2  ">
            <FaShareAlt size={10} />
            <span>Share</span>
          </button>
        </div>
      </div>

      <div className="flex space-x-4 sm:w-full">
        <div className="flex-grow">
          <Image
            src="/images/image copy.png"
            alt="Featured Porsche"
            width={800}
            height={600}
            className="rounded-lg object-cover"
            priority
          />
        </div>

        {/*  Grid */}
        <div className="grid grid-cols-2 gap-1">
          {images.map((img, index) => (
            <div key={index} className="relative">
              <Image
                src={img.src}
                alt={img.alt}
                width={190}
                height={100}
                className="rounded-lg object-cover"
              />
              {img.label && (
                <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center text-xs sm:text-sm sm:font-semibold font-normal">
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
