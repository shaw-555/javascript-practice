// 获取节点
const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

// songs 
const songs = ['hey','summer','ukulele'];

// 创建下标追踪歌曲
let songIndex = 2;

// 初始化页面式加载歌曲到DOM节点
loadsong(songs[songIndex]);


// loadsong
function loadsong(song){
    title.innerText = song;
    audio.src = `music/${song}.mp3`;   
    cover.src = `images/${song}.jpg`;
}

function playSong(){
    musicContainer.classList.add("play");
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.play();
}

function pauseSong(){
    musicContainer.classList.remove("play");
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
}

// prevSong
function prevSong(){
    songIndex--;
    if(songIndex< 0){
        songIndex = songs.length - 1;
    }
    loadsong(songs[songIndex]);
    playSong();
}

function nextSong(){
    songIndex++;
    if(songIndex > songs.length-1){
        songIndex = 0;
    }
    console.log(songIndex);
    loadsong(songs[songIndex]);
    playSong();
}

// 事件监听
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
    
    if(isPlaying){
        pauseSong();
    }else{
        playSong();
    }
});

// 切换歌曲
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);