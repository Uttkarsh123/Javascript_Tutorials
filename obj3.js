//Object Destructuring

const course ={
     course_id:1,
     name:"Javascript",
     courseInstructor:"Hitesh",
     courseDuration:"51 videos"
}

/*

Syntax of object Destructiong

const { what to extract} = from where to extract

*/

const {courseInstructor,date} = course

//if we want to change the name of the property of object
const {courseInstructor:instructor} =course;
console.log(instructor);

//If we are fetching the element that doesn't exist in object wwe will get undefined
console.log(date);