//variables
//let, var, const
let num = 10;
let num2;
const pi = 4.12;
num2 = num * num;

//operations
//arithmetic operations
//assignment operations
//comparison operations
// >, <, <=, >=, ==, ===, !==, !=
//logical operations
//OR, AND, NOT => ||, &&, !
//Ternary operations
if (1 == 1) {
    // console.log(true);
} else {
    // console.log(false);
}
// (1 == 1) ? console.log(true) : console.log(false);
let variable = "2";
//type conversion
// let str = parseFloat(variable);
// let str = variable.toString();


//functions
// function numSquare(num)
// {
//     return num * num;
// }
// console.log(numSquare(5));

//JS builtin classes
let math = Math.PI;
math = Math.max(12, 4, 5);
math = Math.min(12, 4, 5);
math = Math.pow(4, 2);
math = Math.sqrt(25);
math = Math.floor(4.9);
math = Math.ceil(4.1);
math = Math.round(4.7);
math = Math.trunc(Math.random() * 10) + 1;

//date class
let date = new Date();
let dateExample = date.getFullYear();
dateExample = date.getMonth();
dateExample = date.getDay();
dateExample = date.getDate();

//String Methods
let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat laborum sequi perspiciatis illo reprehenderit, unde voluptatum labore laboriosam odio voluptatem repellendus. At repudiandae quam quis dolorem nam natus quisquam veniam?";
let strMethod = str.length;
strMethod = str + (" World");
strMethod = str.concat(" World");
strMethod = str.toLowerCase();
strMethod = str.toUpperCase();
strMethod = `Hello ${str}`;
strMethod = str.substring(0, 2);
strMethod = str.slice(-2);
strMethod = str.split(".");
strMethod = str.includes("kaleb")
strMethod = str.replace("Lorem", "kaleb")

//array methods
let arr = [9,100, 1000, 5, 99,4];
// let newArr = arr.length
//push/pop
// newArr = arr.push("bicycle")
// newArr = arr.pop()
//shift/unshift
// newArr = arr.unshift("bike")
// console.log(arr.sort((a, b)=> a - b));

//loops
//for loop
for (let i = 0; i < 10; i++){
    
}
let i = 20;
// while (i < 10) { 
//     console.log(i);
//     i++
// }
// do {
//     console.log(i);
//     i++
// } while (i<10);

arr.forEach(element => {
    console.log(element * element);
});
for (let i = 0; i < arr.length; i++){
    console.log(arr[i] * arr[i]);
}