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

function updateProgress(e){
    const { duration, currentTime } = e.srcElement;
    //console.log(`duration is ${duration}` ,`current time is ${currentTime} ` );
    let percent = (currentTime / duration) *100 ;
    percent = percent.toString() + '%';
    //console.log(`width is ${percent}`);
    progress.style.width = percent;
}

// function updateProgress(e) {
//     const { duration, currentTime } = e.srcElement;
//     const progressPercent = (currentTime / duration) * 100;
//     progress.style.width = `${progressPercent}%`;
//   }

function setProgress(e){
    const width = this.clientWidth;
    console.log(typeof width);
    const clickX = e.offsetX;
    console.log(typeof clickX);
    const duration = audio.duration;
    console.log(duration);

    console.log(`the progress is ${(clickX/ width) * duration}`)
    audio.currentTime = (clickX/ width) * duration;
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

// 更新进度条
audio.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click",setProgress);
