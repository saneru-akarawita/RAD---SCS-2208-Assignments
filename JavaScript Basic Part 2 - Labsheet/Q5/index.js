const btn = document.getElementById('btn');

function onClick() {
    btn.style.backgroundColor = 'rgb(9, 146, 205)';
    btn.style.color = 'white';
}

function tempfunc(){
btn.addEventListener('click',onClick());
}

