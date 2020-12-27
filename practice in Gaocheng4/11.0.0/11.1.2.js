function double(value){
    setTimeout(() => setTimeout(console.log,0,value*3),3000);
}

double(3);