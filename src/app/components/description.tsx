import React from "react";

const CarDetails = () => {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Highlights</h2>
        <p className="text-gray-700">
          THIS... is a 2014 Porsche 911 GT3, finished in white with a black
          interior.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mt-4 space-y-2">
          <li>
            The odometer on this 911 GT3 currently displays approximately 30,800
            miles.
          </li>
          <li>
            The attached Carfax history report lists no accidents or mileage
            discrepancies in this GT3s past. It also confirms that this Porsche
            has been registered in Georgia and North Carolina since new.
          </li>
          <li>
            Factory equipment includes the Sound Package Plus, 20-inch GT3
            wheels painted black, an extended-range fuel tank, Alcantara and
            leather upholstery, power-adjustable seats, and much more.
          </li>
          <li>
            Modifications reported by the seller include paint protection film,
            a GMG Racing exhaust muffler, and an aftermarket roll cage.
          </li>
          <li>
            Released for 2012, the 991-generation 911 featured a longer
            wheelbase and new transaxle developed to improve weight distribution
            and cornering performance. Production ended in 2019.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Equipment</h2>
        <p className="text-gray-700">
          A build sheet is pictured in the gallery, and a partial list of
          notable equipment includes:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mt-4 space-y-2">
          <li>Sound Package Plus (upgraded sound system)</li>
          <li>20-inch GT3 wheels painted black</li>
          <li>Extended-range fuel tank</li>
          <li>GT3-specific body kit</li>
          <li>Brushed Aluminum interior trim</li>
          <li>Alcantara and leather upholstery</li>
          <li>Power-adjustable seats</li>
          <li>SportDesign steering wheel</li>
          <li>Fire extinguisher</li>
          <li>
            Touchscreen-based Porsche Communication Management (PCM)
            infotainment system
          </li>
          <li>Navigation system</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Modifications</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            Paint protection film on front bumper, hood, side skirts, and
            mirrors
          </li>
          <li>GMG Racing exhaust muffler</li>
          <li>Aftermarket roll cage</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Known Flaws</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Some chips and scuffs on front bumpers paint protection film</li>
          <li>Scuffs on the underside of the rear diffuser</li>
          <li>Some creases on drivers seat outer bolster</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Recent Service History</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Oil change performed in December 2022 at 29,000 miles</li>
          <li>Brake pads replaced in March 2023</li>
          <li>Tires rotated and balanced in June 2023</li>
        </ul>
      </section>
    </div>
  );
};

export default CarDetails;
