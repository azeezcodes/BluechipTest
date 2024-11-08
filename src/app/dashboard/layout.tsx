import Header from "@/components/Header";
import type { Metadata } from "next";


export const metadata: Metadata = {
   title: "Dashboard | main",
   description: "",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
     
       <div>
           <Header />
          {children}
         </div>
     
   );
}
