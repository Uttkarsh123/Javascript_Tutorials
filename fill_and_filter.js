var arr = [2,4,5,6,7,8,9,1,2]

console.log(arr.fill("h"))      //[h,h,h,h,h,h,h,h,h]
console.log(arr.fill("h",2))    //[2,4,h,h,h,h,h,h,h]
console.log(arr.fill("h",2,5))  //[2,4,h,h,h,8,9,1,2]

var arr = [24,25,22,26,217,28,12,24,23,28,30]

var result = arr.filter((num)=>num %2 !== 0) //creates a new array
console.log(result) //[25,217,23]