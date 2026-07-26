"use client";

import Link from "next/link";


export default function Home(){


return (

<div className="
min-h-screen
bg-gradient-to-br
from-indigo-50
via-white
to-purple-50
p-8
">



{/* HERO SECTION */}


<div className="
max-w-6xl
mx-auto
grid
md:grid-cols-2
gap-10
items-center
pt-16
">





{/* LEFT */}

<div>


<div className="
inline-flex
bg-indigo-100
text-indigo-700
px-4
py-2
rounded-full
text-sm
font-semibold
">

🤖 AI Career Intelligence Platform

</div>



<h1 className="
text-6xl
font-bold
leading-tight
mt-6
">

Discover Your
<br/>

<span className="
text-indigo-600
">

Future Career

</span>

Path

</h1>



<p className="
text-gray-600
text-lg
mt-6
leading-relaxed
">

Career OS analyses your interests, strengths and goals
to generate personalised career recommendations,
future pathways and AI-powered guidance.

</p>





<Link href="/profile">

<button

className="
mt-8
bg-black
text-white
px-8
py-4
rounded-2xl
font-semibold
text-lg
hover:scale-105
transition
shadow-xl
"

>

Start Career Analysis 🚀

</button>

</Link>


</div>







{/* RIGHT AI CARD */}


<div className="
bg-white
rounded-3xl
shadow-2xl
border
p-8
">


<div className="
bg-gradient-to-r
from-indigo-600
to-purple-600
rounded-2xl
p-6
text-white
">


<p className="
text-sm
opacity-80
">

Career OS AI Prediction

</p>


<h2 className="
text-3xl
font-bold
mt-3
">

95%

</h2>


<p className="
mt-2
">

Career Compatibility Score

</p>


</div>





<div className="
mt-6
space-y-4
">



<div className="
bg-gray-50
rounded-xl
p-4
">

💻

<b className="ml-2">

Software Engineer

</b>


<p className="
text-sm
text-gray-500
mt-1
">

High growth technology pathway

</p>


</div>





<div className="
bg-gray-50
rounded-xl
p-4
">

🤖

<b className="ml-2">

AI Engineer

</b>


<p className="
text-sm
text-gray-500
mt-1
">

Future technology opportunity

</p>


</div>





<div className="
bg-gray-50
rounded-xl
p-4
">

📊

<b className="ml-2">

Data Scientist

</b>


<p className="
text-sm
text-gray-500
mt-1
">

Analytics-driven career

</p>


</div>



</div>


</div>



</div>









{/* FEATURES */}



<div className="
max-w-6xl
mx-auto
mt-24
">


<h2 className="
text-3xl
font-bold
text-center
">

Everything You Need For Career Growth

</h2>



<p className="
text-gray-500
text-center
mt-3
">

A complete AI ecosystem for discovering and planning your future

</p>






<div className="
grid
md:grid-cols-3
gap-6
mt-10
">






<div className="
bg-white
rounded-3xl
border
p-6
shadow-sm
hover:shadow-xl
transition
">


<div className="text-4xl">

🎯

</div>


<h3 className="
font-bold
text-xl
mt-4
">

AI Career Matching

</h3>


<p className="
text-gray-500
mt-2
">

Find careers that match your interests,
skills and personality.

</p>


</div>









<div className="
bg-white
rounded-3xl
border
p-6
shadow-sm
hover:shadow-xl
transition
">


<div className="text-4xl">

🧬

</div>


<h3 className="
font-bold
text-xl
mt-4
">

Career Twins

</h3>


<p className="
text-gray-500
mt-2
">

Explore simulated future journeys
from people with similar profiles.

</p>


</div>









<div className="
bg-white
rounded-3xl
border
p-6
shadow-sm
hover:shadow-xl
transition
">


<div className="text-4xl">

🗺️

</div>


<h3 className="
font-bold
text-xl
mt-4
">

Future Roadmap

</h3>


<p className="
text-gray-500
mt-2
">

Visualise your journey from beginner
to industry professional.

</p>


</div>




</div>



</div>









{/* HOW IT WORKS */}


<div className="
max-w-6xl
mx-auto
mt-24
mb-10
">


<h2 className="
text-3xl
font-bold
text-center
">

How Career OS Works

</h2>



<div className="
grid
md:grid-cols-4
gap-5
mt-10
">



{[

["1","Create Profile"],
["2","AI Analysis"],
["3","Explore Careers"],
["4","Plan Your Future"]

].map((item)=>(


<div

key={item[0]}

className="
bg-white
border
rounded-2xl
p-5
text-center
"


>


<div className="
w-10
h-10
mx-auto
rounded-full
bg-indigo-600
text-white
flex
items-center
justify-center
font-bold
">

{item[0]}

</div>


<h3 className="
font-semibold
mt-4
">

{item[1]}

</h3>


</div>



))}


</div>


</div>








</div>


);


}