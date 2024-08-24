const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const box4 = document.querySelector('.box4')
const box5 = document.querySelector('.box5')
const box6 = document.querySelector('.box6')
const hide1 = document.getElementById('hide1')
const hide2 = document.getElementById('hide2')
const hide3 = document.getElementById('hide3')
const hide4 = document.getElementById('hide4')
const hide5 = document.getElementById('hide5')
const hide6 = document.getElementById('hide6')


function toggleVisibility(element) {
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

    box1.addEventListener('click', ()=>{
        toggleVisibility(hide1);
    })
    box2.addEventListener('click', ()=>{
        toggleVisibility(hide2);
    })
    box3.addEventListener('click', ()=>{
        toggleVisibility(hide3);
    })
    box4.addEventListener('click', ()=>{
        toggleVisibility(hide4);
    })
    box5.addEventListener('click', ()=>{
        toggleVisibility(hide5);
    })
    box6.addEventListener('click', ()=>{
        toggleVisibility(hide6);
    })
