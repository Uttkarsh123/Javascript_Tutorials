class User{
    constructor(username)
    {
        this.username=username;
    }

    logMe()
    {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email=email;
        this.password=password
    }

    addCourse()
    {
        console.log(`A new Course has been added by ${this.username}`);
    }
}

const teach = new Teacher("Hitesh", "hitesh@gm,ail.com", "hitesh@abc");
teach.addCourse();

const chai = new User("chai");
console.log(chai === teach);
console.log(chai instanceof Teacher);
console.log( chai instanceof User);