"use client";

import { useEffect, useState } from "react";
import Link from "next/link";


export default function RoadmapPage() {


const [profile,setProfile] = useState<any>(null);
const [career,setCareer] = useState<any>(null);



useEffect(()=>{

const p = localStorage.getItem("careerProfile");
const c = localStorage.getItem("selectedCareer");


if(p){
setProfile(JSON.parse(p));
}


if(c){
setCareer(JSON.parse(c));
}


},[]);





const roadmap = [

{
stage:"Discovery Stage (15–18)",
icon:"🌱",
goal:"Build your foundation and discover your strengths",
salary:"RM0 - RM2K",
skills:[
"Programming",
"Problem Solving",
"Communication"
],
points:[
"Learn fundamental skills",
"Explore different career fields",
"Build small personal projects",
"Develop learning habits"
]

},



{
stage:"University / Early Stage (18–22)",
icon:"🎓",
goal:"Prepare for professional opportunities",
salary:"RM3K - RM6K",
skills:[
"Technical Skills",
"Portfolio",
"Internships"
],
points:[
"Join industry projects",
"Build professional portfolio",
"Participate in competitions",
"Gain practical experience"
]

},



{
stage:"Professional Growth (23–34)",
icon:"💼",
goal:"Become an industry specialist",
salary:"RM6K - RM15K",
skills:[
"Advanced Skills",
"Cloud Technology",
"Leadership"
],
points:[
"Work on real-world projects",
"Specialise in your career field",
"Grow professional network",
"Increase industry expertise"
]

},



{
stage:"Leadership Stage (35+)",
icon:"🚀",
goal:"Lead innovation and create impact",
salary:"RM15K+",
skills:[
"Leadership",
"Strategy",
"Mentoring"
],
points:[
"Become a senior professional",
"Lead teams and projects",
"Create innovative solutions",
"Mentor future talents"
]

}


];






return (

<div className="
min-h-screen
bg-gradient-to-br
from-indigo-50
via-white
to-purple-50
p-8
">



{/* HEADER */}


<div className="
max-w-6xl
mx-auto
">


<Link href="/dashboard">

<h1 className="
text-4xl
font-bold
text-indigo-700
cursor-pointer
">

Career OS

</h1>

</Link>


<p className="
text-gray-500
mt-2
">

AI-powered career intelligence platform

</p>


</div>






{/* TITLE */}


<div className="
max-w-6xl
mx-auto
mt-10
">


<h1 className="
text-5xl
font-bold
text-gray-900
">

🚀 Your Career Roadmap

</h1>


<p className="
text-gray-500
text-lg
mt-3
">

Personalised AI-generated journey based on your profile

</p>


</div>







{/* AI CARD */}


<div className="
max-w-6xl
mx-auto
mt-10
">


<div className="
rounded-3xl
bg-gradient-to-r
from-indigo-600
to-purple-600
text-white
p-8
shadow-xl
">



<h2 className="
text-3xl
font-bold
">

AI Career Prediction

</h2>


<p className="
mt-3
text-indigo-100
">

Based on your interests and career goals, Career OS predicts your strongest pathway.

</p>



<div className="
mt-6
bg-white/20
rounded-2xl
p-5
">


<p className="
text-sm
">

Recommended Direction

</p>



<h3 className="
text-3xl
font-bold
mt-2
">

{career?.title || profile?.interest || "Technology Career"}

</h3>



<div className="
mt-3
">

AI Confidence Score:

<span className="
font-bold
ml-2
">

95%

</span>


</div>


</div>


</div>


</div>









{/* TIMELINE */}



<div className="
max-w-6xl
mx-auto
mt-12
relative
">


<div className="
absolute
left-7
top-0
bottom-0
w-1
bg-gradient-to-b
from-indigo-500
to-purple-500
">
</div>





<div className="
space-y-10
">



{

roadmap.map((step,index)=>(


<div 
key={index}
className="
relative
pl-20
"
>



<div className="
absolute
left-0
w-14
h-14
rounded-full
bg-white
border-4
border-indigo-500
flex
items-center
justify-center
text-2xl
shadow
">

{step.icon}

</div>





<div className="
bg-white
rounded-3xl
border
shadow-lg
p-8
">





<div className="
flex
justify-between
items-start
gap-5
">


<div>


<h2 className="
text-2xl
font-bold
">

{step.stage}

</h2>


<p className="
text-gray-500
mt-2
">

{step.goal}

</p>


</div>




<div className="
bg-green-100
text-green-700
px-4
py-2
rounded-xl
font-semibold
">

💰 {step.salary}

</div>


</div>







<div className="
flex
flex-wrap
gap-2
mt-6
">


{

step.skills.map((skill,i)=>(


<span
key={i}
className="
bg-indigo-100
text-indigo-700
px-4
py-2
rounded-full
text-sm
font-medium
"
>

{skill}

</span>


))


}


</div>







<div className="
mt-6
space-y-3
">


{

step.points.map((point,i)=>(


<div
key={i}
className="
flex
gap-3
"
>


<span className="
text-green-600
font-bold
">

✓

</span>


<p className="
text-gray-700
">

{point}

</p>


</div>


))


}


</div>





</div>



</div>



))


}



</div>



</div>







</div>


);


}