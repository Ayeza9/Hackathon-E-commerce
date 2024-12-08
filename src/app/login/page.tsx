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
      <h2 className="uppercase w-full max-w-xs text-center font-bold pb-5 text-lg sm:text-xl">
        YOUR ACCOUNT FOR EVERYTHING NIKE
      </h2>

      {/* Form */}
      <form
        action=""
        className="flex flex-col w-full max-w-md bg-white shadow-md p-6 rounded-lg"
      >
        {/* Email Input */}
        <input
          className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-2 placeholder:text-text-secondary-gray focus:outline-none focus:ring-2 focus:ring-gray-300"
          type="text"
          placeholder="Email Address"
        />

        {/* Password Input */}
        <input
          className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-2 placeholder:text-text-secondary-gray focus:outline-none focus:ring-2 focus:ring-gray-300"
          type="password"
          placeholder="Password"
        />

        {/* Remember Me and Forgot Password */}
        <div className="flex justify-between items-center py-5 text-sm">
          <div className="flex items-center">
            <input type="checkbox" id="remember" />
            <label
              className="ml-2 cursor-pointer text-text-secondary-gray"
              htmlFor="remember"
            >
              Keep me signed in
            </label>
          </div>
          <a href="#" className="text-gray-500 hover:text-black">
            Forgotten your password?
          </a>
        </div>

        {/* Privacy Policy and Terms */}
        <p className="text-text-secondary-gray text-center text-sm pb-6">
          By logging in, you agree to Nike's{" "}
          <Link className="underline hover:text-black" href="#">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link className="underline hover:text-black" href="#">
            Terms of Use
          </Link>
          .
        </p>

        {/* Sign In Button */}
        <Button text="SIGN IN" classNames="rounded-md py-3" />

        {/* Join Us */}
        <p className="text-center mt-4">
          <span className="text-text-secondary-gray text-sm">Not a Member? </span>
          <Link href="#" className="underline hover:text-black text-sm">
            Join Us.
          </Link>
        </p>
      </form>
    </div>
  );
};

export default page;
