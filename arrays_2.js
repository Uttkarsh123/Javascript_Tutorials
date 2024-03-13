//Array in javascript can contain multipletypes of data

const arr = [0,1,2,3,4,5] 

/*Array can also be declared as */
const myArr = new Array(1,2,3,4,5,6,7,8,9);
console.log(myArr[3]);


//Array Methods

//Adding elements to array
// arr.push(6,4)
// console.log(arr);

// //Deleting last element form the array
// arr.pop();
// console.log(arr); 

// //Adding elements to start of array
// arr.unshift(10)
// console.log(arr);

// //Removes the first element form the array
// arr.shift()
// console.log(arr);

// console.log(arr.includes(10))
// console.log(arr.indexOf(5))

// const newArr = arr.join("-");
// console.log(newArr);

console.log("A ", arr);

//Start from first element including it, excluding the third element
const mynwArr1 = arr.slice(1,3);
console.log(mynwArr1);

console.log("A ", arr);


const mynwArr2 = arr.splice(1,3);
console.log(mynwArr2)