const d = document.querySelector('.first');

// console.log(d.children);

// console.log(Array.from(d.children));

const arr = Array.from(d.children);

arr.forEach((ele) => {

    // console.log(ele);
    ele.classList.add('hello');

});

const title = document.querySelector('h2');

console.log(title.parentElement.parentElement);

console.log(title.nextElementSibling.nextElementSibling);

console.log(title.nextElementSibling.parentElement.children);