 const modal = document.getElementById('myModal');
 const btn = document.getElementById('modalBtn');
 const span = document.getElementsByClassName('close')[0];

 btn.onclick = () => {
     modal.style.display = 'block';
     btn.style.display = 'none';
 }

 span.onclick = () => {
     modal.style.display = 'none';
     btn.style.display = 'block';
 }

 window.onclick = e => {
     if (e.target === modal) {
         modal.style.display = 'none';
          btn.style.display = 'block';
     }
 }
 
//курс НБУ:
let usd = 28;
let eur = 33;
let rur = 0.37;
//навар посредника
let s = 0.95;
let b = 1.05;

usdbuy.innerText = Math.floor(usd * b * 100) / 100;
usdsale.innerText = Math.floor(usd * s * 100) / 100;
eurbuy.innerText = Math.floor(eur * b * 100) / 100;
eursale.innerText = Math.floor(eur * s * 100) / 100;
rurbuy.innerText = Math.floor(rur * b * 10000) / 10000;
rursale.innerText = Math.floor(rur * s * 10000) / 10000;