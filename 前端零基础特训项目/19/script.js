const msgEl = document.getElementById('msg');

const randomNum = getRandomNumber();

console.log("randomNum is: ",randomNum)

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition;

recognition.start();

function getRandomNumber(){
    return Math.floor( Math.random() * 100) +1 ;
}

// 捕获用户说话的内容
function onSpeak(e){
    // console.log(e);
    const msg = e.results[0][0].transcript;

    writeMessage(msg);
    checkNumber(msg);
}

// writeMessage 函数
function writeMessage(msg){
    msgEl.innerHTML = `
    <div>你说的是</div>
    <span class="box">${msg}</span>`;
}

function checkNumber(msg){
   let num = msg;
    console.log(num);
    console.log(typeof num);
    console.log(num,randomNum);
    if(Number.isNaN(num)){
        msgEl.innerHTML += `<div>这不是一个数字</div>`;
        alert(1);
    }

    
    if (num > 100 || num < 1) {
        msgEl.innerHTML += "<div>数字必须介于1-100之间</div>";
        return;
      }
    
    // 验证是否猜对
    if (num == randomNum) {
    document.body.innerHTML = `
    <h2>恭喜你猜对了！<br><br>
    数字为${num}</h2>
    <buttton class="play-again" id="play-again">再玩一次</button>
    `;
    } else if (num > randomNum) {
    msgEl.innerHTML += "<div>高了</div>";
    } else {
    msgEl.innerHTML += "<div>低了</div>";
    }
}

recognition.addEventListener("result",onSpeak);
recognition.addEventListener("end", () => recognition.start());

document.body.addEventListener("click", e => {
  if (e.target.id == "play-again") {
    window.location.reload();
  }
});