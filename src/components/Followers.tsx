import { followersData } from "@/data/data";
import React from "react";
import Image from "next/image";

const Followers = () => {
   return (
      <div className="w-full">
         <div className="flex justify-between items-center my-4">
            <p className="text-xl font-medium text-gray-700 mb-4">
               Followers({followersData.length})
            </p>

            <div className="flex items-center space-x-2">
               <div className="relative inline-block text-left">
                  <button
                     type="button"
                     className="inline-flex justify-center w-full px-4 py-2 text-sm font-bold text-gray-600 bg-white cursor-pointer rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                     id="options-menu"
                     aria-haspopup="true"
                     aria-expanded="true"
                  >
                     Active
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
            </div>
         </div>
         <div className="grid grid-cols-3 gap-6">
            {followersData.map((item) => (
               <div
                  key={item.id}
                  className="flex flex-col justify-center items-center py-8 px-10 bg-white rounded-md"
               >
                  {item.isProfile ? (
                     <div>
                        <Image
                           src={item.userProfile}
                           alt="icon"
                           width={64}
                           height={64}
                        />
                     </div>
                  ) : (
                     <div
                        style={{
                           color: item.textColor,
                           backgroundColor: item.bgText,
                        }}
                        className="rounded-full aspect-auto shrink-0 flex items-center justify-center w-16 h-16 border font-medium text-3xl"
                     >
                        {item.userProfile}
                     </div>
                  )}

                  <p className="mt-6 mb-4 font-bold text-lg text-gray-900">
                     {item.name}
                  </p>
                  <p>{item.detail}</p>

                  <div className="flex space-x-8 mt-6 ">
                     <div className="border-dotted border-2 border-gray-200 rounded-md flex flex-col pl-2 pr-4 py-2">
                        <p className="text-sm font-bold text-[#5E6278]">
                           {item.avgDealCost}
                        </p>
                        <p className="text-sm text-gray-500">Avg.Deal</p>
                     </div>
                     <div className="border-dotted border-2 border-gray-200 rounded-md flex flex-col pl-2 pr-4 py-2">
                        <p className="text-sm font-bold text-[#5E6278]">
                           {item.dealCost}
                        </p>
                        <p className="text-sm text-gray-500">Deals</p>
                     </div>
                  </div>

                  {item.following ? (
                     <div className="flex gap-2 items-center py-2 px-4 bg-[#00A3FF] mt-4 rounded">
                        <Image
                           src="/img/Checked.svg"
                           alt="a"
                           width={12}
                           height={12}
                        />
                        <p className="text-white font-bold text-xs">
                           Following
                        </p>
                     </div>
                  ) : (
                     <div className="flex gap-2 items-center py-2 px-4 bg-[#F5F8FA] mt-4 rounded">
                        <Image
                           src="/img/User.svg"
                           alt="a"
                           width={12}
                           height={12}
                        />
                        <p className="text-[#A1A5B7] font-bold text-xs">
                           Follow
                        </p>
                     </div>
                  )}
               </div>
            ))}
         </div>
         <div className="flex w-full justify-center">
            <button className="mt-6 w-fit mx-auto px-5 py-3 bg-[#00A3FF] text-white rounded-md font-medium cursor-pointer hover:bg-blue-400">
               {" "}
               Show More
            </button>
         </div>
      </div>
   );
};

export default Followers;
