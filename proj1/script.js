var count = document.querySelector("#count");
var followers = document.querySelector("#followers");


let  c= 100;
setInterval(()=>{
if(c<1000)
{
    c++;
    count.innerText = c;
}
},10)