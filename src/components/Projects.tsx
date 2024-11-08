import { projectCompany } from "@/data/data";
import React from "react";
import Image from "next/image";

const Projects = () => {
   return (
      <div>
         <div className="flex justify-between items-center my-4">
            <p className="text-xl font-medium text-gray-700 mb-4">
               Craft Projects Active{" "}
               <span className="text-base text-gray-400">Active</span>
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

               <button className="px-4 py-2 text-white bg-[#00A3FF] rounded-md cursor-pointer focus:outline-none font-bold text-sm">
                  New Project{" "}
               </button>
            </div>
         </div>
         <div className="grid grid-cols-3 gap-6">
            {projectCompany.map((item) => (
               <div
                  key={item.id}
                  className="bg-white hover:border-gray-300 hover:shadow  rounded-lg pt-3 px-4  space-y-4 border border-gray-100"
               >
                  <div className="flex justify-between items-center">
                     <div className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-100">
                        <Image
                           src={item.icon}
                           alt="icon"
                           width={24}
                           height={24}
                        />
                     </div>
                     <span
                        className={`px-3 py-0.5 rounded-md text-xs font-bold ${
                           item.status === "In Progress"
                              ? "bg-blue-100 text-blue-500"
                              : item.status === "To do"
                              ? "bg-gray-100 text-gray-500"
                              : item.status === "Overdue"
                              ? "bg-red-100 text-[#F1416C]"
                              : "bg-green-100 text-green-500"
                        }`}
                     >
                        {item.status}
                     </span>
                  </div>

                  <div>
                     <h3 className="text-lg font-semibold text-gray-800">
                        {item.title}
                     </h3>
                     <p className="text-sm text-gray-500">{item.description}</p>
                  </div>

                  <div className="flex space-x-8 ">
                     <div className="border-dotted border-2 border-gray-200 rounded-md flex flex-col pl-2 pr-4 py-2">
                        <p className="text-sm font-bold text-[#5E6278]">
                           {item.dueDate}
                        </p>
                        <p className="text-sm text-gray-500">Due Date</p>
                     </div>
                     <div className="border-dotted border-2 border-gray-200 rounded-md flex flex-col pl-2 pr-4 py-2">
                        <p className="text-sm font-bold text-[#5E6278]">
                           {item.budget}
                        </p>
                        <p className="text-sm text-gray-500">Budget</p>
                     </div>
                  </div>

                  <div className="flex -space-x-2 mt-4">
                     <Image
                        src={item.members}
                        alt="member"
                        width={82}
                        height={34}
                     />
                  </div>

                  <div
                     className={`h-0.5 rounded-b-lg ${
                        item.status === "In Progress"
                           ? "bg-blue-300"
                           : item.status === "To do"
                           ? "bg-gray-400"
                           : item.status === "Overdue"
                           ? "bg-red-300"
                           : "bg-green-300"
                     }`}
                  ></div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Projects;
