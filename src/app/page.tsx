import Image from "next/image";
import Link from "next/link";

export default function Home() {
   return (
      <div className="min-h-screen flex">
         {/* Left section */}
         <div className="w-2/5 bg-blue-500 text-white flex flex-col items-center p-8 space-y-6 relative">
            <div className="text-center space-y-4 mt-10">
               <Image
                  src="/img/logoColor.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="mx-auto"
               />
               <p className="text-3xl font-bold text-wrap line-clamp-1">
                  Welcome to
               </p>
               <p className="text-3xl font-bold text-wrap line-clamp-1">
                  Bluechip Technologies LTD
               </p>
               <p className="text-lg">
                  Plan your blog post by choosing a topic, creating an outline,
                  and checking facts
               </p>
            </div>

            {/* Placeholder for illustration */}
            <Image
               src="/img/illustration2.png"
               alt="Illustration"
               width={400}
               height={400}
               className="mx-auto absolute bottom-0"
            />
         </div>

         <div className="w-3/5 flex items-center justify-center p-10 relative">
            <div className="w-full max-w-md space-y-8">
               <h2 className="text-2xl font-bold text-gray-800 text-center">
                  Sign In to Craft
               </h2>
               <p className="text-center font-medium text-sm text-gray-600">
                  New Here?{" "}
                  <a href="#" className="text-blue-500 font-medium">
                     Create an Account
                  </a>
               </p>

               {/* Form */}
               <form className="space-y-6">
                  <div>
                     <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                     >
                        Email
                     </label>
                     <input
                        id="email"
                        type="email"
                        required
                        className="mt-1 w-full px-3 py-2 bg-[#F5F8FA]  rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-500"
                     />
                  </div>

                  <div>
                     <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                     >
                        Password
                     </label>
                     <input
                        id="password"
                        type="password"
                        required
                        className="mt-1 w-full px-3 py-2 bg-[#F5F8FA]  rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-500"
                     />
                     <div className="text-right mt-1">
                        <a
                           href="#"
                           className="text-sm text-blue-500 font-medium"
                        >
                           Forgot Password?
                        </a>
                     </div>
                  </div>

                  <div className="flex items-center justify-between space-x-2 px-6">
                     <Link href="/dashboard">
                        <button
                           type="submit"
                           className="w-fit px-6 bg-blue-500 text-white py-2 font-medium rounded-md shadow-md hover:bg-blue-600"
                        >
                           Sign In
                        </button>
                     </Link>
                     <button
                        type="button"
                        className="flex-1 flex gap-3 items-center bg-[#F1FAFF] justify-center text-gray-700 py-2 rounded-md shadow-sm hover:bg-gray-100"
                     >
                        <Image
                           src="/img/google.png"
                           alt="Google"
                           width={16}
                           height={16}
                        />
                        {/* Icon placeholder */}
                        Sign in with Google
                     </button>
                  </div>
               </form>
            </div>
            <div className="text-center text-[#B5B5C3] text-base font-semibold mt-6 space-x-8 absolute bottom-4">
               <a href="#" className="hover:text-blue-500">
                  Terms
               </a>
               <a href="#" className="hover:text-blue-500">
                  Plans
               </a>
               <a href="#" className="hover:text-blue-500">
                  Contact Us
               </a>
            </div>
         </div>
      </div>
   );
}
