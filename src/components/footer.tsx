import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-700 pb-6">
          {/* Column 1 */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4">Find a Store</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Become a Member</li>
              <li>Sign Up for Email</li>
              <li>Send Us Feedback</li>
              <li>Student Discounts</li>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4">Get Help</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Order Status</li>
              <li>Delivery</li>
              <li>Returns</li>
              <li>Payment Options</li>
              <li>Contact Us</li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4">About Nike</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>News</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Sustainability</li>
            </ul>
          </div>
          {/* Column 4 */}
          <div className="flex justify-center md:justify-start space-x-4 text-gray-400">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">YouTube</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-500">
          <div className="flex flex-wrap justify-center md:justify-start items-center space-x-6 text-center md:text-left">
            <span>&copy; 2023 Nike, Inc. All Rights Reserved</span>
            <a href="#" className="hover:text-white">Guides</a>
            <a href="#" className="hover:text-white">Terms of Sale</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
          <div className="mt-4 md:mt-0">
            <span>India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
