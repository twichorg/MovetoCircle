const AREA = document.body;
const CIRCLE = document.querySelector('.circle');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
   
    var horizontalPosition = windowWidth - e.clientX - 30;
    var verticalPosition= windowHeight - e.clientY - 30;

 
    CIRCLE.style.left = horizontalPosition + 'px';
    CIRCLE.style.top = verticalPosition + 'px';
}

function changeColorOnTouch() {
    CIRCLE.style.backgroundColor = "green";
    CIRCLE.style.borderColor = "green";
}

AREA.addEventListener('mousemove', mouseCoordinates, false);

CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);

CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);