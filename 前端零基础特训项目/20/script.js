const calendar = document.getElementById('calendar');
const moods = document.querySelectorAll('.mood');
const randomize = document.querySelector('#randomize');
const clear = document.querySelector('#clear');


// 创建日历所需的初始化变量
const currentYear = 2020;
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
    'November',
    'December'
];

let monthsHTML = '';

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
dates.forEach( date => {
    const month = date.getMonth();
    
})

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
        console.log(1);
        days.push(addDays(lastDayInArray,1));
        lastDayInArray = days[days.length -1];
    }

    return days;
}

// 日期自增函数
function addDays(date, days){
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

