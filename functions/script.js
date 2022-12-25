// let v = 8;
// console.log(v);

// FUNCTIONS
// basic 
// function greet(){
//     console.log("hello");
// }

// greet();

// second method

// const speek = function(){
//     console.log("good day");
// }

// speek();

// argument passing

// template syntax 

// const speek = function(name){
//     console.log(`Hello your name is ${name}`);
// }

// let s = 7;



// speek('anish');

// const another = function(name="NO name"){
//     console.log(`Hello your name is ${name}`);
// }

// another("Agalya");

// return

// const calcarea = function(radius){
//     const pi=3.14;
//     // let area = pi*radius*radius;
//     // return area;
//     return pi*radius*radius;
// }

// let ans = calcarea(4);

// console.log(calcarea(4));
// console.log(calcarea(5));
// console.log(calcarea(6));


// ARROW FUNCTION

// const calcarea = (radius) => {
//     const pi=3.14;
//     // let area = pi*radius*radius;
//     // return area;
//     return pi*radius*radius;
// };

// const calcarea = radius => 3.14*radius*radius;

// console.log(calcarea(4));

// const dummy = () => {
//     console.log("good day");
// }

// dummy();

// product = [10,15,20]
// product.length = 3;

// const bill = (product,tax) => {
//     let total = 0;

//     for(let i=0;i<product.length;i++){
//         total += product[i]+product[i]*tax;
//     }

//     return total;
// }

// let ans = bill([10,15,20],0.2);

// console.log(ans);

// FOREACH

// let people = ['Anish', 'Agalya', 'Aatarsh'];

// for(let i=0;i<people.length;i++){
//     console.log(people[i]);
// }



// people.forEach(function(person){
//     console.log(person);
// });

// const print = function(person , index){
//     console.log(`Person ${index+1} name is ${person+1}`);
// }

// people.forEach(print);
const list = document.querySelector('.people');

let people = ['Anish', 'Agalya', 'Aatarsh'];

let display = ``;

people.forEach((person)=>{
    display += `<li style="color: yellowgreen; margin-bottom: 10px; font-weight: bolder;">${person}</li>`;
});
// console.log(display);
// display = <li>Anish</li> <li>Agalya</li> <li>Aatarsh</li>

list.innerHTML = display;