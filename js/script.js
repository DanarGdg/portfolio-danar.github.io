const toggle = document.getElementById('toggle');
const chk = document.getElementById('chk');
const img = document.getElementById('image');
const ul = document.querySelector('ul');
const link = document.querySelectorAll('ul li');

toggle.addEventListener('click', function(){
    if(chk.checked === true){
        img.setAttribute('src', 'img/icon-close.svg');
        ul.classList.add('slide');
    }else{
        img.setAttribute('src', 'img/icon-hamburger.svg')
        ul.classList.remove('slide');
    }
})

link.forEach(el => {
    el.addEventListener('click', function() {
        ul.classList.remove('slide');
        img.setAttribute('src', 'img/icon-hamburger.svg');
        chk.checked = false;;
    })    
});