// 获取节点

const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
    "Jeff Bezos",
    "Bill Gates",
    "Bernard Arnault",
    "Warren Buffett",
    "Mark Zuckerberg",
    "Amancio Ortega",
    "Larry Ellison",
    "Larry Page",
    "Steve Ballmer",
    "Carlos Slim Helu"
];

// 存储所有list
const listItems = []

let dragStartIndex;

createList();

// 创建createList函数，将li插入到DOM节点中

function createList() {
    [...richestPeople].sort()
        .forEach((person, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-index', index);
        listItem.innerHTML = `
            <span class="number">${index + 1}</span>
                <div draggable="true" class="draggable">
                <p class="person-name">${person}</p>
                <i class="fas fa fa-grip-line"></i>
            </div> 
            `;

        listItems.push(listItem);
        draggable_list.appendChild(listItem);
        });
        // 事件监听函数
    addEventListeners(); 
}

function dragStart() {
    // console.log("event:", "dragStart");
    dragStartIndex = this.closest('li').getAttribute('data-index');
    console.log(dragStartIndex);
}

function dragEnter() {
    //console.log("event:", "dragEnter");
    this.classList.add('over');
}

function dragOver(e) {
    e.preventDefault();
}

function dragLeave() {
    //console.log("event:", "dragLeave");
    this.classList.remove('over');
}

function dragDrop() {
    // console.log("event:", "dragDrop");
    const dragEndIndex = this.getAttribute("data-index");
    console.log(dragEndIndex);
    swapItems(dragStartIndex, dragEndIndex);
    this.classList.remove("over");
}

function swapItems(fromIndex, toIndex) {
    const itemOne = listItems[fromIndex].querySelector(".draggable");
    const itemTwo = listItems[toIndex].querySelector(".draggable");

    //   console.log(itemOne, itemTwo);
    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);
}

function checkOrder() {
    listItems.forEach((listItem, index) => {
        const personName = listItem.querySelector('.draggable').innerText.trim();
        
        if (personName == richestPeople[index]){
            console.log(`${personName} === ${richestPeople[index]}: `, personName == richestPeople[index]);
            listItem.classList.remove('wrong');
            listItem.classList.add('right');
        } else {
            listItem.classList.remove('right');
            listItem.classList.add('wrong');
        }
    });

}

// 创建事件监听函数
function addEventListeners() {
    console.log(1);
    const draggables = document.querySelectorAll('.draggable');
    const dragListItems = document.querySelectorAll('.draggable-list li');
    console.log(dragListItems, draggables);
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart);
    })

    dragListItems.forEach(item => {
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragover', dragOver);
        item.addEventListener('dragleave', dragLeave);
        item.addEventListener('drop', dragDrop);
    })
}

check.addEventListener('click', checkOrder);