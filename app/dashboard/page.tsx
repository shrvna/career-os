"use client";

import { useEffect, useState } from "react";
import Link from "next/link";


export default function Dashboard(){


const [profile,setProfile]=useState<any>(null);



useEffect(()=>{

const data = localStorage.getItem("careerProfile");

if(data){

setProfile(JSON.parse(data));

}

},[]);




const getCareers = () => {


if(profile?.interest==="Business"){

return [

{
rank:"🥇",
title:"Business Analyst",
match:"95%",
salary:"$3K - $12K / month",
demand:"🔥 Very High Demand",
skills:[
"Business Strategy",
"Data Analysis",
"SQL"
]
},


{
rank:"🥈",
title:"Product Manager",
match:"92%",
salary:"$5K - $18K / month",
demand:"🔥 High Demand",
skills:[
"Leadership",
"Communication",
"Product Strategy"
]
},


{
rank:"🥉",
title:"Marketing Manager",
match:"88%",
salary:"$3K - $10K / month",
demand:"📈 Growing Demand",
skills:[
"Digital Marketing",
"Branding",
"Analytics"
]
}

];


}



if(profile?.interest==="Design"){

return [

{
rank:"🥇",
title:"UI/UX Designer",
match:"95%",
salary:"$3K - $12K / month",
demand:"🔥 High Demand",
skills:[
"Figma",
"User Research",
"Design Thinking"
]
},


{
rank:"🥈",
title:"Product Designer",
match:"90%",
salary:"$4K - $15K / month",
demand:"🔥 Growing Demand",
skills:[
"UX Strategy",
"Prototyping",
"Design Systems"
]
}


];

}



return [

{
rank:"🥇",
title:"Software Engineer",
match:"95%",
salary:"$3K - $15K / month",
demand:"🔥 Very High Demand",
skills:[
"Python",
"Cloud Computing",
"System Design"
]
},


{
rank:"🥈",
title:"AI Engineer",
match:"92%",
salary:"$5K - $18K / month",
demand:"🤖 Extremely High Demand",
skills:[
"Machine Learning",
"Python",
"Deep Learning"
]
},


{
rank:"🥉",
title:"Data Scientist",
match:"90%",
salary:"$4K - $16K / month",
demand:"📊 High Demand",
skills:[
"Python",
"Statistics",
"Data Analytics"
]
}

];


};



const careers=getCareers();




return (

<div className="
min-h-screen
bg-gradient-to-br
from-indigo-50
via-white
to-purple-50
p-8
">





{/* HEADER CARD */}


<div className="
max-w-6xl
mx-auto
bg-gradient-to-r
from-indigo-600
to-purple-600
rounded-3xl
p-8
text-white
shadow-xl
">


<h1 className="
text-4xl
font-bold
">

Career Intelligence Dashboard 🚀

</h1>



<div className="
grid
md:grid-cols-3
gap-6
mt-6
">



<div>

<p className="opacity-80">
👤 Career Stage
</p>

<h2 className="text-2xl font-bold">
{profile?.stage || "Student"}
</h2>

</div>





<div>

<p className="opacity-80">
💻 Interest
</p>

<h2 className="text-2xl font-bold">
{profile?.interest || "Tech"}
</h2>

</div>






<div>

<p className="opacity-80">
🎯 AI Career Match
</p>

<h2 className="text-2xl font-bold">
95%
</h2>

</div>



</div>


</div>









{/* RECOMMENDATIONS */}


<div className="
max-w-6xl
mx-auto
mt-12
">


<h2 className="
text-3xl
font-bold
">

Recommended Career Paths 🎯

</h2>



<div className="
grid
md:grid-cols-3
gap-6
mt-6
">



{

careers.map((career,index)=>(


<div
key={index}
className="
bg-white
rounded-3xl
border
shadow-lg
p-6
hover:shadow-xl
transition
"
>


<div className="text-4xl">

{career.rank}

</div>



<h3 className="
text-2xl
font-bold
mt-3
">

{career.title}

</h3>





<div className="
mt-4
bg-indigo-50
rounded-xl
p-4
">


<p className="
font-bold
text-indigo-700
">

{career.match} Match

</p>



<div className="
h-3
bg-gray-200
rounded-full
mt-2
">


<div
className="
h-3
bg-gradient-to-r
from-indigo-500
to-purple-500
rounded-full
"
style={{
width:career.match
}}
>

</div>


</div>


</div>







<div className="
mt-4
bg-purple-50
rounded-xl
p-4
">


<p className="font-semibold">

💰 Salary Potential

</p>


<p>
{career.salary}
</p>


</div>







<div className="
mt-4
bg-orange-50
rounded-xl
p-4
">


<p className="font-semibold">

{career.demand}

</p>


</div>









<div className="mt-4">


<p className="font-bold">

Skills:

</p>


<div className="flex flex-wrap gap-2 mt-2">


{

career.skills.map((skill)=>(


<span
key={skill}
className="
bg-indigo-100
text-indigo-700
px-3
py-1
rounded-full
text-sm
"
>

{skill}

</span>


))


}


</div>


</div>






<Link href="/roadmap">


<button
className="
mt-6
w-full
bg-gradient-to-r
from-indigo-600
to-purple-600
text-white
py-3
rounded-xl
font-semibold
hover:scale-105
transition
"
>


Explore Path 🚀


</button>


</Link>





</div>


))


}


</div>


</div>









{/* NEXT FEATURES */}



<div className="
max-w-6xl
mx-auto
mt-12
grid
md:grid-cols-2
gap-6
">



<Link href="/twins">

<div className="
bg-gradient-to-br
from-purple-100
to-pink-100
rounded-3xl
p-6
border
cursor-pointer
">


<h3 className="text-xl font-bold">

🧬 Career Twins

</h3>


<p className="mt-2 text-gray-600">

Explore future journeys of similar profiles.

</p>


</div>

</Link>






<Link href="/assistant">

<div className="
bg-gradient-to-br
from-blue-100
to-indigo-100
rounded-3xl
p-6
border
cursor-pointer
">


<h3 className="text-xl font-bold">

🤖 AI Career Assistant

</h3>


<p className="mt-2 text-gray-600">

Ask AI for career guidance.

</p>


</div>

</Link>



</div>






</div>

);


}