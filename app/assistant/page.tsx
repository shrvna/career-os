"use client";

import { useEffect, useState } from "react";
import { generateCareers } from "@/lib/careerEngine";

export default function AssistantPage() {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [profile, setProfile] = useState<any>(null);
  const [careers, setCareers] = useState<any[]>([]);
  const [typing, setTyping] = useState(false);


  useEffect(() => {

    const data = localStorage.getItem("careerProfile");

    if(data){

      const parsed = JSON.parse(data);

      setProfile(parsed);

      const generated = generateCareers(parsed);

      setCareers(generated);
    }


    setMessages([
      {
        role:"bot",
        text:
        "Hi 👋 I'm Career OS Co-Pilot. I analyse your interests, skills and career goals to guide your future pathway.",
        suggestions:[
          "What career suits me?",
          "What skills should I learn?",
          "Expected salary?",
          "Show my future path?"
        ]
      }
    ]);

  },[]);



  const getAIResponse=(question:string)=>{


    const lower = question.toLowerCase();


    if(!profile){

      return {
        text:"Please complete your career profile first.",
        suggestions:["Create profile"]
      }

    }


    const topCareer = careers[0];


    if(
      lower.includes("career") ||
      lower.includes("suit")
    ){

      return {

        text:
        `Based on your profile, your strongest match is ${topCareer?.title} with ${topCareer?.match}% compatibility. This pathway matches your ${profile.interest} interest and current career stage.`,

        suggestions:[
          "Why this career?",
          "Expected salary?",
          "Future path?"
        ]

      }

    }



    if(
      lower.includes("why")
    ){

      return {

        text:
        `${topCareer?.title} is recommended because it aligns with your interest area, market demand and long-term growth opportunities.`,

        suggestions:[
          "What skills should I learn?",
          "Salary expectation?"
        ]

      }

    }



    if(
      lower.includes("salary") ||
      lower.includes("pay")
    ){

      return {

        text:
        `Career opportunities in this field usually start around RM3K–RM6K and can grow beyond RM15K depending on experience, specialization and leadership level.`,

        suggestions:[
          "Future progression?",
          "Required skills?"
        ]

      }

    }



    if(
      lower.includes("skill") ||
      lower.includes("learn")
    ){

      let skills =
      "Recommended skills: ";

      if(profile.interest==="Tech"){

        skills +=
        "Programming, AI tools, cloud computing, cybersecurity, UI/UX and software engineering practices.";

      }

      else if(profile.interest==="Business"){

        skills +=
        "Leadership, communication, marketing analytics, negotiation and strategic thinking.";

      }

      else{

        skills +=
        "Portfolio development, communication, digital tools and industry knowledge.";

      }


      return {

        text:skills,

        suggestions:[
          "Best career option?",
          "Show future path"
        ]

      }

    }



    if(
      lower.includes("future") ||
      lower.includes("path")
    ){

      return {

        text:
        `Your projected journey:
Learning → Skill Development → Entry Role → Specialist → Leadership.
Your strongest future direction is ${topCareer?.title}.`,

        suggestions:[
          "What skills matter?",
          "Expected salary?"
        ]

      }

    }



    return {

      text:
      `I analysed your profile (${profile.interest}, ${profile.stage}). Explore your dashboard recommendations to discover suitable careers.`,

      suggestions:[
        "What career suits me?",
        "What skills should I learn?"
      ]

    }

  }




  const sendMessage=(text=input)=>{


    if(!text.trim()) return;


    setMessages(prev=>[
      ...prev,
      {
        role:"user",
        text
      }
    ]);


    setInput("");

    setTyping(true);



    setTimeout(()=>{


      const ai=getAIResponse(text);


      setMessages(prev=>[
        ...prev,
        {
          role:"bot",
          text:ai.text,
          suggestions:ai.suggestions
        }
      ]);


      setTyping(false);


    },700);



  }




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

<div className="flex items-center gap-4">


<div className="
w-14
h-14
rounded-full
bg-gradient-to-r
from-indigo-600
to-purple-600
flex
items-center
justify-center
text-white
text-2xl
">
🤖
</div>


<div>

<h1 className="
text-4xl
font-bold
bg-gradient-to-r
from-indigo-700
to-purple-700
text-transparent
bg-clip-text
">

Career OS Co-Pilot

</h1>


<p className="text-gray-500">

Your AI-powered career navigation assistant

</p>


</div>

</div>





{/* AI INSIGHT CARD */}

{profile && careers.length>0 && (

<div className="
mt-6
bg-white
rounded-3xl
shadow-md
border
p-6
">


<h2 className="
font-semibold
text-lg
">

AI Career Insight

</h2>


<div className="
mt-3
flex
justify-between
items-center
">


<div>

<p className="text-gray-500 text-sm">
Recommended pathway
</p>


<p className="text-xl font-bold">
{careers[0]?.title}
</p>


</div>



<div className="
bg-indigo-100
text-indigo-700
px-5
py-3
rounded-2xl
font-bold
">

{careers[0]?.match}% Match

</div>


</div>


</div>

)}





{/* CHAT */}

<div className="
mt-6
bg-white
rounded-3xl
shadow-lg
border
p-6
h-[480px]
overflow-y-auto
">


{
messages.map((msg,i)=>(


<div key={i} className="mb-5">


<div className={`
flex
${msg.role==="user"
?"justify-end"
:"justify-start"}
`}>



<div className={`
max-w-[75%]
px-5
py-4
rounded-3xl
shadow-sm

${
msg.role==="user"

?
"bg-indigo-600 text-white"

:
"bg-gray-100 text-gray-800"

}

`}>

{msg.text}

</div>


</div>



{
msg.suggestions &&

<div className="
flex
flex-wrap
gap-2
mt-3
">


{
msg.suggestions.map((s:string,index:number)=>(


<button

key={index}

onClick={()=>sendMessage(s)}

className="
px-4
py-2
rounded-full
bg-indigo-50
text-indigo-700
text-sm
hover:bg-indigo-100
transition
"

>

{s}

</button>


))

}


</div>

}



</div>


))

}


{
typing &&

<div className="
text-gray-400
text-sm
animate-pulse
">

Career OS is analysing...

</div>

}


</div>





{/* INPUT */}

<div className="
mt-5
flex
gap-3
">


<input

value={input}

onChange={(e)=>setInput(e.target.value)}

onKeyDown={(e)=>{

if(e.key==="Enter")
sendMessage();

}}

placeholder="
Ask Career OS anything...
"

className="
flex-1
rounded-2xl
border
px-5
py-4
outline-none
focus:ring-2
focus:ring-indigo-400
"

/>


<button

onClick={()=>sendMessage()}

className="
bg-gradient-to-r
from-indigo-600
to-purple-600
text-white
px-8
rounded-2xl
font-semibold
hover:scale-105
transition
"

>

Send

</button>


</div>



</div>


)


}