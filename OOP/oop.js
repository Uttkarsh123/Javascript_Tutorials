const user = {
    username:"hitesh",
    loginCount:8,
    signedIn:true,
    getUserDetails : function(){
     console.log(`user Details from DB ${this.username}`);
    }
}

console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn)
{
    this.username = username;
    this.loginCount = isLoggedIn;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const user1 = new User("Sam",2,10);
const user2 = new User("hello",5,2)
console.log(user1);

//When we use new object an empty object is created which is called as 
//instance

//Constructor function is called

//All the argume ts are injected in the object

//We get those params in that object

//Constructor property of the object is the reference to itself only