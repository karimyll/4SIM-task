var video = document.getElementById('video');

video.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}
, false);

var burger = document.querySelector('.burger');
var close = document.querySelector('.close');
var menu = document.querySelector('.menu');

burger.addEventListener('click', function() {
  menu.classList.toggle('active');
});

close.addEventListener('click', function() {
  menu.classList.toggle('active');
});