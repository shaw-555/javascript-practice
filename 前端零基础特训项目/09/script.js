// 获取DOM节点
const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

const dummyTransactions = [
    { id: 1, text:'鲜花' , amount: -20},
    { id: 2, text:'薪酬' , amount: 300},
    { id: 3, text:'书籍' , amount: -10},
    { id: 4, text:'相机' , amount: 400},
]; 

let transactions = dummyTransactions;

// 添加transaction到dom节点DOM list
function addTransactionDOM(transaction){
    // 获得金额前面的符号
    const sign = transaction.amount < 0 ? '-' : '+';

    // 创建li标签
    const item = document.createElement('li');

    // 基于金额正负添加类名
    item.classList.add(transaction.amount < 0 ? 'minus': 'plus');

    item.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</
        span><button class="delete-btn">x</button>
    `;

    list.appendChild(item);
}

// 初始化应用
function init(){
    list.innerHTML ='';
    transactions.forEach(addTransactionDOM);
};

init();