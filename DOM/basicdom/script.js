// const firstp = document.querySelector('p');

// console.log(firstp);

// const classp = document.querySelectorAll('.error');
// console.log(classp);

// classp.forEach( (p,i) =>{
//     console.log(p);
// });

// nodelist = [p,div]

// const divc = document.querySelector('div.error');

// console.log(divc);

// another method to acces the elements

// const selp = document.querySelector('body > div:nth-child(2)');

// console.log(selp);

// const allp = document.querySelectorAll('p');
// console.log(allp);
// console.log(allp[1]);

// allp.forEach((p,index) => {
//     console.log(p,index);
// }); 

const pid = document.getElementById('page');

// console.log(pid);

const cl = document.getElementsByClassName('error');

// console.log(cl);

const tagp = document.getElementsByTagName('p');

// console.log(tagp);

// ADDING OR CHANGING PAGE CONTENT

// const firstp = document.querySelector('p');

// firstp.innerText = 'Anish is a good guy';

// const allp = document.querySelectorAll('p');

// allp.forEach((ele,i) => {
//     // console.log(ele.innerText);
//     ele.innerText += 'Anish has updated me';
// });

// innerHtml 

const fdiv = document.querySelector('div');

// let ss = 5;

// fdiv.innerHTML = `<h1>😎😎😎😎 ${ss}</h1>`;

const names = ['Anish','Agalya','Aatarsh'];

const div1 = document.querySelector('div.content');

names.forEach((name)=>{
    div1.innerHTML += `<h1>${name}</h1>`;
});
