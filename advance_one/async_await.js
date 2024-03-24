//It will compulsory return a promise whether we define it or not
async function hello()
{
    console.log("hello")
}

function api()
{
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Weather data");
            resolve(200);
        },2000)
     })

}

async function getDta()
{
    await api();
}

function getData(dataID)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Some data ",dataID)
            resolve("success")
        },4000)
    })
}

//Async await is useful when we want that the tasks should be executed one after another

async function getAllData()
{
    await getData(1)
    await getData(2)
    await getData(3)
}