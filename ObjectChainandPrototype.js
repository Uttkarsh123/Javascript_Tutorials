var User = function(firstname,courseCount)
{
    this.firstname=firstname;
    this.courseCount=courseCount;
    this.getCourseCount = function(){
        console.log(`Total courses Enrolled = ${this.courseCount}`);
    }
}

//Injecting code without changing the Object definition
User.prototype.getfirstname = function()
{
    console.log(`Firstname = ${this.firstname}`);
}

var amit = new User("Amit",5);
amit.getCourseCount();

//Checking whether the property exists or not
if(amit.hasOwnProperty("firstname"))
{
    amit.getfirstname();
}