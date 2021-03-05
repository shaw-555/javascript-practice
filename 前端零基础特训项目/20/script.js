const calendar = document.getElementById('calendar');
const moods = document.querySelectorAll('.moods');
const randomize = document.querySelector('#randomize');
const clear = document.querySelector('#clear');


// 创建日历所需的初始化变量
const currentYear = 2021;
const weekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

let monthsHTML = '';

// 创建初始化心情日历相关变量
const colors = ['#2d6b5f', '#72e3a6', '#dff4c7', '#edbf98', '#ea3d36'];
const defaultColor = '#888';
let activeColor = '';


// 循环遍历心情图标
moods.forEach( (mood) => {
    mood.addEventListener('click',() => {
        // 判断图标是否被选中
        if (mood.classList.contains('selected')){
            mood.classList.remove('selected');
            activeColor = defaultColor;
        } else {
            moods.forEach( (mood) => {
                mood.classList.remove('selected');
            })
            mood.classList.add('selected');
        }
       // 获取选中图标的颜色
       activeColor = getComputedStyle(mood).getPropertyValue('color');
       console.log(activeColor);
    })
})


// 渲染日历的步骤
// 1.获取这一年所有的日期
const dates = getAllDays(currentYear);

// 2.对月份进行循环变量，插入到对应的日期；
months.forEach((month,index) => {
    monthsHTML += `<div class="months month_${index}">
    <h3>${month}</h3>
    <div class="week_days_container">
    ${weekDays.map((day) => `<div class="week_days">${day}</div>`).join('')}
    </div>
    <div class="days_container"></div>
    </div>`;
});
calendar.innerHTML = monthsHTML;

// 3.每月日期渲染到对应的星期里面
dates.forEach( (date) => {
    const month = date.getMonth();
    const monthEl = document.querySelector(`.month_${month} .days_container`);

    if(date.getDate() === 1 && date.getDay() !== 0) {
        for( let i =0; i<date.getDay(); i++){
            const emptySpot = createEmptySpot();
            monthEl.appendChild(emptySpot);
        }
    }

    const dateEl = createDateEl(date);
    monthEl.appendChild(dateEl);
});

// 给日期添加颜色
const circles = document.querySelectorAll('.circle');
console.log(circles);
circles.forEach((circle) => {
    circle.addEventListener('click', () => {
      circle.style.backgroundColor = activeColor;
    });
  });

// ----------------函数------------------
// getAllDays 获取所有日期
function getAllDays(year) {
    // 获取这一年的第一天
    const firstDay = new Date(`January 1 ${year}`);

    // 获取最后一天
    const lastDay = new Date(`December 31 ${year}`);

    // 设置这一年所有日期的数组
    const days = [firstDay];

    // 用于追踪日期
    let lastDayInArray = firstDay;

    while(lastDayInArray.getTime() !== lastDay.getTime()){
        days.push(addDays(lastDayInArray,1));
        lastDayInArray = days[days.length -1];
    }

    return days;
}

randomize.addEventListener('click' , () => {
    circles.forEach((circle) => {
        circle.style.backgroundColor = getRandomColor();
    });
})

clear.addEventListener('click', () => {
    circles.forEach( (circle) => {
        circle.style.backgroundColor = defaultColor;
    });
})

// 日期自增函数
function addDays(date, days){
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

// createEmptySpot 创建空白站位日期
function createEmptySpot(){
    const emptyEl = document.createElement('div');
    emptyEl.classList.add("days");
    emptyEl.innerText = ' ';
    return emptyEl;
}

function createDateEl(date){
    const day= date.getDate();
    const dateEl= document.createElement('div');
    dateEl.classList.add('days');
    dateEl.innerHTML = `<span class="circle">${day}</span>`;
    return dateEl;
}

function getRandomColor(){
    return colors[Math.floor(Math.random()*5)];
}