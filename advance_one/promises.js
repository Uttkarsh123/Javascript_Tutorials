import fetch from "node-fetch";
// const promiseOne = new Promise(function(resolve,reject){
//    // do an async task
//    //DB calls, cryptography
//    setTimeout(()=>{
//     console.log("Async task")
//     resolve()
//    },1000)
// })

// promiseOne.then(()=>{
//     console.log("Promise Consumed")
// }) 

// //The above can be done as follows

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async Task two");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Asunc two resolved")
// })


// //If we want to pass some data using resolve method:
// const promiseThree = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         console.log("Async Task Threee")
//         resolve({username:"Chai", email:"chai@example.com"})
//     },1000)
// })
// promiseThree.then((user)=>
// {
//     //Object Destructuring
//     const {username, email:useremail} = user
//     console.log(useremail)
//     console.log(username)
// })

// const promiseFour = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=false
//         if(!error)
//         {
//             resolve({username:"Chai",password:"Hello@Chai"})
//         }
//         else{
//             reject("File Not accessed")
//         }
//     },1000)
// })

// const usernamePromise = promiseFour.then((user)=>{
//     return user.username
// }).then((username)=>{
//    return username
// }).catch((msg)=>{
//     return msg
// }).finally(()=> console.log("Finally the promise is either resolved or rejected"))

// console.log(usernamePromise)

// usernamePromise.then((result) => {
//     console.log(result); // This will log "File Not accessed" if there was an error
// });


// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=true
//         if(!error)
//         {
//             resolve({username:"javascript",password:"Hello@Chai"})
//         }
//         else{
//             reject(" JS went wrong File Not accessed")
//         }
//     },1000)
// })

//It will wait till await task is done
//Directly doesn't handle error
// async function consumePromiseFive(){
//     let response
//    try {
//      response = await promiseFive
//      console.log(response)
    
//    } catch (error) {
//     console.log(error);
//    }
    

// }
// consumePromiseFive()

//Fetch will not work seperately, need to install it using npm install node --fetch

// async function getAllUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json(); // Wait for the JSON parsing
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching users:', error);
//     }
// }

// getAllUsers();

//Above function in .then .catch

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>response.json())
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
console.log(error)
})



