window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function playSound(e) {
    let keyCode = e.key;
    const audio = document.querySelector(`audio[data-key="${keyCode.toLowerCase()}"]`);
    const key = document.querySelector(`article[data-key="${keyCode.toLowerCase()}"]`);
    
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}