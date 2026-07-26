"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";


export default function ProfilePage() {

  const router = useRouter();


  const [form,setForm] = useState({

    age:"",
    stage:"Student",
    interest:"Tech"

  });



  const interests=[

    {
      name:"Tech",
      icon:"💻",
      desc:"Software, AI, Data & Innovation"
    },

    {
      name:"Business",
      icon:"📈",
      desc:"Management, Marketing & Entrepreneurship"
    },

    {
      name:"Design",
      icon:"🎨",
      desc:"Creative Design & Digital Experience"
    },

    {
      name:"Fashion",
      icon:"👗",
      desc:"Style, Branding & Creativity"
    },

    {
      name:"Marketing",
      icon:"📱",
      desc:"Content, Media & Communication"
    }

  ];




  const handleSubmit=()=>{

    localStorage.setItem(
      "careerProfile",
      JSON.stringify(form)
    );


    router.push("/dashboard");

  };




return (

<div className="min-h-screen flex items-center justify-center p-8">


<motion.div

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

className="
w-full
max-w-3xl
bg-white
rounded-3xl
shadow-xl
border
p-8
"


>


{/* HEADER */}

<div className="text-center">


<div className="
mx-auto
w-20
h-20
rounded-full
bg-gradient-to-r
from-purple-600
to-indigo-600
flex
items-center
justify-center
text-4xl
">

🚀

</div>



<h1 className="
text-4xl
font-bold
mt-5
">

Build Your Career Identity

</h1>



<p className="
text-gray-500
mt-3
">

Career OS uses AI matching to discover your future career possibilities

</p>


</div>





{/* AGE */}

<div className="mt-8">


<label className="font-semibold">

Your Age

</label>


<input

type="number"

placeholder="Enter your age"

value={form.age}

onChange={(e)=>

setForm({

...form,

age:e.target.value

})

}


className="
w-full
mt-2
border
rounded-xl
p-4
outline-none
focus:ring-2
focus:ring-purple-500
"

/>


</div>







{/* STAGE */}

<div className="mt-6">


<label className="font-semibold">

Current Stage

</label>



<div className="grid grid-cols-3 gap-3 mt-3">


{

["Student","Graduate","Working"]

.map((s)=>(


<button

key={s}

onClick={()=>setForm({

...form,

stage:s

})}


className={`
p-3
rounded-xl
border
transition

${
form.stage===s

?

"bg-purple-600 text-white"

:

"bg-gray-50 hover:bg-gray-100"

}

`}

>

{s}

</button>


))


}


</div>

</div>







{/* INTEREST */}

<div className="mt-8">


<label className="font-semibold">

What excites you?

</label>



<div className="
grid
md:grid-cols-2
gap-4
mt-4
">


{

interests.map((item)=>(


<button

key={item.name}

onClick={()=>setForm({

...form,

interest:item.name

})}


className={`

text-left
p-5
rounded-2xl
border
transition

${
form.interest===item.name

?

"border-purple-600 bg-purple-50"

:

"hover:shadow-md"

}

`}


>


<div className="text-3xl">

{item.icon}

</div>


<h3 className="font-bold mt-2">

{item.name}

</h3>


<p className="text-sm text-gray-500">

{item.desc}

</p>


</button>


))


}


</div>


</div>








{/* PREVIEW */}

<div className="
mt-8
bg-gray-50
rounded-2xl
p-5
">


<h3 className="font-bold">

AI Profile Preview

</h3>


<div className="mt-3 text-sm space-y-1">


<p>
Age: {form.age || "-"}
</p>


<p>
Stage: {form.stage}
</p>


<p>
Interest: {form.interest}
</p>


</div>


</div>







{/* BUTTON */}


<button

onClick={handleSubmit}

className="
mt-8
w-full
p-4
rounded-xl
bg-gradient-to-r
from-purple-600
to-indigo-600
text-white
font-bold
text-lg
hover:scale-[1.02]
transition
"


>

Generate My AI Career Path ✨

</button>



</motion.div>


</div>


);

}