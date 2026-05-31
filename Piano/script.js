// Selectors
let keysContainer = document.querySelector('.keys');

// Sounds Array
let sounds = [
    "sounds/boom.wav",
    "sounds/clap.wav",
    "sounds/hihat.wav",
    "sounds/kick.wav",
    "sounds/openhat.wav",
    "sounds/ride.wav",
    "sounds/hihat.wav",
    "sounds/tink.wav",
    "sounds/tom.wav"
];

// Function to show piano keys on Screen
function keysDisplay() {

    let clutter = "";

    sounds.forEach((vals, idx) => {
        if(idx % 2 !== 0) {
            clutter += `<div id="${idx}" class="black"></div>`;
        }
        else {
            clutter += `<div id="${idx}" class="white"></div>`;
        }
    })
    keysContainer.innerHTML = clutter;

}

// Object to store Keycodes corresponding indecies
const keyMap = {
    "KeyA": 0, "KeyS": 1, "KeyD": 2, "KeyF": 3,
    "KeyG": 4, "KeyH": 5, "KeyJ": 6, "KeyK": 7, "KeyL": 8
};

// Keydown event to play the piano
window.addEventListener('keydown', (dets) => {
    let soundIndex = keyMap[dets.code];
    if(soundIndex === undefined) return;

    dets.preventDefault();

    let activeKey = keysContainer.children[soundIndex];
    if (!activeKey) return;

    
    if (activeKey.classList.contains('black')) {
        activeKey.classList.add('active2'); 

    } else {
        activeKey.classList.add('active1');
    }
    
    let audio = new Audio(sounds[soundIndex]);
    audio.currentTime = 0;
    audio.play();
})

// Keyup event to play piano
window.addEventListener('keyup', (dets) => {
    let soundIndex = keyMap[dets.code];
    if (soundIndex === undefined) return;

    const activeKey = keysContainer.children[soundIndex];
    if (!activeKey) return;

    
    activeKey.classList.remove('active1', 'active2');
})

keysDisplay();
