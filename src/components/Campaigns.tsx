import { campaignData } from "@/data/data";
import Image from "next/image";
import React from "react";
import { PiCirclesFourFill } from "react-icons/pi";
import { FiArrowUpRight, FiArrowDownLeft } from "react-icons/fi";

const Campaigns = () => {
   return (
      <div className="">
         <div className="flex justify-between items-center my-4">
            <p className="text-xl font-medium text-gray-700 mb-4">
               Campaigns{" "}
               <span className="text-base text-gray-400">30 Days</span>
            </p>

            <div className="flex items-center space-x-2">
               {/* Dropdown Button */}
               <div className="relative inline-block text-left">
                  <button
                     type="button"
                     className="inline-flex justify-center w-full px-4 py-2 text-sm font-bold text-gray-600 bg-white cursor-pointer rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                     id="options-menu"
                     aria-haspopup="true"
                     aria-expanded="true"
                  >
                     30 days
                     <svg
                        className="w-5 h-5 ml-2 -mr-1 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                     >
                        <path
                           fillRule="evenodd"
                           d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                           clipRule="evenodd"
                        />
                     </svg>
                  </button>
               </div>

               {/* New Project Button */}
               <button className="px-4 py-2 text-white bg-[#00A3FF] rounded-md cursor-pointer focus:outline-none font-bold text-sm">
                  Plan Campaign{" "}
               </button>
            </div>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaignData.map((item, index) => (
               <div key={index} className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-2">
                     <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 rounded-md bg-gray-50 flex items-center justify-center text-xl font-semibold text-gray-500">
                           <Image
                              src={item.icon}
                              alt="icon"
                              width={20}
                              height={20}
                           />
                        </div>
                        <h3 className="text-base font-medium text-gray-600">
                           {item.title}
                        </h3>
                     </div>
                     <button className="text-gray-400 hover:text-gray-500">
                        <PiCirclesFourFill className="w-4 h-4 text-blue-300" />
                     </button>
                  </div>
                  <div className="text-3xl mt-5 font-bold text-gray-800">
                     {item.amount}
                  </div>
                  <div
                     className={`inline-flex items-center text-sm mt-4 ${
                        item.positive ? "text-green-500" : "text-red-500"
                     } font-medium`}
                  >
                     <span>
                        {item.positive ? (
                           <FiArrowUpRight className="text-green-500 mr-1 text-sm" />
                        ) : (
                           <FiArrowDownLeft className="text-red-500 mr-1 text-sm" />
                        )}
                     </span>{" "}
                     {item.change}{" "}
                     <span className="text-[#B5B5C3] ml-1">
                        {item.description}
                     </span>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Campaigns;
