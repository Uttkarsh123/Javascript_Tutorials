
//Arrow Function
var isEven = (element) => {
    return element%2==0;
};

//console.log(isEven(2));

//Passing a reference
//Return true only if every array element passed passes test
// var res=[2,4,6,8].every(isEven);
// console.log(res);


//Arrow function callback
//Always return when using curly braces
var res=[2,4,6,8].every((ele)=>{
    return ele%2 ===0;
});
console.log(res);

//When not returnning don't use curly braces

var res1 = [3,4,5,6,7,8].every((ele)=> ele%2===0)
console.log(res1);