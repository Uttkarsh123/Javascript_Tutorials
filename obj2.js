const tinderUser = new Object(); 
tinderUser.id="123abc"
tinderUser.name ="sample"

//console.log(tinderUser)

const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Hitesh",
            lastname:"Choudhary"
        }
    }
}
//optional Chaining
//console.log(regularUser.fullname?.userfullname)
//console.log(regularUser.fullname.userfullname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}


//Combining 2 objects

//This will add both the objects into a new one
const obj3 = {obj1,obj2}
console.log(obj3)

//adding elements of the objectto the third objects
const obj4 = Object.assign(obj1,obj2);
//console.log(obj4);

//It basically guarantees that the final result will be object ( all the objects will be inserted into the empty object(first element))
const obj5 = Object.assign({},obj1,obj2,obj3)
//console.log(obj5);

//Spread operator
const obj6 = {...obj1,...obj2}
console.log(obj6);



const users =[
    {
        id:1,
        email:"sample@gmail.com"
    },
    {
        id:1,
        email:"sample@gmail.com"
    },
    {
        id:1,
        email:"sample@gmail.com"
    },
    {
        id:1,
        email:"sample@gmail.com"
    },
    {
        id:1,
        email:"sample@gmail.com"
    },
    {
        id:1,
        email:"sample@gmail.com"
    }
]

console.log(user[1].email);
