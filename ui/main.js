console.log('Loaded!');

/*var element = document.getElementById('main-text');

element.innerHTML = 'Hi! I am Sameer, and this is my first webapp.';

var element1 = document.getElementById('image1');

var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 1;
    element1.style.marginLeft = marginLeft + 'px';
}
element1.onclick = function () {
    var interval = setInterval(moveRight, 50);
};*/

var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
    counter = counter + 1;
    var span = document.getElementByID('count');
    span.innerHTML = counter.toString();
    
};