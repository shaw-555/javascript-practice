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

displayWord();