const names = [
    "Youtube",
    "facebook",
    "twitter",
    "instagram",
    "Amazon",
    "LinkedIn"
];

//For of will not work on objects
for(const n of names)
{
   console.log(n);
}

const str = "Hello World"
for (const char of str) {
    console.log(`Each charcter is ${char}`)   
}

//To iterate over objects we need to use for in loop
//For in loop picks indexes and doesn't work on map
const course ={
    course_id:1,
    name:"Javascript",
    courseInstructor:"Hitesh",
    courseDuration:"51 videos"
}

for (const key in course) {
    console.log(course[key]);
}