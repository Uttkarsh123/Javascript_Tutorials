
const myNums = [1,2,3,4,5,6,7,8,9];


 /* +++++++ FILTER Method*/
//Only those values will be returned whihc will satisfy
//the condition in filter method
let values = myNums.filter( (num)=> num > 4 ); 
//console.log(values);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

//Getting books of genere history
const history = books.filter((book)=>book.genre==="History")
console.log(history);

//Getting books published after year 1990
const after2000 = books.filter((book)=>book.publish>1990)
console.log(after2000);




/* ++++++++++ MAP Function +++++++ */

//Work on every element
const newNums = myNums.map((num)=>num+10)
console.log(newNums)

//Chaining Map functions

//if we do chaining of map methods, then the output
//of first map method will serve as input to second or further map methods
const newNums2 = myNums.map((num)=>num+2).map((n)=>n*3)
console.log(newNums2); 



/* ++++++ REDUCE Method +++++++*/
console.log("_____ Reduce Method________");
console.log(myNums)
const myTotal = myNums.reduce((acc, currval)=>{
    console.log(`acc: ${acc}`)
    return acc+currval
},0)

//Reduce Method
const myTotal2 = myNums.reduce((acc,currval)=> acc+currval,0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const total = shoppingCart.reduce((sub,item) =>sub+item.price,0)
console.log("Total price = ",total)