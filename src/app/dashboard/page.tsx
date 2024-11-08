"use client";
import React, { useState } from "react";
import Image from "next/image";
import Overview from "@/components/Overview";
import Projects from "@/components/Projects";
import Campaigns from "@/components/Campaigns";
import Documents from "@/components/Documents";
import Followers from "@/components/Followers";

const Dashboard = () => {
   const [activeTab, setActiveTab] = useState("Overview");

   const renderContent = () => {
      switch (activeTab) {
         case "Overview":
            return <Overview />;
         case "Projects":
            return <Projects />;
         case "Campaigns":
            return <Campaigns />;
         case "Documents":
            return <Documents />;
         case "Followers":
            return <Followers />;
         default:
            return <Overview />;
      }
   };

   return (
      <div className="max-w-full px-48 bg-[#F2F3F7] pt-4  h-full pb-7">
         <div className="flex justify-between items-center ">
            <div className="grid ">
               {activeTab == "Overview" ? (
                  <p className="font-semibold text-[20px] text-black">
                     Profile
                  </p>
               ) : (
                  <p className="font-semibold text-[20px] text-black">
                     {activeTab}
                  </p>
               )}

               {activeTab == "Overview" ? (
                  <p className="text-sm font-medium">
                     <span className="text-gray-400">Home </span>
                     <span className="text-gray-400"> / </span>

                     <span className="text-gray-800">Profile</span>
                  </p>
               ) : (
                  <p className="text-sm font-medium">
                     <span className="text-gray-400">Home </span>
                     <span className="text-gray-400"> / </span>

                     <span className="text-gray-800">Profile</span>
                     <span className="text-gray-400"> / </span>
                     <span className="text-gray-800">{activeTab}</span>
                  </p>
               )}
            </div>
            <button className="rounded-md text-white px-4 py-3 bg-[#1DC894] hover:opacity-50 transition duration-300 ease-in-out font-semibold text-sm">
               Start Project
            </button>
         </div>

         <div className="bg-white w-full h-fit pt-7 px-7 mt-4 rounded-lg divide-y-2 divide-gray-100">
            <div className="flex gap-4 w-full mb-8 ">
               <Image
                  src="/img/user.png"
                  alt="Profile Image"
                  width={160}
                  height={160}
                  className="rounded-md"
               />
               <div className="grid w-full">
                  <div className="flex name justify-between w-full">
                     <div className="grid">
                        <p className="text-lg font-semibold flex items-center space-x-2">
                           <span>Brad Dennis</span>
                           <Image
                              src="/img/blueBadge.png"
                              alt="Verified"
                              width={20}
                              height={20}
                           />
                        </p>
                        {/* -------- */}
                        <div className="flex items-center space-x-4 text-gray-400 text-sm">
                           <div className="flex items-center space-x-1">
                              <svg
                                 width="14"
                                 height="14"
                                 viewBox="0 0 14 14"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M9.91683 3.50016C9.91683 5.11099 8.61099 6.41683 7.00016 6.41683C5.38933 6.41683 4.0835 5.11099 4.0835 3.50016C4.0835 1.88933 5.38933 0.583496 7.00016 0.583496C8.61099 0.583496 9.91683 1.88933 9.91683 3.50016Z"
                                    fill="#5E6278"
                                 />
                                 <path
                                    opacity="0.25"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10.9772 8.23966C10.6176 7.82277 9.99998 7.84425 9.51705 8.10858C8.76973 8.51762 7.91202 8.75018 7 8.75018C6.08798 8.75018 5.23027 8.51762 4.48295 8.10858C4.00001 7.84424 3.38241 7.82276 3.02284 8.23966C2.22963 9.15933 1.75 10.3571 1.75 11.6668V12.2502C1.75 12.8945 2.27233 13.4168 2.91667 13.4168H11.0833C11.7277 13.4168 12.25 12.8945 12.25 12.2502V11.6668C12.25 10.3571 11.7704 9.15933 10.9772 8.23966Z"
                                    fill="#5E6278"
                                 />
                              </svg>

                              <span>Author</span>
                           </div>

                           <div className="flex items-center space-x-1">
                              <svg
                                 width="14"
                                 height="14"
                                 viewBox="0 0 14 14"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    opacity="0.25"
                                    d="M12.25 5.8335C12.25 9.03698 9.4352 11.7713 7.92773 13.006C7.38118 13.4537 6.61882 13.4537 6.07227 13.006C4.5648 11.7713 1.75 9.03698 1.75 5.8335C1.75 2.934 4.1005 0.583496 7 0.583496C9.8995 0.583496 12.25 2.934 12.25 5.8335Z"
                                    fill="#5E6278"
                                 />
                                 <path
                                    d="M8.75 5.25C8.75 6.2165 7.9665 7 7 7C6.0335 7 5.25 6.2165 5.25 5.25C5.25 4.2835 6.0335 3.5 7 3.5C7.9665 3.5 8.75 4.2835 8.75 5.25Z"
                                    fill="#5E6278"
                                 />
                              </svg>

                              <span>Westwood, NJ</span>
                           </div>

                           <div className="flex items-center space-x-1">
                              <Image
                                 src="/img/Duotone.svg"
                                 alt="mail"
                                 width={14}
                                 height={14}
                              />
                              <span>sales@kthemes.io</span>
                           </div>
                        </div>
                        {/* -------- */}
                     </div>
                     <div className="btn flex gap-3">
                        <button className="px-5 py-1 font-bold text-base text-[#7E8299] bg-[#F5F8FA] rounded-md h-fit">
                           Follow
                        </button>
                        <button className="px-5 py-1 font-bold text-base text-white bg-[#00A3FF] rounded-md h-fit">
                           Offer a Deal
                        </button>
                     </div>
                  </div>
                  <div className="flex w-full justify-between status mt-6">
                     <div className="grid grid-cols-3 gap-4">
                        <div className="border-dashed border-2 border-gray-100 rounded-md px-4  text-left h-fit py-1">
                           <p className="text-2xl font-black">$6,840</p>
                           <p className="text-sm font-medium text-[#B5B5C3]">
                              Total Earnings
                           </p>
                        </div>
                        <div className="border-dashed border-2 border-gray-100 rounded-md px-4 h-fit py-1 text-left">
                           <p className="text-2xl font-black">179</p>
                           <p className="text-xs font-medium text-[#B5B5C3]">
                              New Referrals
                           </p>
                        </div>
                        <div className="border-dashed border-2 border-gray-100 rounded-md px-4 h-fit py-1 text-left">
                           <p className="text-2xl font-black">39</p>
                           <p className="text-xs font-medium text-[#B5B5C3]">
                              New Deals
                           </p>
                        </div>
                     </div>

                     <div className="mt-4 space-y-1 w-[30%]">
                        <div className="flex justify-between text-sm text-gray-500">
                           <span>Profile Status</span>
                           <span>68%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                           <div className="h-full w-2/3 bg-blue-500 rounded-full"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="flex mt-8">
               <div className="mt-4 flex space-x-6 text-gray-500 text-base font-medium border-b ">
                  {[
                     "Overview",
                     "Projects",
                     "Campaigns",
                     "Documents",
                     "Followers",
                  ].map((tab) => (
                     <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`${
                           activeTab === tab
                              ? "text-[#00A3FF] border-b-2 border-[#00A3FF]"
                              : "hover:text-[#00A3FF] hover:border-[#00A3FF]"
                        } transition-colors duration-300 pb-2`}
                     >
                        {tab}
                     </button>
                  ))}
               </div>
            </div>
         </div>

         <div className="mt-8 w-full">{renderContent()}</div>
      </div>
   );
};

export default Dashboard;
