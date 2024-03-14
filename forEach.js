const states=[
    "Rajasthan",
    "Tamil Nadu",
    "Uttarakhand",
    "Uttar Pradesh",
    "Kerala",
    "Assam",
    "Maharastra"
]

//Foreach will not return any value

//Basic
states.forEach( (s)=> console.log(s))

//Conditional
states.forEach((s)=>(s.length<=10)?console.log(s):console.log("NULL"));

//Passing fucntion reference
function printU(s)
{
    if(s.startsWith("U"))
    {
        console.log(s)
    }
}
states.forEach(printU)

//Multiple Parameters
states.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})


