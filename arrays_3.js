const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//Merginng two arrays using concat function
// const all = marvel_heros.concat(dc_heros);
// console.log(all)

const all_heros = [...dc_heros,...marvel_heros, ...[1,2,3,4,5,6]]
console.log(all_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.from(123456789));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));