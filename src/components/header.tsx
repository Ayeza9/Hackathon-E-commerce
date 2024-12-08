import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      {/* Top Navigation Bar */}
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-10 bg-gray-50 py-3">
        {/* Top Logo */}
        <img
          src="/images/logo/favicon.png"
          alt="Top Logo"
          width={24}
          height={24}
          className="w-6 h-6"
        />

        {/* Top Links */}
        <ul className="hidden sm:flex space-x-4 lg:space-x-6">
          {[
            { href: "/store", label: "Find a Store" },
            { href: "/contact-us", label: "Help" },
            { href: "/join-us", label: "Join Us" },
            { href: "/login", label: "Sign In" },
          ].map((link, index) => (
            <li
              key={index}
              className={`flex items-center ${
                index < 3 ? "border-r border-black pr-4 lg:pr-6" : "pr-0"
              }`}
            >
              <Link href={link.href}>
                <span className="text-sm leading-[14px]">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Navigation Bar */}
      <div className="flex flex-wrap justify-between items-center px-4 sm:px-6 lg:px-10 py-4">
        {/* Main Logo */}
        <Link href="/">
          <img
            src="/images/logo/logo.png"
            alt="Main Logo"
            width={100}
            height={30}
            className="w-24 lg:w-28"
          />
        </Link>

        {/* Hamburger Menu (Mobile View) */}
        <div className="sm:hidden flex items-center space-x-4">
          <img
            src="/images/icons/search.png"
            alt="Search Icon"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <img
            src="/images/icons/menu.png"
            alt="Menu Icon"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </div>

        {/* Menu Links (Desktop and Tablet View) */}
        <ul className="hidden sm:flex space-x-4 lg:space-x-6">
          {["New & Featured", "Men", "Women", "Kids", "Sale", "SNKRS"].map(
            (item, index) => (
              <li key={index} className="text-sm lg:text-base">
                <Link href={`/${item.toLowerCase().replace(/ /g, "-")}`}>
                  <span>{item}</span>
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Search and Icons */}
        <div className="hidden sm:flex items-center space-x-4 lg:space-x-6">
          {/* Search Bar */}
          <div className="hidden lg:flex items-center bg-light-gray px-4 py-2 rounded-full w-[200px] lg:w-[300px]">
            <img
              src="/images/icons/search.png"
              alt="Search Icon"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <input
              type="text"
              placeholder="Search"
              className="pl-4 focus:outline-none bg-light-gray w-full text-sm"
            />
          </div>

          {/* Wishlist and Cart Icons */}
          <img
            src="/images/icons/whishlist.png"
            alt="Wishlist Icon"
            width={24}
            height={24}
            className="w-5 lg:w-6 h-5 lg:h-6"
          />
          <img
            src="/images/icons/cart.png"
            alt="Cart Icon"
            width={24}
            height={24}
            className="w-5 lg:w-6 h-5 lg:h-6"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
