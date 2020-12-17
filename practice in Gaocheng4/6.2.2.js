const options = [1,,,,,5];
console.log(options.length);
console.log(options);

for(const option of options){
  console.log(option === undefined);  
}

const a = Array.from([,,,]);
for (let i of a){
  console.log(i === undefined);
}

for (const [index,value] of options.entries()){
  console.log(index, value);
}