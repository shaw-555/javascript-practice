// 获取节点
const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();

// Fetch random user and add money
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();

  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  };
  console.log(newUser);
  addData(newUser);
}

// 添加随机生成对象到data数组

function addData(obj){
  data.push(obj);
  updateDOM();
}

function updateDOM( providedData = data ){
    // clear main div
    main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>';
    providedData.forEach(function(item){
        const element = document.createElement("div");
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> ${item.money}`;
        main.appendChild(element);// 不要打成 ’element‘
      })
}

function moneyDouble(){
    console.log(data);
    data = data.map((obj) => {
      return {...obj , money:obj.money*2}
    });
    console.log(data);
    updateDOM(data);
}

function sortBillionaires(){
    data.sort((a,b)=>{
      if (a.money > b.money){
        return 1;
      }
      else if(a.money <b.money){
        return -1;
      }else{
        return 0;
      }

    });
    updateDOM();
}

function showMillionaires(){
  console.log(data);
  data = data.filter((obj) => {
    return obj.money > 100000;
  })
  console.log(data);
  updateDOM();
}

function calculateWealth(){
  let sum = 0;
  console.log(data);
  for(let i =0 ; i< data.length; i++){
    sum += data[i].money
  }
  console.log(sum);
  data = [];
  updateDOM();
  const element = document.createElement("div");
  element.classList.add('person');
  element.innerHTML = `<strong>sum</strong> ${sum}`;
  main.appendChild(element);// 不要打成 ’element‘


}

// 添加账户的逻辑
addUserBtn.addEventListener("click",getRandomUser);

// 资金翻倍的逻辑
doubleBtn.addEventListener("click",moneyDouble);

// 排行
sortBtn.addEventListener("click",sortBillionaires);

// 展示百万富翁
showMillionairesBtn.addEventListener("click", showMillionaires);

// 计算总金额
calculateWealthBtn.addEventListener("click", calculateWealth);