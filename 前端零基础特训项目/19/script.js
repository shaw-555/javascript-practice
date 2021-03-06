const msgEl = document.getElementById('msg');

const randomNum = getRandomNumber();

console.log("randomNum is: ",randomNum)

function getRandomNumber(){
    return Math.floor( Math.random() * 100) +1 ;
}