//import fetch from "node-fetch";
const btn = document.querySelector("#getFacts")
btn.addEventListener("click",getData)
const url = "https://cat-fact.herokuapp.com/facts"

async function getData()
{
   //If wed dont send any optins in fetch, then it will be used as get request
   let response = await fetch(url)
   let data = await response.json()
   const randomnum = Math.floor((Math.random()*5)+1)
   console.log(randomnum)
   document.getElementById('fact').innerHTML = data[randomnum].text;
}

//Using Chaining

function getFacts()
{
   fetch(url)
   .then((res)=>
   res.json()).then((data)=>{
      const randomnum = Math.floor((Math.random()*5)+1)
      console.log(randomnum)
      document.getElementById('fact').innerHTML = data[randomnum].text;
   }).catch((err)=>{
      console.log(err)
   })
}