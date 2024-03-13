const uno = ()=>{
   return "I am one";
}

const dos = ()=>{
    setTimeout(()=>{
        return "I am two";
    },3000);
}

const tres = ()=>{
    return "I am three";
}

const callMe = ()=>{
    let val1 =uno();
    console.log(val1);

    let val2 = dos();
    console.log(val2);

    let val3 = tres();
    console.log(val3);
}

callMe();