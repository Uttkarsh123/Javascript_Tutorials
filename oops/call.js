function  Setusername(username)
{
    //Complex Db calls
    this.username = username;
}

function User(username, email, password)
{
    //This will not work as the below method will be removed from execution context
    //Setusername(username)


    Setusername.call(this, username)
    this.email = email;
    this.password = password;
}

const chai = new User("chai", "chai@gmail.com","password")
console.log(chai);