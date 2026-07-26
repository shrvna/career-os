"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar(){

const pathname = usePathname();

const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Assistant", path: "/assistant" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "Twins", path: "/twins" },
    { name: "Profile", path: "/profile" },
    { name: "Feedback", path: "/feedback" },
];


return(

<nav className="
sticky top-0
z-50
border-b
bg-white/80
backdrop-blur-xl
">

<div className="
max-w-7xl
mx-auto
px-6
py-4
flex
justify-between
items-center
">


<Link href="/dashboard">

<div className="
font-bold
text-xl
tracking-tight
">

Career OS

<span className="text-indigo-600">
 AI
</span>

</div>

</Link>


<div className="flex gap-2">

{
navItems.map(item=>(

<Link
key={item.path}
href={item.path}
>

<div
className={`
px-4
py-2
rounded-lg
text-sm
transition

${
pathname===item.path

?
"bg-slate-900 text-white"

:

"text-slate-600 hover:bg-slate-100"

}

`}
>

{item.name}

</div>


</Link>

))
}

</div>


</div>

</nav>

)

}