"use client";

import { usePathname } from "next/navigation";
import Header from "./components/Header";
import SocialLinks from "./components/SocialLinks";
import { ArrowUp } from "lucide-react";


export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
    const isRoot = pathname === "/";
    function handleClick() {
        document.getElementById("header")?.scrollIntoView({ behavior: "smooth" });
    }

  return (
    <>
      {!isRoot && (
        <>
          <Header />
                  <SocialLinks />
                  
        </>
      )}
          {children}
          
          {!isRoot && (
              <div className="flex justify-end items-end bg-black/90 pr-5 pb-5 ">
              <button onClick={handleClick} className="bg-black/40 border hover:cursor-pointer rounded-lg text-white/70  border-black/70 px-4 flex gap-2 py-2">Back to Top <ArrowUp/></button>
          </div>)}
    </>
  );
}

// "use client";

// import { usePathname } from "next/navigation";
// import Header from "./components/Header";
// import SocialLinks from "./components/SocialLinks";
// import { ArrowUp } from "lucide-react";
// import BackToTop from "./components/BackToTop";


// export default function ClientLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();
//     const isRoot = pathname === "/";
//     function handleClick() {
//         document.getElementById("header")?.scrollIntoView({ behavior: "smooth" });
//     }

//   return (
//     <>
      
//         <>
//           <Header />
//                   <SocialLinks />
                  
//         </>
      
//           {children}
          
          
//               <BackToTop></BackToTop>
          
//     </>
//   );
// }
