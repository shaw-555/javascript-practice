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
    [...richestPeople].forEach({person,index} => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-index',index);

        listItem.innerHTML = `
        <span class="number">${index+1}</span>
        <div draggable="true" class="draggable"></div> 
        <p class="person-name>${person}</p>
        <i class="fas fa-grip-line"></i>
        `

        listItems.push(listItem);
        draggable_list.appendChild(listItem);
    });
}