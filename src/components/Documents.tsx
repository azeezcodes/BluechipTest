import React from "react";
import Image from "next/image";
import { datedDocument, fileDocuments } from "@/data/data";

const Documents = () => {
   return (
      <div className="">
         <div className="flex justify-between items-center my-4">
            <p className="text-xl font-medium text-gray-700 mb-4">Documents </p>

            <div className="flex items-center space-x-2">
               <div className="relative inline-block text-left">
                  <button
                     type="button"
                     className="flex items-center justify-center w-full pl-4 pr-12 py-2 gap-2 text-sm font-bold text-gray-600 bg-white cursor-pointer rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                     id="options-menu"
                     aria-haspopup="true"
                     aria-expanded="true"
                  >
                     <svg
                        width="11"
                        height="12"
                        viewBox="0 0 11 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           opacity="0.3"
                           d="M6.86177 8.80506C6.60142 8.54471 6.60142 8.1226 6.86177 7.86225C7.12212 7.6019 7.54423 7.6019 7.80458 7.86225L10.4712 10.5289C10.7316 10.7893 10.7316 11.2114 10.4712 11.4717C10.2109 11.7321 9.78878 11.7321 9.52843 11.4717L6.86177 8.80506Z"
                           fill="#7E8299"
                        />
                        <path
                           fill-rule="evenodd"
                           clip-rule="evenodd"
                           d="M0 5.00016C0 7.57749 2.08934 9.66683 4.66667 9.66683C7.244 9.66683 9.33333 7.57749 9.33333 5.00016C9.33333 2.42283 7.244 0.333496 4.66667 0.333496C2.08934 0.333496 0 2.42283 0 5.00016ZM7.99998 5.00017C7.99998 6.84111 6.50759 8.3335 4.66664 8.3335C2.82569 8.3335 1.33331 6.84111 1.33331 5.00017C1.33331 3.15922 2.82569 1.66683 4.66664 1.66683C6.50759 1.66683 7.99998 3.15922 7.99998 5.00017Z"
                           fill="#7E8299"
                        />
                     </svg>
                     Search{" "}
                  </button>
               </div>

               <button className="px-4 py-2 text-white bg-[#00A3FF] rounded-md cursor-pointer focus:outline-none font-bold text-sm">
                  File Manager{" "}
               </button>
            </div>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-fit gap-x-6 ">
            {fileDocuments.map((doc, index) => (
               <div
                  key={index}
                  className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center w-48 h-48"
               >
                  <Image src={doc.icon} width={80} height={62} alt="alt" />
                  <h3 className="mt-3 font-bold text-base text-gray-700 text-center truncate w-full">
                     {doc.name}
                  </h3>
                  <p className="text-[#B5B5C3] font-medium text-sm">
                     {doc.count}
                  </p>
               </div>
            ))}
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-fit gap-6 mt-6">
            {datedDocument.map((doc, index) => (
               <div
                  key={index}
                  className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center w-48 h-48"
               >
                  <Image src={doc.icon} width={62} height={62} alt="alt" />
                  <h3 className="mt-3 font-bold text-base text-gray-700 text-center truncate w-full">
                     {doc.name}
                  </h3>
                  <p className="text-[#B5B5C3] font-medium text-sm">
                     {doc.date}
                  </p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Documents;
