// ATTRIBUTES

const link = document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute('href','https://www.amazon.com/');

const h = document.querySelector('.first');

h.setAttribute('class','second');

// console.log(h.getAttribute('style'));

// h.setAttribute('style','color:cornflowerblue; font-size:66px');

// Style property

console.log(h.style);

h.style.margin = '10px';

h.style.fontSize = '40px';

h.style.padding = '10px';