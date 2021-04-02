const wordEl = document.getElementById("word");
const worngLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll('.figure-part');

const words = ['application', 'programming', 'interface', 'wonder'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

console.log(selectedWord);

const correctLetters = [];
const wrongLetters = [];

// 显示单词函数
function displayWord() {
    wordEl.innerHTML = `
        ${selectedWord
            .split('')
            .map(
                letter => `
            <span class="letter">
            ${correctLetters.includes(letter) ? letter : ""}
            </span>
            `
            )
            .join("")}
    `;
    const innerWord = wordEl.innerText.replace(/\n/g, "");
    console.log(innerWord);

    if (innerWord === selectedWord) {
        finalMessage.innerText = "恭喜你输入正确！";
        popup.style.display = "flex";
    }
}
// 第五步 updateWrongLettersEl
function updateWrongLettersEl() {
    // 显示错误字母
    worngLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? "<p>错误</p>" : ""}
    ${wrongLetters.map( letter => `<span>${letter}</span>`)}
    `;

    // 显示火柴人
    figureParts.forEach((part, index) => {
        const error = wrongLetters.length;

        if (index < error) {
            part.style.display = "block";
        } else {
            part.style.display = "none"
        }
    })
    console.log(worngLettersEl);

    // 机会用尽，显示弹出框
    if (wrongLetters.length === figureParts) {
        figureParts.innerText = "抱歉输入错误，游戏结束";
        popup.style.display = "flex";
    }
}
// 第四部 showNotification函数
function showNotification() {
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000)
}
// 第三部 按下键盘中的字母的事件监听
window.addEventListener("keydown", e => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key;
        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);

                displayWord();
            } else {
                showNotification();

            }
        } else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
                console.log(wrongLetters);
                updateWrongLettersEl();
            } else {
                // showNotification();
            }
        }
    }
})

// 第六步 再玩一次按钮的事件监听
playAgainBtn.addEventListener('click', () => {
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = words[Math.floor(Math.random() * words.length)];

    displayWord();

    updateWrongLettersEl();

    popup.style.display = "none";
})
displayWord();