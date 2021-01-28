// 获取节点
const cardsContainer = document.getElementById("cards-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const currentEl = document.getElementById("current");
const showBtn = document.getElementById("show");
const hideBtn = document.getElementById("hide");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const addCardBtn = document.getElementById("add-card");
const clearBtn = document.getElementById("clear");
const addContainer = document.getElementById("add-container");

// 
let currentActiveCard = 0;
currentEl.innerText = currentActiveCard;

// restore all the cards
const cardsEl = [];

// var used to restore info of the card 
const cardsData = [
    {
        question: "DOM 事件有哪些阶段",
        answer: "分为三大阶段：捕获阶段--目标阶段--冒泡阶段"
    },
    {
        question: "js有哪些数据类型",
        answer: "Undefined、Null、Boolean、Number、String、Object"
    },
    {
        question: "主流浏览器有哪些",
        answer: "IE、火狐（Firefox）、谷歌（Chrome）、Safari和Opera"
    }

];


function createCards() {
    cardsData.forEach((data,index) => {
        createCard(data,index);
    })
}

function createCard(data,index) {
    const card =document.createElement('div');
    card.classList.add('card');

    if(index === 0) {
        card.classList.add('active');
    }

    card.innerHTML = `
        <div class="inner-card">
            <div class="inner-card-front">
                <p>${data.question}</p>
            </div>
            <div class="inner-card-back">
                <p>
                ${data.answer}
                </p>
            </div>
        </div>
    `;
    card.addEventListener('click',() => {
        card.classList.toggle('show-answer');
    })
    
    cardsEl.push(card);
    cardsContainer.appendChild(card);
    updateCurrentText()
}

function updateCurrentText(){
    currentEl.innerText = `${currentActiveCard +1 }/${cardsEl.length}`;
}

createCards();