
document.addEventListener('keydown', function(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    
    if(!audio) return;

    key.classList.add('playing');
    setTimeout(()=> key.classList.remove('playing'), 100)
    audio.currentTime = 0;
    audio.play();
})