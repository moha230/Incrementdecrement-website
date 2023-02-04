const plus = document.querySelector('.plus'),
    minus = document.querySelector('.minus'),
    num = document.querySelector('.num');

update = (n) => {
    num.innerText = ( n <10 && n > 0 ) ? `${n}` : n;
}

let a = 1;

plus.addEventListener('click', () => update(++a));
minus.addEventListener('click', () => update(--a));


plus.onclick = function(){
    plus.style.backgroundColor = 'blue' 
}

minus.onclick = function(){
    if (a <= -10) {
        minus.style.backgroundColor = "red"
    } else
     {
        minus.style.backgroundColor = "white"
    }
    
}