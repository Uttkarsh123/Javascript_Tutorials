// In javascript functions are functions and objects both 
// thus everything in javascript is a object

//We can make function behave like an object
function multiplyby5(num)
{
    return num*5;
}

multiplyby5.power=2;

console.log(multiplyby5(5));
console.log(multiplyby5.power)


//It will give {}, which is the default context
//the default context set, given by prototype is the "this" of the method
//Prototype not only give methods but also some internal properties

console.log(multiplyby5.prototype)

function createUser(username,score)
{
    //this is used to avoid ambiguity
    this.username = username;
    this.score = score
}

//Injecting our own properties in a function (object) using prototype
createUser.prototype.increment =function()
{
    //DO the work of whoseoever called
    this.score++;
}

//We cant use arrow functions here as arrow functions don't have their own this binding
createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
}

//By only adding the properties using prototype, we can't access them
//To use them we need to use new keyword
const chai = new createUser("chai",25)
// const tea = createUser("tea", 250)
//Now to acsess the function injected
chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/