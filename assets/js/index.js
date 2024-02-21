var video = document.getElementById('video');

video.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}
, false);
