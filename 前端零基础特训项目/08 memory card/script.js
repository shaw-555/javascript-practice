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

nextBtn.addEventListener('click',() => {
    // 实现当前卡片左滑
    cardsEl[currentActiveCard].className = "card left";

    // 进入数据下一项
    currentActiveCard = currentActiveCard + 1;
    if( currentActiveCard > currentActiveCard.length -1 ){
            currentActiveCard = currentActiveCard.length - 1;
    }
    // 让下一项显示出来
    cardsEl[currentActiveCard].className = "card active";
    updateCurrentText();
})

prevBtn.addEventListener('click',() => {
    // 实现当前卡片右滑
    cardsEl[currentActiveCard].className = "card right";

    // 进入数据上一项
    currentActiveCard = currentActiveCard - 1;
    if( currentActiveCard < 0){
            currentActiveCard = 0;
    }
    // 展示前一项
    cardsEl[currentActiveCard].className = "card active";
    updateCurrentText();
});
hideBtn.addEventListener("click", () => addContainer.classList.remove("show"));
showBtn.addEventListener('click', () => {
    addContainer.classList.add('show');
});


createCards();

clearBtn.addEventListener("click", () => {
    console.log(cardsContainer);
    let cardA = document.querySelector(".card.active");
    console.log(cardA);
    cardsContainer.removeChild(cardA);
    console.log(cardsContainer);
    currentActiveCard = -1;
    cardsEl.length = 0
    updateCurrentText();
});


// // 获取节点
// const cardsContainer = document.getElementById("cards-container");
// const prevBtn = document.getElementById("prev");
// const nextBtn = document.getElementById("next");
// const currentEl = document.getElementById("current");
// const showBtn = document.getElementById("show");
// const hideBtn = document.getElementById("hide");
// const questionEl = document.getElementById("question");
// const answerEl = document.getElementById("answer");
// const addCardBtn = document.getElementById("add-card");
// const clearBtn = document.getElementById("clear");
// const addContainer = document.getElementById("add-container");

// // 创建当前卡片下标
// let currentActiveCard = 0;

// // 创建空数组存储card
// const cardsEl = [];

// // 创建变量存储card里面的数据
// const cardsData = getCardsData();
// // const cardsData = [
// //   {
// //     question: "DOM 事件有哪些阶段",
// //     answer: "分为三大阶段：捕获阶段--目标阶段--冒泡阶段"
// //   },
// //   {
// //     question: "js有哪些数据类型",
// //     answer: "Undefined、Null、Boolean、Number、String、Object"
// //   },
// //   {
// //     question: "主流浏览器有哪些",
// //     answer: "IE、火狐（Firefox）、谷歌（Chrome）、Safari和Opera"
// //   }
// // ];

// //创建cards获得数据
// function createCards() {
//   cardsData.forEach((data, index) => createCard(data, index));
// }

// // 创建单个card到DOM中
// function createCard(data, index) {
//   const card = document.createElement("div");
//   card.classList.add("card");

//   if (index === 0) {
//     card.classList.add("active");
//   }

//   card.innerHTML = `
//     <div class="inner-card">
//     <div class="inner-card-front">
//       <p>${data.question}</p>
//     </div>
//     <div class="inner-card-back">
//       <p>
//        ${data.answer}
//       </p>
//     </div>
//   </div>
//     `;
//   card.addEventListener("click", () => card.classList.toggle("show-answer"));

//   cardsEl.push(card);
//   cardsContainer.appendChild(card);
//   updateCurrentText();
// }

// // 显示当前页码
// function updateCurrentText() {
//   currentEl.innerText = `${currentActiveCard + 1}/${cardsEl.length}`;
// }

// // 从本地存储获取data数据
// function getCardsData() {
//   const cards = JSON.parse(localStorage.getItem("cards"));
//   return cards === null ? [] : cards;
// }

// // 进行本地存储
// function setCardsData(cards) {
//   localStorage.setItem("cards", JSON.stringify(cards));
//   window.location.reload();
// }
// createCards();

// // 事件监听
// // 下一页
// nextBtn.addEventListener("click", () => {
//   cardsEl[currentActiveCard].className = "card left";

//   currentActiveCard = currentActiveCard + 1;
//   if (currentActiveCard > cardsEl.length - 1) {
//     currentActiveCard = cardsEl.length - 1;
//   }

//   cardsEl[currentActiveCard].className = "card active";
//   updateCurrentText();
// });

// // 上一页
// prevBtn.addEventListener("click", () => {
//   cardsEl[currentActiveCard].className = "card right";

//   currentActiveCard = currentActiveCard - 1;
//   if (currentActiveCard < 0) {
//     currentActiveCard = 0;
//   }

//   cardsEl[currentActiveCard].className = "card active";
//   updateCurrentText();
// });

// // 显示add container
// showBtn.addEventListener("click", () => addContainer.classList.add("show"));

// // 隐藏add container
// hideBtn.addEventListener("click", () => addContainer.classList.remove("show"));

// // 添加卡片
// addCardBtn.addEventListener("click", () => {
//   const question = questionEl.value;
//   const answer = answerEl.value;
//   //   console.log(question, answer);

//   if (question.trim() && answer.trim()) {
//     const newCard = { question, answer };

//     createCard(newCard);

//     question.value = "";
//     answer.value = "";

//     addContainer.classList.remove("show");
//     cardsData.push(newCard);
//     setCardsData(cardsData);
//   }
// });


// clearBtn.addEventListener("click", () => {
//     console.log(cardsContainer);
//     let cardA = document.querySelector(".card.active");
//     console.log(cardA);
//     cardsContainer.removeChild(cardA);
//     console.log(cardsContainer);
//     currentActiveCard = -1;
//     cardsEl.length = 0
//     updateCurrentText();
// });