class User{
    constructor(username)
    {
        this.username=username;
    }

    logMe()
    {
        console.log(`USERNAME is ${this.username}`);
    }

    static createID()
    {
        return `123`
    }
}

const hitesh = new User("hitesh");
// console.log(hitesh.createID);

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com");
iphone.logMe();
console.log(User.createID())
console.log(iphone.createID());