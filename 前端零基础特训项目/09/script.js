// 获取DOM节点
const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

// const dummyTransactions = [
//     { id: 1, text:'鲜花' , amount: -20},
//     { id: 2, text:'薪酬' , amount: 300},
//     { id: 3, text:'书籍' , amount: -10},
//     { id: 4, text:'相机' , amount: 400},
// ]; 

const localStorageTransactions = JSON.parse(
    localStorage.getItem('transactions')
);

let transactions = 
                   localStorage.getItem("transactions") !== null ? 
                   localStorageTransactions : [];

// 设置addTransaction函数

function addTransaction(e){
    e.preventDefault();
    
    if(text.value.trim() === "" || amount.value.trim() === "" ){
        alert("请输入项目名称和金额");
    }else {
        const transaction ={
            id : generateID(),
            text: text.value,
            amount: Number(amount.value)
        };
        transactions.push(transaction);
        addTransactionDOM(transaction);
        updateValues();
        updateLocalStorage();

        text.value = "";
        amount.value = "";
    }
}

// 设置removeTransaction函数
function removeTransaction(id){
    transactions = transactions.filter( transaction => 
        transaction.id !== id );
        updateLocalStorage();
        init();
}

// 更新本地存储数据
function updateLocalStorage(){
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

// 生成ID函数
function generateID(){
    return Math.floor(Math.random()*100000000 );
}

// 添加transaction到dom节点DOM list
function addTransactionDOM(transaction){
    // 获得金额前面的符号
    const sign = transaction.amount < 0 ? '-' : '+';

    // 创建li标签
    const item = document.createElement('li');

    // 基于金额正负添加类名
    item.classList.add(transaction.amount < 0 ? 'minus': 'plus');

    item.innerHTML = `
  ${transaction.text} <span>${sign}${Math.abs(
    transaction.amount
  )}</span><button class="delete-btn" onclick="removeTransaction(${
    transaction.id
  })">x</button>
  `;

    list.appendChild(item);
}

// 更新余额
function updateValues(){
    //console.log(transactions);
    let total = transactions.
                  map(transactions => transactions.amount)
                  .reduce((acc,item)=> (acc+=item),0);
    total = +total;
    console.log(total);

    let income = transactions
                   .filter( transaction => transaction.amount>0)
                   .map(transaction => transaction.amount)
                   .reduce((acc,item) => (acc += item),0);
    income = +income;

    let outcome = transactions
                   .filter( transaction => transaction.amount<=0)
                   .map(transaction => transaction.amount)
                   .reduce((acc,item) => (acc += item),0);

    balance.innerText = `$${total}`;

    money_plus.innerText = `$${income}`;

    money_minus.innerText = `$${outcome}`;
    
    console.log(total, income, outcome);
}

// 初始化应用
function init(){
    list.innerHTML ='';
    transactions.forEach(addTransactionDOM);
    updateValues();
};

init();

form.addEventListener("submit", addTransaction);