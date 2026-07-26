import "./globals.css";

import Navbar from "@/components/Navbar";

import { Inter } from "next/font/google";


const inter = Inter({
  subsets:["latin"],
});


export const metadata = {

  title:"Career OS",

  description:
  "AI Career Navigation System",

};



export default function RootLayout({

children,

}:{

children:React.ReactNode;

}) {


return (

<html lang="en">


<body className={inter.className}>


{/* GLOBAL BACKGROUND */}

<div
className="
fixed
inset-0
bg-[#f8fafc]
-z-10
"
/>



{/* NAVBAR */}

<Navbar />



{/* CONTENT */}

<main
className="
max-w-6xl
mx-auto
px-6
py-8
"
>

{children}

</main>



</body>


</html>

);

}