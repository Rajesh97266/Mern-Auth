import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col items-center mt-20 px-4 text-center text-gray-800">
      <img
        src={assets.header_img}
        alt="header_img"
        className="w-36 h-36 rounded-full mb-6 animate-bounce"
      />
      <h1 className="flex items-center gap-2 text-xl sm:text-3xl font-medium">
        Hey Developer
        <img
          className="w-8 aspect-square animate-wave"
          src={assets.hand_wave}
          alt="hand_wave"
        />
      </h1>
    </div>
  );
};

export default Header;
