var user = {
    firstName:"Uttkarsh",
    lastName:"Dhiman",
    role:"admin",
    loginCount:32,
    facebookSignedIn:false,
    courseList:[],
    buyCourse: function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount: function(){
        return `${this.firstName} is enrolled in total of ${this.courseList.length}  courses`
    },
    getInfo: function(){
       return `
       firstName:${this.firstName}\n
       lastName:${this.lastName}\n
       role:${this.role}\n
       loginCount:${this.loginCount}\n
       facebookSignedIn:${this.facebookSignedIn}\n
       courseCount:${this.courseList.length}  `
    }
};

user.buyCourse("Java")
var courseList = true;
console.table(user.getInfo()) 

