// const pp = document.querySelector('p');
// console.log(pp.classList);
// pp.classList.add('error');

// pp.classList.remove('error');

// pp.classList.add('success');

// task

const pp = document.querySelectorAll('p');

pp.forEach((ele) => {
    console.log(ele.innerText); //also we can use textContent 
    if(ele.innerText.includes('error')){
        ele.classList.add('error');
    }
    else if(ele.innerText.includes('success')){
        ele.classList.add('success');
    }
});