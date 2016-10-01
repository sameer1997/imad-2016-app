console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = 'Hi! I am Sameer, and this is my first webapp.';

var element1 = document.getElementById('image1');

var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 10;
    element1.style.marginLeft = marrginLeft + 'px';
}
element1.onclick = function () {
    var interval = setInterval(moveRight, 100);
};