function getData(dataID)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Some data ",dataID)
            resolve("success")
        },4000)
    })
}

function asyncFunc1()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Some data1")
            resolve("success")
        },4000)
    })
}


function asyncFunc2()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Some data2")
            resolve("success")
        },4000)
    })
}

//Promise Chaining Concept
console.log("fetching data 1");
let p1 = asyncFunc1()
// p1.then((res)=>{
//     console.log("fetching data 2");
//     let p2 = asyncFunc2()
//     p2.then((res)=>{

//     })
// })

//Actual Promise Chaing
getData(1).then((res)=>{
    return getData(2);
})
.then((res)=>{
    return getData(3)
}).then((res)=>{
    console.log(res);
})