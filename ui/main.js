console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = 'Hi! I am Sameer, and this is my first webapp.';

var element1 = document.getElementById('image1');

element1.onclick = function () {
    image1.style.marginLeft = '100px';
};