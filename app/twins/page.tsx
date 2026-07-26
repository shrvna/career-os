"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TwinsPage() {

  const [profile, setProfile] = useState<any>(null);
  const [twins, setTwins] = useState<any[]>([]);


  useEffect(() => {

    const data = localStorage.getItem("careerProfile");

    if(data){

      const parsed = JSON.parse(data);

      setProfile(parsed);

      generateTwins(parsed);

    }

  }, []);



  const generateTwins = (profile:any)=>{

    const interest = profile.interest;

    let result:any[]=[];


    if(interest==="Tech"){

      result=[

        {
          name:"Alex",
          icon:"🚀",
          match:94,
          path:"Software Engineer → Tech Lead",
          years:"10 years later",
          outcome:
          "Built advanced programming skills, joined global technology companies, and progressed into engineering leadership.",
          salary:"$15K+/month",
          lesson:
          "Continuous learning and technical depth create long-term career growth."
        },


        {
          name:"Maya",
          icon:"🤖",
          match:91,
          path:"AI Engineer → Research Specialist",
          years:"8 years later",
          outcome:
          "Specialized in artificial intelligence, machine learning, and developed innovative AI solutions.",
          salary:"$18K+/month",
          lesson:
          "Future-focused skills increase career opportunities."
        },


        {
          name:"Daniel",
          icon:"🎨",
          match:88,
          path:"UI/UX Designer → Product Manager",
          years:"7 years later",
          outcome:
          "Combined technology and creativity to lead successful digital products.",
          salary:"$12K+/month",
          lesson:
          "Hybrid skills create unique career advantages."
        }

      ];

    }



    if(interest==="Business"){

      result=[

        {
          name:"Sarah",
          icon:"📈",
          match:92,
          path:"Marketing Executive → Director",
          years:"12 years later",
          outcome:
          "Developed leadership capabilities and managed business expansion.",
          salary:"$20K+/month",
          lesson:
          "Communication and strategic thinking drive leadership success."
        },


        {
          name:"Adam",
          icon:"💡",
          match:86,
          path:"Startup Founder",
          years:"10 years later",
          outcome:
          "Built a business through innovation, networking, and entrepreneurship.",
          salary:"Variable",
          lesson:
          "Entrepreneurship rewards innovation and calculated risks."
        }

      ];

    }



    if(interest==="Fashion"){

      result=[

        {
          name:"Lina",
          icon:"👗",
          match:90,
          path:"Fashion Designer → Brand Owner",
          years:"10 years later",
          outcome:
          "Created a personal fashion identity and launched a successful brand.",
          salary:"$15K+/month",
          lesson:
          "Creativity combined with business skills builds success."
        },


        {
          name:"Emma",
          icon:"✨",
          match:85,
          path:"Stylist → Fashion Influencer",
          years:"6 years later",
          outcome:
          "Built a digital presence and collaborated with international brands.",
          salary:"$10K+/month",
          lesson:
          "Personal branding creates modern career opportunities."
        }

      ];

    }


    setTwins(result);

  };



return(

<div className="min-h-screen p-8">


{/* HEADER */}

<motion.div
initial={{opacity:0,y:-20}}
animate={{opacity:1,y:0}}
>

<h1 className="text-5xl font-bold tracking-tight">

🧬 Career Twins Simulation

</h1>


<p className="text-gray-500 mt-3 text-lg">

AI-powered future scenarios based on similar career journeys

</p>

</motion.div>




{/* PROFILE */}

{profile && (

<motion.div

initial={{opacity:0,scale:.95}}
animate={{opacity:1,scale:1}}

className="
mt-8
bg-gradient-to-r
from-indigo-600
via-purple-600
to-pink-500
text-white
rounded-3xl
p-8
shadow-xl
"

>


<h2 className="text-2xl font-bold">

Your Career DNA

</h2>


<p className="mt-2 opacity-90">

AI simulation generated from your current profile

</p>



<div className="grid md:grid-cols-3 gap-6 mt-6">


<div>
<p className="opacity-70">
Age
</p>

<p className="text-2xl font-bold">
{profile.age}
</p>

</div>


<div>
<p className="opacity-70">
Career Stage
</p>

<p className="text-2xl font-bold">
{profile.stage}
</p>

</div>



<div>
<p className="opacity-70">
Interest
</p>

<p className="text-2xl font-bold">
{profile.interest}
</p>

</div>


</div>


</motion.div>

)}





{/* TITLE */}

<div className="mt-12">

<h2 className="text-3xl font-bold">

Possible Future Versions Of You

</h2>


<p className="text-gray-500 mt-2">

Explore different career decisions and their possible outcomes

</p>


</div>






{/* CARDS */}

<div className="grid md:grid-cols-3 gap-8 mt-8">


{twins.map((t,index)=>(


<motion.div

key={index}

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:index*0.15
}}

whileHover={{
scale:1.03
}}

className="
bg-white
rounded-3xl
p-7
shadow-lg
border
hover:border-purple-400
transition
"

>


<div className="flex justify-between">

<div className="text-5xl">
{t.icon}
</div>


<div className="
bg-purple-100
text-purple-700
px-3
py-1
rounded-full
text-sm
font-bold
">

{t.match}% Match

</div>


</div>




<h2 className="text-2xl font-bold mt-5">

{t.name}

</h2>



<p className="
mt-2
text-purple-600
font-semibold
">

{t.path}

</p>





<div className="
mt-5
bg-gray-100
rounded-xl
p-4
">


<p className="text-sm text-gray-500">

Future Timeline

</p>


<p className="font-bold">

⏳ {t.years}

</p>


</div>






<p className="
mt-5
text-gray-600
leading-relaxed
">

{t.outcome}

</p>





<div className="
mt-5
bg-green-50
rounded-xl
p-4
">


<p className="font-bold">

💰 Salary Potential

</p>


<p className="mt-1">

{t.salary}

</p>


</div>






<div className="
mt-4
bg-blue-50
rounded-xl
p-4
text-sm
">


<p className="font-bold">

💡 Career Insight

</p>


<p className="mt-1">

{t.lesson}

</p>


</div>



</motion.div>


))}


</div>


</div>


);

}