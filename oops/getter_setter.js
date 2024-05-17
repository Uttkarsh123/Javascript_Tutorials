class User
{
    constructor(email, password)
    {
        this.email=email;
        this.password=password
    }

    //if we define a getter on any property then we also need to define setter on that property
    get password(){
        return this._password.toUpperCase();
    }

    set password(value){
        this._password = value;
    }
}

const chai = new User("chai@gmail.com","1224567")
console.log(chai.password)

//OLd Syntax (function Based)

// function User(email, password)
// {
//     this._email=email;
//     this._password=password;

//     Object.defineProperty(this,'email',{
//         get: function(){
//             return this._email.toUpperCase();
//         },
//         set:function(value){
//             this._email=value
//         }
//     })
// }

// const chai1 = new User("chai@chai.com","123456789")


//Object based

// const User ={
//     _email:"chai@gmail.com",
//     _password:"1234567890",

//     get email()
//     {
//         return this._email;
//     },

//     set email(value){
//         this._email=value;
//     }
// }


