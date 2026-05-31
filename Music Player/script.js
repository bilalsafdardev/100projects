// Selectors
let allSongs = document.querySelector("#all-songs");
let poster = document.querySelector("#left");

let play = document.querySelector("#play");
let backward = document.querySelector("#backward");
let forward = document.querySelector("#forward");

let audio = new Audio();
let selectedSong = 0;

// Song data array
let songsData = [
    { songName: "Jale 2", url: "./songs/Jale 2.mp3", img: "./images/jale.jpg" },
    { songName: "Pehle Bhi main", url: "./songs/Pehle Bhi Main.mp3", img: "./images/animal.jpg" },
    { songName: "Ram siya ram", url: "./songs/Ram Siya Ram.mp3", img: "./images/ram.jpg" },
    { songName: "Arjan Valley", url: "./songs/Arjan Vailly Ne.mp3", img: "./images/animal.jpg" }
];



// Shows all Songs on Right side
function playSongs() {

    let clutter = "";
    
    songsData.forEach((data, idx) => {
        clutter += `<div class="song-card" id="${idx}">
                        <div class="part1">
                            <img src="${data.img}" alt="" />
                            <h2>${data.songName}</h2>
                        </div>
                        <h6>3:12</h6>
                    </div>`;
    })

    allSongs.innerHTML = clutter;
    audio.src = songsData[selectedSong].url;
    poster.style.backgroundImage = `url(${songsData[selectedSong].img})`;
}

// Shows current playing Song in left
let flag = 0;
allSongs.addEventListener('click', (elems) => {
    
    selectedSong = elems.target.id;
    audio.src = songsData[selectedSong].url;
    play.innerHTML = `<i class="ri-pause-line"></i>`;
    playSongs();
    audio.play();
    flag = 1;

})

// Play or Pause songs
play.addEventListener('click', () => {

    if (flag === 0) {
        play.innerHTML = `<i class="ri-pause-line"></i>`;
        playSongs();
        audio.play();
        flag = 1;
    }
    else {
        play.innerHTML = `<i class="ri-play-fill"></i>`;
        playSongs();
        audio.pause();
        flag = 0;
    }
})

// Forward Button Functionality
forward.addEventListener('click', () => {
    if(selectedSong < songsData.length - 1) {
        selectedSong++;
        playSongs();
        audio.play();
        play.innerHTML = `<i class="ri-pause-line"></i>`;
        flag = 1;
    }
    else {
        forward.style.opacity = 0.5;
    }
})

// Backward Button Functionality
backward.addEventListener('click', () => {
    if(selectedSong > 0) {
        selectedSong--;
        playSongs();
        audio.play();
        play.innerHTML = `<i class="ri-pause-line"></i>`;
        flag = 1;
    }
    else {
        backward.style.opacity = 0.5;
    }
})

playSongs();