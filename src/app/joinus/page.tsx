import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button";

const page = () => {
  return (
    <div className="flex flex-col items-center py-10 px-4">
      {/* Logo */}
      <Image
        className="pb-5"
        src="/images/logo/logo.png"
        width={40}
        height={10}
        alt="Logo"
      />

      {/* Header Text */}
      <h2 className="uppercase text-center font-bold pb-5 text-lg sm:text-xl">
        BECOME A NIKE MEMBER
      </h2>

      {/* Description */}
      <p className="w-full max-w-xs text-center text-text-secondary-gray pb-5 text-sm sm:text-base">
        Create your Nike Member profile and get first access to the very best of
        Nike products, inspiration, and community.
      </p>

      {/* Form */}
      <form action="" className="flex flex-col w-full max-w-md bg-white shadow-md p-6 rounded-lg">
        {/* Inputs */}
        <input
          className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-2 placeholder:text-text-secondary-gray focus:outline-none focus:ring-2 focus:ring-gray-300"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-2 placeholder:text-text-secondary-gray focus:outline-none focus:ring-2 focus:ring-gray-300"
          type="password"
          placeholder="Password"
        />
        <input
          className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-2 placeholder:text-text-secondary-gray focus:outline-none focus:ring-2 focus:ring-gray-300"
          type="text"
          placeholder="First Name"
        />
        <input
          className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-2 placeholder:text-text-secondary-gray focus:outline-none focus:ring-2 focus:ring-gray-300"
          type="text"
          placeholder="Last Name"
        />
        <input
          className="w-full border-[#E5E5E5] rounded-md mb-2 px-4 py-3 border-2 placeholder:text-text-secondary-gray focus:outline-none focus:ring-2 focus:ring-gray-300"
          type="date"
          placeholder="Date of Birth"
        />
        <p className="pb-3 text-text-secondary-gray text-sm text-center">
          Get a Nike Member Reward every year on your Birthday.
        </p>

        {/* Country Selection */}
        <select
          className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <option value="">India</option>
          <option value="">United States</option>
          <option value="">United Kingdom</option>
          <option value="">Pakistan</option>
          <option value="">Canada</option>
        </select>

        {/* Gender Selection */}
        <div className="flex gap-4 mt-2">
          <div className="border-[#E5E5E5] rounded-md py-3 border-2 w-1/2 text-center text-text-secondary-gray cursor-pointer hover:bg-gray-200">
            Male
          </div>
          <div className="border-[#E5E5E5] rounded-md py-3 border-2 w-1/2 text-center text-text-secondary-gray cursor-pointer hover:bg-gray-200">
            Female
          </div>
        </div>

        {/* Email Sign-Up Checkbox */}
        <div className="flex items-start mt-6 text-sm">
          <input type="checkbox" id="remember" className="mt-1" />
          <label
            className="ml-2 text-text-secondary-gray"
            htmlFor="remember"
          >
            Sign up for emails to get updates from Nike on products, offers, and
            your Member benefits.
          </label>
        </div>

        {/* Terms and Privacy Policy */}
        <p className="text-text-secondary-gray text-center pb-6 text-sm">
          By creating an account, you agree to Nike's{" "}
          <Link className="underline hover:text-black" href="#">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link className="underline hover:text-black" href="#">
            Terms of Use
          </Link>
          .
        </p>

        {/* Join Us Button */}
        <Button text="JOIN US" classNames="rounded-md py-3" />

        {/* Already a Member */}
        <p className="text-center mt-4 text-sm">
          <span className="text-text-secondary-gray">Already a Member? </span>
          <Link className="underline hover:text-black" href="#">
            Sign In.
          </Link>
        </p>
      </form>
    </div>
  );
};

export default page;
