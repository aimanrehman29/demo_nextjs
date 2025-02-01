import Image from "next/image";
import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import Services from "./service";

const Footer = () => {
  return (
    <div>
      <Services />
      <footer className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between text-gray-700">
            <div className="w-full sm:w-1/4 mb-6">
              <h1 className="text-2xl font-bold text-green-500">
                Abdan<b className="text-gray-700">&</b>Cars
              </h1>
            </div>

            <div className="w-full sm:w-1/4 mb-6">
              <h2 className="text-lg font-semibold mb-4">HOW IT WORKS</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    SafePay
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Buying a Car
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Selling a Car
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Finalizing the Sale
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full sm:w-1/4 mb-6">
              <h2 className="text-lg font-semibold mb-4">SELLERS</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Submit Your Car
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Photography Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Inspections
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Concierge Sales
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full sm:w-1/4 mb-6">
              <h2 className="text-lg font-semibold mb-4">HELPFUL LINKS</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Browse
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Financing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    This Car Pod!
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Shop C&B Merch
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t pt-6 text-gray-600">
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex space-x-4 mb-4 sm:mb-0">
                <a href="#" className="hover:text-gray-800">
                  <FaYoutube size={20} />
                </a>
                <a href="#" className="hover:text-gray-800">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="hover:text-gray-800">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="hover:text-gray-800">
                  <FaTiktok size={20} />
                </a>
                <a href="#" className="hover:text-gray-800">
                  <FaTwitter size={20} />
                </a>
              </div>

              <div>
                <a href="#" className="inline-block">
                  <Image
                    src="/images/image.png"
                    alt="Download on the App Store"
                    width={120}
                    height={40}
                  />
                </a>
              </div>
            </div>

            <div className="mt-6 text-sm">
              <p>
                LightStream disclosure: *Financing offers use LightStream’s
                longest term available, with the lowest APR for a $100,000 used
                auto purchased from an individual. Your loan terms, including
                APR, may differ based on loan purpose, amount, term length, and
                your credit profile. Excellent credit is required to qualify for
                lowest rates. Rate is quoted with AutoPay discount. AutoPay
                discount is only available prior to loan funding. Rates without
                AutoPay are 0.50% points higher. Subject to credit approval.
                Conditions and limitations apply. Advertised rates and terms are
                subject to change without notice.
              </p>
              <p className="mt-2">
                Payment example: Monthly payments for a $100,000 loan at 7.19%
                APR with a term of 3 years would result in 36 monthly payments
                of $3,097.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
