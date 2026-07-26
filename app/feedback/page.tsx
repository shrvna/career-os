"use client";

import { useEffect, useState } from "react";


export default function FeedbackPage() {


const [history,setHistory]=useState<any[]>([]);
const [message,setMessage]=useState("");

const [score,setScore]=useState(70);



useEffect(()=>{

const saved =
localStorage.getItem(
"careerFeedbackHistory"
);


if(saved){

setHistory(JSON.parse(saved));

}


},[]);





const handleFeedback=(type:string)=>{


const timestamp =
new Date().toLocaleString();



const entry={

type,

time:timestamp

};



const updated=[

...history,

entry

];


setHistory(updated);


localStorage.setItem(

"careerFeedbackHistory",

JSON.stringify(updated)

);





if(type==="applied"){

setScore(score+5);

setMessage(
"🤖 AI Update: Application activity detected. Career matching model is improving."
);

}



if(type==="rejected"){

setScore(score+2);

setMessage(
"🤖 AI Update: Rejection analysed. Skill-gap recommendations updated."
);

}



if(type==="hired"){

setScore(100);

setMessage(
"🎉 AI Update: Career success detected. Similar pathways are strengthened."
);

}


};






return(


<div className="
min-h-screen
p-8
bg-gradient-to-br
from-gray-50
via-white
to-indigo-50
">





{/* HEADER */}

<div>


<h1 className="
text-4xl
font-bold
">

AI Career Learning Engine

</h1>


<p className="
text-gray-500
mt-2
">

Help Career OS continuously improve your recommendations through real outcomes

</p>


</div>







{/* AI SCORE */}

<div className="
mt-8
grid
md:grid-cols-3
gap-6
">





<div className="
bg-gradient-to-r
from-indigo-600
to-purple-600
text-white
rounded-3xl
p-6
shadow-xl
">


<p className="opacity-80">

AI Confidence Score

</p>


<h2 className="
text-5xl
font-bold
mt-3
">

{score}%

</h2>


<p className="
text-sm
mt-3
">

Based on your career interaction history

</p>


</div>







<div className="
bg-white
rounded-3xl
border
p-6
shadow
">


<p className="text-gray-500">

Career Activities

</p>


<h2 className="
text-4xl
font-bold
mt-3
">

{history.length}

</h2>


<p className="text-sm mt-2">

Recorded outcomes

</p>


</div>







<div className="
bg-white
rounded-3xl
border
p-6
shadow
">


<p className="text-gray-500">

Learning Status

</p>


<h2 className="
text-2xl
font-bold
mt-3
text-green-600
">

Active

</h2>


<p className="text-sm mt-2">

AI model adaptation enabled

</p>


</div>



</div>









{/* FEEDBACK ACTIONS */}

<div className="
mt-10
">


<h2 className="
text-xl
font-bold
">

Update Your Career Journey

</h2>



<div className="
grid
md:grid-cols-3
gap-5
mt-5
">





<button

onClick={()=>handleFeedback("applied")}

className="
bg-black
text-white
rounded-2xl
p-5
hover:scale-105
transition
"

>


<div className="text-3xl">
📩
</div>


<h3 className="font-semibold mt-2">

Applied For Job

</h3>


<p className="text-sm text-gray-300">

Tell AI you started a new opportunity

</p>


</button>








<button

onClick={()=>handleFeedback("rejected")}

className="
bg-white
border
rounded-2xl
p-5
hover:scale-105
transition
"

>


<div className="text-3xl">
📊
</div>


<h3 className="font-semibold mt-2">

Received Rejection

</h3>


<p className="text-sm text-gray-500">

AI identifies possible skill gaps

</p>


</button>









<button

onClick={()=>handleFeedback("hired")}

className="
bg-green-600
text-white
rounded-2xl
p-5
hover:scale-105
transition
"

>


<div className="text-3xl">
🎉
</div>


<h3 className="font-semibold mt-2">

Got Hired

</h3>


<p className="text-sm">

AI strengthens successful paths

</p>


</button>



</div>


</div>









{/* AI RESPONSE */}

{message && (

<div className="
mt-8
bg-white
border
rounded-2xl
p-5
shadow
">


<h3 className="
font-semibold
">

System Response

</h3>


<p className="mt-2">

{message}

</p>


</div>


)}









{/* HISTORY */}

<div className="
mt-10
">


<h2 className="
text-xl
font-bold
">

Career Activity Timeline

</h2>



<div className="
mt-5
space-y-3
">


{
history.length===0 &&

<p className="
text-gray-500
">

No activity recorded yet.

</p>

}




{history.map((item,index)=>(


<div

key={index}

className="
bg-white
border
rounded-2xl
p-4
flex
justify-between
shadow-sm
"


>


<div>


<p className="
font-semibold
capitalize
">

{item.type}

</p>


<p className="
text-sm
text-gray-500
">

{item.time}

</p>


</div>



<span className="
bg-indigo-100
text-indigo-700
px-3
py-1
rounded-full
text-sm
">

AI Updated

</span>



</div>


))}



</div>


</div>






</div>


);


}