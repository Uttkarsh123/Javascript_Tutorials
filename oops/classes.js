class User
{
    constructor(username, email, password) {
        this.username=username;
        this.email = email;
        this.password = password;
    } 

    encryptPassword()
    {
        return `${this.password}abc`;
    }

    changeUserName()
    {
        return `${this.username.toUpperCase()}`
    }
}


const chai = new User("chai", "chai@gmail.com","chai123")
console.log(chai.encryptPassword());
console.log(chai.changeUserName());


//behind the scenes

// function User(username, email, password)
// {
//     this.username=username;
//     this.email=email;
//     this.password=password;
// }

// User.prototype.encryptPasswords = function()
// {
//     return `${this.password}abc`
// }

// const chai = new User("garam_chai","chai@gram.com","garamagaram.com")
// console.log(chai);