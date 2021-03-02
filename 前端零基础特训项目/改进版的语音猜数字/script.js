// 获得节点
const msgEl = document.getElementById("msg");
const input = document.getElementById("input");
const button = document.getElementById("submit");

const randomNum = Math.floor(Math.random() * 100) + 1;

console.log("Number", randomNum);

let guessArr = [];
let guess = guessArr[guessArr.length - 1];

// writeMessage函数
function writeMessage(msg) {
  let div = document.createElement('div');
  div.innerHTML = `
  <div>你刚刚猜的是：</div>
  <span class="box">${msg}</span>
  `;
  msgEl.appendChild(div);
}

// checkNumber
function checkNumber(msg) {
  const num = +msg;
  console.log(num);

  // 是否是数字
  if (Number.isNaN(num)) {
    alert('这不是一个数字');
    return;
  }

  // 是否在1-100
  if (num > 100 || num < 1) {
    alert('数字必须介于1-100之间');
    return;
  }

  // 验证是否猜对
  if (num === randomNum) {
    alert(`恭喜你猜对了！数字为${num}`)
  } else if (num > randomNum) {
    alert('高了');
  } else {
    alert('低了');
  }
}

function onMessage(e){
   
   guessArr.push(input.value);
   guess = guessArr.pop();
   console.log(guess);
   writeMessage(guess);
   checkNumber(guess);
}

document.body.addEventListener("click", e => {
  if (e.target.id == "play-again") {
    console.log('reload');
    window.location.reload();
  }
});

button.addEventListener("click", onMessage);