export function generateCareers(profile:any){

if(!profile) return [];


const {
age,
stage,
interest,
skills="",
goal="",
workStyle=""
}=profile;



const userSkills = skills.toLowerCase();



const careerDatabase=[


{
title:"Software Engineer",
category:"Tech",
salary:"RM3K - RM15K",
demand:"Very High",
growth:"Fast Growth",
keywords:["coding","python","java","programming","software"],
reason:"Strong match for technical problem solving and software development."
},


{
title:"AI Engineer",
category:"Tech",
salary:"RM5K - RM20K",
demand:"Extremely High",
growth:"Future Technology",
keywords:["python","machine learning","ai","data"],
reason:"Suitable for users interested in emerging AI technologies."
},


{
title:"Data Scientist",
category:"Tech",
salary:"RM5K - RM18K",
demand:"Very High",
growth:"Analytics Leadership",
keywords:["python","statistics","analytics","data"],
reason:"Matches analytical thinking and data-driven decision making."
},


{
title:"Cybersecurity Analyst",
category:"Tech",
salary:"RM4K - RM15K",
demand:"Very High",
growth:"Security Specialist",
keywords:["security","network","cyber","technology"],
reason:"Good pathway for protecting digital systems."
},


{
title:"UI/UX Designer",
category:"Design",
salary:"RM3K - RM12K",
demand:"High",
growth:"Digital Product Growth",
keywords:["design","creative","ui","ux"],
reason:"Combines creativity with technology and user experience."
},



{
title:"Product Manager",
category:"Business",
salary:"RM5K - RM18K",
demand:"High",
growth:"Leadership Track",
keywords:["leadership","management","business"],
reason:"Ideal for people who enjoy technology and managing products."
},



{
title:"Business Analyst",
category:"Business",
salary:"RM3K - RM12K",
demand:"High",
growth:"Strategic Growth",
keywords:["analysis","business","communication"],
reason:"Connects business decisions with data insights."
},



{
title:"Digital Marketer",
category:"Marketing",
salary:"RM3K - RM12K",
demand:"High",
growth:"Digital Expansion",
keywords:["marketing","content","social"],
reason:"Suitable for creative communication and brand building."
},



{
title:"Entrepreneur",
category:"Business",
salary:"Variable",
demand:"High",
growth:"Innovation Path",
keywords:["business","startup","leadership"],
reason:"Matches users interested in creating their own opportunities."
},



{
title:"Sustainability Specialist",
category:"Environment",
salary:"RM4K - RM14K",
demand:"Growing",
growth:"Green Economy",
keywords:["environment","climate","sustainability"],
reason:"Supports careers focused on environmental impact."
},



{
title:"Healthcare Data Analyst",
category:"Healthcare",
salary:"RM4K - RM15K",
demand:"Growing",
growth:"Healthcare Technology",
keywords:["health","data","analytics"],
reason:"Combines healthcare knowledge with analytical skills."
}



];





const results=careerDatabase.map((career)=>{


let score=50;

let reasons:string[]=[];




// INTEREST MATCH

if(
interest &&
career.category.toLowerCase()
.includes(
interest.toLowerCase()
)

){

score+=25;

reasons.push(
`Matches your interest in ${interest}`
);

}




// SKILL MATCH

career.keywords.forEach((keyword:string)=>{


if(userSkills.includes(keyword)){


score+=5;

reasons.push(
`Your skill "${keyword}" supports this career`
);


}

});






// GOAL MATCH


if(goal==="High Salary"){

if(
career.demand==="Very High" ||
career.demand==="Extremely High"
){

score+=10;

reasons.push(
"Strong market demand and salary potential"
);

}

}



if(goal==="Entrepreneurship" &&
career.title==="Entrepreneur"){

score+=15;

reasons.push(
"Aligned with your entrepreneurship goal"
);

}





if(goal==="Innovation Impact" &&
(
career.title==="AI Engineer" ||
career.title==="Sustainability Specialist"
)
){

score+=10;

reasons.push(
"Matches your innovation and impact goals"
);

}





// STAGE BONUS


if(stage==="Student"){

score+=5;

reasons.push(
"Suitable for early career exploration"
);

}


if(stage==="Graduate"){

score+=8;

reasons.push(
"Aligned with graduate career development"
);

}





return {


...career,


match:
Math.min(
95,
Math.max(
60,
score
)
),


time:
"1-5 years",


difficulty:
career.demand==="Extremely High"
?
"Advanced"
:
"Medium",


reasons:
reasons.length>0
?
reasons
:
[
career.reason
]

};



});





return results.sort(
(a,b)=>b.match-a.match
);



}