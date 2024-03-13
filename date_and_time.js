let mydate = new Date();
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toLocaleString);
console.log(mydate.toDateString());
console.log(mydate.toISOString())

/*++++++++++Declaring a specific date++++++++++*/ 

//  let variable_name = new Date (year, month, day, hour, minute, second) 
let created_date = new Date(2023,0,23);
console.log(created_date.toDateString());

//  let variable_name = new Date (year, month, day, hour, minute, second) 
let created_date1 = new Date(2023,0,23,5,8,9);
console.log(created_date1.toLocaleString());