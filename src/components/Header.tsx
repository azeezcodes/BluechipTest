import React from "react";
import Image from "next/image";
import { IoBasket } from "react-icons/io5";
import { CiGrid41 } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";
import { RiBarChartGroupedFill } from "react-icons/ri";

const Header = () => {
   return (
      <div>
         <div className="bg-[#3699FF] text-white pt-4 px-44 flex items-center justify-between">
            <div className="flex items-center space-x-6">
               <Image src="/img/logo.png" alt="Logo" width={64} height={54} />

               <nav className="lg:flex hidden items-center space-x-8 font-semibold text-base">
                  <a
                     href="#"
                     className="font-semibold text-[#464E5F] hover:text-gray-200 bg-white pb-4 px-4 grid place-content-between rounded-t-lg "
                  >
                     <p className="mt-4 text-[#464E5F]"> Account</p>
                  </a>
                  <a href="#" className="hover:text-gray-200 text-[#C8E3FF]">
                     Reports
                  </a>
                  <a href="#" className="hover:text-gray-200 text-[#C8E3FF]">
                     Forms
                  </a>
                  <a href="#" className="hover:text-gray-200 text-[#C8E3FF]">
                     Roles
                  </a>
                  <a href="#" className="hover:text-gray-200 text-[#C8E3FF]">
                     Help Center
                  </a>
               </nav>
            </div>

            <div className="items-center space-x-6 hidden lg:flex">
               <IoBasket className="text-2xl text-[#fff]" />
               <CiGrid41 className="text-2xl text-[#fff]" />
               <RiBarChartGroupedFill className="text-2xl text-[#fff]" />
               <TiMessages className="text-2xl text-[#fff]" />

               <div className="flex items-center space-x-2">
                  <div className="grid text-right font-semibold text-xs">
                     <p className="text-[#9CCDFF]">Seun</p>
                     <span className="text-white">UX Designer</span>
                  </div>
                  <div className="bg-[#47A0F7]  rounded-md w-10 h-10 flex items-center justify-center">
                     <p className="text-white ">S</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-white text-[#80808F] font-semibold py-4 px-44 shadow-sm flex items-center space-x-10">
            <a
               href="#"
               className="text-[#009EF6]  bg-[#F5F8FA] px-6 py-3 rounded-sm "
            >
               Settings
            </a>
            <a
               href="#"
               className=" hover:bg-[#F5F8FA] hover:text-[#009EF6] hover:px-6 hover:py-3 rounded-md"
            >
               Billing
            </a>
            <a href="#" className=" hover:bg-[#F5F8FA] hover:text-[#009EF6] hover:px-6 hover:py-3 rounded-md transition duration-700 ease-in-out ">
               Orders
            </a>
            <a href="#" className=" hover:bg-[#F5F8FA] hover:text-[#009EF6] hover:px-6 hover:py-3 rounded-md transition duration-700 ease-in-out">
               Security
            </a>
            <a href="#" className=" hover:bg-[#F5F8FA] hover:text-[#009EF6] hover:px-6 hover:py-3 rounded-md transition duration-700 ease-in-out">
               Referrals
            </a>
            <a href="#" className=" hover:bg-[#F5F8FA] hover:text-[#009EF6] hover:px-6 hover:py-3 rounded-md transition duration-700 ease-in-out">
               API Keys
            </a>
            <a href="#" className=" hover:bg-[#F5F8FA] hover:text-[#009EF6] hover:px-6 hover:py-3 rounded-md transition duration-700 ease-in-out">
               Statement
            </a>
         </div>
      </div>
   );
};

export default Header;
