window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys.forEach(key => key.addEventListener('click', playSound));

function playSound(e) {

    //get data-key value from 'keydown' event and 'click' event
    //go to parent node to get the value when children are clicked
    const dataKey = 
        e.code || 
        e.target.getAttribute("data-key") || 
        e.target.parentNode.getAttribute("data-key");

    const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
    const key = document.querySelector(`article[data-key="${dataKey}"]`);

    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}