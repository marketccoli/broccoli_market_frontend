import React from "react";
import { Broccoli } from "../assets/icons/Broccoli";
export const Footer = () => {
  return (
    <div>
      <div className="text-gray-600 body-font border-t border-gray-200 min-w-[700px]">
        <div className="px-5 py-8 mx-3 flex items-center justify-center">
          <div className="flex title-font font-medium items-center justify-center text-green-900">
            <Broccoli width="20" height="20" />
            <span className="ml-3 text-md font-bold">Broccoli Market</span>
          </div>
          <p className="text-sm text-gray-500 ml-4 pl-4 border-l border-gray-400 py-2 mt-0">
            © 2023 Broccoli Market —
            <a href="https://github.com/marketccoli" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">
              @Marketccoli-Github
            </a>
          </p>
          <span className="inline-flex mt-0 justify-center sm:justify-start"></span>
        </div>
      </div>
    </div>
  );
};
