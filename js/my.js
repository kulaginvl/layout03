let menuElem = document.getElementById('regions');
let regionBtn = document.getElementById('open-regions');

regionBtn.onclick = function () {
  menuElem.classList.toggle('open');
};

let show1 = document.getElementById('show-text1');
let obj1 = document.getElementById('text1');
let show2 = document.getElementById('show-text2');
let obj2 = document.getElementById('text2');
let show3 = document.getElementById('show-text3');
let obj3 = document.getElementById('text3');
let show4 = document.getElementById('show-text4');
let obj4 = document.getElementById('text4');

show1.onclick = function () {
  obj1.classList.toggle('open');
};

show2.onclick = function () {
  obj2.classList.toggle('open');
};
show3.onclick = function () {
  obj3.classList.toggle('open');
};
show4.onclick = function () {
  obj4.classList.toggle('open');
};
