let progress = document.getElementById("progress");
let song = document.getElementById("song");
const playDiv = document.querySelector('#playDiv');
const pauseDiv = document.querySelector('#pauseDiv');
let count = 1;
song.pause();

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

document.getElementById('playDiv').addEventListener('click', function () {
    playDiv.style.display = 'none';
    pauseDiv.style.display = 'block';
    song.play();
})

document.getElementById('pauseDiv').addEventListener('click', function () {
    playDiv.style.display = 'block';
    pauseDiv.style.display = 'none';
    song.pause();
})

document.getElementById('previousDiv').addEventListener('click', function () {
    count --;
    doMusic();
})

document.getElementById('nextDiv').addEventListener('click', function () {
    count ++;
    doMusic();
})
function doMusic() {
    if (count == 2) {
        song.setAttribute('src', `audio/music2.mp3`);
        document.getElementById("musicTitle").innerHTML = "Block";
    } else if (count == 3) {
            song.setAttribute('src', `audio/music3.mp3`);
            document.getElementById("musicTitle").innerHTML = "Kush Kash";
    } else if (count == 4) {
            song.setAttribute('src', `audio/music4.mp3`);
            document.getElementById("musicTitle").innerHTML = "Into the Void";
    } else if (count == 5) {
            song.setAttribute('src', `audio/music5.mp3`);
            document.getElementById("musicTitle").innerHTML = "Summoning Ra (intro)";
    } else if (count == 6) {
            song.setAttribute('src', `audio/music6.mp3`);
            document.getElementById("musicTitle").innerHTML = "Summoning Ra";
    } else if (count == 7) {
            song.setAttribute('src', `audio/music7.mp3`);
            document.getElementById("musicTitle").innerHTML = "Nothing to Lose";
    } else {
        count = 1;
        song.setAttribute('src', `audio/music1.mp3`);
        document.getElementById("musicTitle").innerHTML = "Together";
    }

    playDiv.style.display = 'none';
    pauseDiv.style.display = 'block';
    song.play();
}
if(song.play()) {
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}

progress.onchange = function() {
    song.play();
    song.currentTime = progress.value;
    playDiv.style.display = 'none';
    pauseDiv.style.display = 'block';
}