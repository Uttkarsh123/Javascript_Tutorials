//Generate a random color
const random_color =()=>{
    const hex = "0123456789ABCDEF"
    let color="#"
    
    for(i=0;i<6;i++)
    {
       let rand = Math.floor(Math.random()*16);
       color += hex.charAt(rand)  
    }
    return color
}

let colorInt;
const startColorChange =()=>{
   if(!colorInt)
        colorInt =  setInterval(changeBGC,1000)

    function changeBGC(){
         document.body.style.backgroundColor = random_color()
    }
}

const stopColorChange=()=>{
      clearInterval(colorInt);
      colorInt=null;
}

document.querySelector("#start").addEventListener("click",startColorChange)
document.querySelector("#stop").addEventListener("click",stopColorChange)