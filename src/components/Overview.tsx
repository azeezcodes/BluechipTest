import React, { useState } from "react";
import Image from "next/image";
import { PiCirclesFourFill } from "react-icons/pi";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdHeart } from "react-icons/io";
import { projectCon } from "@/data/data";
import { BarChartGraph } from "./BarChartGraph";

const Overview = () => {
     const [selected, setSelected] = useState("Agents");

   return (
      <div className="flex gap-8">
         <div className="overflow-y-hidden w-1/2">
            <div className="p-4 bg-white rounded-lg shadow-md max-w-full space-y-2">
               <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-2">
                     <Image
                        src="/img/face1.png"
                        alt="Avatar"
                        width={50}
                        height={50}
                     />
                     <div>
                        <h3 className="text-gray-800 font-semibold">
                           Brad Dennis
                        </h3>
                        <p className="text-sm text-[#B5B5C3]">
                           Yesterday at 5:06 PM
                        </p>
                     </div>
                  </div>
                  <div className="ml-auto text-gray-400 ">
                     {/* Icon for options */}
                     <div className="flex space-x-1 cursor-pointer">
                        <PiCirclesFourFill className="text-blue-200 text-lg" />
                     </div>
                  </div>
               </div>

               <p className="text-gray-700">
                  Outlines keep you honest. They stop you from indulging in
                  poorly thought-out metaphors about driving and keep you
                  focused on the overall structure of your post.
               </p>

               <div className="flex items-center space-x-6 text-gray-500 text-sm mt-2">
                  <div className="flex items-center space-x-1">
                     <FiMessageSquare className="text-sm text-gray-400" />
                     <span>24</span>
                  </div>
                  <div className="flex items-center space-x-1">
                     <IoMdHeart className="text-base text-gray-400" />
                     <span>75</span>
                  </div>
               </div>

               <div className="border-t mt-2 pt-2 text-gray-400 text-sm">
                  Reply...
               </div>
            </div>
            {/* second */}
            <div className="p-4 bg-white rounded-lg shadow-md max-w-full space-y-2 mt-4">
               <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-2">
                     <Image
                        src="/img/face1.png"
                        alt="Avatar"
                        width={50}
                        height={50}
                     />
                     <div>
                        <h3 className="text-gray-800 font-semibold">
                           Brad Dennis
                        </h3>
                        <p className="text-sm text-[#B5B5C3]">
                           Yesterday at 5:06 PM
                        </p>
                     </div>
                  </div>
                  <div className="ml-auto text-gray-400 ">
                     {/* Icon for options */}
                     <div className="flex space-x-1 cursor-pointer">
                        <PiCirclesFourFill className="text-blue-200 text-lg" />
                     </div>
                  </div>
               </div>

               <Image
                  src="/img/photo.png"
                  alt="photo"
                  width={480}
                  height={260}
                  className="my-3"
               />

               <p className="text-gray-700">
                  Outlines keep you honest. They stop you from indulging in
                  poorly thought-out metaphors about driving and keep you
                  focused on the overall structure of your post.
               </p>

               <div className="flex items-center space-x-6 text-gray-500 text-sm mt-2">
                  <div className="flex items-center space-x-1">
                     <FiMessageSquare className="text-sm text-gray-400" />
                     <span>24</span>
                  </div>
                  <div className="flex items-center space-x-1">
                     <IoMdHeart className="text-base text-red-400" />
                     <span>75</span>
                  </div>
               </div>

               <div className="border-t mt-2 pt-2 text-gray-400 text-sm">
                  Reply...
               </div>
            </div>
            {/* third */}
            <div className="p-4 bg-white rounded-lg shadow-md max-w-full space-y-2 mt-4">
               <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-2">
                     <Image
                        src="/img/face1.png"
                        alt="Avatar"
                        width={50}
                        height={50}
                     />
                     <div>
                        <h3 className="text-gray-800 font-semibold">
                           Brad Dennis
                        </h3>
                        <p className="text-sm text-[#B5B5C3]">
                           Yesterday at 5:06 PM
                        </p>
                     </div>
                  </div>
                  <div className="ml-auto text-gray-400 ">
                     {/* Icon for options */}
                     <div className="flex space-x-1 cursor-pointer">
                        <PiCirclesFourFill className="text-blue-200 text-lg" />
                     </div>
                  </div>
               </div>

               <p className="text-gray-700">
                  Outlines keep you honest. They stop you from indulging in
                  poorly thought-out metaphors about driving and keep you
                  focused on the overall structure of your post.
               </p>

               <div className="flex items-center space-x-6 text-gray-500 text-sm mt-2">
                  <div className="flex items-center space-x-1">
                     <FiMessageSquare className="text-sm text-gray-400" />
                     <span>24</span>
                  </div>
                  <div className="flex items-center space-x-1">
                     <IoMdHeart className="text-base text-gray-400" />
                     <span>75</span>
                  </div>
               </div>

               <div className="border-t mt-2 pt-2 text-gray-400 text-sm">
                  Reply...
               </div>
            </div>
            {/* last */}
            <div className="grid place-content-center bg-[#00A3FF] w-full py-3 my-4 rounded-md cursor-pointer hover:bg-[#bce3f9]">
               <p className="text-sm font-medium text-white">More Feeds</p>
            </div>
         </div>
         {/* ----------------------- */}
         <div className="overflow-y-hidden w-1/2">
            <div className="bg-white rounded-lg shadow-md p-4 w-full space-y-4">
               <div className="flex items-center justify-between p-4 mb-4">
                  <div>
                     <h1 className="text-xl font-bold text-gray-800">Deals</h1>
                     <p className="text-sm font-medium text-gray-400">
                        27 New Deals
                     </p>
                  </div>

                  <div className="flex border border-gray-200 rounded-md p-1">
                     <button
                        onClick={() => setSelected("Agents")}
                        className={`px-4 py-1 rounded-md text-sm ${
                           selected === "Agents"
                              ? "bg-gray-100 text-gray-700 font-medium"
                              : "text-gray-400"
                        }`}
                     >
                        Agents
                     </button>
                     <button
                        onClick={() => setSelected("Clients")}
                        className={`px-4 py-1 rounded-md text-sm ${
                           selected === "Clients"
                              ? "bg-gray-100 text-gray-700 font-medium"
                              : "text-gray-400"
                        }`}
                     >
                        Clients
                     </button>
                  </div>
               </div>
               <BarChartGraph />
            </div>
            {/* first */}
            <div className="bg-white rounded-lg shadow-md p-4 w-full space-y-4 mt-6">
               <div className="flex justify-between items-center">
                  <div className="grid">
                     <h2 className="text-xl font-bold text-gray-800">
                        Projects Contributions
                     </h2>
                     <p className="text-sm font-medium text-[#B5B5C3]">
                        84 New Tasks & 29 Guides
                     </p>
                  </div>

                  <div className="text-gray-400 cursor-pointer">
                     <PiCirclesFourFill className="text-blue-200 text-lg" />
                  </div>
               </div>

               <div className="space-y-2">
                  {projectCon.map((project) => (
                     <div
                        key={project.id}
                        className={`flex items-center p-2 rounded-md ${
                           project.active ? "bg-blue-50" : "hover:bg-gray-100"
                        }`}
                     >
                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-xl">
                           <Image
                              src={project.icon}
                              alt="icon"
                              width={36}
                              height={36}
                           />
                        </div>
                        <div className="ml-3 flex-grow">
                           <h3 className="font-bold text-sm text-gray-800">
                              {project.name}
                           </h3>
                           <p className="text-sm font-medium text-[#B5B5C3]">
                              {project.file}
                           </p>
                        </div>
                        <div className="flex-shrink-0">
                           <span
                              className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                                 project.count > 0
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-500"
                              }`}
                           >
                              {project.count}
                           </span>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="mt-4 p-3 bg-blue-50 border border-dashed border-blue-300 rounded-lg">
                  <p className="text-blue-500 text-sm font-semibold">
                     <a href="#" className="hover:underline">
                        Intive New .NET Collaborators
                     </a>
                  </p>
                  <p className="text-sm text-gray-600">
                     to creating great outstanding business to business .jsp
                     modular class scripts
                  </p>
               </div>
            </div>
            {/* second */}

            <div className="flex flex-col justify-center w-full bg-white rounded-lg shadow-md mt-6 pt-14">
               <p className="text-center line-clamp-1 font-bold text-2xl text-gray-800">
                  Upgrade to Pro
               </p>
               <p className="text-center line-clamp-1 font-bold text-2xl text-gray-800">
                  Create Limitless Deals
               </p>
               <p className="text-center line-clamp-1 font-bold text-base text-[#7E8299] mt-4">
                  Craft a headline that is both informative and will capture
               </p>
               <p className="text-center line-clamp-1 font-bold text-base text-[#7E8299]">
                  creating an outline, and checking facts
               </p>

               <button className="px-5 py-3 font-bold text-base text-white bg-[#00A3FF] rounded-md mx-auto w-fit h-fit mt-8 cursor-pointer hover:bg-[#a2d9f9]">
                  Upgrade Now{" "}
               </button>

               <Image
                  src="/img/illustration.png"
                  alt="icon"
                  width={406}
                  height={267}
                  className="mx-auto mt-10"
               />
            </div>
         </div>
      </div>
   );
};

export default Overview;
