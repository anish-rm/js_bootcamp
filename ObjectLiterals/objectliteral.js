// const htmlname = document.querySelector('.name');

let user = {
    name: 'Anish',
    age: '20',
    email : 'anishmahi946@gmail.com',
    location : 'Mettupalayam',
    blogs : ['Helo everyone', 'I am anish']
};

// let display = ``;

// display += `Hi my name is ${user.name} and my age is ${user.age}`;

// htmlname.innerHTML = display;

// console.log(user);

// console.log(user.name,user.age);

// console.log(user.blogs[1]);

// user.age ="21";

// console.log("Updated age",user)

let user1 = {
    name: 'Anish',
    age: '20',
    email : 'anishmahi946@gmail.com',
    location : 'Mettupalayam',
    blogs : ['Helo everyone', 'I am anish'],
    login: function(){
        console.log('You logged in');
    },
    logout: function(){
        console.log('You logged out');
    }
};

// let n = "anish";
// let un = n.toUpperCase();
// console.log(un);

// user1.login();
// user1.logout();

// this keyword

let user2 = {
    name: 'Anish',
    age: 20,
    email : 'anishmahi946@gmail.com',
    location : 'Mettupalayam',
    blogs : ['Helo everyone', 'I am anish'],
    login: function(){
        console.log('You logged in');
    },
    logout: function(){
        console.log('You logged out');
    },
    logblog: function(){
        this.blogs.forEach((blog)=>{
            console.log(blog);
        });
    }
};

user2.logblog();

// ARRAY OF OBJECT

let book = [
    {
        title:'Bookname1', 
        author:'Anish'
    },
    {
        title:'Bookname2',
         author:'Agalya'
    },
    {
        title:'Bookname3',
        author:'Aatarsh'
    },
]

console.log(book[2].title);

// OBJECT OF ARRAY OF OBJECT


let user3 = {
    name: 'Anish',
    age: 20,
    email : 'anishmahi946@gmail.com',
    location : 'Mettupalayam',
    blogs : ['Helo everyone', 'I am anish'],
    login: function(){
        console.log('You logged in');
    },
    logout: function(){
        console.log('You logged out');
    },
    logblog: function(){
        this.blogs.forEach((blog)=>{
            console.log(blog);
        });
    },
    book: [
        {
            title:'Bookname1', 
            author:'Anish'
        },
        {
            title:'Bookname2',
             author:'Agalya'
        },
        {
            title:'Bookname3',
            author:'Aatarsh'
        },
    ]
};

console.log(user3.book[0].author);

// MATH OBJECT
console.log(Math.PI);

const area = 7.3;
console.log("Round result",Math.round(area));

console.log("Ceiling result",Math.ceil(area));

console.log("Floor result",Math.floor(area));

console.log("Truncate ",Math.trunc(area));

// RANDOM NUMBERS

// randint(0,5) rand

const random = Math.random(); 
console.log(Math.round(random*100));

// Primitive type

let a  = 100;
let b = a;

console.log('A value ',a);
console.log('B value',b);

b = 200;

console.log('A value ',a);
console.log('B value',b);

// REFERENCE TYPE

let u1 = {
    name: 'anish',
    age: 20
};

let u2 = u1;

console.log(u1);
console.log(u2);

u2.name = 'Agalya';

console.log(u1);
console.log(u2);


